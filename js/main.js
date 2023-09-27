const str = 'aaaaa bb aaa bb aa cc dd mm nn aa cccc';
const blackList = ['aa', 'ccc'];

console.log(filterBadWord(str, blackList));

function filterBadWord(str, arr) {
    newStr = str.replace(/aa|ccc/gi, '*');

    return newStr;
}