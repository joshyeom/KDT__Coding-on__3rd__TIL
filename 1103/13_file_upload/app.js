const express = require('express');
const app = express();
const PORT = 8000;

// multer 설정
const multer = require('multer');
const path = require('path');
const upload = multer({
  dest: 'uploads/',
});
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      // req: 요청에 대한 정보
      // file: 파일에 대한 정보
      // done(에러, 저장경로): 함수
      done(null, 'uploads/'); // 경로설정
    },
    filename(req, file, done) {
      // req: 요청에 대한 정보
      // file: 파일에 대한 정보
      // done: 함수
      const ext = path.extname(file.originalname); // file.originalname에서 "확장자" 추출

      // test
      console.log(file.originalname); // peach.jpg
      console.log(ext); // .jpg
      console.log(path.basename(file.originalname, ext)); // path.basename('peach.jpg', '.jpg') => 'peach'

      done(null, path.basename(file.originalname, ext) + Date.now() + ext); // peach + 123123123123 + .jpg

      // [파일명+현재시간.확장자] 이름으로 바꿔서 파일 업로드
      // 현재시간: 파일명이 겹치는 것을 막기 위함
    },
  }),
  // limits: { fileSize: 5 * 1024 * 1024 },
});
app.use('/uploads', express.static(__dirname + '/uploads')); // upload 폴더 접근 가능하게끔

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function (req, res) {
  res.render('index', { title: '파일 업로드를 배워보자!' });
});

// 1. single(): 하나의 파일 업로드할 때
// single()의 인자: input 태그의 name 값
// single() -> req.file 객체에 파일 정보
// app.post('/upload', upload.single('userfile'), function (req, res) {
app.post('/upload', uploadDetail.single('userfile'), function (req, res) {
  // req.file: 파일 업로드 성공 결과 (파일 정보)
  //   {
  //     fieldname: 'userfile', // 폼에 정의된 name
  //     originalname: 'lime.jpg', // 원본 파일명
  //     encoding: '7bit', // 파일 엔코딩 설정
  //     mimetype: 'image/jpeg', // 파일 타입
  //     destination: '/uploads', // 파일을 저장할 경로(폴더)
  //     filename: 'ca4bf3fc96ddca589949f033caac30cd', // destination에 저장된 파일명
  //     path: '\\uploads\\ca4bf3fc96ddca589949f033caac30cd', // 업로드된 파일 전체 경로
  //     size: 97296 // 파일 크기 (byte)
  //   }
  console.log(req.file);

  // req.body: title 데이터 정보 확인 가능
  // [Object: null prototype] { title: 'lime!!!!' }
  console.log(req.body);

  res.send('Uploads!');
});

// 2. array(): 여러 파일을 하나의 input에 업로드할 때
// array() -> req.files 객체에 파일 정보
app.post('/upload/array', uploadDetail.array('userfiles'), function (req, res) {
  console.log(req.files); // [ {}, {}, {}, {} ] 형식으로 파일 정보 확인
  console.log(req.body); // [Object: null prototype] { title: '과일들...' }
  res.send('Uploaded Multiple!!!');
});

// 3. fields(): 여러 파일을 각각의 input에 업로드할 때
app.post(
  '/upload/fields',
  uploadDetail.fields([{ name: 'userfile1' }, { name: 'userfile2' }]),
  function (req, res) {
    console.log(req.files); // { userfile1: [{}], userfile2: [{}] }
    console.log(req.body); // { title1: 'aaa', title2: 'bbb' }
    res.send('Upload Multiple Each!!!');
  }
);

// 4. 동적 파일 업로드
app.post(
  '/dynamicFile',
  uploadDetail.single('dynamicFile'),
  function (req, res) {
    console.log(req.file);
    res.send(req.file);
  }
);

app.listen(PORT, function (req, res) {
  console.log(`http://localhost:${PORT}`);
});
