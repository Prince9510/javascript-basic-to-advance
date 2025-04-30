/*Create a base class Order with properties: orderId, amount, and status (default to "pending").
Create a subclass OnlineOrder that extends Order and adds a property deliveryAddress.
Add a method confirmOrder() in OnlineOrder that sets the status to "confirmed".
Add a method cancelOrder() that:
  Sets the status to "cancelled" only if the current status is "pending"
  Logs a message if cancellation is not allowed (e.g., already confirmed)*/

  
class Order {
  constructor(orderId, amount, status = "pending") {
    this.orderId = orderId;
    this.amount = amount;
    this.status = status;
  }
}

class OnlineOrder extends Order {
  constructor(orderId, amount, deliveryAddress) {
    super(orderId, amount);
    this.deliveryAddress = deliveryAddress;
  }

  confirmOrder() {
    this.status = "confirmed";
    console.log("Your order is confirmed.");
  }

  cancelOrder() {
    if (this.status === "confirmed") {
      console.log("Cancellation is not allowed!");
      return;
    }
    this.status = "cancelled";
    console.log("Your order was successfully cancelled.");
  }
}

const myOrder = new OnlineOrder(174, 10000, "delhi");
myOrder.confirmOrder();
myOrder.cancelOrder();
