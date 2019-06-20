"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({ text: 'API GOT' });
    }
}
exports.indexController = new IndexController;
