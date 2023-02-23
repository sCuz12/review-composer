// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PromptBuilder } from './builder/PromptBuilder';
const { Configuration, OpenAIApi } = require("openai");
import { ReviewData } from './interfaces/ReviewData';


type Data = {
  data: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const {revieweeName,revieweeType,ratings,revieweeGender,revieweeLastname}:ReviewData = req.body

  //const prompt = `Please give me airbnb review for a ${revieweeType} called  ${revieweeName}`;

  const prompt = new PromptBuilder()
  .setName(revieweeName)
  .setLastName(revieweeLastname)
  .setRevieweeType(revieweeType)
  .setReviewRatings(ratings)
  .generatePrompt();

  console.log(prompt)

  //TODO: Move it to globals
  const apiKey = process.env.OPENAI_API_KEY;
  const model = 'text-davinci-003'; 

  const configuration = new Configuration({
    apiKey: apiKey
  });
  
  const openai = new OpenAIApi(configuration);

  async function requestDataFromOpenai ()  {
    const response = await openai.createCompletion({
      model: model,
      prompt: prompt,
      max_tokens:500 
    })
    console.log(response.data.choices[0].text)
    return response.data.choices[0].text;
  }
  
  //call
  requestDataFromOpenai() 
  .then((text)=>{
    const response : Data = {'data':text};
    res.status(200).send(response)
  })
  .catch((err)=>{
    console.log(err);
  })

}
