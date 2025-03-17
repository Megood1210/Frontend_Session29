let choice;
let contact = [];
function deleteContact(arr, contactId) {
    if(!Array.isArray(arr)){
        alert("Day khong phi 1 mang");
    }else{
        const findIndexContact= arr.findIndex((contact) => contact.id === contactId);
        if (findIndexContact !== -1) {
            const confirmDelete = confirm("Ban co muon xoa nhan vien khong");
            if(confirmDelete){
                arr.splice(findIndexContact, 1); 
                alert("Xoa nhan vien thanh cong");
            }
        }else{
            alert("Khong co nhan vien trong mang")
        }
    }
};
function addContact(arr) {
    let nameContact = prompt("Nhap ten");
    let email = prompt("Nhap email");
    let phone = prompt("Nhap so dien thoai");
    const newContact = {
        id: Math.ceil(Math.random() * 1000000), 
        name: nameContact, 
        email: email,
       phone: phone,
    };
    if(!Array.isArray(arr)){
        alert("Them doi tuong that bai");
    }else{
        arr.push(newContact);
        alert("Them do tuong thanh cong");
    }
};
function showContact() {
    for(let person of contact){
        console.log(`ID : ${person.id} 
        Name : ${person.name}
        Email : ${person.email}
        Phone : ${person.phone}`);
        };
};
function updateConact(arr, contactId) {
    if (!Array.isArray(arr)) {
        alert("Day khong phai la 1 mang");
        return;
    }
    const findIndexContact = arr.findIndex((contact) => contact.id === contactId);
    if (findIndexContact !== -1) {
        const newName = prompt("Nhap ten moi").trim();
        arr[findIndexContact].name = newName;
        const newEmail = prompt("Nhap email moi").trim();
        arr[findIndexContact].email = newEmail;
        const newPhone = prompt("Nhap so dien thoai moi").trim();
        arr[findIndexContact].phone = newPhone;
        alert("Cap nhat thanh cong");
    } else {
        alert("Khong co doi tuong trong mang");
    }
}

function searchContact(arr, phoneNumber) {
    if (!Array.isArray(arr)) {
        alert("Day khong phai la 1 mang");
        return;
    }    
    phoneNumber = phoneNumber.trim();
    const filterContact = arr.filter((contact) => 
        contact.phone.includes(phoneNumber)
    );
    if (filterContact.length > 0) {
        console.table(filterContact);
    } else {
        alert("Khong co doi tuong trong mang");
    }
}

do {
    choice = +prompt(`Nhap lua chon:
        1.Thêm đối tượng Contact vào danh sách liên hệ. 
        2.Hiển thị danh sách danh bạ.
        3.Tìm kiếm thông tin Contact theo số điện thoại.
        4.Cập nhật thông tin Contact(name, email, phone) theo id.
        5. Xóa một đối tượng Contact  khỏi danh sách danh bạ theo id.
        6.Thoát
        `);

    switch (choice) {
        case 1:
            addContact(contact);
            break;
        case 2:
            showContact();
            break;
        case 3:
            const phoneSearch = prompt("Nhap so dien thoai cua doi tuong can tim");
            searchContact(contact, phoneSearch);
            break;
        case 4:
            const isUpdateContact = +prompt("Nhap id can cap nhat");
            updateConact(contact, isUpdateContact);
            break;
        case 5:
            const idDelete = + prompt("Nhap id can xoa");
            deleteContact(contact, idDelete);
            break;
        case 6:
            console.log("Thoát chương trình");
            break;
        default:
            break;
    }
}while (choice !== 6) ;