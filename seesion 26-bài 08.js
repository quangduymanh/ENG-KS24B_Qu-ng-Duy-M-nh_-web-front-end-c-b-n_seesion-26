let arr=[1,2,3,4,5,6,7,8,9,10];
    if (!Array.isArray(arr)) {
        console.log("Dữ liệu không hợp lệ");
    }
    else if (arr.length === 0) {
        console.log("Mảng không có dữ liệu");
    }else{
        let result = arr.filter(num => {
            if (num < 2 || num % 2 === 0) 
            return false;
            for (let i = 2; i * i <= num; i++) {
                if (num % i === 0) 
                return false;
            }
            return true;
        });
        console.log(result);
    }