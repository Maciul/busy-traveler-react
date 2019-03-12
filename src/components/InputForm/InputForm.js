import React from 'react';
import classes from './InputForm.css';
const Typeahead = require('react-typeahead').Typeahead;


const inputForm = ( props ) => {
          console.log( "props, in inputForm FN", props );
          return (
            <div className="wrapper">
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

                <section className={ !props.showToInput && !props.showFromInput ? 'show' : 'hide' } >
                <h3> LFG </h3> 
                <button onClick={ props.lfg } > LFG! </button>
                </section>
            </div>
      )        
  }

export default inputForm;