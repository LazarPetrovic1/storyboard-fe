import { useState } from "react";
import { connect } from "react-redux"
import styled from "styled-components";
import { StoryCard } from "../components";
import { THEME_TEXT, THEMES_BG } from '../constants';
import { useTheme } from "../hooks";

const SearchInput = styled.input.attrs(() => ({
  type: "search",
  placeholder: "Search for stories"
}))`
  background: ${props => `${THEMES_BG[props.theme]}`} !important;
  color: ${props => `${THEME_TEXT[props.theme]}`} !important;
  outline: 0;
  border: 0;
  border-bottom: 3px solid ${props => `${THEME_TEXT[props.theme]}`};
  font-size: 1.25rem;
  padding: 0.25rem;
`;

function Search({ stories }) {
  const [theme] = useTheme();
  const [storiesToShow, setStoriesToShow] = useState(() => stories);
  const searchStories = e => {
    if (e.target.value <= 2) setStoriesToShow(() => stories);
    else setStoriesToShow((prevStories) => 
      prevStories.filter(story => story.title.toLowerCase().includes(e.target.value.toLowerCase()))
    )
  }
  return (
    <section className="container container-sm">
      <div className="d-flex justify-content-between align-items-center">
        <h1>Search</h1>
        <SearchInput theme={theme} onChange={(e) => searchStories(e)} />
      </div>
      <section className="border border-2 rounded py-2 px-3 d-flex gap-2" style={{ flexWrap: "wrap" }}>
        {storiesToShow.length > 0 ? storiesToShow.map((story, index) => (
          <StoryCard story={story} key={index} index={index} />
        )) : <h2>No stories to show</h2>}
      </section>
    </section>
  )
}

const mapStateToProps = (state) => ({
  stories: state.stories.stories
});

export default connect(mapStateToProps, null)(Search)
