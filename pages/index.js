import React, { Component } from "react";
import useSWR from "swr";
import Grid, { Item } from "../components/Atoms/Grid";
import BannerCardComponent from "../components/Molecules/BannerCard";
import HeroBanner from "../components/Molecules/HeroBanner";
import Image from "../components/Atoms/Image";
import Carousal from "../components/Molecules/Carousal";
import MarketingComponent from "../components/Molecules/MarketingComponent";
import { Button, Center, Text } from "native-base";
import ButtonComponent from "../components/Atoms/Button/Button";
import Navbar from "../components/Molecules/NavBar/index";
import Footer from "../components/Molecules/Footer";
import MarketingFooter from "../components/Molecules/MarketingFooter";
import { ProgressViewIOSComponent } from "react-native";
import { WaveBanner, WaveRectangle } from "../components/Atoms/wave";
import OfferBox from "../components/Molecules/OfferBox";
import SubHeader from "../components/Molecules/SubHeader";
import ContentBanner from "../components/Molecules/ContentBanner";
import ContactUs from "../components/Molecules/ContactUs";
import ContactMode from "../components/Molecules/ContactMode";
const img = require("/public/images/Adidas-Shoes-Free-PNG-Image.png");
import {
  authEndpoint,
  defaultEndpointProducts,
  categoryEndpoint,
} from "./Property";

import { clientsecret, clientToken, clientid } from "./Cred";

