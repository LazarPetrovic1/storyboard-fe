import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storyTypes } from "../../../actions/types";
import { ThemedButton } from "../../../styled";

function DBSeed() {
  const storyLen = useSelector(state => state?.stories?.stories?.length);
  const isSeeded = useMemo(() => storyLen >= 50, [storyLen]);
  const dispatch = useDispatch();
  return (
    <div className="d-flex justify-content-between align-items-center my-2 border-bottom border-1 pb-2">
      <span>Seed database</span>
      <span className={isSeeded ? "text-success" : "text-danger"}>
        {isSeeded ? "Seeded" : "Not seeded"}
      </span>
      <ThemedButton disabled={isSeeded} onClick={() => !isSeeded ? dispatch({ type: storyTypes.SEED_STORIES }) : null} padding="0.5rem 1.5rem" className="blue">SEED</ThemedButton>
    </div>
  )
}

export default DBSeed;