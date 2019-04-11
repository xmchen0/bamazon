# bamazon
The app will take in orders from customers and deplete stock from the store's inventory.

## Preview

Coming Soon


## Full Demo  ⬇️

Coming Soon

* Watch on YouTube
* Length: 
* No audio

## Getting Started

Download zip file or Git Clone repository will get you a copy of the project up and running on your local machine for development and testing purposes.

### Setup and Execution

1. Navigate to the local directory of the project inside your Terminal 
2. Inside your terminal enter `npm install` to install the dependencies in the local node_modules folder
3. Then enter the following in the command line `node bamazonCustomer.js`
4. Follow the prompts:

Screenshots Coming Soon

### Document Organisation

#### Purpose: 
      Build an Amazon-like store with MySQL and Node.js
    
#### Roadmap: 
    1. After installing npm mysql and inqurier, import both dependencies via require()
    2. Setup connection with mysql with credentials
    3. Test connection with a call back function
    4. View all products available in store via runSearch()
    5. Customer's Order: Prompt customers to choose an item_id corresponding to desired product
    6. Then check inventory: Is the selected item there? If not, console log not enough stock
    7. Check inventory - might need to loop though the stock inventory to matchup with customer's order
    8. Quantity: Prompt customer to specify how many quantity they want to purchase
    9. If stock is sufficient, make purchase successfully. If not, console log insufficient quantity, display catalog again and 
    prompt user to input number again
    10. Customer's Receipt: Finalise purchase order
    11. Deplete stock quantity from store's inventory 
    12. Display purchase summary and total cost
    13. Prompt user to browse again or exit
    14. If browse again: display catalog via runSearch()
    15. If exit: quit program via process.exit()


### Built With

* [MySQL](https://www.mysql.com/) - Database management system
* [JavaScript](http://www.dropwizard.io/1.0.2/docs/) - Language used
* [Node.js](https://nodejs.org/en/) - Command-line applications
* [NPM](https://www.npmjs.com/) - JS library management
* [Inquirer.js](https://www.npmjs.com/package/inquirer/) - Interactive prompting
* [Chalk](https://www.npmjs.com/package/chalk/) - Terminal colour


## Author

* **Kathy Chen** - *Bamazon* - [xmkchen](https://github.com/xmkchen/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/xmkchen/bamazon/blob/master/LICENSE) file for details

## Acknowledgment

UofT Coding Bootcamp 2019
