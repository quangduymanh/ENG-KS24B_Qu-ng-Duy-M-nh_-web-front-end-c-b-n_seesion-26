let arr = [1,2,13,15];
if (!Array.isArray(arr)) {
    console.log("Dữ liệu không hợp lệ");
}else if (arr.length===0){
    console.log("mảng không chứa phần tử nào")
}else{
    let result = arr.filter((num)=> num >10);
    console.log(result);
}