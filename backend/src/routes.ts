import { Router } from 'express';
import ProductController from './controllers/ProductController';

const routes = Router();

routes.get('/products', ProductController.index)

export default routes;