import axios from "axios";

export default function api(req, res) {
  axios(
    `https://${process.env.CONTENTFUL_HOST}/spaces/${process.env.CONTENTFUL_SPACE}/environments/master/entries?access_token=${process.env.CONTENTFUL_TOKEN}&content_type=marketingBanners`
  )
    .then((resp) => resp.data)
    .then((data) => {
      const MarketingData = [
        {
          title1: data.items[2].fields.title,

          description1: data.items[2].fields.description,

          title2: data.items[1].fields.title,

          description2: data.items[1].fields.description,

          title3: data.items[0].fields.title,

          description3: data.items[0].fields.description,

          title4: data.items[0].fields.title,

          description4: data.items[0].fields.description,
        },
      ];
      return res.json(MarketingData);
    });
}
