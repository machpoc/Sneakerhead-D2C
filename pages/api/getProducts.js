import axios from "axios";

export default function api(req, res) {



  axios
    .get(
      `https://api.us-central1.gcp.commercetools.com/onlinestore-poc/product-projections?limit=${req.query.limit}`,
      { headers: { Authorization: `Bearer ${req.query.token}` } }
    )

    .then((data) => {
      return res.json(data.data.results);
    });
}
