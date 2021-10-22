const commander = require('commander');
const program = new commander.Command()


program 
    .storeOptionsAsProperties(true)
    .requiredOption('-s , --shift <shift>', 'a shift')
    .option('-i, --input <input>', 'an input file')
    .option('-o, --output <output', 'an output file')
    .requiredOption('-a, --action <action>', 'encode/decode')
    .parse(process.argv)



module.exports = program;
 