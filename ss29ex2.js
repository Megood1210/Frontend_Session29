let choice;
let product = [];
function deleteEmployee(arr, productId) {
    if(!Array.isArray(arr)){
        alert("Day khong phi 1 mang");
    }else{
        const findIndexProduct = arr.findIndex((product) => product.id === productId);
        if (findIndexProduct !== -1) {
            const confirmDelete = confirm("Ban co muon xoa san pham khong");
            if(confirmDelete){
                arr.splice(findIndexProduct, 1); 
                alert("Xoa san pham thanh cong");
            }
        }else{
            alert("Khong co san pham trong mang")
        }
    }
};
function addProduct(arr) {
    let nameProduct = prompt("Nhap ten");
    let price = prompt("Nhap gia");
    let category = prompt("Nhap danh muc");
    let quantity = +prompt("Nhap so luong");
    const newProduct = {
        id: Math.ceil(Math.random() * 1000000), 
        name: nameProduct, 
        price: price,
        category: category,
        quantity: quantity,
    };
    if(!Array.isArray(arr)){
        alert("Them doi tuong that bai");
    }else{
        arr.push(newProduct);
        alert("Them do tuong thanh cong");
    }
};
function showProduct() {
    for(let person of product){
        console.log(`ID : ${person.id} 
        Name : ${person.name}
        Price : ${person.price}
        Category : ${person.category}
        Quantity: ${person.quantity}`);
        };
};
function updateProduct(arr, productId) {
    if (!Array.isArray(arr)) {
        alert("Day khong phai la 1 mang");
        return;
    }
    const findIndexProduct = arr.findIndex((product) => product.id === productId);
    if (findIndexProduct  !== -1) {
        const newName = prompt("Nhap ten moi").trim();
        arr[findIndexProduct].name = newName;
        const newPrice = prompt("Nhap gia moi").trim();
        arr[findIndexProduct].price = newPrice;
        const newCategory = prompt("Nhap danh muc moi").trim();
        arr[findIndexProduct].category = newCategory;
        const newQuantity = prompt("Nhap so luong moi").trim();
        arr[findIndexProduct].quantity = newQuantity;
        
        alert("Cap nhat thanh cong");
    } else {
        alert("Khong co doi tuong trong mang");
    }
}

function searchProduct(arr, productId) {
    if (!Array.isArray(arr)) {
        alert("Day khong phai la 1 mang");
        return;
    }    
    const foundProduct = arr.find((product) => product.id === productId);
    if (foundProduct) {
        console.table([foundProduct]);
    } else {
        alert("Khong co san pham trong mang");
    }
}

function filterProductByPrice(arr) {
    if (!Array.isArray(arr)) {
        alert("Day khong phai la 1 mang");
        return;
    }
    const minPrice = Number(prompt("Nhap gia toi thieu"));
    const maxPrice = Number(prompt("Nhập gia toi da"));
    const filteredProducts = arr.filter((product) => product.price >= minPrice && product.price <= maxPrice);
    if (filteredProducts.length > 0) {
        console.table(filteredProducts);
    } else {
        alert("Khong co san pham trong khoang gia");
    }
}

do {
    letchoice = +prompt(`Nhap lua chon:
        1.Thêm sản phẩm vào danh sách sản phẩm.
        2.Hiển thị tất cả sản phẩm.
        3.Hiển thị chi tiết sản phẩm theo id.
        4.Cập nhật thông tin sản phẩm theo id sản phẩm.
        5. Xóa sản phẩm theo id.
        6.Lọc sản phẩm theo khoảng giá.
        7. Thoát
        `);

    switch (choice) {
        case 1:
            addProduct(product);
            break;
        case 2:
            showProduct();
            break;
        case 3:
            const phoneSearch = +prompt("Nhap id cua san pham can tim");
            searchProduct(product, phoneSearch);
            break;
        case 4:
            const isUpdateProduct = +prompt("Nhap id can cap nhat");
            updateProduct(product, isUpdateProduct);
            break;
        case 5:
            const idDelete = + prompt("Nhap id can xoa");
            deleteEmployee(product, idDelete);
            break;
        case 6:
            filterProductByPrice(product);
            break;
         case 7:
            console.log("Thoát chương trình");
            break;
        default:
            break;
    }
}while (choice !== 7) ;