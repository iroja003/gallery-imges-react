import React from 'react'


const Card = ({imgsrc, title, description}) => {
 
  return (
    <div className="card">
      <img className="card-img-top" src={imgsrc} alt="profile-img"></img>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default Card;
