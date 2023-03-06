"use strict";
exports.__esModule = true;
var human_1 = require("./human");
var human_2 = require("./human");
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('finally: ' + i);
}
doSomething();
//when we decrale a variable using the var keyword, the variable is scoped to the nearest function unlike with the let keyword.
var count = 5;
count = 3;
//the above is an error since in ts,you cannot assign a string value to a type number. 
var a;
a = 1;
a = true;
a = 'hello';
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["green"] = 1] = "green";
    color[color["blue"] = 2] = "blue";
})(color || (color = {}));
;
var backgroundColor = color.green;
//types assertions
var message;
message = 'hello';
var endWithC = message.endsWith('c');
var alternativeWay = message.endsWith('c');
var drawPoint = function (point) {
    //
};
drawPoint({
    x: 1,
    y: 2
});
//inline annotation
var draw = function (point) {
    //this is inline annotation
};
draw({
    x: 1,
    y: 2
});
//cohesion is putting related things together.
var Group = /** @class */ (function () {
    function Group(m, n) {
        this.m = m;
        this.n = n;
    }
    Group.prototype.draw = function () {
        console.log('m: ' + this.m, 'n: ' + this.n);
    };
    return Group;
}());
var group = new Group(1, 2);
group.draw();
//classes,objects,constructors
//the properties that we can see in the intellisense are those whose access modifiers are public.
// the access modifiers allows us to reduce code.as shown below
var animal = new human_2.Animal('tamed', 'untamed');
animal.pet();
var wild = animal.wild;
animal._wild = 'tiger';
console.log(wild);
var human = new human_1.Human('male', 'female');
human.child();
