function RadioButton({ name, id, onChange, storyType }) {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name={name}
        id={id}
        onChange={onChange}
        checked={storyType === id}
      />
      <label
        style={{ textTransform: 'capitalize' }}
        className="form-check-label"
        htmlFor={id}
      >{id}</label>
    </div>
  )
}

export default RadioButton