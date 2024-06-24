<?php

Route::get('test', 'thu@testmodel');
    
    // NGƯỜI DÙNG 
Route::group(['prefix'=>'','middleware'=>'userCheckLogin'] , function(){
    Route::get('', function () {
        return redirect()->route('trangchinh');
    }); 
    Route::get('trangchu', 'TrangchuController@loadTrangChu')->name('trangchinh');    
    Route::get('gioithieu', 'TrangchuController@getDuLieuNguoiDung');

    Route::get('danhsachtin', 'BaiVietController@getDsTinTuc');
    Route::get('danhsachtin/{id}', 'BaiVietController@getDsTinTucTheoId');
     
    Route::get('tintuc/{id}', 'BaiVietController@getChiTietTinTucTheoId');

    Route::get('binhluan/them','BinhluanController@themBinhLuanMoi');
    Route::get('binhluan/sua','BinhluanController@suaBinhLuan');
    Route::get('binhluan/xoa','BinhluanController@xoaBinhLuan');

    Route::get('traloibinhluan/them','BinhluanController@themTraLoiBinhLuanMoi');
    Route::get('traloibinhluan/sua','BinhluanController@suaTraLoiBinhLuan');
    Route::get('traloibinhluan/xoa','BinhluanController@xoaTraLoiBinhLuan');

    Route::get('404', function(){
        return view('pages/user/404');
    });

    Route::get('timkiem','BaiVietController@timBaiVietTheoTuKhoa');  
    
});

Route::group(['prefix'=>'login'] , function(){  
    Route::post('sinhvien','LoginController@postLoginSinhVien');   
    Route::post('giangvien','LoginController@postLoginGiangVien');   
    Route::get('quantri','LoginController@getLoginQuanTri');   
    Route::post('quantri','LoginController@postLoginQuanTri');   
});
Route::group(['prefix'=>'logout'] , function(){  
    Route::get('sinhvien','LoginController@getLogoutSinhVien');    
    Route::get('quantri','LoginController@getLogoutQuanTriVien');    
});
Route::group(['prefix'=>'hotro'] , function(){  
    Route::post('thuong','HoTroController@postHoTroThuong');      
    Route::get('andanh','HoTroController@getHoTroAnDanh');      
});

Route::group(['prefix'=>'taikhoan'] , function(){ 
    Route::group(['prefix'=>'quenmatkhau'] , function(){ 
        Route::post('kiemtra', 'LoginController@postKiemTraQuenMatKhau');      
        Route::get('xacnhan', 'LoginController@getXacNhanMaQuenMatKhau');      
        Route::get('doimatkhau/{id}/{maxacthuc}', 'LoginController@getXacNhanDoiMatKhau');      
        Route::post('doimatkhau', 'LoginController@postXacNhanDoiMatKhau');      
    });
});
    
// QUẢN TRỊ VIÊN
Route::group(['prefix'=>'quantri','middleware'=>'adminCheckLogin'] , function(){
    Route::get('', function () {
        return redirect()->route('trangchinhadmin');
    }); 
    Route::get('trangchu', function () {
        return view('pages/admin/trangchu');
    })->name('trangchinhadmin');
    Route::group(['prefix'=>'gioithieu'] , function(){
        Route::get('', 'TrangchuController@getDuLieuQuanTri');  
        Route::post('/sua', 'TrangchuController@SuaGioiThieu');
    });
    Route::group(['prefix'=>'hienthi'] , function(){
        Route::get('', 'TrangchuController@HienThiRss');  
        Route::post('suahienthirss', 'TrangchuController@updateHienThiRss'); 
        Route::post('suahienthitintuc', 'TrangchuController@updateHienThiTinTuc'); 
        Route::post('suaanhientintuc', 'TrangchuController@updateAnHienTinTuc');   
        Route::post('suathongbao', 'TrangchuController@updateThongBao');   
    });
    Route::group(['prefix'=>'lienket'] , function(){
        Route::get('', 'TrangchuController@HienThiLienKet');     
    });
    Route::group(['prefix'=>'tintuc'] , function(){ 
        Route::group(['prefix'=>'loaitin'] , function(){ 
            Route::get('danhsach', 'LoaiTinController@getLoaiTin');   

            Route::get('sua/{id}', 'LoaiTinController@getsuaLoaiTin');   
            Route::post('sua/{id}', 'LoaiTinController@postsuaLoaiTin');   

            Route::get('xoa/{id}', 'LoaiTinController@getXoaLoaiTin');   

            Route::get('them', 'LoaiTinController@themLoaiTin'); 
            Route::post('them', 'LoaiTinController@postthemLoaiTin');   
        });
    });
    Route::group(['prefix'=>'tintuc'] , function(){ 
        Route::group(['prefix'=>'baiviet'] , function(){ 
            Route::get('danhsach', 'BaiVietController@getBaiViet');   

            Route::get('sua/{id}', 'BaiVietController@getsuaBaiViet');   
            Route::post('sua/{id}', 'BaiVietController@postsuaBaiViet');   

            Route::get('xoa/{id}', 'BaiVietController@getXoaBaiViet');   

            Route::get('them', 'BaiVietController@themBaiViet'); 
            Route::post('them', 'BaiVietController@postThemBaiViet'); 

            Route::post('selectLoaiTin', 'BaiVietController@selectLoaiTin'); 
            Route::post('suanoibat', 'BaiVietController@postSuaNoiBat');  
        });
    });
    Route::group(['prefix'=>'taikhoan'] , function(){ 
        Route::group(['prefix'=>'quantri'] , function(){ 
            Route::get('danhsach', 'TaiKhoanController@getTaiKhoan');   

            Route::get('sua/{id}', 'TaiKhoanController@getsuaTaiKhoan');   
            Route::post('sua/{id}', 'TaiKhoanController@postsuaTaiKhoan');   

            Route::get('xoa/{id}', 'TaiKhoanController@getXoaTaiKhoan');   

            Route::get('them', 'TaiKhoanController@themTaiKhoan'); 
            Route::post('them', 'TaiKhoanController@postthemTaiKhoan');   
        });
    });  
    Route::group(['prefix'=>'hopthu'] , function(){ 
        Route::get('danhsach', 'HoTroController@getDsHopThu');   

        Route::get('sua/{id}', 'HoTroController@getsuaTaiKhoan');   
        Route::post('sua/{id}', 'HoTroController@postsuaTaiKhoan');   

        Route::get('xoa/{id}', 'HoTroController@getXoaTaiKhoan');   

        Route::get('xemtatca', 'HoTroController@xemTatTinNhan'); 
        Route::get('xemchuadoc', 'HoTroController@xemTinChuaDoc');   
        Route::get('xemMotTin/{id}', 'HoTroController@xemTinTheoId');   
    }); 

});

