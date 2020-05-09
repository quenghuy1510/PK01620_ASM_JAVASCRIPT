function kiemTraFromValidate() {
    if (kiemTraFromValidateCacInputDeTrong() == false)
        return false;

    return true;
}
//b1: truy cập tất cả các node không muốn để trống
function kiemTraFromValidateCacInputDeTrong() {
    var hople = true;
    // lấy tất cả các node input có attribute không để trống
    var danhSachNodeInputKhongDeTrong = document.querySelectorAll('input[khongDeTrong]');

    for (var i = 0; i < danhSachNodeInputKhongDeTrong.length; i++) {

        var nodeInputKhongDetrong = danhSachNodeInputKhongDeTrong[i];
        //b2:lấy dữ liệu trong node input
        var giaTri = nodeInputKhongDetrong.value;

        //b3: truy cập tới node hiển thị lỗi
        var idNodeInput = nodeInputKhongDetrong.getAttribute('id');
        var nodeHienThiLoi = truyXuatNodeHienThiLoiTheoInputId(idNodeInput);

        //b4: kiểm tra giá trị nếu để trống thì hiển thị lên nodeHienThiLoi
        if (giaTri == null || giaTri.length == 0) {

            var noiDungLoi = layNoiDungLoiTheoNodeInput(nodeInputKhongDetrong);
            nodeHienThiLoi.innerHTML = noiDungLoi;
            hople = false;
        }
    }
    return hople;
}

function truyXuatNodeHienThiLoiTheoInputId(inputId) {
    var nodeHienThiLoi = document.querySelector('label.error[for="' + inputId + '"]');
    return nodeHienThiLoi;

}


function layNoiDungLoiTheoNodeInput(nodeInput) {
    var noiDungLoi = 'không được để trống';
    if (nodeInput.hasAttribute('noiDungLoiDeTrong')) {
        noiDungLoi = nodeInput.getAttribute('noiDungLoiDeTrong');
    }
    return noiDungLoi;
}