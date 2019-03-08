import React from 'react';
import classes from './InputForm.css';
const Typeahead = require('react-typeahead').Typeahead;


const inputForm = ( props ) => {
    let typeAheadClasses = {results: classes.results, listItem: classes.results, listAnchor: classes.results, typeahead: classes.results }
            return (
            
            <div>
                <section className={ props.showFromInput ? 'show' : 'hide' }>
                <h3> Where are you traveling from? </h3> 
                <Typeahead
              options= { props.countries }
              maxVisible={10}
              customClasses= { typeAheadClasses }
              placeholder="From"

              onOptionSelected={ ( country ) => props.countryFrom( country ) }
            />
                </section>
                <section className={ props.showToInput ? 'show' : 'hide' }>
                <h3> Where are you traveling to? </h3> 
                    <Typeahead
                      options= { props.countries }
                      maxVisible={10}
                      // value="none"
                      placeholder="enter where you want to travel"
                      onOptionSelected={ ( country ) => props.countryTo( country ) }
                    />
                </section >
            </div>
        )        
    
    }


export default inputForm;