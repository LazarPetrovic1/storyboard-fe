import { useNavigate } from "react-router-dom"

function NotFound() {
  const navigate = useNavigate();
  return (
    <article className="centralize">
      <div className="container-xs border border-1 p-5 rounded text-center">
        <i className="fa-solid fa-link-slash fa-10x" />
        <h1 className="mt-4">Oops, page not found</h1>
        <div class="d-grid gap-2 mt-4">
          <button
            className="btn btn-primary btn-block d-flex justify-content-center align-items-center"
            style={{ gap: '0.5rem' }}
            onClick={() => navigate(-1)}
            type="button"
          >
            <i className="fa-solid fa-arrow-left" />
            Go back
          </button>
        </div>
      </div>
    </article>
  )
}

export default NotFound