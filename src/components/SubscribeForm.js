import React from 'react';

const SubscribeForm = ({thanks, go}) => {
  if(!thanks) {
    return (
      <div className="form">
        <input type="text" placeholder="Enter email address" />
        <button>Subscribe Now</button>
      </div>
    )
  } else {
    return (
      <div className="form">
        <button>Try Again</button>
      </div>
    )
  }
}
   


export default SubscribeForm;