/// <reference path="a.ts" />
var Shape;
(function (Shape) {
    function square(x) {
        return Math.pow(x, 2);
    }
    Shape.square = square;
})(Shape || (Shape = {}));
Shape.circle(1);
Shape.square(1);


