/* --------------------------- *\
|             U of T            |
|      Coding Bootcamp 2019     |
|             Bamazon           |
\* --------------------------- */

/****************************************************************************************************************************************
  
*->> Purpose: Build an Amazon-like store with MySQL and Node.
    (*) bamazonCustomer.js (minimum requirement): The app will take orders from customers and deplete stock from the store's inventory.
    ( ) Bonus: The app can track product sales across your store's departments and then provide a summary of the 
    highest-grossing departments in the store.

*->> Roadmap: 
    [1] After installing npm mysql and inqurier, import both dependencies via require()
    [2] Setup connection with mysql with credentials
    [3] Test connection with a call back function

    [4] View all products available in store via runSearch()

    [5] Customer's Order: Prompt customers to choose an item_id corresponding to desired product
    [6] Then check inventory: Is the selected item there? If not, console log not enough stock
    [7] Check inventory - might need to loop though the stock inventory to matchup with customer's order

    [8] Quantity: Prompt customer to specify how many quantity they want to purchase
    [9] If stock is sufficient, make purchase successfully. If not, console log insufficient quantity, display catalog again and 
    prompt user to input number again

    [10] Customer's Receipt: Finalise purchase order
    [11] Deplete stock quantity from store's inventory 
    [12] Display purchase summary and total cost

    [13] Prompt user to browse again or exit
    [14] If browse again: display catalog via runSearch()
    [15] If exit: quit program via process.exit()

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
    console.log(chalk.bgMagenta.white.bold("                                    W E L C O M E                                   "));
    console.log(" ");
    console.log(chalk.magenta("                               Kathy's Boutique Shop                           "));
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
        customerOrder(res);
    });
};

// Customer's Order
function customerOrder(inventory) {
    inquirer
        .prompt([
            {
                name: "choice",
                type: "input",
                message: "Like what you see? \nType item id number of desired product:",
                validate: function (val) {
                    // Return value non-zero
                    return !isNaN(val);
                }
            }
        ])
        .then(function (val) {
            console.log(val);
            var itemId = parseInt(val.choice);
            var product = checkInventory(itemId, inventory);
            // If product is not there
            if (!product) {
                // Display catalog
                runSearch();
                // Make another selection
                console.log(" ");
                console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
                console.log(" ");
                console.log(" ");
                console.log(" ");
                console.log("   We apologise your selection is currently Unavailable.   ");
                console.log("              Please make another selection.               ");
                console.log(" ");
                console.log(" ");
                console.log(" ");
                console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
                console.log(" ");
            }
            // Otherwise if product is there
            else {
                // Initiate
                quantityChoice(product);
            }
        });
};

// Check inventory
function checkInventory(choiceItem, inventory) {
    for (var i = 0; i < inventory.length; i++) {
        if (inventory[i].item_id === choiceItem) {
            // Return customer choice from inventory
            return inventory[i];
        };
    };
};

// Quantity
function quantityChoice(product) {
    inquirer
        .prompt([
            {
                name: "quantity",
                type: "input",
                message: "Quantity:",
                validate: function (val) {
                    // Return value exceed zero
                    return val > 0;
                }
            }
        ])
        .then(function (val) {
            var quantity = parseInt(val.quantity);
            // If quantity choice exceeds stock inventory
            if (quantity > product.stock_quantity) {
                // Display catalog
                runSearch();
                // Make another selection
                console.log(" ");
                console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
                console.log(" ");
                console.log(" ");
                console.log(" ");
                console.log("   We apologise your selection currently Exceeds Stock Limit.   ");
                console.log("                  Please make another selection.                ");
                console.log(" ");
                console.log(" ");
                console.log(" ");
                console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
                console.log(" ");
            }
            // Otherwise if quantity is less than or equal value to stock inventory
            else {
                // Pass parameter results to customerReceipt
                customerReceipt(product, quantity);
            }
        });
};

// Customer's Receipt
function customerReceipt(product, quantity) {
    connection.query(
        // Deplete stock quantity in DB
        "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
        [quantity, product.item_id],
        // Customer receipt information
        function (err, res) {
            console.log(" ");
            console.log("===================================================================");
            console.log(" ");
            console.log("                       SALES INVOICE/RECEIPT                       ");
            console.log(" ");
            console.log("Purchase summary: ");
            console.log(" ");
            console.log("     " + quantity + " x " + product.product_name);
            console.log(" ");
            console.log(" ");
            console.log("TOTAL DUE: CAD $" + product.price * quantity);
            console.log(" ");
            console.log("                                                Served by: Kathy   ");
            console.log(" ");
            console.log("            Thank you for shopping with us! See you again.         ");
            console.log(" ");
            console.log("===================================================================");
            console.log(" ");
            // Initiate
            browseAgain();
        }
    );
};

// Browse again or exit
function browseAgain() {
    inquirer
        .prompt([
            {
                name: "userInput",
                type: "confirm",
                message: "Browse catalog again?",
            }
        ])
        .then(function (response) {
            if (response.userInput) {
                runSearch();
            } else {
                process.exit();
            }
        });
};