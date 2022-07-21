import axios from "axios";

export default function api(req, res) {


  const headers = {
    'Authorization': `Bearer ${req.query.token}`
  }
  axios
    .get(
      `https://api.us-central1.gcp.commercetools.com/onlinestore-poc/product-projections/${req.query.id}`,
      { headers: headers }
    )

    .then((data) => {
      console.log("productdetail",req.query.token)
      return res.json(data.data);
    });
}
