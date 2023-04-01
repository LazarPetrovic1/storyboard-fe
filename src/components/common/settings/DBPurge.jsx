import { useDispatch, useSelector } from "react-redux";
import { storyTypes } from "../../../actions/types";
import { ThemedButton } from "../../../styled";

function DBPurge() {
  const storyLen = useSelector(state => state?.stories?.stories?.length);
  const dispatch = useDispatch();
  return (
    <div className="d-flex justify-content-between align-items-center my-2 border-bottom border-1 pb-2">
        <span>Purge database</span>
        <span>{storyLen}</span>
        <ThemedButton onClick={() => dispatch({ type: storyTypes.PURGE_STORIES })} padding="0.5rem 1.5rem" className="red">PURGE</ThemedButton>
      </div>
  )
}

export default DBPurge;