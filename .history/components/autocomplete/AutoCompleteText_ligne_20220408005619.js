import React from 'react';
import Highlighter from "react-highlight-words";
import { UserContext, Tri, cartItemsVar, SearchkitIndex } from '../UserContext.js'
import { useReactiveVar } from '@apollo/client'
import Link from 'next/link'
import { withRouter } from 'next/router'
import {useContext, useState, useEffect, useRef} from 'react';
import { useSearchkit, useSearchkitQueryValue } from '@searchkit/client'


const isBrowser = typeof window !== `undefined`
const new_str1 = isBrowser? window.location.href.split("/") : ''
const new_str2 = new_str1[0] + '//' + new_str1[2] + '/';



class AutoCompleteText_ligne extends React.Component {


  constructor (props) {
    
    
    

    super(props);
    
    this.state = {
      suggestions: [],
      text: '',
    };
  }

  onTextChanged = (e) => {
    
    const { items } = this.props
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(value, 'i'); // "^" match le début des mots et "$" la fin, initialement c'etait: new RegExp(`^${value}`, 'i')
      suggestions = items.sort().filter(v => regex.test(v));
    }

      this.setState(() => ({suggestions, text: value}));
  }

  
  

  suggestionSelected (value) {
 
    this.setState(() => ({
      text: value,
      suggestions: [],
    }))
  }
  
  renderSuggestions () {
    
    
    
    const {suggestions} = this.state;

    const { text } = this.state;
    const { router } = this.props
    const { index } = this.props
    const { api } = this.props
    const { toggleIsOn } = this.props
    const { setQuery } = this.props

    if (suggestions.length ===0 ) {
      return null;
    }
    return (
      

      
      <div id="suggestions_recherche_ligne" >
      <span id="suggestions-titre-ligne">Suggestions de recherche</span>
      <div id="suggestions-liste-ligne" class="results1">
      {suggestions.slice(0, 10).map((item) => 
      <div id="single-suggestion-ligne" 
      onClick={() => {this.suggestionSelected(item);setQuery(item); api.setQuery(item); api.search(); toggleIsOn()}}>
      
      <a class="a-autocomplete-ligne text-white" >

      <Highlighter
    searchWords={[text]}
    autoEscape={true}
    textToHighlight={item}
    highlightTag= {
      ({ children, highlightIndex }) => (
      <strong className="highlighted-text text-bolder">{children}</strong>)



    }/>

      </a>
      
      </div>)}
      </div>
      </div>
      );
}

  render() {
    const { text } = this.state
    const { index } = this.props
    const { api } = this.props
    const { toggleIsOn } = this.props
    const { setQuery } = this.props
    
    
    

    return (
      
     
      <div class="container p-0 col-11 bg-gradient-info opacity-8" >
      
      <div class="container" id="cover-autocomplete-ligne">
      
  <form action={()=> {setQuery(text); api.setQuery(text); api.search(); toggleIsOn()}} method="post" class="form-autocomplete-ligne">
    <div class="tb">
      <div class="td">
      <input class="autocomplete-input-ligne" value= {text} onChange={this.onTextChanged} type="text" placeholder="Rechercher ..."/>
      
      </div>
      
      <div class="td" id="s-cover-ligne">
      
        <button type="submit" class="autocomplete-button-ligne" onClick={} >
          <div id="s-circle-ligne"></div>
          <span class="span-autocomplete-ligne"></span>
        </button>
      
    
      </div>
      
      
    </div>
    
    
  </form>
  

  


</div>



{this.renderSuggestions()}

</div>






      
    )
  }
}


export default withRouter(AutoCompleteText_ligne)



/*
Pour seo redirection : 


The rel=”noreferrer” tag is a special HTML attribute that can be added to a link tag (<a>). It prevents passing the referrer information to the target website by removing the referral info from the HTTP header.
This means that in Google analytics traffic coming from links that have the rel=”noreferrer” attribute will show as Direct Traffic instead of Referral.


Pour replace() : 
If you are replacing a value (and not a regular expression), only the first instance of the value will be replaced. To replace all occurrences of a specified value, use the global (g) modifier (see "More Examples" below).

*/