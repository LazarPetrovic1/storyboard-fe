import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { THEMES_BG, THEME_TEXT } from "../constants";
import { useTheme } from "../hooks";
import { BoxShadowButton } from "../styled";

const StoryContainer = styled.section.attrs(() => ({
  className: "container container-sm border border-2 rounded pt-2 pb-3 ps-4"
}))`
  overflow: auto;
  max-height: calc(100vh - 56px);
`;

const FullStoryWrapper = styled.div`
  pointer-events: all;
  background: ${props => props.isFullStoryShown ? `${THEMES_BG[props.theme]}` : "#000"};
  color: ${props => props.isFullStoryShown ? `${THEME_TEXT[props.theme]}` : "transparent"};
`;

function StoryPage() {
  const [theme] = useTheme();
  const { id } = useParams();
  const navigate = useNavigate();
  const story = useSelector(state => state.stories.stories[parseInt(id)]);
  const [isFullStoryShown, setIsFullStoryShown] = useState(false);
  return (
    <StoryContainer>
      <h1>{story.title}</h1>
      <hr />
      <p className="lead">{story.snippet}</p>
      <hr />
      <div className="my-3 d-flex justify-content-center">
        <img alt={story.title} src="https://picsum.photos/800/450" />
      </div>
      <div className="d-flex justify-content-between">
        <BoxShadowButton className="pulse" onClick={() => navigate(-1)}>
          <i className="fa-solid fa-arrow-left" />&nbsp;&nbsp;Go back
        </BoxShadowButton>
        <BoxShadowButton
          onClick={() => setIsFullStoryShown(() => !isFullStoryShown)}
          className="raise"
        >{isFullStoryShown ? "Hide" : "Reveal"} full story</BoxShadowButton>
      </div>
      <hr />
      <FullStoryWrapper
        theme={theme}
        isFullStoryShown={isFullStoryShown}
      >{story.fullStory}</FullStoryWrapper>
    </StoryContainer>
  )
}

export default StoryPage;