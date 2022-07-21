import axios from "axios";

export default function api(req, res) {
  axios
    .get(
      `https://api.us-central1.gcp.commercetools.com/onlinestore-poc/carts/${req.query.cartid}`,
      { headers: { Authorization: "Bearer IVF8sgko5KnOXc4Nn5MMhhq6x0IONdaq" } }
    )

    .then((data) => {
      // console.log("productdetail",data)
      return res.json(data.data);
    });
}
