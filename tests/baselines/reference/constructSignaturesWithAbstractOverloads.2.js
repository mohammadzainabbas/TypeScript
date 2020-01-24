//// [constructSignaturesWithAbstractOverloads.2.ts]
interface C {
}

interface C2<T> {
}

interface I {
    abstract new(x: number, y?: string): C;
    new(x: number, y: string): C;
}

var i: I;
var r3 = new i(1, '');

interface I2<T> {
    abstract new (x: T, y?: string): C2<T>;
    new (x: T, y: string): C2<T>;
    abstract new <T>(x: T, y?: string): C2<T>;
    new <T>(x: T, y: string): C2<T>;

}

var i2: I2<number>;
var r4 = new i2(1, '');

var a: {
    abstract new(x: number, y?: string): C;
    new(x: number, y: string): C;
}

var r5 = new a(1, '');

var b: {
    new<T>(x: T, y?: string): C2<T>;
    abstract new<T>(x: T, y: string): C2<T>;
}

var r6 = new b(1, '');

//// [constructSignaturesWithAbstractOverloads.2.js]
var i;
var r3 = new i(1, '');
var i2;
var r4 = new i2(1, '');
var a;
var r5 = new a(1, '');
var b;
var r6 = new b(1, '');
