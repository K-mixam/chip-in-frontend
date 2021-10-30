import { makeAutoObservable } from "mobx";
import { ICategory } from "../types/category";
import { IProduct } from "../types/product";

class Product {
  categories: ICategory[] = [
    {
      id: "0",
      title: "Без категории",
      products: [],
    },
    // {
    //   id: "1",
    //   title: "Еда",
    //   products: [
    //     {
    //       id: 0,
    //       title: "Шашлык",
    //       count: 4,
    //       price: 450,
    //     },
    //     {
    //       id: 1,
    //       title: "Овощи",
    //       count: 4,
    //       price: 100,
    //     },
    //     {
    //       id: 2,
    //       title: "Хлеб",
    //       count: 2,
    //       price: 30,
    //     },
    //   ],
    // },
    // {
    //   id: "2",
    //   title: "Напитки",
    //   products: [
    //     {
    //       id: 3,
    //       title: "Пиво",
    //       count: 4,
    //       price: 50,
    //     },
    //     {
    //       id: 4,
    //       title: "Сок",
    //       count: 2,
    //       price: 70,
    //     },
    //     {
    //       id: 5,
    //       title: "Вода",
    //       count: 2,
    //       price: 30,
    //     },
    //   ],
    // },
    // {
    //   id: 3,
    //   title: "Развлечения",
    //   products: [
    //     {
    //       id: 6,
    //       title: "Кальян",
    //       count: 2,
    //       price: 550,
    //     },
    //     {
    //       id: 7,
    //       title: "Колонка",
    //       count: 1,
    //       price: 400,
    //     },
    //   ],
    // },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  createCategory(category: ICategory) {
    this.categories.push(category);
  }

  editCategory(categoryId: string, title: string) {
    const foundCategory = this.categories.find(
      (item) => item.id === categoryId
    );
    if (foundCategory) {
      foundCategory.title = title;
    }
  }

  deleteCategory(categoryId: string) {
    const index = this.categories.findIndex((item) => item.id === categoryId);
    this.categories[0].products = [
      ...this.categories[index].products,
      ...this.categories[0].products,
    ];
    delete this.categories[index];
  }

  createProduct(product: IProduct, categoryId: string) {
    const foundCategory = this.categories.find(
      (item) => item.id === categoryId
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

  deleteProduct(productId: number) {
    this.categories.forEach((category) => {
      category.products = category.products.filter(
        (item) => item.id !== productId
      );
    });
  }

  get categoryFields() {
    const resultFields: { name: string; value: string }[] = [];
    this.categories.forEach((category) => {
      if (category.id !== "0") {
        resultFields.push({ name: category.id, value: category.title });
      }
    });
    return resultFields;
  }

  get categoryAmounts() {
    let categoryAmounts: { id: string; categoryAmount: number }[] = [];
    let resultAmount = 0;
    this.categories.forEach((category) => {
      let categoryAmount = 0;
      category.products.forEach((product) => {
        categoryAmount += product.count * product.price;
      });
      categoryAmounts.push({ id: category.id, categoryAmount });
      resultAmount += categoryAmount;
    });
    return { categoryAmounts, resultAmount };
  }
}

export default new Product();
