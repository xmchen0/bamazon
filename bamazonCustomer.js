var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Onewayjesus1",
    database: "bamazonDB"
});

connection.connect(function (err) {
    if (err) throw err;
    runSearch();
});

function runSearch() {
    inquirer
        .prompt({
            item_id: 0,
            product_name: "product_name",
            price: 0.00,
        })
    console.log(runSearch)

};