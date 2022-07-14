import axios from 'axios'

export default function api(req, res) {

 
 
  axios(`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE}/environments/master/entries?access_token=${process.env.CONTENTFUL_TOKEN}&content_type=offerD2c`)
  .then(resp => resp.data)
  .then(data => {

  const offerData=[

     {      offerHeader: data.items[0].fields.header,
            offerDescription: data.items[0].fields.offerText
    } ]
        return res.json(offerData)
    })
    
}