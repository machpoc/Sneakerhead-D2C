import axios from "axios";

export default function api(req, res) {
  axios
    .get(
      `https://api.us-central1.gcp.commercetools.com/onlinestore-poc/product-projections?limit=${req.query.limit}`,
      { headers: { Authorization: "Bearer svFIUaggmdKj0GeYzrwR1C4iCFeRl4qU" } }
    )

    .then((data) => {
      return res.json(data.data.results);
    });
}
