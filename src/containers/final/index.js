import React from 'react';

export default class Final extends React.Component {
  render() {
    return <div>
      <div className="bg-man" style={{ width: `${window.innerWidth}px`, height: `${window.innerHeight}px` }}/>

      <div className="row">
        <div className="col-md-12 final-title">
          <h1>Путешествие близко</h1>
        </div>
      </div>
    </div>;
  }
}