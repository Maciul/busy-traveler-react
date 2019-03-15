import React, {Component} from 'react';
// import classes from './InputForm.css';
import axios from 'axios';
import './RestCountriesAPI.css';

class RestCountriesAPI extends Component {

  state = {
    country: {}
  }

  componentDidMount( props ) {
    let countryData;
    console.log( "REST: Did Mount", this.props )
      axios.get( `https://restcountries.eu/rest/v2/name/${this.props.arrival}` )
        .then( res => {
          countryData = res.data[0];
          this.setState( { country: countryData } )
          } )
    }


  shouldComponentUpdate() {
    console.log( 'REST: ShouldUpdate', this.props );
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log( 'REST: getSnapshotBeforeUpdate', prevProps, prevState );
    return null
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log( "REST: DidUpdate", prevProps, prevState, snapshot );
  }

  render() {
    console.log( this.state.country );
    let currencies = []; 
    if ( this.state.country.currencies ) {
      currencies = this.state.country.currencies.map( (currency, index ) => {
        return <li key={index}> <b>Name:</b> {currency.name}
                <ul>
                  <li> Code: {currency.code} </li> 
                  <li> Symbol: {currency.symbol} </li> 
                </ul>  
              </li>
      } )
    }
    return (

      <div> 
          <h3> Info about { this.props.arrival } </h3>
        <div className="gallery">
          <div className="country">
            <img src={this.state.country.flag } alt=""/>
            <h4> Capital: { this.state.country.capital }</h4>
            <h4> Currencies: </h4>
            <ul>
              { currencies }
            </ul>
            <h4> Native Name: { this.state.country.nativeName }</h4>
            <h4> Region: { this.state.country.region }</h4>
            <h4> Sub-Region: { this.state.country.subregion }</h4>
            <h4> Population: { this.state.country.population && (this.state.country.population).toLocaleString('en') }</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default RestCountriesAPI