import React, { useEffect , useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
`;
const VideoWrapper = styled.div``;



const VideoFrame = styled.video`
max-height: 720px;
width: 100%;
object-fit: cover;
`;

const Video = ({videUrl}) => {


  return (
    <Container>
      <Content>
        <VideoWrapper>
        <VideoFrame src={videUrl}  controls/>

        </VideoWrapper>
      </Content>
    </Container>

  );
};

export default Video;
