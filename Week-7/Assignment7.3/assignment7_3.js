ar = [0, 2, 1, 2, 0]
function sortArray(arr) {
    let lo = 0;
    let hi = arr.length-1;
    let mid = 0;
    let temp

    while (mid < hi) {
        if (arr[mid] === 0) {
            temp = arr[mid]
            arr[mid] = arr[lo]
            arr[lo] = temp
            mid = mid + 1
            lo++
        } else if (arr[mid] === 1) {
            mid++
        } else {
            temp = arr[mid]
            arr[mid] = arr[hi]
            arr[hi] = temp
            mid = mid + 1
            hi = hi - 1
        }

    }
    return arr
}
console.log(sortArray(ar))