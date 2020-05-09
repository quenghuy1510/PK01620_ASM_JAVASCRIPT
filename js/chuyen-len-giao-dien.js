loadNodeSanPham();

function loadNodeSanPham(){

    var dataSanPham = loaddulieu("danhSachSanPham");

    // nếu chưa có giữ liệu thì thêm dữ liệu mẫu
    if(dataSanPham.length == 0){
        
        var sanpham1 = taoSanPham('https://cdn.tgdd.vn/Products/Images/42/58039/iPhone-5-16GB-l.jpg','Iphone 5 32 gb',5000000,50,'Hà Nội',taoId());
        var sanpham2 = taoSanPham('https://cdn.tgdd.vn/Products/Images/42/92962/iphone-6-32gb-gold-hh-600x600-600x600-600x600.jpg','Iphone 6 32 gb',6000000,50,'Đà Nẵng',taoId());
        var sanpham3 = taoSanPham('https://bachlongmobile.com/media/catalog/product/cache/2/image/040ec09b1e35df139433887a97daa66f/7/s/7silver_2.jpg','Iphone 7 32 gb',7000000,50,'Hồ Chí Minh',taoId());
        var sanpham4 = taoSanPham('https://cdn.tgdd.vn/Products/Images/42/114110/iphone-8-plus-hh-600x600-400x400.jpg','Iphone 8',8000000,50,'Buôn Ma Thuật',taoId());

        for(var i = 0; i<5;i++){
        dataSanPham.push(sanpham1);
        dataSanPham.push(sanpham2);
        dataSanPham.push(sanpham3);
        dataSanPham.push(sanpham4);
        }
        

        
        ghidulieu(dataSanPham,"danhSachSanPham");
    }

    // thêm function vào sản phẩm
    for(var i = 0 ; i < dataSanPham.length ; i++){
        dataSanPham[i] = taoSanPham(dataSanPham[i].hinhAnh, dataSanPham[i].ten, dataSanPham[i].giaGoc, dataSanPham[i].phanTram, dataSanPham[i].khuVuc, dataSanPham[i].id);
    }

    var html = chuyenDanhSachSanPhamSangHTML(dataSanPham);
    var nodehienThiSanPham =  document.getElementById('hien-thi-san-pham');
    nodehienThiSanPham.innerHTML = html;
}
