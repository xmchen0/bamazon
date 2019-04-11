# bamazon
The app will take in orders from customers and deplete stock from the store's inventory.

## Preview

<a href="http://g.recordit.co/zfgYDTNOmx.gif"><img src="https://media.giphy.com/media/XHdliEvnVjdMF709RO/giphy.gif" border="0"></a>


## Full Demo  ⬇️

* Watch on YouTube: https://youtu.be/UCgMsh8bKmU
* Length: 1:07
* No audio

## Getting Started

Download zip file or Git Clone repository will get you a copy of the project up and running on your local machine for development and testing purposes.

### Setup and Execution

1. Navigate to the local directory of the project inside your Terminal 
2. Inside your terminal enter `npm install` to install the dependencies in the local node_modules folder
3. Then enter the following in the command line `node bamazonCustomer.js`
4. The program will commence running as follows:

View all products, inquirer prompts customers to:
1. ask them the ID of the product they would like to buy
2. ask how many units of the product they would like to buy

<a href="https://imgur.com/bY0mpRC"><img src="https://i.imgur.com/bY0mpRC.png" alt="welcome"></a><br />

Validates item_id inclusive of what is available only

<a href="https://imgur.com/hQaVxVD"><img src="https://i.imgur.com/hQaVxVD.png" alt="unavailable"></a><br />

If we have enough product, we can fulfill customer's order and update the SQL database to reflect the remaining quantity. For example, notice the stock_quantity for 'Red Lipstick' depletes by 1:

<a href="https://imgur.com/mWQj2ng"><img src="https://i.imgur.com/mWQj2ng.png" alt="unavailable" height="200" width="520"></a><br />

<a href="https://imgur.com/loBrW3Y"><img src="https://i.imgur.com/loBrW3Y.png" alt="unavailable" height="200" width="520"></a><br />
  
Insufficient quanitity prevents customer's order to go through

<a href="https://imgur.com/Cw5WcDb"><img src="https://i.imgur.com/Cw5WcDb.png" alt="insufficient-quantity"></a><br />

Customer's receipt: Once the update goes through, show the customer the total cost of their purchase 

<a href="https://imgur.com/FspAkXs"><img src="https://i.imgur.com/FspAkXs.png" alt="customer-receipt"></a><br />

Prompts customer to browse products again

<a href="https://imgur.com/XMffgig"><img src="https://i.imgur.com/XMffgig.png" alt="browse-again"></a><br />


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
      9. If stock is sufficient, make purchase successfully. If not, console log insufficient quantity, display catalog again and prompt user to input number again
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
