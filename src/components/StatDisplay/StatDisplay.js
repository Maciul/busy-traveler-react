
import React, {Component} from 'react';
import './StatDisplay.css'

class StatDisplay extends Component {
  render() {
  	const { name, stat } = this.props;
    const statnumber = stat && typeof stat === 'number' ? stat.toLocaleString() : stat;
    
    return (
      <React.Fragment>
          <h3> {name} </h3>
          <span> {stat || statnumber} </span>
      </React.Fragment>
    )
  }
}

export default StatDisplay