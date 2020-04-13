// Load the full build.
let _ = require('lodash');
export const containIllegalNumber = (str)=>{

 if( str.match(/[0-9]/g))
     return true;
 else
     return false;
};

export const makeMultipleLinesShort = (str, len = 50) => {

    if(str.length > len) {
        return str.slice(0,len)+'.....'
    }else{
        return str;
    }
};

export const uniq = (array, attribute) => {
//    console.log(_.uniqBy(array, attribute));

    return _.uniqBy(array, attribute);
}


