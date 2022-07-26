import axios from "axios";

export default function api(req, res) {


  const headers = {
    'Authorization': `Bearer ${req.query.token}`,
    "Content-Type": "application/json"
  }
  axios
    .get(
      `https://api.us-central1.gcp.commercetools.com/onlinestore-poc/orders/order-number=${req.query.orderId}`,
      { headers: headers }
    )

    .then((data) => {
      console.log("productdetail",req.query.token)
      return res.json(data.data);
    });
}
