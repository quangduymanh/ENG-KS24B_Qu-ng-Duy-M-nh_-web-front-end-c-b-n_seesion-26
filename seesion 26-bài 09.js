let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

if (!Array.isArray(arr)) {
    console.log("Dữ liệu không hợp lệ");
} else if (arr.length === 0) {
    console.log("Mảng không có dữ liệu");
} else {
    let number1 = arr.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
    let number2 = arr.filter(num => num % 2 !== 0).reduce((sum, num) => sum + num, 0);

    console.log(`totalEven = ${number1}`);
    console.log(`totalOdd = ${number2}`);
}