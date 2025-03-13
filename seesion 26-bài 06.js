let arr = ["2025-03-10", "2024-12-25", "2023-07-01"];

if (!Array.isArray(arr)) {
    console.log("Dữ liệu không hợp lệ");
} else if (arr.length === 0) {
    console.log("Mảng không có phần tử nào");
} else {
    let number = arr.map(date => {
            let parts = date.split("-");
            if (parts.length === 3) {
                let [year, month, day] = parts;
                return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;
            }
            return null;
        })
        .filter(date => date !== null);

    console.log(number);
}