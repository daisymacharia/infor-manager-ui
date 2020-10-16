import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../store/thunks/user";
import styled from "styled-components";
import Loader from "../Loader/loader";

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 768px;
  padding: 50px 0;
  margin: 0 auto;
`;

const LoadInitialData = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data) {
      history.push(history.location.pathname + history.location.search);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <Container>
      <Loader loading={data} />

      {/* <h5>Data is Loading...</h5> */}
    </Container>
  );
};

export default LoadInitialData;
