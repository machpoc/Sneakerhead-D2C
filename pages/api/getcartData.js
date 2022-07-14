import axios from "axios";

export default function api(req, res) {
  axios
    .get(
      `https://api.us-central1.gcp.commercetools.com/onlinestore-poc/carts/${req.query.cartid}`,
      { headers: { Authorization: "Bearer RCwUflHm5YHVb-zHOWWVPvXwS3HID1CS" } }
    )

    .then((data) => {
      // console.log("productdetail",data)
      return res.json(data.data);
    });
}
