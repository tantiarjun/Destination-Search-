import './index.css'

const Destination = props => {
  const {destinationDetails} = props

  const {name, imgUrl} = destinationDetails

  return (
    <li className="destinationDetails">
      <div className="imageContainer">
        <img src={imgUrl} alt={name} className="image" />
        <p className="destinationName">{name}</p>
      </div>
    </li>
  )
}

export default Destination
