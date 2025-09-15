# Q1

```
# Initial matrix

 1 -3  2 -1  2 | 2
 3 -9  7 -1  3 | 7
 2 -6  7  4 -5 | 7

# Step 1

R2 - 3R1

 R2: 3 -9 7 -1 3 | 7
3R1: 3 -9 6 -3 6 | 6

NR2: 0 0 1 2 3 | 1

 1 -3  2 -1  2 | 2
 0  0  1  2 -3 | 1
 0  0  3  6 -9 | 3

# Step 2

R3 - 2R1

 R3: 2 -6 7  4 -5 | 7
2R1: 2 -6 4 -2  4 | 4

0 0 3 6 -9 | 3

 1 -3  2 -1  2 | 2
 0  0  1  2 -3 | 1
 0  0  0  0 -18| 0

# Step 3

R3 - 3R2

0 0 3 6 -9 | 3
0 0 3 6  9 | 3

0 0 0 0 -18 | 0

 1 -3  0 -5  8 | 2
 0  0  1  2 -3 | 1
 0  0  0  0  0 | 0

# Step 4

R1 - 2R2

 1 -3  2 -1  2 | 2
 0  0  2  4 -6 | 2
 0  0  0  0  0 | 0

 1 -3  0 -5  8 | 0

# Step 5

x -3y - 5s + 8t = 0
z + 2s - 3t = 1

# Step 6

x = 3y + 5s - 8t
z = 1 - 2s + 3t
```

# Q3    

```
(6A -4I)^-1 = 
3 7
2 5

inverse of 
3 7
2 5

1/ad-bc * inverse matrix

1 * 
 d -b
-c  a

 5 -7
-2  3

6A = matrix + 4I

 5 -7 + 4 0
-2  3   0 4

 9 -7
-2  7

/ 6

a = 

 3/2  -7/6
-1/3   7/6
```

# Q4

```
# inverse of a 3x3 matrix => A^-1 = (adjA)/(detA)

# to get the adjoint, get the cofactor matrix and transpose it

# to get the cofactor matrix, get the determinant of each submatrix

1 -2 2
2 -3 6
1  1 7

m11
-3 6
 1 7

-21 - 6 = -27

m12
 2 6
 1 7

14 - 6 = 8

m13
 2 -3
 1  1

2 + 3 = 5

m21 
 -2 2
  1 7

-14 - 2 = -16

m22 
 1 2
 1 7

7 - 2 = 5

m23 
 1 -2
 1  1

1 + 2 = 3

m31 
 -2 2
 -3 6

-12 + 6 = -6

m32 
 1 2
 2 6

6 - 4 = 2

m33 
 1 -2
 2 -3

-3 + 4 = 1

Cofactor matrix

-27 8 5
-16 5 3
 -6 2 1

# transposing... (flip rows to become columns, flip signs in checkerboard pattern)

27 -16  6
 8  -5  2
-5   3 -1

# get the determinant of the matrix A 

1(-27) + -2(-8) + 2(5) = 
-27 + 16 + 10 = -1

# inverse = adjA / detA
# adjA / -1

-27 16 -6
 -8  5 -2
  5 -3  1
```

# Q5

```
# Find the determinant of matrix A

1  2  2  3 
1  0 -2  0
3 -1  1 -2
4 -3  0  2

# formula is A11 * CofactorA11 - A21 * CofactorA21 + A31 * CofactorA31 - A41 * CofactorA41

# element 1

1 * -16
 0 -2  0
-1  1 -2
-3  0  2

0 * cofactor1 - -2(-8) + 0 * cofactor3
= -16

# element 2

2 * 30
 1 -2  0
 3  1 -2
 4  0  2

1 * 2 - -2(14) + 0

2 + 28 = 30

= 60

# element 3

2 * -8
1  0  0
3 -1 -2
4 -3  2

1 * (-8) 

= -16

# element 4

3 * 13
 1  0 -2
 3 -1  1
 4 -3  0

1 * 3 - 0 + 10
3 + 10 = 13

= 39

-16 - 60 + -16 - 39 = -131
```

# Q6 (NOT DONE)

```
a1(u1) + a2(u2) + a3(u3) = V

V = (2, -5, 3)

u1 = (1, -3, 2)
u2 = (2, -4, -1)
u3 = (1, -5, 7)

```

# Extra Problems

## Find a Cubic Polynomial (NOT DONE, STEPS WRITTEN)

```
P(x) = ax^3 + bx^2 + cx + d 

# solve so that..

P(-1) = 0, P(1) = 4, P(2) = 3, P(3) = 16

# meaning these must hold true

a(-1)^3 + b(-1)^2 + c(-1) + d = 0
a(1)^3 + b(1)^2 + c(1) + d = 4
a(2)^3 + b(2)^2 + c(2) + d = 3
a(3)^3 + b(3)^2 + c(3) + d = 16

# simplify to a linear system (create a matrix)


```