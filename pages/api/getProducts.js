



import axios from 'axios'

export default function api(req, res) {

  axios.get('https://api.us-central1.gcp.commercetools.com/onlinestore-poc/products', { headers: { Authorization: "Bearer iJx_BSRXIJ2LqWyjVzpEwiq-Hfddu3DQ" } })


 .then(data => {


      return res.json(data.data.results)
  })
  

}


