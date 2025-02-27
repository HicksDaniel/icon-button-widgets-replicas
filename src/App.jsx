import SpeakerButton from "./replicas/SpeakerButton/SpeakerButton";
import MediaPlayer from "./replicas/MediaPlayer/MediaPlayer";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LinearScaleRoundedIcon from "@mui/icons-material/LinearScaleRounded";
import "./App.css";

function App() {
  return (
    <div className="tablet-showcase-container">
      <div className="background-container">
        <div className="side-nav-menu">
          <div className="menu-icon">
            <WidgetsRoundedIcon />
          </div>
          <div className="side-nav-contents">
            <div style={{ backgroundColor: "rgba(200,200,200,0.2" }}>1</div>
            <div style={{ backgroundColor: "rgba(200,200,200,0.2" }}>2</div>
            <div style={{ backgroundColor: "rgba(200,200,200,0.2" }}>3</div>
            <div style={{ backgroundColor: "rgba(200,200,200,0.2" }}>4</div>
            <div style={{ backgroundColor: "rgba(200,200,200,0.2" }}>5</div>
            <div style={{ backgroundColor: "rgba(200,200,200,0.2" }}>6</div>
          </div>
        </div>

        <div className="feature-container">
          <div className="header-bar">
            <div className="search-container">
              <div className="search-bar"> Search Bar</div>
            </div>

            <div className="feature-info">
              <div>March, 20</div>
              <div>action, thriller</div>
            </div>
          </div>
          <div className="movie-showcase">
            <div className="movie-title">JOHN WICK</div>
            <div className="movie-subtitle">Chapter3-Parabellum(2019)</div>
            <div className="movie-buttons">
              <button>Watch Now</button>
              <button>Trailer</button>
            </div>
          </div>
          <div className="movie-choices-container">
            <div className="movie-choices">
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
