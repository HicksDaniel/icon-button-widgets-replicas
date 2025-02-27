import { useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FastForwardIcon from "@mui/icons-material/FastForward";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { CustomSlider } from "./styled";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";

export default function MediaPlayer() {
  const [value, setValue] = useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="container">
      <div className="button-container">
        <div className="side-button">
          <FastForwardIcon
            style={{ fontSize: "28px", transform: "scaleX(-1)" }}
          />
        </div>
        <div className="middle-button">
          <PlayArrowIcon style={{ fontSize: "35px" }} />
        </div>
        <div className="side-button">
          {" "}
          <FastForwardIcon style={{ fontSize: "28px" }} />
        </div>
      </div>
      <div className="input-container">
        <Box sx={{ width: 200 }}>
          <Stack
            spacing={2}
            direction="row"
            sx={{ alignItems: "center", mb: 1 }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <VolumeDown
                style={{
                  position: "absolute",
                  fontSize: "22px",
                  transform: "translate(0px,.25px)",
                  color: "rgb(80, 80, 80)",
                }}
              />
              <VolumeDown
                style={{
                  display: "absolute",
                  fontSize: "24px",
                  color: "rgb(40, 40, 40)",
                }}
              />
            </div>

            <CustomSlider
              slotProps={{ rail: { className: "my-rail" } }}
              aria-label="Volume"
              value={value}
              onChange={handleChange}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <VolumeUp
                style={{
                  position: "absolute",
                  fontSize: "22px",
                  transform: "translate(0px,.25px)",
                  color: "rgb(80, 80, 80)",
                }}
              />
              <VolumeUp
                style={{
                  display: "absolute",
                  fontSize: "24px",
                  color: "rgb(40, 40, 40)",
                }}
              />
            </div>
          </Stack>
        </Box>
      </div>
    </div>
  );
}
