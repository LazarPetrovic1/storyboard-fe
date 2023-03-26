import { useNavigate } from "react-router-dom"
import { CirclingBorderButton } from "./buttons";

function NotFound() {
  const navigate = useNavigate();
  return (
    <article className="centralize">
      <div className="container-xs border border-1 p-5 rounded text-center">
        <i className="fa-solid fa-link-slash fa-10x" />
        <h1 className="mt-4">Oops, page not found</h1>
        <div className="d-grid gap-2 mb-4" style={{ placeItems: "center" }}>
          <CirclingBorderButton
            className="mt-4 btn btn-primary btn-block d-flex justify-content-center align-items-center"
            style={{ gap: '0.5rem' }}
            onClick={() => navigate(-1)}
            type="button"
            width={200}
          >
            <i className="fa-solid fa-arrow-left" />&nbsp;&nbsp;
            <span className="d-inline-block">Go back</span>
          </CirclingBorderButton>
        </div>
      </div>
    </article>
  )
}

export default NotFound