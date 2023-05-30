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
import { signOut, useSession } from "next-auth/react";
import { withTheme } from "styled-components";

//  const { data: data } = useSWR(
//   `/api/getProducts?limit=${pageIndex.pageIndex}`
// );
const sample2 = ({}) => {
  const { data: accessToken } = useSWR("/api/getAuthToken");
  accessToken && localStorage.setItem("accessToken", accessToken.access_token);
  // accessToken && console.log("accessToken &&",accessToken.access_token)
  // accessToken && localStorage.setItem("accessToken", accessToken.access_token);
  // localStorage.setItem("refreshToken", refreshToken);

  const { data: heroBannerData } = useSWR("/api/getHeroBanner");
  const { data: heroBannerData2 } = useSWR("/api/getHeroBanner2");
  const { data: natureBanner } = useSWR("/api/natureBanner");
  const { data: offerDetails } = useSWR("/api/getOffer");
  const { data: marketingTile } = useSWR("/api/getMarketingTile");
  const { data: marketingBanner } = useSWR("/api/getMarketingBanner");

  productList && console.log("productList2", productList);

  const token =
    typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

  const { data: productData } = useSWR(`/api/getProducts?token=${token}`);

  const { data: productList } = useSWR(
    `/api/getProducts?token=${token}&limit=20`
  );

  const { data: session } = useSession();
  console.log("usersession", session);

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
                    fontWeight: "700",
                    lineHeight: "44.18px",
                    color: `var(--sneakerhead-charcoal-black)`,
                  }}
                >
                  {heroBannerData[0].heroTitle.firstPart}{" "}
                </span>
                <span
                  style={{
                    fontSize: "42px",
                    color: `var(--sneakerhead-red)`,
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
                fontSize: "var(--fs-sneakerhead-600)",
                color: `var(--sneakerhead-charcoal-black)`,
                fontWeight: "400",
                lineHeight: "21.79px",
              }}
            >
              {heroBannerData && heroBannerData[0].heroDescription}
            </span>
          </div>
          {/* '%' values needs to convert to 'rem' */}
          <ButtonComponent
            marginBottom="25%"
            width={142}
            marginTop="32px"
            bg={`var(--sneakerhead-red)`}
            fill="true"
            hoverBg={"var(--sneakerhead-white)"}
            hoverTextColor={`var(--sneakerhead-red)`}
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
            src={heroBannerData && heroBannerData[0].heroImage}
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
              height="100%"
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

      <HeroBanner
        rows={1}
        columns={12}
        gap={10}
        bgColor={`var(--sneakerhead-thistle-purple)`}
      >
        <div style={{ position: "absolute", height: "100%", width: "100%" }}>
          <svg
            viewBox="0 0 1024 366"
            preserveAspectRatio="none"
            style={{ height: "100%", width: "100%" }}
          >
            <path
              d="M-34 386C-25.9968 338.092 4.45422 293.1 49.0572 263.272C93.6601 233.361 152.025 218.864 208.437 223.613C249.038 227.029 287.688 239.86 327.118 248.942C366.548 258.107 409.199 263.522 447.848 252.108C483.18 241.61 512.069 217.947 548.278 209.949C604.788 197.368 666.862 225.363 721.908 208.782C766.999 195.202 793.448 155.959 812.187 118.465C830.926 80.889 847.616 40.0631 884.801 14.4844C915.35 -6.59506 958.001 -14.177 995.967 -5.42858C1033.93 3.40314 1066.14 28.3986 1080 59.8095V386H-34Z"
              fill={`var(--sneakerhead-floral-purple)`}
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
                      fontSize: "var(--fs-sneakerhead-400)",
                      color: `var(--sneakerhead-charcoal-black)`,
                      fontWeight: "400",
                      lineHeight: "21.79px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "30px",
                        color: `var(--sneakerhead-charcoal-black)`,
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
                      fontSize: "var(--fs-sneakerhead-400)",
                      color: `var(--sneakerhead-charcoal-black)`,
                      fontWeight: "400",
                      lineHeight: "21.79px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "30px",
                        color: `var(--sneakerhead-red)`,
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
                color: `var(--sneakerhead-charcoal-black)`,
                fontWeight: "400",
                lineHeight: "21.79px",
              }}
            >
              {heroBannerData2 && heroBannerData2[0].heroDescription}
            </span>
          </div>
          {console.log("HERROOO IMAGE DATA @", heroBannerData2)}
          <ButtonComponent
            width={142}
            bg={`var(--sneakerhead-red)`}
            fill="true"
            hoverBg={"var(--sneakerhead-white)"}
            hoverTextColor={`var(--sneakerhead-red)`}
            marginTop="32px"
          >
            Explore more
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
            src={heroBannerData2 && heroBannerData2[0].HeroImage}
          />
        </Item>
      </HeroBanner>

      {offerDetails && (
        <OfferBox
          header={offerDetails[0].offerHeader}
          content={offerDetails[0].offerDescription}
        />
      )}

      <SubHeader color={`var(--sneakerhead-red)`}>New arrivals</SubHeader>
      {productList && <Carousal data={productList} />}

      <SubHeader color={`var(--sneakerhead-red)`}>Top selling</SubHeader>
      {productList && <Carousal data={productList} />}

      <ContentBanner
        header={natureBanner && natureBanner[0].heroTitle}
        description={natureBanner && natureBanner[0].heroDescription}
        buttonName=" Click here"
        image={natureBanner && natureBanner[0].HeroImage}
      />
      <Grid
        marginTop="--size-sneakerhead-400"
        marginBottom="--size-sneakerhead-400"
      >
        <ContactUs />
      </Grid>
      <ContactMode />

      <Footer />
    </>
  );
};

export default withTheme(sample2);
