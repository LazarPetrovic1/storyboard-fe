import { Link } from "react-router-dom";
import { THEMES_BG, THEME_TEXT } from "../../constants";
import { useTheme } from "../../hooks";
import { BoxShadowLink } from "../../styled";

function StoryCard({ story, index }) {
  const [theme] = useTheme();
  
  return (
    <Link
      style={{
        background: THEMES_BG[theme],
        color: THEME_TEXT[theme],
        textDecoration: 'none'
      }}
      to={`/stories/${index}`}
    >
      <div className="card w-100 mt-2 d-inline-flex border-dark" style={{ maxWidth: "13rem", background: "transparent" }}>
        <img src={`https://picsum.photos/240/130`} className="card-img-top" alt={story.title} />
        <div className="card-body">
          <h5 title={story.title} className="card-title">{story.title.substring(0, 10)}{story.title.length > 10 && "..."}</h5>
          <p className="card-text">{story.snippet.substring(0, 20)}{story.snippet.length > 20 && "..."}</p>
          <div className="d-flex justify-content-end">
            <BoxShadowLink padding="0.25rem 1.25rem" className="fill" to={`/stories/${index}`}>Go</BoxShadowLink>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default StoryCard;