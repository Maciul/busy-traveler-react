import React, {Component} from 'react';
// import classes from './InputForm.css';
import axios from 'axios';
import './RestCountriesAPI.css';
import StatDisplay from '../StatDisplay/StatDisplay'

class RestCountriesAPI extends Component {

  state = {
    country: {}
  }

  componentDidMount( props ) {
    let countryData;
    console.log( "REST: Did Mount", this.props )
      axios.get( `https://restcountries.eu/rest/v2/alpha?codes=${this.props.arrival};${this.props.departure}` )
        .then( res => {
          console.log( "response", res )
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
        return <li key={index}>{currency.name}
                <ul>
                  <li> Code: {currency.code} </li> 
                  <li> Symbol: {currency.symbol} </li> 
                </ul>  
              </li>
      } )
    }
    return (

      <section> 
      <StatDisplay
      name={'population'}
      stat={this.state.country.population}
      />
          <p> Info: </p>
        <div className="holder">
          <div className="country">
            <img src={this.state.country.flag } alt=""/>
          </div> 
          <div className="info">
            <p> Capital: { this.state.country.capital }</p>
            <p> Currencies: </p>
            <ul>
              { currencies }
            </ul>
            <p> Native Name: { this.state.country.nativeName }</p>
            <p> Region: { this.state.country.region }</p>
            <p> Sub-Region: { this.state.country.subregion }</p>
            <p> Population: { this.state.country.population && (this.state.country.population).toLocaleString('en') }</p>
            </div>
        </div>
      </section>
    )
  }
}

export default RestCountriesAPI