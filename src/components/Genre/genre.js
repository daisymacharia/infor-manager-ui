import React, { useEffect, useState } from "react";
import axios from "axios";
import { StyledGenre, GenreWrapper } from "./styles";

const Genre = ({ id }) => {
  const [genres, setGenres] = useState([]);

  useEffect(
    () => {
      axios
        .get(`https://kitsu.io/api/edge/anime/${id}/genres`)
        .then((response) => setGenres(response.data.data))
        .catch((e) => console.log(e));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <GenreWrapper>
      {genres.length > 0 &&
        genres
          .slice(0, 3)
          .map((genre) => (
            <StyledGenre key={genre.id}>{genre.attributes.name}</StyledGenre>
          ))}
    </GenreWrapper>
  );
};

export default Genre;
