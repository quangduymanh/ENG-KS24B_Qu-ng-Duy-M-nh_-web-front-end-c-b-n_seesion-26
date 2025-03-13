let arr=[1,2,3,4,5,6,7,8,9,10];
    if (!Array.isArray(arr)) {
        console.log("Dữ liệu không hợp lệ");
    }
    else if (arr.length === 0) {
        console.log("Mảng không có dữ liệu");
    }else{
    let result = arr.map(num => num ** 2).filter(num => num % 2 === 0);
        console.log(result);
    }