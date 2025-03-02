import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SlideshowRoundedIcon from "@mui/icons-material/SlideshowRounded";
import LibraryMusicRoundedIcon from "@mui/icons-material/LibraryMusicRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import LibraryAddRoundedIcon from "@mui/icons-material/LibraryAddRounded";
import "./MovieSideNav.css";

export default function MovieSideNav() {
  return (
    <div className="side-nav-menu">
      <div className="menu-icon">
        <WidgetsRoundedIcon />
      </div>
      <div className="side-nav-contents">
        <div
          style={{
            backgroundColor: "rgba(200,200,200,0.2",
          }}
        >
          <HomeRoundedIcon style={{ fontSize: "20px" }} />
        </div>
        <div style={{ backgroundColor: "rgba(200,200,200,0.2" }}>
          <SlideshowRoundedIcon style={{ fontSize: "20px" }} />
        </div>
        <div style={{ backgroundColor: "rgba(200,200,200,0.2" }}>
          <LibraryMusicRoundedIcon style={{ fontSize: "20px" }} />
        </div>
        <div style={{ backgroundColor: "rgba(200,200,200,0.2" }}>
          <EmojiEventsRoundedIcon style={{ fontSize: "20px" }} />
        </div>
        <div style={{ backgroundColor: "rgba(200,200,200,0.2" }}>
          <StarRoundedIcon style={{ fontSize: "20px" }} />
        </div>
        <div style={{ backgroundColor: "rgba(200,200,200,0.2" }}>
          <LibraryAddRoundedIcon style={{ fontSize: "20px" }} />
        </div>
      </div>
    </div>
  );
}
