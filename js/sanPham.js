function chuyenDoiTuongThanhHTML(sanPham) {
    var html = '';
    html += `<div class='san-pham'>`;
    html += `<div class='hinh-anh-san-pham'>`;
    html += `     <div class='giam-gia'> -${sanPham.phanTram}%</div>`;
    html += `      <img src="${sanPham.hinhAnh}">`;
    html += `</div>`;
    html += `<h1 class='ten-san-pham'>${sanPham.ten}</h1>`;
    html += `<p class='gia-goc-san-pham'>${(sanPham.giaGoc)} đ</p>`;
    html += `<p class='gia-ban'>${(sanPham.tinhGiaban())} đ</p>`;
    html += `<p class='khu-vuc'>${(sanPham.khuVuc)} </p>`;
    html += `<button id="them-gio" onclick="clickGioHang('${sanPham.id}')">Thêm vào giỏ hàng</button>`;
    html += `</div >`;

    return html;
}

function clickGioHang(id) {
    alert("Đưa thành công sản phẩm có ID: " + id); 
 
    

    var hang = new Object();
    hang.id = id;
    hang.soluong = 1;

    var dacohang = false;
    var danhsachgiohang = loaddulieu("danhSachGioHang");

    for (var i = 0; i < danhsachgiohang.length; i++) {
        if (danhsachgiohang[i].id == id) {
            danhsachgiohang[i].soluong++;
            dacohang = true;
        }
    }

    if (dacohang == false)
        danhsachgiohang.push(hang);

    ghidulieu(danhsachgiohang, "danhSachGioHang");

}


function chuyenDanhSachSanPhamSangHTML(danhSachSanPham) {
    var htmlTong = '';

    for (var i = 0; i < danhSachSanPham.length; i++) {
        var sanPham = danhSachSanPham[i];
        var html = chuyenDoiTuongThanhHTML(sanPham);
        htmlTong = htmlTong + html;
    }
    return htmlTong;
}

function taoSanPham(hinhAnh, ten, giaGoc, phanTram, khuVuc, id) {

    var sanPham = new Object();
    sanPham.hinhAnh = hinhAnh;
    sanPham.ten = ten;
    sanPham.giaGoc = giaGoc;
    sanPham.phanTram = phanTram;
    sanPham.khuVuc = khuVuc;

    //tạo định danh cho đối tượng
    if (id == null) {
        sanPham.id = taoId();
    }
    else {
        sanPham.id = id;
    }

    sanPham.tinhGiaban = function () {
        return this.giaGoc - this.giaGoc * (this.phanTram / 100);
    }
    return sanPham;
}


function taoId() {
    var thoiGianHienTai = new Date().getTime();
    var id = Math.random().toString().substr(2, 10) + '_' + String(thoiGianHienTai);

    return id;
}