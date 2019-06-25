"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loaderController_1 = __importDefault(require("../controllers/loaderController"));
class loaderRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/all', loaderController_1.default.LoadAllData);
    }
}
exports.default = new loaderRoutes().router;
