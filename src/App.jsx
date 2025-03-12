import "./App.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MediaCard from "./MediaCard";

function App() {
  return (
    <>
      <div className="phone-container">
        <div className="phone">
          <div className="black-bar"></div>
          <div className="phone-contents">
            <div className="contents-layout">
              <h1>Title</h1>

              <MediaCard></MediaCard>

              <MediaCard />

              <MediaCard></MediaCard>
              <MediaCard></MediaCard>
              <MediaCard></MediaCard>

              <MediaCard></MediaCard>
            </div>
          </div>
        </div>
        <div className="phone-shadow">shadow</div>
      </div>
    </>
  );
}

export default App;
