import { Request, Response } from 'express';
import request from 'request';
import axios from "axios";


class LoaderController {

    public async LoadAllData(req: Request, res: Response): Promise<any> {
        var books = []; //will contain all the books after resolving the promise
        var characters = []; //will contain all the characters after resolving the promise
        var houses = []; //will contain all the houses after resolving the promise
        const results = await Promise.all([this.loadBooks(1), this.loadCharacters(43), this.loadHouses(9)])
        return results
    }

    public async loadBooks(pages: number): Promise<any[]> {
        var bookPromises: any = []; //will store the promise sent after making http request to the book api
        for (let index = 0; index < pages; index++) {
            await request(`https://anapioficeandfire.com/api/books?page=${index + 1}&pageSize=50`, (err: any, res: any, body: any) => {
                if (err) { return console.log(err); }
                if (res) {
                    bookPromises.push(body);
                }
            });
        }
        return bookPromises;
    }

    public async loadCharacters(pages: number): Promise<any[]> {
        var characterPromises: any = []; //will store the promise sent after making http request to the character api
        for (let index = 0; index < pages; index++) {
            await request(`https://anapioficeandfire.com/api/characters?page=${index + 1}&pageSize=50`, (err: any, res: any, body: any) => {
                if (err) { return console.log(err); }
                if (res) {
                    characterPromises.push(body);
                }
            });
        }
        return characterPromises;
    }

    public async loadHouses(pages: number): Promise<any[]> {
        var housesPromises: any = []; //will store the promise sent after making http request to the character api
        for (let index = 0; index < pages; index++) {
            await request(`https://anapioficeandfire.com/api/houses?page=${index + 1}&pageSize=50`, (err: any, res: any, body: any) => {
                if (err) { return console.log(err); }
                if (res) {
                    housesPromises.push(body);
                }
            });
        }
        return housesPromises;
    }
}

const loaderController = new LoaderController();
export default loaderController;