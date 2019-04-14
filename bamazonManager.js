/* --------------------------- *\
|             U of T            |
|      Coding Bootcamp 2019     |
|             Bamazon           |
\* --------------------------- */

/****************************************************************************************************************************************
  
*->> Purpose: Build an Amazon-like store with MySQL and Node.js:
    ( ) bamazonCustomer.js (Minimum Requirement): The app will take orders from customers and deplete stock from the store's inventory.
    (*) Challenge #2: Manager View (Next Level): The app can track product sales across your store's departments
    ( ) Challenge #3: Supervisor View (Final Level): The app can provide a summary of the highest-grossing departments in the store

*->> Roadmap: 
    [1] After installing npm mysql and inqurier, import both dependencies via require()
    [2] Setup connection with mysql with credentials
    [3] Test connection with a call back function

    [4] Inquirer prompt user to select an item from list of menu options: 
    View Products for Sale, View Low Inventory, Add to Inventory, Add New Product
    [5] Set up a switch case to select one of menu option code blocks to be executed

    [6] If a manager selects View Products for Sale, the app should list every available item: the item IDs, names, prices, and quantities
    [7] If a manager selects View Low Inventory, then it should list all items with an inventory count lower than five (5)
    [8] If a manager selects Add to Inventory, the app should display a prompt that will let the manager "add more" of any item currently in the store
    [9] If a manager selects Add New Product, it should allow the manager to add a completely new product to the store

****************************************************************************************************************************************/

/* --------------------- *\
|* VARIABLES | CONSTANTS *|
\* --------------------- */

// Require to npm install mysql + inquirer + chalk
const mysql = require("mysql");
const inquirer = require("inquirer");
const chalk = require("chalk");

/* ---------------- *\
|* MYSQL CONNECTION *|
\* ---------------- */

// Setup connection with mysql DB
var connection = mysql.createConnection({
    host: "localhost",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "chewbacca",
    // Database
    database: "bamazonDB"
});

// Testing connection for any error
connection.connect(function (err) {
    if (err) throw err;
    // Initiate
    greeting();
});

/* --------- *\
|* FUNCTIONS *|
\* --------- */

// Greeting
function greeting() {
    console.log(" ");
    console.log(" ");
    console.log(chalk.bgMagenta.white.bold("                         I N V E N T O R Y   M A N A G E M E N T                    "));
    console.log(" ");
    console.log(chalk.magenta("                               Kathy's Boutique Shop                         "));
    console.log(" ");
    // Initiate
    runSearch();
};

// View product catalog
function runSearch() {
    // Setup query
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        // Display catalog
        console.table(res);
        console.log(" ");
        // Initiate
        managerMenu(res);
    });
};

// Manager Menu
function managerMenu() {
    inquirer.prompt([
        {
            message: 'Please make a selection: ',
            type: 'list',
            choices: [
                'View Products For Sale',
                'View Low Inventory',
                'Add To Inventory',
                'Add New Product'
            ],
            name: 'select'
        }
    ])
        .then((options) => {
            switch (options.select) {
                case 'View Products For Sale':
                    viewProducts();
                    break;
                case 'View Low Inventory':
                    viewInventory();
                    break;
                case 'Add To Inventory':
                    addInventory();
                    break;
                case 'Add New Product':
                    addNewProduct();
                    break;
                default: 'View All Products'
                    runSearch();
                    break;
            }
        });
};

// List every available item
function viewProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.table(res);
        // Select new action from menu
        managerMenu();
    })
};

// List all items with an inventory count lower than five (5)
function viewInventory() {
    connection.query("SELECT * FROM products WHERE stock_quantity < 5", function (err, res) {
        if (err) throw err;
        console.table(res);
        // Select new action from menu
        managerMenu();
    })
};

// Display a prompt that will let the manager "add more" of any item currently in the store
function addInventory() {
    inquirer.prompt([
        {
            name: "item_id",
            type: "input",
            message: "Enter item id that you would like to add more stock to:"
        }, {
            name: "stock",
            type: "input",
            message: "Number of stock to add:"
        }
    ])
        .then(function (userAnswer) {
            connection.query("SELECT * FROM products", function (err, res) {

                var chosenItem;

                // Loop through products that needs to be updated
                for (var i = 0; i < res.length; i++) {
                    if (res[i].item_id === parseInt(userAnswer.item_id)) {
                        chosenItem = res[i];
                    }
                }

                // Add new stock to existing stock
                var updatedStock = parseInt(chosenItem.stock_quantity) + parseInt(userAnswer.stock);

                console.log("Updated stock: " + updatedStock);

                // Update stock for selected product in database
                connection.query("UPDATE products SET ? WHERE ?", [{
                    stock_quantity: updatedStock
                }, {
                    item_id: userAnswer.item_id
                }],
                    function (err) {
                        if (err) {
                            throw err;
                        } else {
                            // Select new action from menu
                            managerMenu();
                        }
                    });
            });
        });
};

// Add a completely new product to the store
function addNewProduct() {
    inquirer.prompt([
        {
            name: "product_name",
            type: "input",
            message: "What is the product you would like to add?"
        }, {
            name: "department_name",
            type: "input",
            message: "Department: "
        }, {
            name: "price",
            type: "input",
            message: "Price: "
        }, {
            name: "stock_quantity",
            type: "input",
            message: "Quantity: "
        }
    ])
        .then(function (userAnswer) {
            connection.query("INSERT INTO products SET ?", {
                product_name: userAnswer.product_name,
                department_name: userAnswer.department_name,
                price: userAnswer.price,
                stock_quantity: userAnswer.stock_quantity
            },
                function (err, res) {
                    if (err) {
                        throw err;
                    } else {
                        console.log("Your product was added successfully!");
                        // Initiate
                        viewAgain();
                    }
                });
        });
};

// View Inventory Again
function viewAgain() {
    inquirer
        .prompt([
            {
                name: "userInput",
                type: "confirm",
                message: "Update inventory again?",
            }
        ])
        .then(function (response) {
            if (response.userInput) {
                runSearch();
            } else {
                console.log("Goodbye!");
                console.log(" ");
                process.exit();
            }
        });
};