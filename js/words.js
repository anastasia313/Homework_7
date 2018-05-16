let str = prompt("Введите строку");
let arr = str.split(' ');
arr.sort( function (a,b){
    if(a.length > b.length) return 1;
    if(a.length < b.length) return -1;
    if(a.length === b.length) return 0;
});
let result = '';
for(let i = arr.length-1; i >= arr.length-3; i--){
    if(i<0) break;
    result += arr[i] + '; ';
}

alert(result);