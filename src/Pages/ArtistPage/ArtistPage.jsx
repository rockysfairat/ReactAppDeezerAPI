import { useEffect, useState } from "react";
import { useParams } from "react-router";

import "./artistpage.css";

import Artist from "../../Components/Artist/Artist";
import Footer from "../../Components/Footer/Footer";
import Loader from "../../Components/Loader/Loader";

export default function ArtistPage() {
  const { id } = useParams();
  return (
    <div className="PageContainer">
      <h2 className="artistPage_title">Genre: {id} </h2>
      <div>
        <ArtistGrid genre={id} />
      </div>
      <Footer />
    </div>
  );
}

const ArtistGrid = ({ id }) => {
  const baseUrl = `/album/${id}`;

  const [artistList, setArtistList] = useState([]);

  const getArtists = async (url) => {
    const response = await fetch(url);
    const artists = await response.json();

    if (artists === 0) {
      return "The JSON file is empty!";
    }

    setArtistList(artists);
  };

  useEffect(() => {
    getArtists(baseUrl);
    return () => {};
  }, []);

  if (artistList.length === 0) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <div>
      <div className="artistPicker">
        {artistList.data.map((item) => {
          let { id, name, picture_medium } = item.artist;
          return (
            <Artist id={id} key={id} imgSrc={picture_medium} name={name} />
          );
        })}
      </div>

      <div class="prevAndNext_buttons">
        {!!artistList.prev && (
          <button onClick={() => getArtists(artistList.prev)}>PREV</button>
        )}

        {!!artistList.next && (
          <button onClick={() => getArtists(artistList.next)}>NEXT</button>
        )}
      </div>
    </div>
  );
};
