function themSanPhamMoiVaoGioHang(idSanPham, gioHang) {
    var gioHangSauKhiDuocThem = gioHang;
    var itemGioHang = taoDoiTuongItemGioHang(idSanPham, 1);
    gioHangSauKhiDuocThem.push(itemGioHang);

    return gioHangSauKhiDuocThem;
}
function taoDoiTuongItemGioHang() {
    var iTemGioHang = new Object();
    iTemGioHang.idSanPham = idSanPham;
    iTemGioHang.soLuong = soLuong;
    return iTemGioHang;
}
//tạo hàm xóa sản phẩm trong danh sách giỏ hàng
function onclickXoa(id){
// tạo event cho onclick xóa sản phẩm
   let nodechuanutclick  = event.target.parentElement;
   
   let nodeSanPham = nodechuanutclick.parentElement;
   nodeSanPham.remove();
//xóa node hiển thị của sản phẩm
   let dataGioHang = loaddulieu('danhSachGioHang');
   // xóa theo id sản phẩm -> xóa sản phẩm oclick vào vs số lượng = 1 
   dataGioHang.splice(dataGioHang.findIndex(phanTu => phanTu.id == id),1);
   ghidulieu(dataGioHang,"danhSachGioHang");
    // load giao diện giỏ hàng trống lên khi danh sách giỏ hàng không còn sản phẩm

   if(dataGioHang.length == 0){

    var nodeGioHang = document.getElementById('gio-hang');
    nodeGioHang.innerHTML = `<div class="thong-bao-gio-trong">
                                            <p>Giỏ Hàng Trống! <span class = "nut-mua-tiep" onclick="location.href='home.html';">Tiếp Tục Mua</span></p>
                                                <img src="images/giotrong.png" alt="">
                                    </div>`;
   }
}

function onInputSoLuong(id){
    if(event.target.value.length == 0){
        return;
    }

    let soluongmua = parseInt(event.target.value);

    if(soluongmua <=0){
        event.target.value = 0;
        return;
    }

    let dataSanPham = loaddulieu('danhSachSanPham');
    let sanPham = dataSanPham[dataSanPham.findIndex(sp => sp.id == id)];

    let giaban = sanPham.giaGoc*((100 - sanPham.phanTram)/100);
    let nodeTongTien = event.target.nextElementSibling;
    nodeTongTien.innerHTML = giaban * event.target.value;

    // cap nhat local
    let dataGioHang = loaddulieu('danhSachGioHang');

    for (let i = 0; i < dataGioHang.length; i++) {
        if(dataGioHang[i].id == id){
            dataGioHang[i].soluong = soluongmua; 
            break;
        }
    }

    ghidulieu(dataGioHang,'danhSachGioHang');

}
