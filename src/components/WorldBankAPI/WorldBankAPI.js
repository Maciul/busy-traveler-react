
import React, {Component} from 'react';
import './WorldBankAPI.css';
import axios from 'axios';
import './WorldBankAPI.css';

// Make this one with React Hoooooks

class WorldBankAPI extends Component {

  state = {
    worldBankData: null
  }

  componentDidMount( props ) {
  	let wbData = {};
    console.log( "WorldBank: Did Mount", this.props )
      axios.get( `https://api.worldbank.org/v2/country/${this.props.departureCode};${this.props.arrivalCode}/indicator/PA.NUS.PPPC.RF?format=json&date=2017` )
        .then( res => {
          res.data[1].forEach( ( data ) => {
          	wbData[data.countryiso3code ] = data.value;
          	
          } )
          this.setState( { worldBankData: wbData } )
       } )
    }


  shouldComponentUpdate() {
    console.log( 'WorldBank: ShouldUpdate' );
    return true
  }

  getSnapshotBeforeUpdate( prevProps, prevState, snapshot ) {
	console.log( 'WorldBank: getSnapshotBeforeUpdate', prevProps, prevState, snapshot );
    return null
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log( "WorldBank: DidUpdate", prevProps, prevState, snapshot );
  }

  render() {
  	let ppp;
  	if ( this.state.worldBankData ){
  		let difference = ( ( this.state.worldBankData[ this.props.arrivalCode ] / this.state.worldBankData[ this.props.departureCode ] ) - 1 ).toFixed(2); 
  		ppp = <div> {this.props.departureCode} : { this.state.worldBankData[ this.props.departureCode ] } 
  		<div> {this.props.arrivalCode }: { this.state.worldBankData[ this.props.arrivalCode ] } </div>
  		<div> Diff: { difference }</div></div>
  	}
    return (

      <section> 
          <p> Purchasing Power </p>
        <div className="worldBankDiv">
        	<p> { this.props.departureCode } </p>
        	<p> {ppp} </p>	
        </div>
      </section>
    )
  }
}

export default WorldBankAPI