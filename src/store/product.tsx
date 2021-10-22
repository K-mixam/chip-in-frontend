import { makeAutoObservable } from "mobx";
import { ICategory } from "../types/category";
import { IProduct } from "../types/product";

class Product {
  categories: ICategory[] = [
    {
      id: 0,
      title: "Еда",
      final_amount: 2260,
      products: [
        {
          id: 0,
          title: "Шашлык",
          count: 4,
          price: 450,
          total_debt: 1800,
        },
        {
          id: 1,
          title: "Овощи",
          count: 4,
          price: 100,
          total_debt: 400,
        },
        {
          id: 2,
          title: "Хлеб",
          count: 2,
          price: 30,
          total_debt: 60,
        },
      ],
    },
    {
      id: 1,
      title: "Напитки",
      final_amount: 400,
      products: [
        {
          id: 3,
          title: "Пиво",
          count: 4,
          price: 50,
          total_debt: 200,
        },
        {
          id: 4,
          title: "Сок",
          count: 2,
          price: 70,
          total_debt: 140,
        },
        {
          id: 5,
          title: "Вода",
          count: 2,
          price: 30,
          total_debt: 60,
        }
      ],
    },
    {
      id: 2,
      title: "Развлечения",
      final_amount: 1500,
      products: [
        {
          id: 6,
          title: "Кальян",
          count: 2,
          price: 550,
          total_debt: 1100,
        },
        {
          id: 7,
          title: "Колонка",
          count: 1,
          price: 400,
          total_debt: 400,
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
