import express, { Router } from 'express';

import loaderController from '../controllers/loaderController';

class loaderRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/all', loaderController.LoadAllData);
    }

}

export default new loaderRoutes().router;

