import axios from "axios";

export default async function api(req, res) {
  const contentful = require("contentful");
  const contenftulClient = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_TOKEN,
    host: process.env.CONTENTFUL_HOST,
    // environment: process.env.CONTENTFUL_ENVIRONMENT
  });
  const data = await contenftulClient.getEntries("heroBanner");

  const title = data.items[0].fields.heroTitle;
  const titleArray = title.split(" ");
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
  console.log("bannerData", bannerData);
  return res.json(bannerData);
}
