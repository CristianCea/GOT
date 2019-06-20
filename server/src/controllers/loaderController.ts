import { Request, Response } from 'express';
import  request  from 'request';


class LoaderController {

    public async LoadAllData(req: Request, res: Response): Promise<void> {
        var category = ["books", "characters", "houses"];
        var no = [1, 43, 9]; //each category page no taking page size as 50
        var bookPromises = []; //will store the promise sent after making http request to the book api
        var characterPromises = []; //will store the promise sent after making http request to the character api
        var housePromises = []; //will store the promise sent after making http request to the houses api
        var books = []; //will contain all the books after resolving the promise
        var characters = []; //will contain all the characters after resolving the promise
        var houses = []; //will contain all the houses after resolving the promise
        for (var i = 0; i < category.length; i++) {
            //run the loop for each category
            for (var j = 0; j < no[i]; j++) {

                if (i === 0){
                    request(`https://anapioficeandfire.com/api/${category[i]}?page=${j + 1}&pageSize=50`, { json: true }, (err: any , res : any, body : any) => {
                        if (err) { return console.log(err); }
                        console.log(body.url);
                        console.log(body.explanation);
                      });
                }         
                //for each category run the loop as many times as its page no taking page size as 50                
                if (i === 1) {

                    request(`https://anapioficeandfire.com/api/${category[i]}?page=${j + 1}&pageSize=50`, { json: true }, (err: any , res : any, body : any) => {
                        if (err) { return console.log(err); }
                        console.log(body.url);
                        console.log(body.explanation);
                      });
                }
                if (i === 2) {
                    request(`https://anapioficeandfire.com/api/${category[i]}?page=${j + 1}&pageSize=50`, { json: true }, (err: any , res : any, body : any) => {
                        if (err) { return console.log(err); }
                        console.log(body.url);
                        console.log(body.explanation);
                      });
                }

            } //end of inside for loop 
        } //end of the o
    }
}

const loaderController = new LoaderController;
export default loaderController;