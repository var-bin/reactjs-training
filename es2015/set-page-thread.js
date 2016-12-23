"use strict";

function setPageThread(name) {
  let nameElement = _buildNameElement(name);
  let settings = _parseSettings(popular, expires, activeClass);
  
  _updateThreadElement(nameElement, settings);
}