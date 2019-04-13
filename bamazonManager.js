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
    [7] If a manager selects View Low Inventory, then it should list all items with an inventory count lower than five
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
            message: 'Manager Menu: Please make a selection: ',
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
            switch (options.action) {
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
            }
        });
}


