import { storyTypes } from "../actions/types";

const initialState = {
  stories: [],
  story: null,
  error: null,
  isLoading: false
}

const storiesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case storyTypes.GET_STORIES:
      return {
        ...state,
        stories: payload,
        isLoading: false
      }
    case storyTypes.GET_STORY:
      return {
        ...state,
        story: payload,
        isLoading: false
      }
    case storyTypes.CREATE_STORY:
      return {
        ...state,
        stories: [payload, ...state.stories],
        story: payload,
        isLoading: false
      }
    case storyTypes.UPDATE_STORY:
      return {
        ...state,
        stories: state.stories.map(story => story.id === payload.id ? story : payload.story),
        story: payload.story,
        isLoading: false
      }
    case storyTypes.DELETE_STORY:
      return {
        ...state,
        story: null,
        isLoading: false,
        stories: state.stories.filter(story => story.id !== payload)
      }
    case storyTypes.STORY_ERROR:
      return {
        ...state,
        error: payload
      }
    default: return state;
  }
}

export default storiesReducer