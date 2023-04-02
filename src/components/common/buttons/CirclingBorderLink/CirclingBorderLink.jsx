import { DarkLink } from "../../../../styled";

function CirclingBorderLink({ active, children, ...props }) {
  return (
    <DarkLink { ...props } active={active ? 1 : 0}>
      <span> </span>
      <span> </span>
      <span> </span>
      <span> </span>
      {children}
    </DarkLink>
  )
}

export default CirclingBorderLink;