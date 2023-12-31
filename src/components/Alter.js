import React from 'react'

export default function Alter(props) {
  return (
    props.alert &&<div>
      <div className="alert alert-success alert-dismissible fade show" role="alert">
             <strong>{props.alert.type}</strong>:{props.alert.message} 
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>
  )
}
