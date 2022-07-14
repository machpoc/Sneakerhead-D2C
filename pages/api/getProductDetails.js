import axios from "axios";

export default function api(req, res) {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer 25SO3zpAkSuU2V5Vb_CjehM3OfYsWO78'
  }
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
