import axios from 'axios'

export default function api(req, res) {

    axios('https://cdn.contentful.com/spaces/5cibvzbrcpra/environments/master/entries?access_token=WBzq4l0Y8VZ1HCyOx5Q97DeZl-96kwTuig7vMQTZsRk&content_type=heroBanner')
    .then(resp => resp.data)
    .then(data => {

    const bannerData=[

     {      heroTitle: data.items[0].fields.heroTitle,
           heroImage: data.includes.Asset[0].fields.file.url,
           heroDescription: data.items[0].fields.heroBlurb.content[0].content[0].value
           
   } ]
        return res.json(bannerData)
    })
    
}