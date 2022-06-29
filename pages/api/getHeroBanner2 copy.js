import axios from 'axios'

export default function api(req, res) {

 
 
  axios(`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE}/environments/master/entries?access_token=${process.env.CONTENTFUL_TOKEN}&content_type=heroBanner`)
  .then(resp => resp.data)
  .then(data => {

    const bannerData=[

     {      heroTitle: data.items[1].fields.heroTitle,
        //    heroImage: data.includes.Asset[0].fields.file.url,
           heroDescription: data.items[1].fields.heroBlurb.content[0].content[0].value
   } ]
        return res.json(bannerData)
    })
    
}