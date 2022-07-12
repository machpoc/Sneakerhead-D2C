import axios from 'axios'

export default function api(req, res) {

    axios(`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE}/environments/master/entries?access_token=${process.env.CONTENTFUL_TOKEN}&content_type=marketingTiles`)
    .then(resp => resp.data)
    .then(data => {

    const MarketingData=[

     {      title1: data.items[1].fields.title,
          description1: data.items[1].fields.description,
          title2: data.items[0].fields.title,
          description2: data.items[0].fields.description
           
   } ]
        return res.json(MarketingData)
    })
    
}