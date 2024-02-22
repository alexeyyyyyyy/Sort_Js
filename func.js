
const arr = [9,2,4,1,5,2,9,1,2,0];
printArray(arr);


function printArray(arr) {

    console.log("===========");
    for (let i = 0; i < arr.length;i++) {
        console.log(arr[i]);
    }
    console.log("==============");
    function swap(arr, i, j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    function sortArray(arr) {
        const len = arr.length;

        for (let i = 0, j = len - 1;i < j;i++,j--) {
            swap(arr,i,j);
        }
    }

    console.log("Sorted Array")
    sortArray(arr);
    console.log(arr);
    console.log("==============");
function compareNumbers(a,b) {
    let result = 0;

    if(a > b) {
        result = -1;
    }else if (a < b) {
        result = 1;
    }
    return result;
}
    arr.sort(compareNumbers);
    console.log(`Sorted array with comporator: ${arr}`);
    console.log("==============");
    }