import React, { Component } from 'react'
// import { ReactSVG } from "react-svg";



export default class ResultsTableItem extends Component {
  constructor(props) {
    super(props);
    this.textitem = this.props.textitem;
    this.percentageitem = this.props.percentageitem;
    this.mylogo = this.props.mylogo;
    this.textcoloritem = this.props.textcoloritem
    this.backgroundcoloritem = this.props.backgroundcoloritem
    console.log(props);
  }

  render() {
    console.log(this.logo);
    return (
      <div className="listitem" style={{backgroundColor: this.backgroundcoloritem}}>
        
        <img src={this.mylogo} style={{width: '20px', padding: '10px'}} alt='reaction'/>
        <p style={{flex: 1, width: '40%', textAlign: 'left', color: this.textcoloritem}}>
          {this.textitem}
        </p>
        <p style={{textAlign: 'right', color: 'black', width: '40px'}}>
          {this.percentageitem}
        </p>
        <p style={{textAlign: 'right', color: 'grey', width: '40px'}}>
          / 100
        </p>
      </div>
    )
    }
  }