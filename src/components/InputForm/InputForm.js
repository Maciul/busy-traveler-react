import React from 'react';
import './InputForm.css';
const Typeahead = require('react-typeahead').Typeahead;


const inputForm = ( props ) => {
          console.log( "FN-Input Form", props );
          return (
            <div className="wrapper">
                <section className={ props.showFromInput ? 'show' : 'hide' }>
                  <Typeahead
                    options= { props.countries }
                    maxVisible={10}
                    placeholder="Where you coming from"
                    onOptionSelected={ ( country ) => props.countryFrom( country ) }
                  />
                </section>

                <section className={ props.showToInput ? 'show' : 'hide' }>
                  <Typeahead
                    options= { props.countries }
                    maxVisible={10}
                    placeholder="and going to...?"
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