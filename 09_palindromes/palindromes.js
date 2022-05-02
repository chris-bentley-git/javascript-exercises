const palindromes = function (str) {
    let removed = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    let noSpc = removed.replace(/\s/g, '');    //remove spaces
    let strNew = noSpc.toLowerCase();
    let spl = strNew.split('');
    let reversed = spl.reverse();
    let joined = reversed.join('');
    if (strNew == joined) {
        return true; 
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
