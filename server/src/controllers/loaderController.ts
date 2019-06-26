import { Request, Response } from 'express';
import request from 'request-promise';
import axios from "axios";


class LoaderController {

    public async LoadAllData(req: Request, res: Response){    
        const loader = new LoaderController();     
        try {                    
            const result = await Promise.all([loader.loadBooks(1), loader.loadCharacters(43), loader.loadBooks(9)])
            res.send(result)
        } catch (error) {
            console.log(error)
        }        
    }


    async loadBooks(pages: number) {
        var bookPromises: any = []; //will store the promise sent after making http request to the book api
        try {
            var index = 0
            // for (let index = 0; index < pages; index++) {
                 await request.get(`https://anapioficeandfire.com/api/books?page=${index + 1}&pageSize=50`)
                 .then((body) => {
                    bookPromises.push(JSON.parse(body))
                 })
                 .catch ((err) => { bookPromises = { "origin": err.toString() }; });                                                           
            // }
            return bookPromises;
        } catch (error) {
            console.log(error)
        }           
    }

    async loadCharacters(pages: number) {
        var charsPromises: any = []; //will store the promise sent after making http request to the book api
        try {
            var index = 0
            for (let index = 0; index < pages; index++) {
                 await request.get(`https://anapioficeandfire.com/api/characters?page=${index + 1}&pageSize=50`)
                 .then((body) => {
                    charsPromises.push(JSON.parse(body))
                 })
                 .catch ((err) => { charsPromises = { "origin": err.toString() }; });                                                           
            }
            return charsPromises;
        } catch (error) {
            console.log(error)
        }           
    }



    public loadHouses(pages: number) : any {
        var housesPromises: any = []; //will store the promise sent after making http request to the character api
        try {
            for (let index = 0; index < pages; index++) {
                request(`https://anapioficeandfire.com/api/houses?page=${index + 1}&pageSize=50`, (err: any, res: any, body: any) => {
                    if (err) { return console.log(err); }
                    if (res) {
                        housesPromises.push(body);
                    }
                });
            }
        } catch (error) {
            console.log(error)
        }
        
        return housesPromises;
    }
}

const loaderController = new LoaderController();
export default loaderController;