// Biến variable   
// Biến giúp lưu trữ giá trị để có thể tái sử dụng ở nhiều nơi 
var xinChao = 'Hello Bao';
console.log(xinChao);
console.log(xinChao);
console.log(xinChao);
var hoTen ='Truc Nhi';
console.log(hoTen)
var soA ='so mot';

/**ghi chú nhiều dòng 
 * dùng thông qua dấu*
 * 
 */

// Kiểu dữ liệu ( Data Type)
// String (Chuỗi)
var chuoiA = "Tôi là chuỗi";
var chuoiB ="Tôi là chuỗi";
console.log(chuoiB);

//Number (Số)
var soA = 35;

//Kiểu luận lý (Boolean)
var anhDung = true; //đúng
var emSai = false; //sai

//----------------------Toán tử------------------
var diemToan = 8;
var diemVan = 6;
// Hãy dùng điểm toán và văn để tính ra điểm trung bình
// Phép + chuỗi  : "8" + 6 = "86"
var diemTrungbinh =( diemToan + diemVan ) / 2
console.log(diemTrungbinh);

//----------Lấy phần dư (%)---------
var diemSinh = 8
var diemHoa = 8 
//Yêu cầu tính ra điểm trung bình của 2 môn trên và kiểm tra xem đó là số chẵn hay lẻ
var ketQua =(diemSinh + diemHoa) /2 ;
var chiaLayDu = 7 % 2;
console.log (chiaLayDu);

//phép tăng và phép giảm (++ --)
var diemSo = 20;
diemSo =21;
diemSo++;
diemSo--;
console.log(diemSo);

var diemTong =26 ;
// diemTong = 1 + diemTong;
diemTong += 1 ;
// diemTong = diemTong - 20 
diemTong -= 20;
console.log(diemTong);

const TIEN_LUONG = 300000;
var tienLuong = 300000;
tienLuong = 900000;
console.log(Math.PI)

//Bài tập luyện mô hình 3 khối 
// Viết chương trình nhận một số có 3 ký số và tính tổng của 3 ký số đó

/**Đầu vào : Một số tự nhiên có 3 ký số
 * 
 * Các bước xử lí : 456 ==> 4,5,6
 * Lấy ra kí số ở hàng trăm =>> soA / 100 =>> làm tròn xuống
 * Lấy ra kí số ở hàng chục =>> soA % 100 =>> 56/10 =>> làm tròn xuống
 * Lấy ra kí số ở hàng đơn vị =>> soA % 10 
 * Cộng tổng 3 ký số lại với nhau
 * 
 * Đầu ra: Kết quả là tổng của 3 ký số
 * 
 */


var soA = 456;
// Math.floor hỗ trợ làm tròn xuống các đơn vị 
var hangTram = Math.floor(soA /100) ; // 4.56
console.log(hangTram);

var hangChuc = Math.floor((soA % 100) /10) ;

var hangDonVi = soA % 10;

var tong = hangTram + hangChuc + hangDonVi;
console.log(tong);

// bài tập tính độ dài cạnh huyền khi biết 2 cạnh góc vuông
/**Mô hình
 * Đầu vào: Đây là tam giác vuông, độ dài của 2 cạnh góc vuông
 * 
 * 
 * 
 * Các bước xử lí: Định lý py-ya-go =>> canhHuyen * canhHuyen = canhA * canhA + canhB * canhB
 * 
 * 
 * Đầu ra : Trả về kết quả chiều dài cạnh huyền
 * 
 * 
 */


var canhA=3;
var canhB=4;
var tongBinhPhuong =Math.pow(canhA,2) + Math.pow(canhB,2);
console.log(tongBinhPhuong);
var canhHuyen = Math.sqrt(tongBinhPhuong);
console.log(canhHuyen);

var a = 3;
var b = 1 ;
a += b;
b= (b++) + (a++);
console.log(a);
console.log(b);