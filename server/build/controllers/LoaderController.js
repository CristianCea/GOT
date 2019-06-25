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
            var books = []; //will contain all the books after resolving the promise
            var characters = []; //will contain all the characters after resolving the promise
            var houses = []; //will contain all the houses after resolving the promise
            const results = yield Promise.all([this.loadBooks(1), this.loadCharacters(43), this.loadHouses(9)]);
            return results;
        });
    }
    loadBooks(pages) {
        return __awaiter(this, void 0, void 0, function* () {
            var bookPromises = []; //will store the promise sent after making http request to the book api
            for (let index = 0; index < pages; index++) {
                yield request_1.default(`https://anapioficeandfire.com/api/books?page=${index + 1}&pageSize=50`, (err, res, body) => {
                    if (err) {
                        return console.log(err);
                    }
                    if (res) {
                        bookPromises.push(body);
                    }
                });
            }
            return bookPromises;
        });
    }
    loadCharacters(pages) {
        return __awaiter(this, void 0, void 0, function* () {
            var characterPromises = []; //will store the promise sent after making http request to the character api
            for (let index = 0; index < pages; index++) {
                yield request_1.default(`https://anapioficeandfire.com/api/characters?page=${index + 1}&pageSize=50`, (err, res, body) => {
                    if (err) {
                        return console.log(err);
                    }
                    if (res) {
                        characterPromises.push(body);
                    }
                });
            }
            return characterPromises;
        });
    }
    loadHouses(pages) {
        return __awaiter(this, void 0, void 0, function* () {
            var housesPromises = []; //will store the promise sent after making http request to the character api
            for (let index = 0; index < pages; index++) {
                yield request_1.default(`https://anapioficeandfire.com/api/houses?page=${index + 1}&pageSize=50`, (err, res, body) => {
                    if (err) {
                        return console.log(err);
                    }
                    if (res) {
                        housesPromises.push(body);
                    }
                });
            }
            return housesPromises;
        });
    }
}
const loaderController = new LoaderController();
exports.default = loaderController;
