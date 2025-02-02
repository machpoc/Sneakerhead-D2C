import axios from "axios";

export default function api(req, res) {
  axios(
    `https://${process.env.CONTENTFUL_HOST}/spaces/${process.env.CONTENTFUL_SPACE}/environments/master/entries?access_token=${process.env.CONTENTFUL_TOKEN}&content_type=heroBanner2`
  )
    .then((resp) => resp.data)
    .then((data) => {
      // const title=data.items[1].fields.heroTitle
      // const titleArray= title.split(" ")

      const banner2title = data.items[0].fields.heroTitle;
      const banner2TitleArray = banner2title.split(" ");
      const bannerData = [
        {
          heroTitle: {
            fullTitle: data.items[0].fields.heroTitle,
            titleArray: banner2TitleArray,
            // lastPart:titleArray.at(-1)
          },
          // heroImage: data.includes.Asset[0].fields.file.url,
          heroDescription: data.items[0].fields.heroBlurb,
          HeroImage: data.includes.Asset[0].fields.file.url,
        },
      ];
      return res.json(bannerData);
    });
}
