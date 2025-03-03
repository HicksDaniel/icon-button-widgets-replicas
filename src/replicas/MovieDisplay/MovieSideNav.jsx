import { useState } from "react";

import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LibraryMusicRoundedIcon from "@mui/icons-material/LibraryMusicRounded";
import LibraryAddRoundedIcon from "@mui/icons-material/LibraryAddRounded";
import SlideshowRoundedIcon from "@mui/icons-material/SlideshowRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import "./MovieSideNav.css";

import { CustomButton } from "./Styled";

export default function MovieSideNav() {
  const [selected, setSelected] = useState(false);

  const ButtonMenuList = [
    { icon: <EmojiEventsRoundedIcon /> },
    { icon: <HomeRoundedIcon /> },
    { icon: <LibraryAddRoundedIcon /> },
    { icon: <LibraryMusicRoundedIcon /> },
    { icon: <SlideshowRoundedIcon /> },
    { icon: <StarRoundedIcon /> },
    { icon: <WidgetsRoundedIcon /> },
  ];

  const handleClick = (i) => {
    setSelected(i);
  };

  const renderedNavContents = ButtonMenuList.map((btn, index) => {
    return (
      <CustomButton
        key={btn + index}
        onClick={() => handleClick(index)}
        $isSelected={selected === index && true}
      >
        {btn.icon}
      </CustomButton>
    );
  });

  return (
    <div className="side-nav-menu">
      <div className="menu-icon">
        <WidgetsRoundedIcon />
      </div>
      <div className="side-nav-contents">{renderedNavContents}</div>
    </div>
  );
}
