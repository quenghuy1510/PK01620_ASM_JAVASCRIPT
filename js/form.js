function dangKy() {

    //b1:ktra dữ liệu có hợ lệ ko
    if (kiemTraHopLeFormDangKy() == true) {
        alert("Thực hiện đăng ký");

    }
    //b2: thực hiện xử lí đăng ký
}
/* mô tả:  kiểm tra form đăng ký có hợp lệ không , nếu hợp lệ thì trả về true còn không thì 
trả về false và hiển thị thông báo lỗi*/
function kiemTraHopLeFormDangKy() {
    var hopLe = true;
    //kiểm tra hợp lệ
    //b1: truy cập node để lấy dữ liệu
    var nodeHoTen = document.getElementById('hoTen');
    var nodeSoDienThoai = document.getElementById('soDienThoai');
    var hoTen = nodeHoTen.value;
    var soDienThoai = nodeSoDienThoai.value;

    console.log("họ tên:" + hoTen);
    console.log("số điện thoại:" + soDienThoai);
    var nodethongBaoloiChoHoTen = document.getElementById('thongBaoloiChoHoTen');
    nodethongBaoloiChoHoTen.innerHTML = " ";

    var nodethongBaoloiChoSDT = document.getElementById('thongBaoloiChoSDT');
    nodethongBaoloiChoSDT.innerHTML = " ";
    //b2: kiểm tra dữ liệu : có hợp lệ ko ->
    if (hoTen == null || hoTen.length <= 0) {
        nodethongBaoloiChoHoTen.innerHTML = "Họ tên ko được để trống !";

        hopLe = false;

    }
    if (soDienThoai == null || soDienThoai.length < 10 || soDienThoai.length > 11) {
        nodethongBaoloiChoSDT.innerHTML = "Số điện thoại ko được để trống !";
        hopLe = false;

    }

    return hopLe;
}