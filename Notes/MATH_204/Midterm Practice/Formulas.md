# Determinant of a 2x2 Matrix

```
A = 
 a b
 c d

detA = ad - bc
```

# Inverse of a 2x2 Matrix

```
# note that a matrix is only invertible if the determinant != 0

originalMatrix = 
 a  b
 c  d

A^-1 = 1/(detA) * newMatrix

newMatrix = 
 d -b
-c  a
```

# Inverse of n x n Matrix where n > 2

```
A is our matrix
I is the identity matrix

[A | I]

Go through Gauss-Jordan until you reach RREF, the I matrix will now be the A^-1

If through Gauss-Jordan you notice that A cannot reach RREF (a row is just zeros), then we know it is not invertible
```