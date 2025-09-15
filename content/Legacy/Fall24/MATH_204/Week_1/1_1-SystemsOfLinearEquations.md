# Systems of Linear Equations

If b=0 --> Homogeneous Linear Equation
If b!=0 --> Non-Homogeneous Linear Equation

How to determine what form of solution is in a System of Equations

1. No solutions
    - There are no solutions if there is no point of intersection between `n` amount of equations
2. Unique solution
    - There is only **one** point of intersection
3. Infinite solutions
    - There are points of intersection at every point (i.e. the lines are overlapping)

--> If there is more than one solution, we know that the system of equations has infinite solutions

Example: 
```
x + y = 2

# this could be solved with a set of infinite numbers as long as the addition = 2 
# ex:
x = 1
y = 1
1 + 1 = 2

# or
x = -3
y = 5
-3 + 5 = 2

# so, in a case like this, we need to bring in a parametric value. a parametric value is any real number
# to do this, let's create a formula to define the solution with respect to x
x = -y + 2

# now we introduce our parametric value t. t is declared as being any real number (1, -10000, 32913, etc.)
t => R 
y = t
x = -t + 2
```

### Augmented Matrices

Example:
Take the following two linear functions
1. x + y = 2
2. 2x + 2y = 4

Now we have to plot this into an Augmented Matrix

```
# imagine that the array brackets are just one tall bracket rather than two lines
# below is an example of the formatting for a matrix
[coefficientX  coefficientY  valueEqualTo]

# now lets do that for our linear functions
[1  1  2]
[2  2  4]

# note that m = rows, n = columns. meaning that a13 for the matrix above refers to value 2
```

There are 3 main ways to find a solution
1. Multiply an equation by a nonzero constant
    - This is often done to make coefficients in the equations match or to simplify the equations for further steps.
2. Interchange two equations
    - Doesn't alter anything, just allows you to bring the most convenient equations into prominent positions.
3. Add a constant times one equation (i.e. constant = a value related two the equations given, multiply this constant on one of the linear equations) to another equation (algebraically add the two)
    -  This operation is used to eliminate a variable or to simplify the system. You can also subtract a multiple of one equation from another.

There are 3 main ways to solve a matrix (Elementary Row Operations, EROs)
1. Multiply a row by a non zero constant
    - Example: If you have a matrix row of [2 4 6] and you multiple it by 1/2 (0.5), you now have [1 2 3] which leads you to a leading 1.
2. Swap two rows
    - This operation is useful for positioning rows in a desirable order, often to place a row with a leading 1 in the topmost position or to make a matrix in **row echelon form**.
3. Add a constant times one row to another
    - This involves adding a multiple of one row to another row in the matrix. This operation helps in creating zeros in specific positions or simplifying the matrix to row echelon form.