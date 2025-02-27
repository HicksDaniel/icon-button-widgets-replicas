import styled from "styled-components";
import { Slider } from "@mui/material";

export const CustomSlider = styled(Slider)`
  & .MuiSlider-thumb {
    height: 14px;
    width: 14px;
    border-radius: none;
    background-color: transparent;
    transform: translate(-10px, -px);

    background-image: url("src/assets/reference images/record.png");
    background-size: cover;
  }
  & input {
    width: 20% !important;
  }

  .MuiSlider-track {
    height: 14px;
    border: none;

    background-image: linear-gradient(
      to top,
      rgb(146, 149, 153),
      rgb(228, 230, 231)
    );
  }
  & .MuiSlider-rail {
    height: 16px;

    opacity: 100%;
    width: 110%;

    background-image: linear-gradient(
      rgb(20, 20, 20) 1%,
      rgb(70, 70, 70) 5%,
      rgb(100, 100, 100) 45%,
      rgb(120, 120, 120) 100%
    );
  }
`;

// #e4e6e7, #b9bbbd, #929599
