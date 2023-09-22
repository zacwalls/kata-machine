/*
 * Given two crystal balls that will break if dropped from high enough
 * distance, determine the exact spot in which it will break in the most
 * optimized way.
 * 
 *** Approach notes:
 * 
 * Use binary search! In this case, we will jump sqrt(n) instead of n/2.
 * Complexity: O(sqrt(n))
*/

export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpAmount = Math.floor(Math.sqrt(breaks.length))

    // First crystal ball...
    // Jump forward sqrt(n)
    let i = jumpAmount

    // Check for breaks, jumping sqrt(n) each time
    for (; i < breaks.length; i += jumpAmount) {
        if (breaks[i]) {
            break;
        }
    }

    // We found a break! Walk back sqrt(n)
    // Second crystal ball...
    i -= jumpAmount
    
    // Lineary walk forward until break is found
    for (let j = 0; j < jumpAmount && i < breaks.length; j++, i++) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}