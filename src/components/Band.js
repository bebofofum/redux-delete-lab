import React, { Component } from 'react';

class Band extends Component {

  handleOnClick = () => {
    console.log('band props', this.props)
    this.props.deleteBand(this.props.id)
  }

  // bandList = () => props.bands.map((band,index) => <li key={index}>{band}</li>)

  render() {
    console.log(this.props.band)
    return(
      <div>
        <li>{this.props.name}</li>
        <button onClick={this.handleOnClick}>Delete</button>
      </div>
    )
  }
};

export default Band;
