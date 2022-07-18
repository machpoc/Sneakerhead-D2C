import axios from "axios";

export default function api(req, res) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer f16iwZMuY-Oik3UfQB-oZVJiQPT_GTK0",
  };

  axios
    .get(
      `https://api.us-central1.gcp.commercetools.com/onlinestore-poc/product-projections/${req.query.id}`,
      { headers: headers }
    )

    .then((data) => {
      // console.log("productdetail",data)
      return res.json(data.data);
    });
}
