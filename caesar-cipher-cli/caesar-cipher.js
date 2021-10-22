const A_CHAR_CODE = 65;
const Z_CHAR_CODE = 90;
const a_CHAR_CODE = 97;
const z_CHAR_CODE = 122;
const CHAR_COUNT = 26;
const REG_EXP_CURILIC_CHAR = /[a-z]/i;

 

const ceaserCipher = (str, shift) => {
    if(shift < 0){
        return ceaserCipher(str, shift + CHAR_COUNT)
    };

    
    let transformStr = '';
    
    for(let charIndex = 0; charIndex < str.length; charIndex++){
        let char = str[charIndex];
        transformChar = char; 

        if(char.match(REG_EXP_CURILIC_CHAR)){
            let charCode = str.charCodeAt(charIndex);

            if((charCode >= a_CHAR_CODE) && (charCode <= z_CHAR_CODE)){
                transformChar = String.fromCharCode(((charCode - a_CHAR_CODE + shift) % CHAR_COUNT) + a_CHAR_CODE);
            }else if((charCode >= A_CHAR_CODE) && (charCode <= Z_CHAR_CODE)){
                transformChar = String.fromCharCode(((charCode - A_CHAR_CODE + shift) % CHAR_COUNT) + A_CHAR_CODE);
            };
        };

        transformStr += transformChar
        
    };
    return transformStr
};


module.exports = ceaserCipher;