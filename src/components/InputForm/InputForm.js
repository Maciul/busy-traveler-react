import React from 'react';
import classes from './InputForm.css';
const Typeahead = require('react-typeahead').Typeahead;


const inputForm = ( props ) => {
          return (
            <div className="ugh">
                <section className={ props.showFromInput ? 'show' : 'hide' }>
                <h3> Where are you traveling from? </h3> 
                <Typeahead
                  options= { props.countries }
                  maxVisible={10}
                  placeholder="From"
                  onOptionSelected={ ( country ) => props.countryFrom( country ) }
                />
                </section>

                <section className={ props.showToInput ? 'show' : 'hide' }>
                <h3> Where are you traveling to? </h3> 
                <Typeahead
                  options= { props.countries }
                  maxVisible={10}
                  placeholder="To"
                  onOptionSelected={ ( country ) => props.countryTo( country ) }
                />
                </section>
            </div>
      )        
  }

export default inputForm;