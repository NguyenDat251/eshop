var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Cua_hang', { title: 'Home' });
});

router.get('/signup', function(req, res, next) {
  res.render('Dang_ky', { title: 'Đăng ký' });
});

router.get('/forgot', function(req, res, next) {
  res.render('Quen_mat_khau', { title: 'Quên mật khẩu' });
});

router.get('/login', function(req, res, next) {
  res.render('Dang_nhap', { title: 'Cửa hàng' });
});

router.get('/productInfo', function(req, res, next) {
  const data = {
    name: 'iPhone XS Max 64 GB',
    brand: 'Apple',
    price: '28,790,000',
    color: ['Bạc', 'Vàng', 'Xám'],
    shortInfo: ['Hệ điều hành: iOS 12', 'RAM: 4 GB', 'ROM: 64 GB', 'Chip xử lý: A12 Bionic 64-bit 7nm'],
    info: {
      screen: '6.5 inches',
      ram: '4 GB',
      rom: '64 GB',
      frontCamera: '7 MP, f / 2.2, 32mm',
      backCamera: '12 MP',
      os: 'iOS 12',
      sim: '1',
      pin: '3174 mAh'
    }
  };

  // var Object={
  //   title: 'Sản phẩm',
  //       data: 'haha'
  // }

  res.render('San_pham', {title: 'Sản phẩm', data});
});


router.get('/bucket', function(req, res, next) {
  res.render('Gio_hang', { title: 'Giỏ hàng' });
});

router.get('/logout', function(req, res, next) {
  res.render('Dang_xuat', { title: 'Goodbye!!' });
});

router.get('/editInfo', function(req, res, next) {
  res.render('Sua_thong_tin', { title: 'Sửa thông tin' });
});

module.exports = router;
