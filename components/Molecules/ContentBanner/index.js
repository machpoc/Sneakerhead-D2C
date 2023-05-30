import Link from "next/link";
import router, { useRouter } from "next/router";
import React from "react";
import { withTheme } from "styled-components";
import ButtonComponent from "../../Atoms/Button/Button";
import Grid, { Item } from "../../Atoms/Grid";
import {
  StyledHeader,
  StyledContent,
  StyledButton,
} from "./ContentBanner.styled";
const ContentBanner = ({ header, description, buttonName, image }) => {
  const router = useRouter();

  return (
    <>
      <Grid marginTop="25px">
        <Item>
          <Grid
            column={3}
            rows={1}
            justifyContent="center"
            aligncontent="center"
            backgroundImage={image}
          >
            <Item display="flex">
              <StyledHeader>{header}</StyledHeader>
            </Item>
            <Item display="flex">
              <StyledContent>{description}</StyledContent>
            </Item>
            <Item display="flex">
              <Link href={"/content/save-nature"} as={`/content/save-nature`}>
                <a>
                  <StyledButton>
                    {buttonName && (
                      <ButtonComponent
                        fill="true"
                        bg={`var(--sneakerhead-red)`}
                        hoverTextColor={`var(--sneakerhead-red)`}
                        hoverBg={"var(--sneakerhead-white)"}
                      >
                        {buttonName}
                      </ButtonComponent>
                    )}
                  </StyledButton>
                </a>
              </Link>
            </Item>
          </Grid>
        </Item>
      </Grid>
    </>
  );
};

export default withTheme(ContentBanner);
