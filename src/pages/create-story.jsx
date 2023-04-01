import { useCallback, useState } from "react"
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { alerts, stories } from "../actions";
import { MarkdownEditor, RadioButton } from "../components"
import { BoxShadowButton } from "../styled";

function CreateStory({ createStory, setAlert }) {
  const navigate = useNavigate();
  const [story, setStory] = useState(() => ({
    title: "",
    snippet: "",
    fullStory: "",
    type: ""
  }));
  const onChange = e => setStory(() => ({ ...story, [e.target.name]: e.target.value }));
  const onRadioChange = val => setStory(() => ({ ...story, type: val }));
  const onSubmit = async e => {
    e.preventDefault();
    if (story.title && story.snippet && story.fullStory && story.type) {
      await createStory({ ...story, userId: 1 });
      setStory(() => ({ title: "", snippet: "", fullStory: "", type: "" }));
      setAlert("Story added successfully", "success");
      navigate('/stories');
    } else {
      setAlert("All fields are required", "danger");
    }
  }
  // eslint-disable-next-line
  const onFullStoryChange = useCallback((e) => setStory((prevStory) => ({ ...prevStory, fullStory: e })), []);
  return (
    <article className="centralize">
      <form className="border border-1 px-5 py-4 container-sm" onSubmit={onSubmit}>
        <h2 className="display-4 text-center">Create a story</h2>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            className="form-control"
            id="title"
            name="title"
            value={story.title}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="snippet" className="form-label">Snippet</label>
          <input
            className="form-control"
            id="snippet"
            name="snippet"
            aria-describedby="snippetHelper"
            value={story.snippet}
            onChange={onChange}
          />
          <small id="snippetHelper">This part is read to the players by the narrator.</small>
        </div>
        <div className="mb-3">
          <label htmlFor="fullStory">Full story</label>
          <MarkdownEditor
            placeholder="Enter the entire story here."
            value={story.fullStory}
            onChange={onFullStoryChange}
          />
          <small id="fullStoryHelper">This part is only known to the narrator.</small>
        </div>
        <div >
          <label htmlFor="type" className="mb-2">Type of case</label>
          <div className="mb-3 d-flex justify-content-between">
            <RadioButton name="type" id="suicide" onChange={() => onRadioChange("suicide")} />
            <RadioButton name="type" id="accident" onChange={() => onRadioChange("accident")} />
            <RadioButton name="type" id="homicide" onChange={() => onRadioChange("homicide")} />
          </div>
        </div>
        <div className="d-flex justify-content-end mb-4">
          <BoxShadowButton className="offset">
            <i className="fa-solid fa-paper-plane" />&nbsp;&nbsp;Submit
          </BoxShadowButton>
        </div>
      </form>
    </article>
  )
}

export default connect(null, { createStory: stories.createStory, setAlert: alerts.setAlert })(CreateStory)
