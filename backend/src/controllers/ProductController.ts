import { Request, Response } from 'express';

const products = [
  {
	productId: 1,
	productName: "Monitor LED 27 Gamer Curvo Sansung 1920 x 1080 FHD 240 Hz",
	imageUrl: "https://images-soubarato.b2w.io/produtos/01/00/img/1515753/7/1515753749_1GG.jpg",
	oldPrice: 2813,
	price: 2599,
	installmentsQuantity: 10,
	installmentsValue: 259
  },
  {
	productId: 2,
	productName: "Monitor Gamer Acer XZ322Q 31.5' Curvo FHD 165hz 4ms FreeSync - Preto + Vermelho",
	imageUrl: "https://static.netshoes.com.br/produtos/monitor-gamer-acer-xz322q-315-curvo-fhd-165hz-4ms-freesync/02/847-0037-002/847-0037-002_zoom1.jpg?ts=1595689256&ims=544x",
	oldPrice: 2813,
	price: 3079,
	installmentsQuantity: 10,
	installmentsValue: 308
  },
  {
	productId: 3,
	productName: "Monitor LED 27 Gamer Curvo Sansung 1920 x 1080 FHD 240 Hz",
	imageUrl: "https://images-soubarato.b2w.io/produtos/01/00/img/1515753/7/1515753749_1GG.jpg",
	oldPrice: 2813,
	price: 2599,
	installmentsQuantity: 10,
	installmentsValue: 259
  },
  {
	productId: 4,
	productName: "Monitor Gamer Acer XZ322Q 31.5' Curvo FHD 165hz 4ms FreeSync - Preto + Vermelho",
	imageUrl: "https://static.netshoes.com.br/produtos/monitor-gamer-acer-xz322q-315-curvo-fhd-165hz-4ms-freesync/02/847-0037-002/847-0037-002_zoom1.jpg?ts=1595689256&ims=544x",
	oldPrice: 2813,
	price: 3079,
	installmentsQuantity: 10,
	installmentsValue: 308
  }
];

export default {
	async index(req: Request, res: Response) {
		return res.json(products);
	}
};
