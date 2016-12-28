"use strict";

class Advertisement {

  constructor(title, link){
    this.title = title;
    this.link = link;
  }

  _buildContent(){
    return `<h1>${this.title}</h1>
      <a href="${this.link}">${this._linkText()}</a>`;
  }
  
  _linkText(){
    return "Click Here";
  }
  
  render(){
    return this._buildContent();
  }
}

// Here's an example of how this class is used:
/*
  let ad = new Advertisement("CodeSchool", "http://codeschool.com");
  _appendToPage( targetElement, ad.render() );
*/

export { Advertisement };