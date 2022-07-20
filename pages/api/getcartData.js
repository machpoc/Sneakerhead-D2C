import axios from "axios";

export default function api(req, res) {
  axios
    .get(
      `https://api.us-central1.gcp.commercetools.com/onlinestore-poc/carts/${req.query.cartid}`,
      { headers: { Authorization: "Bearer VZKs6X6qnMI6LT7ajtl1BB5DagNCDmao" } }
    )

    .then((data) => {
      // console.log("productdetail",data)
      return res.json(data.data);
    });
}
