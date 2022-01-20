import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { ReactComponentElement as Logo } from "../../assets/box-package-svgrepo-com.svg";

const StripeButton = ({price}) => {
   const publishableKey = 'pk_test_51KK72zATS8LvxvYFuAUYtbyWL9GLibVyoHBa30qCUJwLZqKPhirWp84aIt85xUBbh4Po6ACsCcMEbZz40j0oov7B00mea6Q5oE';
   const onToken = token => {
      console.log(token);
      alert("Thank you for choosing Yard-shop");
   }

   return (
      <StripeCheckout 
         label="Pay Now"
         name="Yard-Shop"
         billingAddress
         shippingAddress
         image="https://img.icons8.com/external-photo3ideastudio-flat-photo3ideastudio/64/000000/external-payment-supermarket-photo3ideastudio-flat-photo3ideastudio.png"
         description={`Your total is $${price}`}
         panelLabel="Pay Now"
         token={onToken}
         stripeKey={publishableKey}
      />
   )
};

export default StripeButton;