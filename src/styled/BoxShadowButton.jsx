import styled from 'styled-components';

export const BoxShadowButton = styled.button`
  --color: ${
    props => props.className === 'fill' ? "#a972cb" :
    props.className === 'pulse' ? "#ef6eae" :
    props.className === 'close' ? "#ff7f82" :
    props.className === 'raise' ? "#ffa260" :
    props.className === 'up' ? "#e4cb58" :
    props.className === 'slide' ? "#8fc866" :
    props.className === 'offset' ? "#19bc8b" : "transparent"
  };
  --hover: ${
    props => props.className === 'fill' ? "#cb72aa" :
    props.className === 'pulse' ? "#ef6eae" :
    props.className === 'close' ? "#ffdc7f" :
    props.className === 'raise' ? "#e5ff60" :
    props.className === 'up' ? "#94e458" :
    props.className === 'slide' ? "#66c887" :
    props.className === 'offset' ? "#1973bc" : "transparent"
  };
  &.fill {
    &:hover, &:focus { box-shadow: inset 0 0 0 2em var(--hover); }
  }
  &.pulse {
    &:hover, &:focus { animation: pulse 1s; box-shadow: 0 0 0 2em transparent; }
  }
  &.close {
    &:hover, &:focus { box-shadow: inset -3.5em 0 0 0 var(--hover), inset 3.5em 0 0 0 var(--hover); }
  }
  &.raise {
    &:hover, &:focus { box-shadow: 0 0.5em 0.5em -0.4em var(--hover); transform: translateY(-0.25em); }
  }
  &.up {
    &:hover, &:focus { box-shadow: inset 0 -3.25em 0 0 var(--hover); }
  }
  &.slide {
    &:hover, &:focus { box-shadow: inset 6.5em 0 0 0 var(--hover); }
  }
  &.offset {
    box-shadow: 0.3em 0.3em 0 0 var(--color), inset 0.3em 0.3em 0 0 var(--color);
    &:hover, &:focus { box-shadow: 0 0 0 0 var(--hover), inset 6em 3.5em 0 0 var(--hover); }
  }
  background: none;
  border: 2px solid;
  font: inherit;
  line-height: 1;
  margin: 0.5em;
  padding: 1em 2em;
  color: var(--color); transition: 0.25s;
  &:hover,
  &:focus { border-color: var(--hover); color: #fff; }
`;