// import axios from "axios"
import { store } from '../store';
import { storyTypes } from "./types"

export const createStory = (story) => async dispatch => {
  try {
    // const res = await axios.post(process.env.CREATE_STORY_URL)
    dispatch({ type: storyTypes.CREATE_STORY, payload: story });
  } catch (error) {
    dispatch({ type: storyTypes.STORY_ERROR, payload: error });
  }
}

export const getStory = id => async dispatch => {
  try {
    // const res = await axios.get(`${process.env.GET_STORY_URL}/${id}`)
    const story = store.getState().stories.find(story => story.id === id);
    dispatch({ type: storyTypes.GET_STORY, payload: story });
  } catch (error) {
    dispatch({ type: storyTypes.STORY_ERROR, payload: error });
  }
}

export const getStories = () => async dispatch => {
  try {
    // const res = await axios.get(`${process.env.GET_STORIES_URL`)
    const stories = store.getState().stories;
    dispatch({ type: storyTypes.GET_STORIES, payload: stories });
  } catch (error) {
    dispatch({ type: storyTypes.STORY_ERROR, payload: error });
  }
}

export const updateStory = (id, story) => async dispatch => {
  try {
    // const res = await axios.put(`${process.env.PUT_STORY_URL}/${id}`)
    dispatch({ type: storyTypes.UPDATE_STORY, payload: { id, story } });
  } catch (error) {
    dispatch({ type: storyTypes.STORY_ERROR, payload: error });
  }
}

export const deleteStory = id => async dispatch => {
  try {
    // const res = await axios.delete(`${process.env.DELETE_STORY_URL}/${id}`)
    dispatch({ type: storyTypes.DELETE_STORY, payload: id });
  } catch (error) {
    dispatch({ type: storyTypes.STORY_ERROR, payload: error });
  }
}