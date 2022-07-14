import axios from "axios";

export default function api(req, res) {
  axios
    .get(
      `https://api.us-central1.gcp.commercetools.com/onlinestore-poc/carts/4fdd4b02-6235-47f5-9dc7-1f7b09f37aa2`,
      { headers: { Authorization: "Bearer RCwUflHm5YHVb-zHOWWVPvXwS3HID1CS" } }
    )

    .then((data) => {
      // console.log("productdetail",data)
      return res.json(data.data);
    });
}
