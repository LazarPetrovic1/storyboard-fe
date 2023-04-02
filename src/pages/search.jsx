import { useRef, useState } from "react";
import styled from "styled-components";
import { StoryCard } from "../components";
import { ACCIDENT, HOMICIDE, SUICIDE, THEME_TEXT, THEMES_BG } from '../constants';
import { useInfiniteScroll, useSize, useTheme } from "../hooks";
import { ScrollContainer } from "../styled";
import { useEffect } from "react";
import { CirclingBorderLink } from "../components/common/buttons";

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

const Header = styled.div.attrs(() => ({
  className: "d-flex justify-content-between align-items-center"
}))``;

function Search() {
  const scrollContainerRef = useRef(null);
  const headerRef = useRef(null);
  const headerSize = useSize(headerRef);
  const [storyType, setStoryType] = useState("*");
  const [theme] = useTheme();
  const [data, setData] = useState(() => []);
  const [controlledData, setControlledData] = useState(() => []);
  const { page, isLoading, dataToSend } = useInfiniteScroll(scrollContainerRef);
  useEffect(() => {
    setData((prevData) => [...prevData, ...dataToSend]);
    setControlledData((prevData) => [...prevData, ...dataToSend]);
    // eslint-disable-next-line
  }, [page]);
  useEffect(() => {
    if (data.length > 0) {
      if (storyType === "*") setControlledData(() => data);
      else setControlledData(() => data.filter(item => item.type === storyType));
    }
  }, [storyType, data.length]);
  const searchStories = e => {
    if (e.target.value <= 2) setControlledData(() => data);
    else setControlledData((prevStories) => 
      prevStories.filter(story => story.title.toLowerCase().includes(e.target.value.toLowerCase()))
    )
  }
  const handleTypeChange = (val) => {
    if (storyType === val) setStoryType("*");
    else setStoryType(val);
  }
  return isLoading ? <h1>Loading...</h1> :(
    <section className="container container-sm">
      <Header ref={headerRef}>
        <h1>Search</h1>
        <div style={{ display: "flex", gap: "1rem" }}>
          <CirclingBorderLink active={storyType === HOMICIDE} onClick={() => handleTypeChange(HOMICIDE)}>Homicide</CirclingBorderLink>
          <CirclingBorderLink active={storyType === SUICIDE} onClick={() => handleTypeChange(SUICIDE)}>Suicide</CirclingBorderLink>
          <CirclingBorderLink active={storyType === ACCIDENT} onClick={() => handleTypeChange(ACCIDENT)}>Accident</CirclingBorderLink>
        </div>
        <SearchInput theme={theme} onChange={(e) => searchStories(e)} />
      </Header>
      <ScrollContainer ref={scrollContainerRef} hs={headerSize.fullheight} className="border border-2 rounded py-2 px-3 d-flex gap-2">
        {controlledData.length > 0 ? controlledData.map((story, index) => (
          <StoryCard story={story} key={index} index={index} />
        )) : <h2>No stories to show</h2>}
      </ScrollContainer>
    </section>
  )
}

export default Search;
