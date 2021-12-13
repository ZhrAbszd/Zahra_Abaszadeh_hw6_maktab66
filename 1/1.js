//First => with split & indexOf & splice :
function Count(str1, str2) {
    let array1 = str1.split('');
    let array2 = str2.split('');
    let counter = 0;
    for (let i in array1) {
        let index = array2.indexOf(array1[i]);
        if (index !== -1) {
            array2.splice(index, 1);
            counter  ++
        }
    }
    return counter 
}
console.log(Count("aabcc", "adcaa"));

//************************************************//

// Second => with includes & charAt & replace & slice :
function commonCount(str1,str2){
    let counter = 0
    while(str1.length & str2.length){
        if(str2.includes(str1.charAt(0))){
            counter++
            str2 = str2.replace(str1.charAt(0),"");
            str1 = str1.slice(1);
        }
        else {
            str1 = str1.slice(1);
        }
    }
    return counter;
}
console.log(commonCount("aabcc","adcaa"));

//************************************************//











