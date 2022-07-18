import axios from "axios";

export default function api(req, res) {
  axios(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE}/environments/master/entries?access_token=${process.env.CONTENTFUL_TOKEN}&content_type=heroBanner`
  )
    .then((resp) => resp.data)
    .then((data) => {
      const title = data.items[0].fields.heroTitle;
      const titleArray = title.split(" ");

      // const firstPart = tit1leArray.slice(0,-1).join(" ")

      // const secondPart = titleArray.at(-1)

      const bannerData = [
        {
          heroTitle: {
            fullTitle: data.items[0].fields.heroTitle,
            firstPart: titleArray.slice(0, -1).join(" "),
            lastPart: titleArray.at(-1),
          },
          heroImage: data.includes.Asset[0].fields.file.url,
          heroDescription:
            data.items[0].fields.heroBlurb.content[0].content[0].value,
        },
      ];
      return res.json(bannerData);
    });
}
