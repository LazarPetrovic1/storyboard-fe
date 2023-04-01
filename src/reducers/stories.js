import { storyTypes } from "../actions/types";
import mockStories from '../seedData/mockarooData.json';

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
    case storyTypes.SEED_STORIES:
      return {
        ...state,
        stories: [...mockStories, ...state.stories],
        isLoading: false
      }
    case storyTypes.UPDATE_STORY:
      return {
        ...state,
        stories: state.stories.map(story => parseInt(story.id) !== parseInt(payload.id) ? story : payload.story),
        story: payload.story,
        isLoading: false
      }
    case storyTypes.UPDATE_STORY_FE:
      return {
        ...state,
        stories: state.stories.map((story, i) => i.toString() !== payload.id.toString() ? story : payload.story),
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
    case storyTypes.PURGE_STORIES:
      return {
        ...state,
        stories: [],
        story: null,
        isLoading: false
      }
    case storyTypes.REMOVE_FE_STORY: {
      const newStories = state.stories.filter((_, i) => i.toString() !== payload.toString());
      return {
        ...state,
        stories: newStories,
        isLoading: false
      }
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