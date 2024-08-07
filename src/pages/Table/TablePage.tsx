import React from "react";
import { ContentWrapper, StyledLink } from "./TablePage.styles";
import { Heroes } from "@/components";

export const TablePage: React.FC = () => {
  return (
    <ContentWrapper>
      <Heroes />
      <StyledLink to="/">Back to the battle</StyledLink>
    </ContentWrapper>
  );
};
