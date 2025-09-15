# Midterm

- **Ax + B = C** -> Find the matrix needed to reach Ax + B = C
- **A * B** -> Matrix multiplication (rows*columns)
    - **AB * C** -> Expanded multiplication (continued off of the prior calculation)

## Tutorial Questions

**Inverting a Matrix through calculating to RREF**

```
A =
[-4 2 1]
[1 -2 3]
[5  1 2]

We want A^-1

1.

[-4  2  1 | 1 0 0]
[ 1  2  3 | 0 1 0]
[ 5  1  2 | 0 0 1]
# left side matrix, right side identity matrix

# swap rows
[ 1  2  3 | 0 1 0]
[-4  2  1 | 1 0 0]
[ 5  1  2 | 0 0 1]
# do some RREF operations (you have to do the same operation to both sides)

# after some run throughs of RREF operations we get to
[1 0 0 |  1/13 -3/13   4/13]
[0 1 0 |  1    -1         1]
[0 0 1 | -9/13 14/13 -10/13]
# now the left hand side is equal to the identity matrix, and our right hand side is equal to the inverse (A^-1)
# if we can't get to RREF, it is not invertible
```

**Find A^-1**

```
[2 1]X + [0 3]  = [1 2]X
[0 6]    [2 1]    [2 1]
# i.e. this is AX + B = CX, so we want to get to B = CX - AX and then B = (C - A)X and then we get to (C-A)^-1 B = X
# so we need to get C-A

C-A = 
[1 2] - [2 1] = [-1  1]
[2 1]   [0 6]   [ 2 -5]
# now we get the inverse

(C-A)^-1 =
1/3 [-5 -1] = [-5/3 -1/3]
    [-2 -1]   [-2/3 -1/3]

[-5/3 -1/3][0 3]
[-2/3 -1/3][2 1]

[-2/3 -16/3] = X
[-2/3  -7/3]
```

**Calculating the Inverse of Matrices**

```
[1 3 4]  [8 10] = [7 8]
[0 1 5]X [1  5]   [2 1]
[0 0 1]           [3 1]
   A        B       C

# Getting Inverse of A using minors
# Formula A^-1 = 1/detA * adj(A)

# Our determinant is A^-1 = 1/1 * adj(A)
# Creating the submatrix of [1 5, 0 1]

[+ - +]
[- + -]
[+ - +]

+[1 5]  -[0 5]   +[0 1]
 [0 1]   [0 1]    [0 0]

-[3 4]  +[1 4]   -[1 3]
 [0 1]   [0 1]    [0 0]

+[3 4]  -[1 4]   +[1 3]
 [1 5]   [0 5]    [0 1]

# now get the determinants of each submatrix

[1   0 0]
[-3  1 0]
[11 -5 1]

# then swap rows and columns to get the inverse
[1 -3 11]
[0  1 -5]
[0  0  1]

# skipping a few steps, solving X = A^-1 C B^-1
[1 -3 11][7 8][1/6   -1/3]  = [77/15  -106/15]
[0  1 -5][2 1][-1/30 4/15]    [-61/30   49/15]
[0  0  1][3 1]                [7/15    -11/15]
```