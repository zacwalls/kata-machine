/*
 * Start at beginning of array. Check if value on left is less than value on right.
 * If not, swap values.
 * 
 * Note: After first iteration, largest value will always be in the last position.
 */

export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp
            }
        }
    }
}