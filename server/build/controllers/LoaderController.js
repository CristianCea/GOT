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
const request_promise_1 = __importDefault(require("request-promise"));
class LoaderController {
    LoadAllData(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const loader = new LoaderController();
            try {
                const result = yield Promise.all([loader.loadBooks(1), loader.loadCharacters(43), loader.loadBooks(9)]);
                res.send(result);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    loadBooks(pages) {
        return __awaiter(this, void 0, void 0, function* () {
            var bookPromises = []; //will store the promise sent after making http request to the book api
            try {
                var index = 0;
                // for (let index = 0; index < pages; index++) {
                yield request_promise_1.default.get(`https://anapioficeandfire.com/api/books?page=${index + 1}&pageSize=50`)
                    .then((body) => {
                    bookPromises.push(JSON.parse(body));
                })
                    .catch((err) => { bookPromises = { "origin": err.toString() }; });
                // }
                return bookPromises;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    loadCharacters(pages) {
        return __awaiter(this, void 0, void 0, function* () {
            var charsPromises = []; //will store the promise sent after making http request to the book api
            try {
                var index = 0;
                for (let index = 0; index < pages; index++) {
                    yield request_promise_1.default.get(`https://anapioficeandfire.com/api/characters?page=${index + 1}&pageSize=50`)
                        .then((body) => {
                        charsPromises.push(JSON.parse(body));
                    })
                        .catch((err) => { charsPromises = { "origin": err.toString() }; });
                }
                return charsPromises;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    loadHouses(pages) {
        var housesPromises = []; //will store the promise sent after making http request to the character api
        try {
            for (let index = 0; index < pages; index++) {
                request_promise_1.default(`https://anapioficeandfire.com/api/houses?page=${index + 1}&pageSize=50`, (err, res, body) => {
                    if (err) {
                        return console.log(err);
                    }
                    if (res) {
                        housesPromises.push(body);
                    }
                });
            }
        }
        catch (error) {
            console.log(error);
        }
        return housesPromises;
    }
}
const loaderController = new LoaderController();
exports.default = loaderController;
