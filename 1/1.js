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












