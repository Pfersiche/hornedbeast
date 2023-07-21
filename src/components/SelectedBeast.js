import React from "react";

export default function SelectedBeast({modalData}) {
  return (
  <div className='modal' onClick={() => handleModal({})}>
    <h2>{modalData.title} </h2>
    <img src={modalData.image_url} />
    <p> </p></p></img>
  </div>
  )
}