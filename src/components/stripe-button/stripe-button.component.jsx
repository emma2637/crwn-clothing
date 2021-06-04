import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =({price})=>{

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IvTj4D7XxRePWY8kBz5xsYaXbJzVRiAIt4UysWYn7HFZ4rUACvsRf3GG3HzHITX1pAGBnf5xAxj7jszMw8tMCHX00OtneOcSY';
const onToken = token =>{
    console.log(token);
    alert('PaymentSuccessful')
}
    return (
        <StripeCheckout 
            label='Pay Now'
            name ='Ecommerce Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount ={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey ={publishableKey}/>
    )
}

export default StripeCheckoutButton