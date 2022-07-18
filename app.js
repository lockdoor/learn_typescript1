//Homework (Template String Part 1)
//1 ทดลองเปลี่ยน string 'microsoft excel' ให้เป็นตัวใหญ่ทั้งหมด
var text = 'microsoft excel';
console.log(text.toUpperCase());
//2 ทดลองเปลี่ยน string 'GOOGLE AND APPLE' ให้เป็นตัวเล็กทั้งหมด
text = 'GOOGLE AND APPLE';
console.log(text.toLowerCase());
//3 ทดลองเปลี่ยน string 'hello world' โดยที่ให้ตัวอักษร h และ w เป็นตัวใหญ่
text = 'hello world';
console.log(text.replace(/h|w/gi, function (x) { return x.toUpperCase(); }));
