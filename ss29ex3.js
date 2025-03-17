
const restaurant = {
    "appetizer" : 
    [],
    "mainCourse" : 
    []
};
let choose;

function addFood() {
    let checkFood = prompt(`Chon danh muc ban muon them : 
        1. Appetizer
        2. Main Course`);
        if (checkFood == "1"){
            let nameFood = prompt("Nhap ten mon ");
            let priceFood = +prompt("Nhap gia mon");
            let describeFood = prompt("Nhap mo ta mon");
            restaurant["appetizer"].push({name : nameFood,price : priceFood,describe : describeFood});
            console.log("Them thanh cong");
        } else if (checkFood == "2"){
            let nameFood = prompt("Nhap ten mon ");
            let priceFood = +prompt("Nhap gia mon");
            let describeFood = prompt("Nhap mo ta mon");
            restaurant["appetizer"].push({name : nameFood,price : priceFood,describe : describeFood});
            console.log("Them thanh cong");
        } else {
            console.log("Khong dung"); 
        }
};

function deleteFood() {
    let checkCategory = prompt(`Chon danh muc ban muon xoa :
        1. Appetizer
        2. Main Course`);
    if (checkCategory=="1"){
        let checkName = prompt("Nhap ten mon muon xoa");
        const findName = restaurant.appetizer.find(food => food.name === checkName);
        if (findName){
            let check = restaurant.appetizer.indexOf(findName);
            restaurant.appetizer.splice(check,1);
            console.log("Xoa thanh cong");
            
        } else {
            console.log("Khong co mon");
        }
    } else if (checkCategory == "2"){
        let checkName = prompt("Nhap ten mon muon xoa");
        const findName = restaurant.appetizer.find(food => food.name === checkName);
        if (findName){
            let check = restaurant.appetizer.indexOf(findName);
            restaurant.appetizer.splice(check,1);
            console.log("Xoa thanh cong");
            
        } else {
            console.log("Khong co mon");
        }
    } else {
        console.log("Khong dung");
    }
};

function updateFood() {
    let checkCategory = prompt(`Chon danh muc ban muon cap nhat :
        1. Appetizer
        2. Main Course`);
    if (checkCategory=="1"){
        let checkName = prompt("Nhap ten mon muon cap nhat");
        const findName = restaurant.appetizer.find(food => food.name === checkName);
        if (findName){
            findName.name = prompt("Nhap ten moi");
            findName.price = +prompt("Nhap gia moi");
            findName.describe = prompt("Nhap mo ta moi");
            console.log("Cap nhat thanh cong");
            
        } else {
            console.log("Khong co mon");
        }
    } else if (checkCategory == "2"){
        let checkName = prompt("Nhap ten mon muon cap nhat");
        const findName = restaurant.appetizer.find(food => food.name === checkName);
        if (findName){
            findName.name = prompt("Nhap ten moi");
            findName.price = +prompt("Nhap gia moi");
            findName.describe = prompt("Nhap mo ta moi");
            console.log("Cap nhat thanh cong");
            
        } else {
            console.log("Khong co mon");
        }
    } else {
        console.log("Khong dung");
    }
};

function showRestaurant() {
    let menu = "===Menu===\n";
    menu += "Món khai vị : \n";
    if (restaurant.appetizer.length === 0) {
        menu += "Không có món nào\n";
    } else {
        restaurant.appetizer.forEach((food) => {
            menu += `            ${food.name} 
            ${food.price} VND   
            Mô tả: ${food.describe} \n`;
        });
    }
    menu += "Món chính : \n";
    if (restaurant.mainCourse.length === 0) {
        menu += "Không có món nào.\n";
    } else {
        restaurant.mainCourse.forEach((food) => {
            menu += `            ${food.name} 
            ${food.price} VND   
            Mô tả: ${food.describe}\n`;
        });
    }
    console.log(menu);
};

function searchRestaurant() {
    let findFood = prompt("Nhap ten mon muon tim ");
    let check = null;
    let category = "";
    check = restaurant.appetizer.find(food => food.name.toLowerCase() === findFood.toLowerCase());
    if (check){
        category  = "Appetizer";
    } else {
        check = restaurant.mainCourse.find(food => food.name.toLowerCase() === findFood.toLowerCase());
        if (findFood){
            category = "Main Course";
        }
    }

    if (check){
        console.log(`Tìm thấy món ăn trong danh mục : ${category} :
            Tên : ${check.name}
            Giá : ${check.price}
            Mô tả : ${check.describe}`);
    } else {
        console.log("Khong co mon");
    }
};

do {
    choose = +prompt(` 
    1.Thêm món ăn vào danh mục.
    2.Xóa món ăn theo tên khỏi danh mục.
    3.Cập nhật thông tin theo tên của món ăn  (tên, giá, mô tả).
    4.Hiển thị toàn bộ menu gồm từng danh mục và từng món ăn.
    5.Tìm kiếm món ăn theo tên trong toàn bộ menu.
    6.Thoát
 `);

    switch (choose) {
        case "1":
            addFood();
            break;
        case "2":
            deleteFood();
            break;
        case "3":
            updateFood();
            break;
        case "4":
            showRestaurant();
            break;
        case "5":
            searchRestaurant();
            break;
        case "6":
            console.log("Thoat chuong trinh");
            break;
        default:
            console.log("Lua chon khong dung");
            break;
    }
} while (choose!=6);