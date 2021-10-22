const ceaserCipher = requare('./caesar-cipher.js');
const through2 = requare('through2');


const ceaserCipherStream = (action, shift) => through2((data, _, cb) =>{
    const str = data.toString();

    let transfromStr;

    if(action === 'decode'){
        transfromStr = ceaserCipher(str, shift * (-1));
    }else{
        transfromStr = ceaserCipher(str, shift);
    };

    cb(null, Buffer.from(transfromStr));

});

module.exports = ceaserCipherStream;