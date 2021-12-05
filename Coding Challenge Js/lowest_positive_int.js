/***********
 * This is a demo task.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
 */


/* https://codereview.stackexchange.com/questions/179037/given-an-array-of-integers-return-the-smallest-positive-integer-not-in-it  */

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var swap = (i, j)=>{
        var tmp = A[i];
        A[i] = A[j];
        A[j] = tmp;
    };

    for (let i = 0; i < A.length; i++) {
        while (0 < A[i] && A[i] - 1 < A.length
                && A[i] != i + 1
                && A[i] != A[A[i] - 1]) {
            swap(i, A[i] - 1);
        }
    }

    for (let i = 0; i < A.length; i++) {
        if (A[i] != i + 1) {
            return i + 1;
        }
    }
    return A.length + 1;
}


/***
 * EXPLANATION
 */

/*****
 * Consider this algorithm, that's 𝑂(𝑛)
O
(
n
)
 in time and 𝑂(1)
O
(
1
)
 in space:

Loop over the elements of A from the start, and for each value A[i], if A[i] - 1 is a valid index in the array, then repeatedly swap A[i] and A[A[i] - 1] until A[i] is in its correct place (value equal to i + 1), or A[i] and A[A[i] - 1] are equal.
This should order the values to their right places such that A[i] == i + 1, when possible
Loop over the elements again to find an index where A[i] != i + 1, if exists then the missing value is i + 1
If the end of the loop is reached without returning a value, then the missing value is A.length + 1.
 */