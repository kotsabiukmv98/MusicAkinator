import React, { Component } from "react";
import "./Score.css";

class Score extends Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    return (
      <div className="score">
        <div className="cell">
          <span>yours</span>
          <span>{this.props.first}</span>
        </div>
        <div className="cell">
          <span>my</span>
          <span>{this.props.second}</span>
        </div>
      </div>
    );
  }
}

export default Score;
