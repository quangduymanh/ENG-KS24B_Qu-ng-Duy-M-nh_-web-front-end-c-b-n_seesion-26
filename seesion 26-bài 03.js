let arr = ["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"];
if (!Array.isArray(arr)) {
    console.log("Dữ liệu không hợp lệ");
} else if (arr.length === 0) {
    console.log("Mảng không chứa phần tử nào");
} else {
    let number = arr.filter(email => email.includes("@") && !email.includes(" "));
    console.log(number);
}