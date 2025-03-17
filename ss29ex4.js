let choice;
let job = [];
function deleteEmployee(arr, employeeId) {
    if(!Array.isArray(arr)){
        alert("Day khong phi 1 mang");
    }else{
        const findIndexEmployee = arr.findIndex((employee) => employee.id === employeeId);
        if (findIndexEmployee !== -1) {
            const confirmDelete = confirm("Ban co muon xoa nhan vien khong");
            if(confirmDelete){
                arr.splice(findIndexEmployee, 1); 
                alert("Xoa nhan vien thanh cong");
            }
        }else{
            alert("Khong co nhan vien trong mang")
        }
    }
};
function addJob(arr) {
    let nameJob = prompt("Nhap ten viec");
    let description = prompt("Nhap mo ta");
    let timeStart = prompt("Nhap thoi gian bat dau viec");
    let status = prompt("Nhap trang thai");
    const newJob = {
        id: Math.ceil(Math.random() * 1000000), 
        name: nameJob, 
        description: description,
        timeStart: timeStart,
        status: status,
    };
    if(!Array.isArray(arr)){
        alert("Them viec that bai");
    }else{
        arr.push(newJob);
        alert("Them viec thanh cong");
    }
};
function showJob() {
    for(let person of job){
        console.log(`ID : ${person.id} 
        Name : ${person.name}
        Description : ${person.description}
        Time start : ${person.timeStart}
        Status : ${person.status}`);
        };
};
function updateJob(arr, jobId) {
    if (!Array.isArray(arr)) {
        alert("Day khong phai la 1 mang");
        return;
    }
    const findIndexJob = arr.findIndex((job) => job.id === jobId);
    if (findIndexJob !== -1) {
        const newStatus = prompt("Nhap trang thai moi").trim();
        arr[findIndexJob].status = newStatus;
        alert("Cap nhat thanh cong");
    } else {
        alert("Khong co viec trong mang");
    }
}
function filterJobs(arr) {
    const filterStatus = prompt("Nhap trang muon loc (Hoàn thành/Chưa hoàn thành)");
    const filteredJobs = arr.filter(job => job.status.toLowerCase() === filterStatus.toLowerCase());
    if (filteredJobs.length === 0) {
        alert("Khong co viec");
    } else {
        console.clear();
        console.log(`===== CÔNG VIỆC TRẠNG THÁI: ${filterStatus.toUpperCase()} =====`);
        filteredJobs.forEach(job => {
            console.log(`ID: ${job.id} | Tên: ${job.name} | Trạng thái: ${job.status}`);
            console.log(`   Mô tả: ${job.description}`);
            console.log(`   Bắt đầu: ${job.timeStart}\n`);
        });
    }
}
function sortJobs(arr) {
    arr.sort((a, b) => a.status.localeCompare(b.status));
    alert("Sap xep thanh cong");
    showJob();
}
do {
    choice = +prompt(`Nhap lua chon:
        1.Thêm công việc mới.
        2.Hiển thị tất cả các công việc.
        3.Cập nhật trạng thái công việc theo id.
        4.Lọc các công việc theo trạng thái hoàn thành, chưa hoàn thành.
        5. Sắp xếp các công việc theo trạng thái công việc.
        6.Thoát
        `);

    switch (choice) {
        case 1:
            addJob(job);
            break;
        case 2:
            showJob();
            break;
        case 3:
            const isUpdateJob = +prompt("Nhap id can cap nhat");
            updateJob(job, isUpdateJob);
            break;
        case 4:
            filterJobs(job);
            break;
        case 5:
            sortJobs(job);
            break;
        case 6:
            console.log("Thoát chương trình");
            break;
        default:
            break;
    }
}while (choice !== 6) ;