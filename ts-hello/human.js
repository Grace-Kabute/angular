"use strict";
exports.__esModule = true;
exports.Animal = exports.Human = void 0;
var Human = /** @class */ (function () {
    function Human(man, woman) {
        this.man = man;
        this.woman = woman;
    }
    Human.prototype.child = function () {
        console.log(this.man + ' ' + this.woman);
    };
    return Human;
}());
exports.Human = Human;
//class animal
var Animal = /** @class */ (function () {
    function Animal(_domestic, _wild) {
        this._domestic = _domestic;
        this._wild = _wild;
    }
    Animal.prototype.pet = function () {
        console.log(this._domestic, 'or', this._wild);
    };
    Object.defineProperty(Animal.prototype, "wild", {
        //getter
        get: function () {
            return this._wild;
        } // with this, we can access the properties with a private modifier outside the class by calling this function outside.
        ,
        //setter
        set: function (value) {
            if (value == 'cat')
                throw new Error('this is not found in the wild');
            this._wild = value;
        } //with this, we can change the value of the coordinates outside the class.
        ,
        enumerable: false,
        configurable: true
    });
    return Animal;
}());
exports.Animal = Animal;
