/* --------------------------- *\
|             U of T            |
|      Coding Bootcamp 2019     |
|             Bamazon           |
\* --------------------------- */

/*
*->> Purpose: Build an Amazon-like store with MySQL and Node.
    (*) Minimum requirement: The app will take orders from customers and deplete stock from the store's inventory.
    ( ) Bonus: The app can track product sales across your store's departments and then provide a summary of the highest-grossing departments in the store.

*->> Roadmap: 
    [1] After installing npm mysql and inquier, import both dependencies via require()
    [2] Setup connection with mysql with credentials
    [3] Test connection with a call back function

    [4] View all products available in store via runSearch()

    [5] Customer's order: Prompt customers to choose an item_id corresponding to desired product
    [6] Then check inventory: Is the selected item there? If not, console log not enough stock
    [7] Check inventory - might need to loop though the stock inventory to matchup with customer's order

    [8] Quantity: Prompt customers to specify how many quantity they want to purchase
    [9] If stock is sufficient, make purchase successfully. If not, console log not enough stock, input number again and display catalog

    [10] Customer's receipt: Finalise purchase order
    [11] Deplete stock quantity from store's inventory 
    [12] Complete process
*/

// Require to npm install mysql and inquirer
var mysql = require("mysql");
var inquirer = require("inquirer");

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
    runSearch();
});

// View product catalog
function runSearch() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log(res);
        console.log(" ");
        console.log(" Welcome! ");
        console.log(" Kathy's Boutique Women Store ");
        console.log(" ");
        console.log(" Browse catalog here: ");
        console.table(res);
        console.log(" ");
        customerOrder(res);
    });
}

// Customer's order
function customerOrder() {

}