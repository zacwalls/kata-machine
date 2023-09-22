/* 
 * Given a sorted array, split the array in half.
 * If needle is less than the value at 1/2 the array, use the lower half. Else, use the upper half.
 * Repeat until value is found, or until the array can no longer be cut in half.
 * 
 * Complexity: O(logN)
 * 
 * Pseudo-code:
 * 
 * function search(arr. lo, hi, needle):
 *    midpoint = floor(lo + (hi - lo) / 2)
 *    value = arr[midpoint]
 *
 *    while lo < hi:
 *        if value = needle:
 *            return true
 *         else if value > needle:
 *             hi = midpoint
 *         else:
 *             lo = midpoint + 1
 *
 *    return false
*/

export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0
    let hi = haystack.length
    
    while (lo < hi) {
        const midpoint = Math.floor(lo + (hi - lo) / 2)
        const value = haystack[midpoint]

        if (value === needle) {
            return true
        } else if (value > needle) {
            hi = midpoint
        } else {
            lo = midpoint + 1
         }
    }

    return false;
}