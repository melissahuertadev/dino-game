/* Helper Functions */

//Return the float value of the property of the element
export function getCustomProperty(elem, ppty){
    return parseFloat(getComputedStyle(elem).getPropertyValue(ppty)) || 0;
}

export function setCustomProperty(elem, ppty, value){
    elem.style.setProperty(ppty, value);
}

export function incrementCustomProperty(elem, ppty, inc){
    setCustomProperty(elem, ppty, getCustomProperty(elem, ppty) + inc);
}