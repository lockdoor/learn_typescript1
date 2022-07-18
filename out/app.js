//Homework (Template String Part 1)
//1 ทดลองสร้าง string อะไรก็ได้มา 1 ตัวและทดลองใช้ function length ที่หาความยาวของ string
var text = 'careervio';
console.log(text.length);
//2 นำ string จาก ข้อที่ 1 มา แล้วใช้ function charAt() เพื่อเข้าถึง element แต่ละตัวของ string
console.log(text.charAt(1));
//3 เช่นเดียวกับข้อที่ 2 ลองใช้ในรูปแบบที่เป็น [] (index) เพื่อเข้าถึง element ของ string เช่นกัน
console.log(text[1]);
//4 ลองเปรียบเทียบดูว่า charAt() กับ [](index) มีการทำงานที่เหมือนกันหรือไม่ และมีข้อดีหรือข้อเสียอย่างไร
//string.charAt(10) จะ return เป็น string ว่าง
console.log(text.charAt(10));
//string[10] จะ return un
console.log(text[10]);
//5 จงนำเอา string 'hello' และ 'world' มาต่อกัน
console.log('hello' + 'world');
//Homework (Template String Part 2)
//1 ทดลองเปลี่ยน string 'microsoft excel' ให้เป็นตัวใหญ่ทั้งหมด
text = 'microsoft excel';
console.log(text.toUpperCase());
//2 ทดลองเปลี่ยน string 'GOOGLE AND APPLE' ให้เป็นตัวเล็กทั้งหมด
text = 'GOOGLE AND APPLE';
console.log(text.toLowerCase());
//3 ทดลองเปลี่ยน string 'hello world' โดยที่ให้ตัวอักษร h และ w เป็นตัวใหญ่
text = 'hello world';
console.log(text.replace(/h|w/gi, function (x) { return x.toUpperCase(); }));
//# sourceMappingURL=app.js.map