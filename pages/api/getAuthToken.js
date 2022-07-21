import axios from "axios";

export default function api(req, res) {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Basic ${process.env.COMMERCETOOLS_TOKEN}`);
  
  var raw = "";
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("https://auth.us-central1.gcp.commercetools.com/oauth/token?grant_type=client_credentials", requestOptions)
    .then(response => response.text())
    .then(result =>{ 
      console.log("result",result)
    res.status(200).send(result)
      })
    .catch(error => console.log('error', error));

}
