



import axios from 'axios'

export default function api(req, res) {

  fetch('', {
    method: 'POST',
    headers: {
        'Authorization': 'Basic c0xKVHJPRk0zMEVKSWhEdHZUclJvNEh3OmJJUjVOSndXcUFhRE52eGpVcVVnbE4tdGhDbFFsMnBn',
      "Content-Type": "application/json"

    }
}).then(resp => console.log("data is",resp)  )
  

}


