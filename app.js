var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Homework (Template String Part 1)
//1 ทดลองสร้าง string อะไรก็ได้มา 1 ตัวและทดลองใช้ function length ที่หาความยาวของ string
var text = 'careervio';
console.log(text.length); //9
//2 นำ string จาก ข้อที่ 1 มา แล้วใช้ function charAt() เพื่อเข้าถึง element แต่ละตัวของ string
console.log(text.charAt(1)); //a
//3 เช่นเดียวกับข้อที่ 2 ลองใช้ในรูปแบบที่เป็น [] (index) เพื่อเข้าถึง element ของ string เช่นกัน
console.log(text[1]); //a
//4 ลองเปรียบเทียบดูว่า charAt() กับ [](index) มีการทำงานที่เหมือนกันหรือไม่ และมีข้อดีหรือข้อเสียอย่างไร
//string.charAt(10) จะ return เป็น string ว่าง
console.log(text.charAt(10)); //
//string[10] จะ return undefined
console.log(text[10]); //undefined
//5 จงนำเอา string 'hello' และ 'world' มาต่อกัน
console.log('hello' + 'world');
//Homework (Template String Part 2)
//1 ทดลองเปลี่ยน string 'microsoft excel' ให้เป็นตัวใหญ่ทั้งหมด
text = 'microsoft excel';
console.log(text.toUpperCase()); //MICROSOFT EXCEL
//2 ทดลองเปลี่ยน string 'GOOGLE AND APPLE' ให้เป็นตัวเล็กทั้งหมด
text = 'GOOGLE AND APPLE';
console.log(text.toLowerCase()); //google and apple
//3 ทดลองเปลี่ยน string 'hello world' โดยที่ให้ตัวอักษร h และ w เป็นตัวใหญ่
text = 'hello world';
console.log(text.replace(/h|w/gi, function (x) { return x.toUpperCase(); })); //Hello World
//Homework (์ Number Part 1)
//ทดลองแปลงจำนวนตามนี้ให้อยู่ในรูปแบบ e
var num = 1e6; //1,000,000
num = 1e7; //10,000,000
num = 4.3e10; //43,000,000,000
num = 12e-6; //0.000012
num = 1234e-10; //0.0000001234
//ทดลองแปลงจำนวน e ให้อยู่ในรูปแบบปกติ
num = 10000000000; //1e10
num = 200000; //2e5
num = 12200000000; //122e8
num = 0.00000001; //1e-8
num = 0.00012; //12e-5
//Homework (์ Number Part 2)
//ทดลองประกาศเลขต่อไปนี้ให้อยู่ในรูปฐาน 8
function numToSring(num, base) {
    return num.toString(base);
}
console.log(numToSring(100, 8));
console.log(numToSring(111, 8));
console.log(numToSring(55, 8));
console.log(numToSring(21, 8));
console.log(numToSring(99, 8));
//ทดลองประกาศเลขต่อไปนี้ให้อยู่ในรูปฐาน 16
console.log(numToSring(100, 16));
console.log(numToSring(111, 16));
console.log(numToSring(55, 16));
console.log(numToSring(21, 16));
console.log(numToSring(99, 16));
//ทดลองใช้ function math.round ในการปัดเศษจำนวนต่อไปนี้
console.log(Math.round(12.434));
console.log(Math.round(31313.135));
console.log(Math.round(42.809));
//Homework ( Number Part 3)
//ให้เขียน function random(min, max) ที่จะ random เลข float ตั้งแต่ min จนถึง max มาให้เรา (ไม่รวม max)
function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
//Homework (Boolean part 1)
//1. ทดลองประกาศ A เป็น False B เป็น True และ C เป็น False
var A = false;
var B = true;
var C = false;
//2. จากข้อ 1 ถ้าเกิดนำมาเขียนในกรณี (A||(B&&C)) คำตอบที่ได้คืออะไร
//คำตอบที่ได้คือ false
//3. และจากข้อที่ 1 ถ้าเกิดเขียนในรูปแบบ (B||(A||C)) คำตอบที่ได้คืออะไร
//คำตอบที่ได้คือ true
//4. (B&&(A||C)) คำตอบที่ได้คืออะไร
//คำตอบที่ได้คือ false
//Homework (other type)
//1. ทดลองใช้ typeof เพื่อเช็คประเภทของตัวแปรต่อไปนี้
var a1 = false;
console.log(typeof (a1)); //boolean
var a2 = "ABD";
console.log(typeof (a2)); //string
var a3 = 113113;
console.log(typeof (a3)); //number
var a4 = null;
console.log(typeof (a4)); //object
var a5 = "";
console.log(typeof (a5)); //string
//let a6 = 13qed //error
//console.log(typeof(a6)) //error
//Homework (ตัวดำเนินการเบื้องต้น)
//1. จงแปลงค่าของ String "230" แล้ว print ออกมา
var str = "230";
var numStr = Number(str);
console.log(numStr);
//2. จงแปลงค่าของ Number 230 ให้เป็น String แล้ว print ออกมา
num = 230;
var strNum = String(num);
console.log(strNum);
//3. จงเขียน code เพื่อหา 3 ยกกำลัง 4 แล้ว print ออกมาก
console.log(Math.pow(3, 4));
//4. จงเขียน code เพื่อหาค่า x เท่ากับ 6 มาคูณ 20 โดยใช้ "การดำเนินการแบบย่อ"
var x = 6;
x *= 20;
//1. ประกาศ object ชื่อ student โดยมี property อะไรก็ได้ 5 ชนิด (boolean, string, number, object)
var student = {
    isAlive: false,
    firstName: "Prayuth",
    lastName: 'Jun-O-che',
    age: 67,
    address: {
        country: "Thailand",
        city: "Bangkok",
        district: "Yannawa",
        subDistrict: "Bang-pong-pang"
    }
};
//2. จากนั้น ทำการ clone object โดยการใช้ Assign ออกมาให้เป็น student2 และทำการเปลี่ยนค่า property อันนึงของ student2 ให้กลายเป็น null
var student2 = Object.assign({}, student);
//3. ทำการวน loop ให้ print key และ value ของ studen2 ทั้งหมดออกมา
var logObject = function (object) {
    for (var key in object) {
        console.log("".concat(key, ": ").concat(object[key]));
    }
};
logObject(student2);
//4. ทำการเพิ่ม property ของ student2 เป็น property ชื่อว่า isActive โดยมีค่าเป็น true
student2.isActive = true;
logObject(student2);
//5. ทำการลบ property isActive ทิ้งซะ
delete student2.isActive;
logObject(student2);
//Homework (Array)
//1. ผลลัพท์ความยาวของ array คืออะไร
var fruits = ['Apples', 'Pear', 'Orange']; //3
var shoppingCart = fruits; //3
shoppingCart.push('Banana'); //4
//Homework (Array Method)
//1. กำหนด String ที่ประกอบไปด้วย "Apple, Cat, Zoo, Bird, Dog" ให้ทำ String ที่ประกอบไปด้วยคำ 5 คำ แยกออกมาแล้วเก็บลงใน array ที่ชื่อว่า input โดยต้องเรียงลำดับตามตัวอักษร
var strArr = "Apple, Cat, Zoo, Bird, Dog";
var arr = strArr.split(',').map(function (item) { return item.trim(); });
arr.sort();
// console.log(arr) //['Apple', 'Bird', 'Cat', 'Dog', 'Zoo']
//2. มี Array ที่ประกอบด้วย [123, 132, 423, 423, 12345, 5343, 53, 10904, 64] จงแสดงค่าจาก array ออกมา โดยที่ค่านั้นต้องขึ้นต้นด้วยเลข 1 เท่านั้น
var numArr = [123, 132, 423, 423, 12345, 5343, 53, 10904, 64];
var newNumArr = numArr.filter(function (item) { return item.toString()[0] === "1"; });
//console.log(newNumArr) //[123, 132, 12345, 10904]
//3. ["Apple", "Mango", "Cat", "Banana"] มี 1 element ไม่เข้าพวก จงใช้วิธีการ splice และแทนที่ค่าด้วยคำว่า "Orange" หลังจากนั้นให้ sort element ตามลำดับ Alphabet
var fruit = ["Apple", "Mango", "Cat", "Banana"];
fruit.splice(2, 1, "Orange");
//console.log(fruit) //['Apple', 'Mango', 'Orange', 'Banana']
//ลองใช้ find
//console.log(fruit.find(item => item === 'Grape')) //undefined
// console.log(fruit.find(item => item === 'Mango')) //Mango
// ลองใช้ forEach
// fruit.forEach(item => console.log('I like ' + item))
// I like Apple
// I like Mango
// I like Orange
// I like Banana
//Homework Arrow Function
//1. ทดลองเขียน Arrow Function ในการรับค่า input เพื่อคำนวณหา พื้นที่ของสี่เหลื่ยมผืนผ้า
var rectangleArea = function (n) { return n * n; };
//2. ทดลองเขียน Arrow Function ในการรับค่า input เพื่อคำนวณหา จำนวนเฉพาะ
var isPrime = function (num) {
    if (num <= 1)
        return false;
    for (var i = 2; i < num; i++) {
        if (num % i === 0)
            return false;
    }
    return true;
};
var primary = function (begin, end) {
    // if(begin-end > 1000)
    var arr = [];
    for (var i = begin; i <= end; i++) {
        if (isPrime(i))
            arr.push(i);
    }
    return arr;
};
var Programmer = /** @class */ (function () {
    function Programmer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Programmer.prototype.work = function () {
        return console.log("Programmer ".concat(this.firstName, " Work"));
    };
    return Programmer;
}());
// 3.จงเขียน code เพื่อหา 3 ยกกำลัง 4 แล้ว print ออกมา
console.log(Math.pow(3, 4));
// 4.ให้ทดสอบ code ของ Programmer work() และ CTO work()
var CTO = /** @class */ (function (_super) {
    __extends(CTO, _super);
    function CTO(firstName, lastName) {
        return _super.call(this, firstName, lastName) || this;
    }
    CTO.prototype.work = function () {
        return console.log("CTO ".concat(this.firstName, " Work"));
    };
    return CTO;
}(Programmer));
var programmer = new Programmer("John", "Degree");
var cto = new CTO("Alex", "Doll");
programmer.work();
cto.work();
