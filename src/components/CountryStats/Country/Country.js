import React, {Component} from 'react';
// import classes from './InputForm.css';
import axios from 'axios';
import './RestCountriesAPI.css';

class Country extends Component {

  state = {
    country: {}
  }

  componentDidMount( props ) {
    console.log( "Country", props )
  }


  shouldComponentUpdate() {
    console.log( 'Country: ShouldUpdate', this.props );
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log( 'Country: getSnapshotBeforeUpdate', prevProps, prevState );
    return null
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log( "Country: DidUpdate", prevProps, prevState, snapshot );
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

export default Country