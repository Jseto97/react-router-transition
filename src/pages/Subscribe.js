import React, { Component } from 'react';
import SubscribeForm from '../components/SubscribeForm';
class Subscribe extends Component {
  render() {
    return(
      <div>
        <h2>We don't mind keeping you posted!</h2>
        <p>Twice a week, we send in warm regards with rich contents from around the web. 
          These contents are carefully tailored to you! so yo won't worry about spam.</p>
        <SubscribeForm {...this.props} />
      </div>
    )
  }
}

export default Subscribe;