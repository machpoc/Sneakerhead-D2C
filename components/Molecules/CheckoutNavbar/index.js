import React from "react";
import ButtonComponent from "../../Atoms/Button/Button";
import { useRouter } from "next/router";
import Grid, { Item } from "../../Atoms/Grid";
import SearchBar from "../SearchBar";
import { Box, Divider, Flex, Text } from "native-base";
const NavStatus = ({ name, status }) => {
  let icon = null;
  if (status === "done") {
    icon = (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="9" fill="#3F8728" />
        <path
          d="M10.129 16.6636L6 12.5346L6.79263 11.7419L10.129 15.0783L17.2074 8L18 8.79263L10.129 16.6636Z"
          fill="white"
        />
      </svg>
    );
  }

  if (status === "active") {
    icon = (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="8.5" stroke="black" />
        <path
          d="M10.129 16.6636L6 12.5346L6.79263 11.7419L10.129 15.0783L17.2074 8L18 8.79263L10.129 16.6636Z"
          fill="black"
        />
      </svg>
    );
  }
  if (status === "inactive") {
    icon = (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="8.5" stroke="#C1C3C4" />
        <path
          d="M10.129 16.6636L6 12.5346L6.79263 11.7419L10.129 15.0783L17.2074 8L18 8.79263L10.129 16.6636Z"
          fill="#C1C3C4"
        />
      </svg>
    );
  }
  return (
    <li
      style={{
        display: "inline-block",
        padding: "16px",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "12px",
        lineHeight: "16px",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        textTransform: "uppercase",
        color: "#000000",
      }}
      class="about"
    >
      <Flex direction="row" alignContent="center" justifyContent="center">
        {icon}
        <Text
          mt="4px"
          ml="2"
          fontSize="12px"
          lineHeight="16px"
          color="#000000"
          alignContent="center"
          justifyContent="center"
        >
          {name}
        </Text>
      </Flex>
    </li>
  );
};
const CheckoutNavbar = ({ page }) => {
  let statusbar = null;
  if (page === "login") {
    statusbar = (
      <>
        <NavStatus status="active" name="Login" />
        <NavStatus status="inactive" name="Shipping" />
        <NavStatus status="inactive" name="Review & Payment" />
      </>
    );
  }
  if (page === "shipping") {
    statusbar = (
      <>
        <NavStatus status="done" name="Login" />
        <NavStatus status="active" name="Shipping" />
        <NavStatus status="inactive" name="Review & Payment" />
      </>
    );
  }
  if (page === "payment") {
    statusbar = (
      <>
        <NavStatus status="done" name="Login" />
        <NavStatus status="done" name="Shipping" />
        <NavStatus status="active" name="Review & Payment" />
      </>
    );
  }
  if (page === "success") {
    statusbar = (
      <>
        <NavStatus status="done" name="Login" />
        <NavStatus status="done" name="Shipping" />
        <NavStatus status="done" name="Review & Payment" />
      </>
    );
  }
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
            {statusbar}
          </ul>
        </Item>
      </Grid>
      <Divider style={{ border: "1px solid #C1C3C4" }} />
    </>
  );
};

export default CheckoutNavbar;
