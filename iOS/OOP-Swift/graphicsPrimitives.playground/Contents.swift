//: Graphics Primitives
//  06 September 2017
//  Vinney Le
//
//  In Computer Graphics there is the idea of primitives, which are the simple shapes that all drawn objects are composed of. The most commons used of these primitives are the Point, Line, and Triangle. Using swift structs we are going to replicate these three different graphic primitive types.
//  - Create a Point struct that has two properties called "X" & "Y" both of which are Doubles
//  - Create a Line struct that has a "Start" and "End" property both of type Point
//  - In the Line struct add a function to return the Length of the created line as a Double.
//  - Create a Triangle Struct that contains a property called "Points" which is an array of type Point
//  - (Optional) Notice this optional can be quite hard! Add a function to the Triangle to get the area of the triangle built with three provided points and return the value as a Double.

import UIKit

//  Create a Point struct that has two properties called "X" & "Y" both of which are Doubles.
struct Point {
    var x: Double
    var y: Double
}
var myPoint1 = Point(x: 1, y: 3)
var myPoint2 = Point(x: 3, y: 0)
print(myPoint1)
print(myPoint2)

//  Create a Line struct that has a "Start" and "End" property both of type Point.
//  In the Line struct add a function to return the Length of the created line as a Double.
struct Line {
    var start: Point
    var end: Point
    func length() -> Double {
        let differenceOfXSquared = (end.x - start.x) * (end.x - start.x)
        let differenceOfYSquared = (end.y - start.y) * (end.y - start.y)
        let length = sqrt(differenceOfXSquared + differenceOfYSquared)
        print("Length = \(length) units")
        return length
    }
}
var myLine = Line(start: myPoint1, end: myPoint2)
myLine.length()


//  Create a Triangle Struct that contains a property called "Points" which is an array of type Point
//  (Optional) Notice this optional can be quite hard! Add a function to the Triangle to get the area of the triangle built with three provided points and return the value as a Double.
struct Triangle {
    var points: [Point]
}

//  Heron's formula:  A = sqrt( s * (s - a) * (s - b) * (s - c) ) where s = perimeter / 2 and a, b, c are lengths of each side