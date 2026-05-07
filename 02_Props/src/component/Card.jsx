import React from 'react'

const Card = ({ image, name, description }) => {

  return (
    <div className="card justify-content-text-center" style={{ width: '18rem' }}>
      <img
        src={image}
        className="card-img-top"
        alt="Card"
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          {description}
        </p>

        <a href="#" className="btn btn-primary">
          Buy Now
        </a>
      </div>
    </div>
  )
}

export default Card