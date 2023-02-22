// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const { Configuration, OpenAIApi } = require("openai");
import { ReviewData } from './interfaces/ReviewData';

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const {revieweeName,revieweeType,ratings,revieweeGender}:ReviewData = req.body

  const prompt = `Please give me airbnb review on ${revieweeName} the ${revieweeType}:\n\n`;
  const reviews = ratings.map((rating) => `${rating.name}: ${rating.rating}\n`).join('');

  //TODO: Move it to globals
  const apiKey = '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'; // Replace this with your OpenAI API key
  const model = 'text-davinci-002'; // Replace this with the name of the OpenAI model you want to use

  const configuration = new Configuration({
    apiKey: apiKey
  });
  
  const openai = new OpenAIApi(configuration);

  try {
    const completion = await openai.createCompletion({
      model: model,
      prompt: prompt + reviews,
      maxTokens: 256,
      temperature: 0.5
    });

    console.log(completion.data.choices[0].text);
  }catch(error) {
    console.log("Error communicating with Openai")
  }



}
