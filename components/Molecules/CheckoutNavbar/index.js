import React from "react";
import ButtonComponent from "../../Atoms/Button/Button";
import { useRouter } from "next/router";
import Grid, { Item } from "../../Atoms/Grid";
import SearchBar from "../SearchBar";
import { Divider } from "native-base";

const CheckoutNavbar = () => {
  const StyledHeading = {
    color: "#000",
    margin: "60px",
    fontSize: "10px",
    fontWeight: "600",
    fontFamily: "Arial, Helvetica",
  };

  const CenterLogo = {
    width: "55px",
    height: "auto",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "0px",
  };

  const LoginLink = {
    color: "#D31424",
    fontSize: "10px",
    textAlign: "right",
    fontWeight: "600",
    width: "100%",
    fontFamily: "Arial, Helvetica",
    padding: "11px",
  };

  const BookButton = {
    position: "absolute",
    right: "15px",
    background: "#D31424",
    color: "white",
    fontFamily: "Arial, Helvetica",
    fontSize: "8px",
    border: "none",
    borderRadius: "15px",
    fontWeight: "600",
    padding: "9px",
  };
  const NavUl = {
    listStyleType: "none",
    margin: "0",
    padding: "0",
    overflow: "hidden",
  };

  const NavLi = {
    float: "left",
  };

  const NavLink = {
    display: "block",
    textAlign: "center",
    padding: "14px 16px",
    textDecoration: "none",
    color: "#000",
    fontSize: ".7rem",
    fontWeight: "600",
    fontFamily: "Arial, Helvetica",
  };
  const router = useRouter();
  return (
    <>
      <Grid
        style={{ paddingTop: "24px" }}
        rows={1}
        columns={3}
        justifyItems="center"
      >
        <Item>
          <span>
            <select
              style={{
                padding: "6px",
                border: "1px solid #555553",
                borderRadius: "30px",
                marginTop: "14px",
              }}
            >
              <option
                value="volvo"
                style={{
                  fontWeight: "400",
                  fontSize: "12px",
                  lineHeight: "16px",
                }}
              >
                English
              </option>
              <option
                value="saab"
                style={{
                  fontWeight: "400",
                  fontSize: "12px",
                  lineHeight: "16px",
                }}
              >
                French
              </option>
              <option
                value="mercedes"
                style={{
                  fontWeight: "400",
                  fontSize: "12px",
                  lineHeight: "16px",
                }}
              >
                Spanish
              </option>
              <option
                value="audi"
                style={{
                  fontWeight: "400",
                  fontSize: "12px",
                  lineHeight: "16px",
                }}
              >
                Hindi
              </option>
            </select>
          </span>
        </Item>
        <Item>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "800",
              fontSize: "30px",
              lineHeight: "41px",
            }}
          >
            SneakerHead
          </span>
        </Item>
      </Grid>
      <Grid style={{ marginTop: 24 }} justifyContent="center">
        <Item>
          <ul
            style={{
              fontfamily: "Open Sans",
              listStyle: "none",
              display: "block",
              marginTop: "-19px",
            }}
          >
            <li
              style={{
                display: "inline-block",
                padding: "16px",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "16px",
                textTransform: "uppercase",
                color: "#000000",
              }}
              class="home"
            >
              Login
            </li>
            <li
              style={{
                display: "inline-block",
                padding: "16px",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "16px",
                textTransform: "uppercase",
                color: "#000000",
              }}
              class="tutorials"
            >
              Shipping
            </li>
            <li
              style={{
                display: "inline-block",
                padding: "16px",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "16px",
                textTransform: "uppercase",
                color: "#000000",
              }}
              class="about"
            >
              Review & Payment
            </li>
          </ul>
        </Item>
      </Grid>
      <Divider style={{ border: "1px solid #C1C3C4" }} />
    </>
  );
};

export default CheckoutNavbar;
