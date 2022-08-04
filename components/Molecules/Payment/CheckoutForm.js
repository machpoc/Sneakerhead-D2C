import React from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Box, Text } from "native-base";
import { withTheme } from "styled-components";

 function CheckoutForm({}) {
  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "/Checkout/Success",
        // return_url: "http://localhost:3000/Checkout/Success",
        receipt_email: email,
      },
    });
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <Box justifyContent="center" alignItems="center" mb="32px" mt="56px">
        <Text color="black" fontSize="24px" fontWeight="bold" lineHeight="33px">
          Enter new card
        </Text>
      </Box>
      <PaymentElement id="payment-element" />
      <Box justifyContent="end" alignItems="end">
        <button
          style={{
            marginRight: 20,
            cursor: "pointer",
            justifyContent: "end",
            alignContent: "end",
            alignItems: "end",
            opacity: 1,
            backgroundColor: `var(--sneakerhead-red)`,
            width: "82px",
            height: "48px",

            borderRadius: 50,
            border: "0px",
            color: "var(--sneakerhead-white)",
          }}
          disabled={isLoading || !stripe || !elements}
          id="submit"
        >
          Pay Now
        </button>
      </Box>
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}


export default withTheme(CheckoutForm)