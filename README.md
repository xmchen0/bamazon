# bamazon
Build an Amazon-like store with MySQL and Node.js. 
* The app will take in orders from customers and deplete stock from the store's inventory `bamazonCustomer.js`
* The app can track product sales across store's departments `bamazonManager.js`

## Preview

### bamazonCustomer.js

<a href="http://recordit.co/hJM33Mq031.gif"><img src="https://media.giphy.com/media/gizhA3GMGkO1EKu5Ne/giphy.gif" border="0"></a>

### bamazonManager.js

<a href="http://recordit.co/atGJYtz2EP.gif"><img src="https://media.giphy.com/media/gi93ZeAhUC5O8azV6y/giphy.gif" border="0"></a>


## Full Demo  ⬇️

### bamazonCustomer.js
https://youtu.be/OdQXpKfSzzA

* Length: 0:51
* No audio

### bamazonManger.js
https://youtu.be/80f-NdNUz2U

* Length: 1:00
* No audio

* Watch old demo on YouTube: https://youtu.be/UCgMsh8bKmU
* Length: 1:07
* No audio

<hr> 

## Getting Started

Download zip file or Git Clone repository will get you a copy of the project up and running on your local machine for development and testing purposes.

### Setup and Execution

1. Navigate to the local directory of the project inside your Terminal 
2. Inside your terminal enter `npm install` to install the dependencies in the local node_modules folder
3. Ensure you have updated your MySQL credentials in bamazonCustomer.js and bamazonManager.js
4. Then enter the following in the command line `node bamazonCustomer.js` or `node bamazonManager.js`
5. Check out the video demos under Full Demo ⬆️

### Document Organisation
    
#### Roadmap (bamazonCustomer.js): 
      1. After installing npm mysql and inqurier, import both dependencies via require()
      2. Setup connection with mysql with credentials
      3. Test connection with a call back function
      4. View all products available in store via runSearch()
      5. Customer's Order: Prompt customers to choose an item_id corresponding to desired product
      6. Then check inventory: Is the selected item there? If not, console log not enough stock
      7. Check inventory - might need to loop though the stock inventory to matchup with customer's order
      8. Quantity: Prompt customer to specify how many quantity they want to purchase
      9. If stock is sufficient, make purchase successfully. If not, console log insufficient quantity, display catalog again and prompt user to input number again
      10. Customer's Receipt: Finalise purchase order
      11. Deplete stock quantity from store's inventory 
      12. Display purchase summary and total cost
      13. Prompt user to browse again or exit
      14. If browse again: display catalog via runSearch()
      15. If exit: quit program via process.exit()

#### Roadmap (bamazonManager.js): 
      1. After installing npm mysql and inqurier, import both dependencies via require()
      2. Setup connection with mysql with credentials
      3. Test connection with a call back function
      4. Inquirer prompt user to select an item from list of menu options: View Products for Sale, View Low Inventory, Add to Inventory, Add New Product
      5. Set up a switch case to select one of menu option code blocks to be executed
      6. If a manager selects View Products for Sale, the app should list every available item: the item IDs, names, prices, and quantities
      7. If a manager selects View Low Inventory, then it should list all items with an inventory count lower than five (5)
      8. If a manager selects Add to Inventory, the app should display a prompt that will let the manager "add more" of any item currently in the store
      9. If a manager selects Add New Product, it should allow the manager to add a completely new product to the store

### Built With

* [MySQL](https://www.mysql.com/) - Database management system
* [JavaScript](http://www.dropwizard.io/1.0.2/docs/) - Language used
* [Node.js](https://nodejs.org/en/) - Command-line applications
* [NPM](https://www.npmjs.com/) - JS library management
* [Inquirer.js](https://www.npmjs.com/package/inquirer/) - Interactive prompting
* [Cli-Table](https://www.npmjs.com/package/cli-table) - Render unicode-aided tables
* [Chalk](https://www.npmjs.com/package/chalk/) - Terminal colour
* [Visual Studio Code](https://code.visualstudio.com/) - Text editor


## Author

* **Kathy Chen** - *Bamazon* - [xmkchen](https://github.com/xmkchen/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/xmkchen/bamazon/blob/master/LICENSE) file for details

## Acknowledgment

UofT Coding Bootcamp 2019
