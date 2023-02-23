import { PromptBuilderInterface } from "./PromptBuilderInterface";

//This builder class helps in building dynamically Prompts
export class PromptBuilder implements PromptBuilderInterface {

    private revieweeName!: string;
    private revieweeLastname? : string | null;
    private revieweeType!: string;
    private reviewRatings! : {name:string;rating:number}[]


    setName(revieweeName: string): this {
        this.revieweeName = revieweeName
        return this
    }

    setLastName(revieweeLastname: string): this {
        this.revieweeLastname = revieweeLastname;
        return this;
    }

    setRevieweeType(revieweeType: string): this {
        this.revieweeType = revieweeType
        return this;
    }

    setReviewRatings(reviewRatings: { name: string; rating: number }[]) {
        this.reviewRatings = reviewRatings;
        return this;
      }

      
    generatePrompt():string {
        let prompt = "";

        prompt += "I need a public review message for platform airbnb for a " + this.revieweeType
            + " called " + this.revieweeName + (this.revieweeLastname ? this.revieweeLastname : "")
          
        if(this.revieweeType === "guest") {
            prompt += " who i hosted "
        }



        if(this.reviewRatings !== null && this.reviewRatings.length >0) {
            prompt += " and has the following ratings on each category do not mention the rating score just words "
            this.reviewRatings.forEach((rating)=>{
                prompt += `${rating.name} ${rating.rating}/5 `;
            })
            
        }

        return prompt ;
    }



}