import axios from 'axios'

export default function api(req, res) {

    axios('https://cdn.contentful.com/spaces/5cibvzbrcpra/environments/master/entries?access_token=WBzq4l0Y8VZ1HCyOx5Q97DeZl-96kwTuig7vMQTZsRk&content_type=marketingBanner')
    .then(resp => resp.data)
    .then(data => {

    const MarketingData=[

     {     
        
        title1: data.items[0].fields.title1,

          description1: data.items[0].fields.description1,

          title2: data.items[0].fields.title2,

          description2: data.items[0].fields.description2,

          title3: data.items[0].fields.title3,

          description3: data.items[0].fields.description3,

          title4: data.items[0].fields.title4,

          description4: data.items[0].fields.description4

           
   } 
]
        return res.json(MarketingData)
    })
    
}