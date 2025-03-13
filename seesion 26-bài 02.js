let arr = ["people", "banana","cat","dog"];
if (!Array.isArray(arr)) {
    console.log("Dữ liệu không hợp lệ");
}else if (arr.length===0){
    console.log("mảng không chứa phần tử nào")
}else{
let string = arr.filter((str)=>str.length>5);
console.log(string);
}