export async function getServerSideProps() {
  const auth_res = await fetch(authEndpoint, {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(clientid + ":" + clientsecret).toString("base64"),
    },
  });

  let res_auth = await auth_res.json();

  const clientToken = res_auth.access_token;
  const res = await fetch(defaultEndpointProducts, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + clientToken,
    },
  });
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
//  const { data: data } = useSWR(
//   `/api/getProducts?limit=${pageIndex.pageIndex}`
// );
const sample2 = ({ data }) => {
  const { data: heroBannerData } = useSWR("/api/getHeroBanner");
  const { data: heroBannerData2 } = useSWR("/api/getHeroBanner2");
  const { data: offerDetails } = useSWR("/api/getOffer");
  const { data: marketingTile } = useSWR("/api/getMarketingTile");
  const { data: marketingBanner } = useSWR("/api/getMarketingBanner");
  const { data: productData } = useSWR("/api/getProducts");

  offerDetails &&
    console.log(
      "herobannerdataaaaaaaaaaaaaaaa",
      offerDetails[0].offerHeader,
      offerDetails[0].offerDescription
    );

  console.log("data is", process.env.CONTENTFUL_TOKEN);
  console.log(data);

  const header1 = "LIFE IS BETTER IN RUNNING SHOES";

  const headerArray = header1.split(" ");
  // console.log("haederayyau",headerArray)
  // console.log("haederayyaulast",headerArray.slice(0,-1).join(" "))
  // console.log("haederayyaulastone",headerArray.at(-1))
  return (
    <>
      <Navbar />
      <HeroBanner columns={12} marginBottom="-8rem">
        <Item paddingTop="5rem" colStart={2} colEnd={6}>
          <div style={{ paddingTop: "12px", textTransform: "uppercase" }}>
            {heroBannerData && (
              <>
                {" "}
                <span
                  style={{
                    fontSize: "42px",
                    color: "#000000",
                    fontWeight: "700",
                    lineHeight: "44.18px",
                  }}
                >
                  {heroBannerData[0].heroTitle.firstPart}{" "}
                </span>
                <span
                  style={{
                    fontSize: "42px",
                    color: "#D31424",
                    fontWeight: "700",
                    lineHeight: "44.18px",
                  }}
                >
                  {heroBannerData[0].heroTitle.lastPart}
                </span>
              </>
            )}
          </div>
          <div style={{ paddingTop: "12px" }}>
            <span
              style={{
                fontSize: "20px",
                color: "#000000",
                fontWeight: "400",
                lineHeight: "21.79px",
              }}
            >
              {heroBannerData && heroBannerData[0].heroDescription}
            </span>
          </div>
          <ButtonComponent
            marginBottom="25%"
            width={142}
            bg="#D31424"
            fill="true"
            marginTop="32px"
            hoverBg="#D31424"
          >
            Shop now
          </ButtonComponent>
        </Item>
        <Item display="flex">
          <img
            className="bannerImageFirst"
            style={{ position: "absolute", top: "-2%", right: "14%" }}
            width={489}
            height={511}
            src="images/refreshed/bannerImage1.png"
          />
        </Item>
        <Item
          zIndex="-1"
          rowStart={1}
          rowEnd={1}
          colStart={1}
          colEnd={14}
          paddingTop="0"
          paddingBottom="0"
        >
          <div
            class="wavecontainer"
            style={{ position: "absolute", bottom: "0%", width: "100%" }}
          >
            <svg
              width="100%"
              height="700"
              viewBox="0 0 1024 574"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.15"
                d="M751.276 436.599C750.952 436.664 -110 584 -110 584V394.92C-110 394.92 750.952 435.951 751.276 435.951C750.952 435.886 -110 272.864 -110 272.864V139.659C-110 139.659 751.34 435.238 751.664 435.433C751.405 435.173 18.8706 -1 18.8706 -1H285.424C285.424 -1 752.247 434.849 752.377 435.109C752.312 434.849 440.535 -1 440.535 -1H582.882C582.882 -1 753.219 434.849 753.155 435.109C753.284 434.849 738.058 -1 738.058 -1H1004.55C1004.55 -1 754.127 435.173 753.867 435.433C754.191 435.238 1134 139.4 1134 139.4V272.605C1134 272.605 754.645 435.886 754.321 435.951C754.645 435.951 1134 394.92 1134 394.92V584C1134 584 754.645 436.664 754.321 436.599"
                fill="#F4BFC4"
              />
            </svg>
          </div>
        </Item>
      </HeroBanner>
      <WaveBanner />
      <WaveRectangle />

      <HeroBanner rows={1} columns={12} gap={10} bgColor="#E2D4F4">
        <div style={{ position: "absolute", height: "100%", width: "100%" }}>
          <svg
            viewBox="0 0 1024 366"
            preserveAspectRatio="none"
            style={{ height: "100%", width: "100%" }}
          >
            <path
              d="M-34 386C-25.9968 338.092 4.45422 293.1 49.0572 263.272C93.6601 233.361 152.025 218.864 208.437 223.613C249.038 227.029 287.688 239.86 327.118 248.942C366.548 258.107 409.199 263.522 447.848 252.108C483.18 241.61 512.069 217.947 548.278 209.949C604.788 197.368 666.862 225.363 721.908 208.782C766.999 195.202 793.448 155.959 812.187 118.465C830.926 80.889 847.616 40.0631 884.801 14.4844C915.35 -6.59506 958.001 -14.177 995.967 -5.42858C1033.93 3.40314 1066.14 28.3986 1080 59.8095V386H-34Z"
              fill="#CBB5E7"
            />
          </svg>
        </div>
        <Item
          style={{ zIndex: 1 }}
          rowStart={1}
          rowEnd={1}
          paddingTop="5rem"
          colStart={2}
          colEnd={5}
        >
          <div style={{ paddingTop: "12px" }}>
            {heroBannerData2 &&
              heroBannerData2[0].heroTitle.titleArray.map((item) => {
                return item != heroBannerData2[0].heroTitle.titleArray[2] ? (
                  <span
                    style={{
                      fontSize: "16px",
                      color: "#000000",
                      fontWeight: "400",
                      lineHeight: "21.79px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "30px",
                        color: "#000000",
                        fontWeight: "700",
                        lineHeight: "37px",
                      }}
                    >
                      {item}{" "}
                    </span>
                  </span>
                ) : (
                  <span
                    style={{
                      fontSize: "16px",
                      color: "#000000",
                      fontWeight: "400",
                      lineHeight: "21.79px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "30px",
                        color: "#D31424",
                        fontWeight: "700",
                        lineHeight: "37px",
                      }}
                    >
                      {item}{" "}
                    </span>
                  </span>
                );
              })}
          </div>
          <div style={{ paddingTop: "12px" }}>
            <span
              style={{
                fontSize: "16px",
                color: "#000000",
                fontWeight: "400",
                lineHeight: "21.79px",
              }}
            >
              {heroBannerData2 && heroBannerData2[0].heroDescription}
            </span>
          </div>
          <ButtonComponent
            width={142}
            bg="#D31424"
            fill="true"
            marginTop="32px"
          >
            Explore more{" "}
          </ButtonComponent>
        </Item>
        <Item
          style={{ zIndex: 1 }}
          rowStart={1}
          rowEnd={1}
          display="flex "
          colStart={5}
          colEnd={12}
        >
          <img
            width={350}
            src="\images\refreshed\Adidas-Shoes-Free-PNG-Image.png"
          />
        </Item>
      </HeroBanner>

      {offerDetails && (
        <OfferBox
          header={offerDetails[0].offerHeader}
          content={offerDetails[0].offerDescription}
        />
      )}

      <SubHeader color="#D31424">New arrivals</SubHeader>
      <Carousal data={data} />

      <SubHeader color="#D31424">Top selling</SubHeader>
      <Carousal data={data} />

      <ContentBanner
        header="TAKE CARE OF NATURE"
        description="Start recycling today and help us improve our environment"
        buttonName=" Click here"
      />
      <Grid marginTop="16px" marginBottom="16px">
        <ContactUs />
      </Grid>
      <ContactMode />

      <Footer />
    </>
  );
};

export default sample2;
