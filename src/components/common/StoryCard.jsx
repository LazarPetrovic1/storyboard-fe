import { useNavigate } from "react-router-dom";

function StoryCard({ story, index }) {
  const navigate = useNavigate();
  const goToStory = (index) => navigate(`/stories/${index}`);
  return (
      <div onClick={() => goToStory(index)} className="card w-100 mt-2 d-inline-flex border-dark" style={{ cursor: "pointer", maxWidth: "13rem", background: "transparent", maxHeight: "202.5px" }}>
        <img src={`https://picsum.photos/240/130`} className="card-img-top" alt={story.title} />
        <div className="card-body">
          <h5 title={story.title} className="card-title">{story.title.substring(0, 10)}{story.title.length > 10 && "..."}</h5>
          <p className="card-text">{story.snippet.substring(0, 20)}{story.snippet.length > 20 && "..."}</p>
        </div>
      </div>
  )
}

export default StoryCard;