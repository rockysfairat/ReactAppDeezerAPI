import "./no_artist_data.css";
import tumbleweed from "../../images/tumbleweed.gif";

export default function Loader() {
  return (
    <div className="noArtistData_container">
      <img className="noArtistData_gif" src={tumbleweed} alt="" />
      <h2>Sorry, but now there's no data about this artist :( </h2>
    </div>
  );
}
