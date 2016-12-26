"use strict";

function spinner(target, options = {}){

  let defaults = {
    message: "Please wait",
    spinningSpeed: 5,
    cssClass: ".is-spinning"
  };

  let settings = Object.assign();

  if(settings.spinningSpeed !== defaults.spinningSpeed){
    settings.cssClass = _addSpeedClass(target);
  }

  _renderSpinner(target, settings);
}