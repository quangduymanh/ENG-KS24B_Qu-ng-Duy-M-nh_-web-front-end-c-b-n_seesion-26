let arr = [1,2,3,4,5,6,7];
if (!Array.isArray(arr)) {
    console.log("Dữ liệu không hợp lệ");
}else if (arr.length===0){
    console.log("mảng không chứa phần tử nào")
}else{
    let maxNumber = arr.reduce((max, num) => (num > max ? num : max), arr[0]);
    let index = arr.indexOf(maxNumber);
    console.log(`Số lớn nhất: ${maxNumber}, Vị trí: ${index}`);
}