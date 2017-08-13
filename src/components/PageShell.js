import React from 'react';
import logo from '../logo.svg';

const PageShell = (Page) => {
  return (props) => (
    <div className="page">
      <img src={logo} alt=""/>
      <Page {...props}></Page>
    </div>
  );
}

export default PageShell;