import axios from "axios";

export default function api(req, res) {
  axios
    .get(
      `https://api.us-central1.gcp.commercetools.com/onlinestore-poc/product-projections?limit=${req.query.limit}`,
      { headers: { Authorization: "Bearer IVF8sgko5KnOXc4Nn5MMhhq6x0IONdaq" } }
    )

    .then((data) => {
      return res.json(data.data);
    });
}
