import { makeAutoObservable } from "mobx";
import { ICategory } from "../types/category";
import { IProduct } from "../types/product";

class Product {
  categories: ICategory[] = [
    {
      id: 0,
      title: "Без категории",
      products: [
        {
          id: 0,
          title: "Бла-бла-бла",
          count: 4,
          price: 450,
        },
      ],
    },
    {
      id: 1,
      title: "Еда",
      products: [
        {
          id: 1,
          title: "Шашлындос",
          count: 4,
          price: 450,
        },
        {
          id: 2,
          title: "Помидорки",
          count: 10,
          price: 5,
        },
      ],
    },
    {
      id: 2,
      title: "Напитки",
      products: [
        {
          id: 3,
          title: "Компот (вишневый)",
          count: 20,
          price: 10,
        },
        {
          id: 4,
          title: "Шпроты",
          count: 200,
          price: 4,
        },
      ],
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  createCategory(category: ICategory) {
    this.categories.push(category);
  }

  editCategory(category_id: number, title: string) {
    const foundCategory = this.categories.find(
      (item) => item.id === category_id
    );
    if (foundCategory) {
      foundCategory.title = title;
    }
  }

  deleteCategory(category_id: number) {
    const index = this.categories.findIndex((item) => item.id === category_id);
    this.categories[0].products = [
      ...this.categories[index].products,
      ...this.categories[0].products,
    ];
    delete this.categories[index];
  }

  createProduct(product: IProduct, category_id: number) {
    const foundCategory = this.categories.find(
      (item) => item.id === category_id
    );
    if (foundCategory) {
      foundCategory.products.push(product);
    }
  }

  editProduct(editedProduct: IProduct) {
    this.categories.forEach((category) => {
      category.products.forEach((product) => {
        if (product.id === editedProduct.id) {
          product = editedProduct;
        }
      });
    });
  }

  deleteProduct(product_id: number) {
    this.categories.forEach((category) => {
      category.products = category.products.filter(
        (item) => item.id !== product_id
      );
    });
  }
}

export default new Product();
