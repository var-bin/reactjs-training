"use strict";

function buildMetadata(object){
  let id = parseInt(object.id);
  let lastUpdatedAt = object.updatedAt || object.createdAt;
  let hashCode = _buildHashCode(object);
  
  
  
  return { 
    id, 
    lastUpdatedAt, 
    hashCode,
    isSecureHash: function() {
      return hashCode >= 32;
    }
  };
}