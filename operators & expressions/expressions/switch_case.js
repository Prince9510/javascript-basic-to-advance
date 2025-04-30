/* 
You are developing a web application for an online store. The application needs to display a message based on the user's 
membership status. There are three membership levels: "Silver", "Gold", and "Platinum."

If the user is a "Platinum" member, they should see a message saying, "You get a 20% discount."
If the user is a "Gold" member, they should see a message saying, "You get a 15% discount."
If the user is a "Silver" member, they should see a message saying, "You get a 10% discount."
If the user is not a member, they should see a message saying, "Sign up for membership to enjoy discounts." */

let membership = "Gold";
let discountPrice;

switch (true) {
  case membership === "Platinum":
    discountPrice = "you have a 20% discount";
    break;

  case membership === "Gold":
    discountPrice = "you have a 15% discount";
    break;

  case membership === "Silver":
    discountPrice = "you have a 10% discount";
    break;

  default:
    discountPrice = "You are not aligible for any discount";
}

console.log(discountPrice);

/*
Imagine you're building a program that categorizes products in an e-commerce store into different types of shipping categories 
based on their weight. You need to use a switch statement to determine the shipping cost based on the following rules:


Products weighing less than or equal to 1kg: "Standard Shipping" at a cost of $5.
Products weighing between 1kg and 5kg (exclusive): "Priority Shipping" at a cost of $15.
Products weighing between 5kg and 10kg (exclusive): "Express Shipping" at a cost of $25.
Products weighing over 10kg: "Heavy Freight" at a cost of $50.
You are also given a product weight as input. How would you structure a switch statement to categorize the product into the correct shipping type and assign the proper shipping cost
*/

let productWeight = 8;
let shippingType;
let shippingCost;

switch (true) {
  case productWeight <= 1:
    shippingType = "Standard Shipping";
    shippingCost = 5;
    break;
  case productWeight > 1 && productWeight <= 5:
    shippingType = "Priority Shipping";
    shippingCost = 15;
    break;
  case productWeight > 5 && productWeight <= 10:
    shippingType = "Express Shipping";
    shippingCost = 25;
    break;
  case productWeight > 10:
    shippingType = "Heavy Freight";
    shippingCost = 50;
    break;
  default:
    shippingType = "Unknown";
    shippingCost = 0;
}

console.log(`Shipping Type: ${shippingType}`);
console.log(`Shipping Cost: $${shippingCost}`);

/*
based on the product's category and the user’s loyalty level. The categories are: "Electronics", "Clothing", and "Groceries".
 The loyalty levels are: "Silver", "Gold", and "Platinum".

The discount rules are as follows:

For "Electronics":

"Silver": 5% discount

"Gold": 10% discount

"Platinum": 15% discount

For "Clothing":

"Silver": 10% discount

"Gold": 15% discount

"Platinum": 20% discount

For "Groceries":

"Silver": 2% discount

"Gold": 5% discount

"Platinum": 10% discount
*/

let membershipStatus = "Platinum";
let itemCategory = "Clothing";
let cost = 150;
let discount;

switch (true) {
  case itemCategory === "Electronics":
    if (membershipStatus === "Platinum") {  
      discount = `Yay! You got a 15% discount you pay only ${
        cost - (cost * 15) / 100
      }`;
    } else if (membershipStatus === "Gold") {
      discount = `Yay! You got a 10% discount you pay only ${
        cost - (cost * 10) / 100
      }`;
    } else if (membershipStatus === "Silver") {
      discount = `Yay! You got a 5% discount you pay only ${
        cost - (cost * 5) / 100
      }`;
    }
    break;

  case itemCategory === "Clothing":
    if (membershipStatus === "Platinum") {
      discount = `Yay! You got a 20% discount you pay only ${
        cost - (cost * 20) / 100
      }`;
    } else if (membershipStatus === "Gold") {
      discount = `Yay! You got a 15% discount you pay only ${
        cost - (cost * 15) / 100
      }`;
    } else if (membershipStatus === "Silver") {
      discount = `Yay! You got a 10% discount you pay only ${
        cost - (cost * 10) / 100
      }`;
    }
    break;

  case itemCategory === "Groceries":
    if (membershipStatus === "Platinum") {
      discount = `Yay! You got a 10% discount you pay only ${
        cost - (cost * 10) / 100
      }`;
    } else if (membershipStatus === "Gold") {
      discount = `Yay! You got a 5% discount you pay only ${
        cost - (cost * 5) / 100
      }`;
    } else if (membershipStatus === "Silver") {
      discount = `Yay! You got a 2% discount you pay only ${
        cost - (cost * 2) / 100
      }`;
    }
    break;

  default:
    discount = `You have no membership! you pay ${cost}`;
}

console.log(discount);

/*
You are building an international flight booking system. Based on a passenger's ticket class and destination region,
 you need to calculate the luggage allowance in kilograms.

There are three ticket classes:

"Economy"
"Business"
"First"

There are four destination regions:

"Domestic"
"Asia"
"Europe"
"Americas"

The luggage allowance rules are:

| Class     | Domestic | Asia | Europe | Americas |
|-----------|----------|------|--------|----------|
| Economy   | 15kg     | 20kg | 23kg   | 25kg     |
| Business  | 25kg     | 30kg | 35kg   | 40kg     |
| First     | 35kg     | 40kg | 45kg   | 50kg     |


*/


let ticketClass = "Business";
let destinationRegion = "Europe";  
let luggageAllowance;

switch (ticketClass + "-" + destinationRegion) {
    case "Economy-Domestic":
        luggageAllowance = 15;
        break;
    case "Economy-Asia":
        luggageAllowance = 20;
        break;
    case "Economy-Europe":
        luggageAllowance = 23;
        break;
    case "Economy-Americas":
        luggageAllowance = 25;
        break;
    case "Business-Domestic":
        luggageAllowance = 25;
        break;
    case "Business-Asia":
        luggageAllowance = 30;
        break;
    case "Business-Europe":
        luggageAllowance = 35;
        break;
    case "Business-Americas":
        luggageAllowance = 40;
        break;
    case "First-Domestic":
        luggageAllowance = 35;
        break;
    case "First-Asia":
        luggageAllowance = 40;
        break;
    case "First-Europe":
        luggageAllowance = 45;
        break;
    case "First-Americas":
        luggageAllowance = 50;
        break;
    default:
        luggageAllowance = "Invalid ticket class or destination.";
}

console.log(`Luggage Allowance: ${luggageAllowance}kg`);
