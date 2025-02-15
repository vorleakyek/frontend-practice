const Card = (props) => {
  return (
    <div className={props.className}>
      <div>
        <img src={props.src} />
      </div>
      <p className="fw-md fs-16">{props.tileName}</p>
      <p className="bold fs-30 mt-0">{props.value} {props.unit}</p>
      <div className="flex-start">
        {props.levels.toLowerCase() === "Lower than Average".toLowerCase() && <img className="mr-1" src="/assets/ArrowDown.svg" alt="down arrow icon" />}
        {props.levels.toLowerCase() === "Higher than Average".toLowerCase() && <img className="mr-1" src="/assets/ArrowUp.svg" alt="uparrow icon" />}
        <p className="m-0">{props.levels}</p>
      </div>
    </div>
  )
}


export default Card;
