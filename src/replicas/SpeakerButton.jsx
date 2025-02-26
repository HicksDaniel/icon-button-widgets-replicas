import "./SpeakerButton.css";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

export default function SpeakerButton() {
  return (
    <>
      <div className="container">
        <div className="button-container">
          <button className="phone-button">
            <LocalPhoneOutlinedIcon
              style={{
                width: "100px",
                height: "100px",
                transform: "rotate(45deg)",
              }}
            />
          </button>
          <div className="volume-container">
            <button className="vup-button">
              <AddRoundedIcon style={{ width: "100px", height: "100px" }} />
            </button>
            <button className="vdn-button">
              <RemoveRoundedIcon style={{ width: "100px", height: "100px" }} />
            </button>
          </div>
          <div>
            <button className="mic-button">
              <MicNoneOutlinedIcon
                style={{ width: "120px", height: "120px" }}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
