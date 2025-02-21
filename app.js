// //? Berilgan massivning uzunligini (length) aniqlang va ekranga chiqaring.

// let myList = [1, 2, 3, 4, 5, 6, 11];
// let length = myList.length;
// console.log(length);


// //? Berilgan massivning oxiriga yangi element qo‘shing (push).
// let myList = [1, 2, 4, 5, 2, 7, 8];
// myList.push(10);
// console.log(myList)


// //?  Berilgan massivning oxirgi elementini olib tashlang (pop).
// let myList = [1, 3, 2,4, 2, 5, 9];
// myList.pop();
// console.log(myList)


// //? Berilgan massivning boshiga yangi element qo‘shing (unshift).
// let myList = [3, 2, 5, 7, 4, 5];
// myList.unshift(2);
// console.log(myList)


// //? Berilgan massivning birinchi elementini olib tashlang (shift).
// let myList = [1, 3, 4, 2, 3, 1, 3];
// myList.shift();
// console.log(myList)


// //? Berilgan massivning oxirgi elementini o‘chirib, o‘rniga yangi element qo‘shing (pop, push).
// let myList = [1, 2, 3, 2, 0, 8, 7];
// myList.pop();
// myList.push(11);
// console.log(myList)


// //?  Berilgan massivning birinchi va oxirgi elementlarini almashtiring (unshift, shift, push, pop).
// let myList = [1, 2, 5, 3, 4, 6, 7, 8, 11];
// let lastEl = myList.pop();
// let firstEl = myList.shift();
// myList.push(firstEl);
// myList.unshift(lastEl)
// console.log(myList)


// //? Berilgan massivni barcha elementlardan tozalang (length = 0).
// let myList = [1, 23, 3, 24, 43, 2, 9];
// myList = [];
// console.log(myList)


// //? Massivning 2-indeksidagi elementni o‘chirib, o‘rniga yangi element qo‘shing (splice).
// let myList = [ 1, 3, 2,4, 2, 9];
// myList.splice(2, 1, 'yangi element')
// console.log(myList)


// //?  Ikki berilgan massivni birlashtirib, yangi massiv hosil qiling (concat).
// let firstList = [1, 2, 3, 2, 1];
// let secondList = [3, 2, 3, 2, 4, 8, 8];
// let res = firstList.concat(secondList)
// console.log(res)


// //?  Berilgan indeksdagi elementni ekranga chiqaring (at).
// let myList = [1, 2, 1,4, 2 , 7, 8];
// console.log(myList.at(4))


// //?  Berilgan massivning o‘rtasiga yangi element qo‘shing (splice).
// let myList = [1, 2, 1, 3, 5, 4, 6, 9];
// myList.splice(Math.floor(myList.length)/2-1, 1, 'yangi element' )
// console.log(myList)


// //?  Berilgan son massivda bor yoki yo‘qligini tekshiring (for).
// let myList = [1, 2, 1,3 , 4, 5, 6];
// let searchedNum = 4;
// for (let el of myList){
//     if (el=== searchedNum){
//         console.log("FOUND!");
//     }
// }
// console.log("Not found");


// //? Berilgan massiv elementlarini for yordamida ekranga chiqaring.
// let myList = [1, 2, 1,3 , 4, 5, 6];
// for (let el of myList){
//     console.log(el)
// }


//?  Berilgan massiv elementlarini for...of yordamida ekranga chiqaring.
// let myList = [1, 2, 1,3 , 4, 5, 6];
// for (let el of myList){
//     console.log(el)
// }


// //?  Berilgan sonlar massivining eng katta elementini toping (for).
// let myList = [1, 2, 1,3 , 4, 5, 6];
// let maxEl = myList[0];
// for (let el of myList){
//     if (el>maxEl){
//         maxEl =el;
//     }
// }
// console.log(maxEl)


//? Berilgan sonlar massivining eng kichik elementini toping (for).
// let myList = [1, 2, 1,3 , 4, 5, 6];
// let minEl = myList[0];
// for (let el of myList){
//     if (el<maxEl){
//         minEl =el;
//     }
// }
// console.log(maxEl)


// //?  Massivdagi faqat juft sonlarni ekranga chiqaring (for).
// let myList = [1, 2, 1,3 , 4, 5, 6];
// for (let i = 0; i<myList.length; i++){
//     if (myList[i]%2===0){
//         console.log(myList[i])
//     }
// }


//?  Massivdagi faqat toq sonlarni ekranga chiqaring (for).
// let myList = [1, 2, 1,3 , 4, 5, 6];
// for (let i = 0; i<myList.length; i++){
//     if (myList[i]%2===1){
//         console.log(myList[i])
//     }
// }


// //? Berilgan sonlar massivining barcha elementlarini qo‘shing (for).
// let myList = [1, 2, 1,3 , 4, 5, 6];
// let sum = 0;
// for (let el of myList){
//     sum+=el;
// }
// console.log(sum)


// //?  Berilgan massivni string ko‘rinishiga o‘tkazing (toString).
// let myarr =['a', 'jfkl', 'jkj'];
// let res = myarr.toString(' ');
// console.log(res)


// //?  Massiv elementlarini vergul bilan ajratilgan ko‘rinishda chiqaring (join).
// let myList = [1, 2, 3, 4, 2, 4, 9];
// let res = myList.join(', ')
// console.log(res)


// //? Massivning 3-6 indekslar orasidagi qismini ajrating (splice).
// let myList = [1, 2, 4, 23, 5, 3, 8, 5, 3, 7, 3];
// let res = myList.splice(3, 6);
// console.log(res)


// //? Berilgan massivning o‘rtasidagi barcha elementlarni o‘chirib tashlang (splice).
// let myList = [1, 2, 4, 23, 5, 3, 8, 5, 3, 7, 3];
// let res = myList.splice(3, 6);
// console.log(myList)


// //? Har bir elementga 2 qo‘shib, yangilangan massivni hosil qiling (for).
// let myList = [1, 3, 5, 3, 7, 9, 3, 64];
// let myarr = [];
// for (let el of myList){
//     myarr.push(el+2)
// }
// console.log(myarr)


// //?  Berilgan sonlar massivida musbat va manfiy sonlarni alohida massivlarga ajrating (for).
// let myList = [1, 3, 5, 3, 7, 9, 3, 64];
// let pos= [];
// let min =[];
// for (let el of myList){
//     if (el>0){

//         pos.push(el);
//     }
//     else{
//         min.push(el)
//     }
// }
// console.log(pos);
// console.log(min);



// //?  Berilgan massivning har bir elementini kvadratga oshiring (for).
// let myList = [1, 2, 4, 5, 3, 5, 9];
// let res = [];
// for (let el of myList){
//     res.push(el**2);
// }
// console.log(res)


// //? Massiv elementlarini teskari tartibda ekranga chiqaring (for).
// let myList = [13, 54, 45, 645, 99];
// let res = [];
// for (let el of myList){
//     res.push(el);
// }
// console.log(res);



// //?  Har bir elementni uning indeks raqami bilan ekranga chiqaring (for).
// let myList = [13, 54, 45, 645, 99];
// for (let i = 0; i<myList.length; i++){
//     console.log(i, myList[i])
// }


