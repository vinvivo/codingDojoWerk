// myNum = 5;
let myNum: number = 5;

// myString = "Hello Universe";
let myString: string = "Hello, Universe";

// myArr = [1,2,3,4];
let myArr: number[] = [1, 2, 3, 4];

// myObj = { name:'Bill'};
const myObj = { name: <string>"Bill" };

// anythingVariable = "Hey";
let anythingVariable: any = "Hey";

// anythingVariable = 25; 
let anythingVariable: any = 25;

// arrayOne = [true, false, true, true]; 
let arrayOne: boolean[] = [true, false, true, true];

// arrayTwo = [1, 'abc', true, 2];
let arrayTwo: any[] = [1, 'abc', true, 2];

// myObj = { x: 5, y: 10 };
const myObj = { x: <number>5, y: <number>10 };

// object constructor
/* MyNode = (function () {
    function MyNode(val) {
        this.val = 0;
        this.val = val;
    }
    MyNode.prototype.doSomething = function () {
        this._priv = 10;
    };
    return MyNode;
}());
myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val); */
class myNode {
    constructor(val: number) {
        this.val = val;
    }
    doSomething() {
        __priv: number;
        this.__priv = 10;
    };
    return MyNode;
}());
let myNodeInstance = new myNode(1);
console.log(myNodeInstance);


/* function myFunction() {
    console.log("Hello World");
    return;
} */
function myFunction(val: string): void {
    console.log(val);
    return;
}

/* function sendingErrors() {
	throw new Error('Error message');
} */
function sendingErrors(message: string); never {
    throw new Error(message);
}
