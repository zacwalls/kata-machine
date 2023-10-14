/**
 * Divide and conquer
 * 
 * 1. Pick some element "p"
 * 2. Initialize two pointers i, j. Pointer j walks the array
 * 3. Any item less than "p" will be put in the ith position
 * 4. Increment i
 * 5. Eventually, the array will be split like so: [ i <= p < n ] - this is semi-sorted
 * 6. Take the positions between i, p and p, n, recurse - split into halves until sorted
 * 
 *                           [0, 31]
 *                             16
 *                           /   \
 *                       0-15     17-31
 *                      /          \
 *                     8            24
 *                   /               \
 *                1-7                 9-15
 *               /                     \
 *              4                       12
 *            /  \                    /   \
 *         1-3    5-7             9-11     13-15
 *        / | \   ...             ...       ...
 *     1    2  3
 */

function qs(arr: number[], lo: number, hi: number): void {
    if (lo >= hi) {
        return;
    }

    const pivotIdx = partition(arr, lo, hi);

    qs(arr, lo, pivotIdx - 1); // left
    qs(arr, pivotIdx + 1, hi); // right
}

function partition(arr: number[], lo: number, hi: number): number {
    const pivot = arr[hi];
    let idx = lo - 1;

    for (let i = lo; i < hi; i++) {
        if (arr[i] <= pivot) {
            idx++;
            const tmp = arr[i];

            arr[i] = arr[idx];
            arr[idx] = tmp;
        }
    }

    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;

    return idx;
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}