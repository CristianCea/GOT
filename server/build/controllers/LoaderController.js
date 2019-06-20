"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = __importDefault(require("request"));
class LoaderController {
    LoadAllData(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
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
                    if (i === 0) {
                        request_1.default(`https://anapioficeandfire.com/api/${category[i]}?page=${j + 1}&pageSize=50`, { json: true }, (err, res, body) => {
                            if (err) {
                                return console.log(err);
                            }
                            console.log(body.url);
                            console.log(body.explanation);
                        });
                    }
                    //for each category run the loop as many times as its page no taking page size as 50                
                    if (i === 1) {
                        request_1.default(`https://anapioficeandfire.com/api/${category[i]}?page=${j + 1}&pageSize=50`, { json: true }, (err, res, body) => {
                            if (err) {
                                return console.log(err);
                            }
                            console.log(body.url);
                            console.log(body.explanation);
                        });
                    }
                    if (i === 2) {
                        request_1.default(`https://anapioficeandfire.com/api/${category[i]}?page=${j + 1}&pageSize=50`, { json: true }, (err, res, body) => {
                            if (err) {
                                return console.log(err);
                            }
                            console.log(body.url);
                            console.log(body.explanation);
                        });
                    }
                } //end of inside for loop 
            } //end of the o
        });
    }
}
const loaderController = new LoaderController;
exports.default = loaderController;
