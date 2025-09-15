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

# Cramer's Rule

```
ax + by + cz = d1
ax + by + cz = d2
ax + by + cz = d3

get the determinant of 

ax + by + cz
ax + by + cz
ax + by + cz

then get the determinants from subbing in the rhs 

d1 + by + cz
d2 + by + cz
d3 + by + cz

and then

ax + d1 + cz
ax + d2 + cz
ax + d3 + cz

and finish it

you will then do

detX/det = Cramer rule determinant
detY/det = Cramer rule determinant
detZ/det = Cramer rule determinant

all of these values are then listed (x,y,z)
```

# Norm of a Vector

```
sqrt(v1^2 + v2^2 + v3^2 + ...) = ||v||
```

# Unit Vector

```
u = (1/||v||)*v
```

# Distance between Vectors

```
d(a-b) -> distance between vector a & b

||a-b|| -> get the norm of the difference

sqrt((a1-b1)^2 + (a2-b2)^2 + ...) = d(a-b)
```

# Dot Product

```
v * w -> formula

(v1*w1) + (v2*w2) + ... => dot product
```

# Angle between Vectors using Dot Product

```
cos^-1((u * v)/||u||||v||) -> cos^-1 of u dot product v over norm of u times v
```
