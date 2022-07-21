import axios from "axios";

export default function api(req, res) {
  const headers = {
    'Authorization': 'Bearer IVF8sgko5KnOXc4Nn5MMhhq6x0IONdaq'
  }
  axios
    .get(
      `https://api.us-central1.gcp.commercetools.com/onlinestore-poc/product-projections/${req.query.id}`,
      { headers: headers }
    )

    .then((data) => {
      console.log("productdetail",data)
      return res.json(data.data);
    });
}
