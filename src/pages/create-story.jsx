import { useState } from "react"
import { connect } from "react-redux";
import { alerts, stories } from "../actions";
import { RadioButton } from "../components"

function CreateStory({ createStory, setAlert }) {
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
      await createStory(story);
      setStory(() => ({ title: "", snippet: "", fullStory: "", type: "" }));
      setAlert("Story added successfully", "success");
    } else {
      setAlert("All fields are required", "danger");
    }
  }
  return (
    <article className="centralize">
      <form className="border border-1 p-5 container-sm" onSubmit={onSubmit}>
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
        <div className="mb-3 form-floating">
          <textarea
            className="form-control"
            placeholder="Enter the entire story here."
            id="fullStory"
            name="fullStory"
            style={{ minHeight: "150px" }}
            value={story.fullStory}
            onChange={onChange}
          ></textarea>
          <label htmlFor="fullStory" style={{ color: "#111" }}>Full story</label>
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
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-primary">
            <i className="fa-solid fa-paper-plane" />&nbsp;&nbsp;Submit
          </button>
        </div>
      </form>
    </article>
  )
}

export default connect(null, { createStory: stories.createStory, setAlert: alerts.setAlert })(CreateStory)
