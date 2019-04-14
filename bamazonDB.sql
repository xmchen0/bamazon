DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INTEGER NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(255) NOT NULL,
  department_name VARCHAR(255) NOT NULL,
  price DOUBLE(10,2) NOT NULL,
  stock_quantity INTEGER NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Dress", "Clothing", 99.99, 30);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Singlet", "Clothing", 20.50, 50);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Denim Jean", "Clothing", 100.25, 20);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Leather Jacket", "Clothing", 120.99, 10);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Beanie", "Accessories", 19.99, 7);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Handbag", "Accessories", 79.99, 10);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Perfume", "Fragrance", 70.50, 10);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Red Lipstick", "Cosmetic", 49.50, 5);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Necklace", "Jewellery", 50.35, 5);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Shoes", "Footwear", 120.99, 10);

SELECT * FROM products;
