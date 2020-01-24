// No errors expected for basic overloads of construct signatures

interface C {
}

interface C2<T> {
}

interface I {
    abstract new(x: number, y?: string): C;
    abstract new(x: number, y: string): C;
}

var i: I;
class D extends i {}
var r3 = new D(1, '');

interface I2<T> {
    abstract new (x: T, y?: string): C2<T>;
    abstract new (x: T, y: string): C2<T>;
    abstract new <T>(x: T, y?: string): C2<T>;
    abstract new <T>(x: T, y: string): C2<T>;

}

var i2: I2<number>;
class D2 extends i2 {}
var r4 = new D2(1, '');

var a: {
    abstract new(x: number, y?: string): C;
    abstract new(x: number, y: string): C;
}

class D3 extends a {}
var r5 = new D3(1, '');

var b: {
    new<T>(x: T, y?: string): C2<T>;
    new<T>(x: T, y: string): C2<T>;
}

class D4<T> extends b<T> {}
var r6 = new D4(1, '');