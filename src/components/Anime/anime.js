import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AnimeInfo,
  StyledWrapper,
  StyledImage,
  ImageWrapper,
  Title,
  Year,
  Rating,
} from "./styles";
import { getAnime } from "../../store/thunks/kitsu/anime";
import Genre from "../Genre/genre";
import Card from "../Card/card";
import Loader from "../Loader/loader";

const Anime = ({ category }) => {
  const dispatch = useDispatch();
  const {
    data: { status, anime },
  } = useSelector((state) => state.anime);

  useEffect(
    () => {
      dispatch(getAnime(category));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <>
      {category && status === "FETCHING" ? (
        <Loader loading={status === "FETCHING"} />
      ) : (
        <StyledWrapper>
          {anime?.data.map((anime) => (
            <Card key={anime.id} height="250px" noPadding bgColor="#111">
              <ImageWrapper>
                {anime.attributes.posterImage?.small ? (
                  <StyledImage
                    src={anime.attributes.posterImage?.small}
                    alt={anime.attributes.slug}
                  />
                ) : (
                  <div></div>
                )}
              </ImageWrapper>
              <AnimeInfo>
                <Title>{anime.attributes.canonicalTitle}</Title>
                <span>
                  {anime.attributes.startDate && (
                    <Year>{anime.attributes.startDate.split("-")[0]} </Year>
                  )}
                  .
                  <Genre id={anime.id} />
                </span>
                {anime.attributes.averageRating && (
                  <Rating>Avg Rating: {anime.attributes.averageRating}</Rating>
                )}
              </AnimeInfo>
            </Card>
          ))}
        </StyledWrapper>
      )}
    </>
  );
};

export default Anime;
