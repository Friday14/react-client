import React from 'react';

export default class Cloud extends React.Component {
  render() {
    return <div style={this.styles()}/>;
  }

  styles() {
    return {
      backgroundImage: `url(/cloud.png)`,
      backgroundRepeat: 'no-repeat',
      width: '148px',
      height: '33px',
      backgroundSise: '40px 10px',
      position: 'absolute',
      top: Math.random() * window.innerHeight * .8,
      left: Math.random() * window.innerWidth * .8
    };
  }
}