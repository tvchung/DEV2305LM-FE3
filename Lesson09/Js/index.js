//I, Biến trong JS
// Khai báo biến
    // các kiểu dữ liệu thường dùng: dạng số : int, float, double,...   |
    //                                  chuỗi: string                   |   giá trị của biến phụ thuộc và kiểu dữ liệu
    //                                  ngày tháng: date time           |

    //                                  tự định nghĩa: var, let         |   kiểu dữ liệu của biến sẽ phụ thuộc vào giá trị được gán 

var a1 = "5";
var b2 = "javascript";
// int b = 5

    // phạm vi - mức độ ảnh hưởng của biến: toàn cục - cục bộ

    // sử dụng biến: gọi đúng tên biến

    console.log(a1);
    console.log(b2);



// II, Toán tử
//, Các phép tính cơ bản: +, -, * , / , % => trả về các giá trị số học
//, Các phép toán so sánh, toán hạng: >, < , >=, <=, !, &&, ||, ===    => trả về các giá trị true / false

// Một số lưu ý: 
// với phép +:  số + số = số | chuỗi + chuỗi = chuỗi | chuỗi + số = chuỗi
var x = 10;
var y = 100;
var z = "1000";

var xy = x + y;
var xz = x + z;
console.log("giá trị của xy là: ", xy);
console.log("giá trị của xz là: ", xz);

// với phép só sánh ===  : ngoài kiểm tra về giá trị thì còn kiểm tra và kiểu dữ liệu
var m = 10;
var n = 10;
var p = "10";

if(m === n){
    console.log("m và n bẳng nhau");
}else{
    console.log("m và n không bẳng nhau");

}
if(m === p){
    console.log("m và p bẳng nhau");
}else{
    console.log("m và p không bẳng nhau");

}
if(m == p){
    console.log("m và p bẳng nhau: 2 dấu bằng");
}else{
    console.log("m và p không bẳng nhau: 2 dấu bằng");

}
if(m == n){
    console.log("m và n bẳng nhau: 2 dấu bằng");
}else{
    console.log("m và n không bẳng nhau: 2 dấu bằng");

}


// III, Cấu trúc điều kiện
    // if - else
    // cú pháp
    // if(điều_kiện){
    //     ... javacript .. :   được thực thi nếu điều_kiên trả về true
    // }
    // else{
    //   ... js ....             được thực thi nếu điều_kiên trả về false
    //}

    // swicth - case
    // cú pháp: 
    // swicth(điều_kiện)
    //    case <điều_kiện_1>: 

// bài tập: biện luận số nghiệm của phương trình bậc nhất một ẩn
// có dạng:   a*x + b = 0 (với mọi a) ===> x = -b/a


// b1: khai báo và gán gái trị cho biến a và b
// b2: kiểm tra giá trị của a:
//          a = 0  => ....      | console.log("số nghiệm cảu phương trình là: 1 0 vố số")
//          a != 0 => ....      |

var a = 0;
var b = 0;

if(a == 0){ // ==> 0*x + b = 0
    if(b == 0){  // ==> 0*x + 0 = 0
        console.log("phương trình có vô số nghiệm");
    }else{ // 0*x + b = 0
        console.log("phương trình có vô nghiệm");
    }
}else{ // a*x + b = 0 ==> x = -b/a
    console.log("phương trình có một nghiệm là: ", (-b)/a);
}

// bài tập: biện luận số nghiệm của phương trình bậc nhất một ẩn
// có dạng:   a*x2 + b*x + c = 0 (với mọi a)





// vòng lặp: for & while-do

// cấu trúc - cú pháp: 
    // for(<khởi tạo biến đếm>; <điều_kiện>; <thực thi>){ 
    //      .. js ..
    //}

// vòng đời:
// b1: vào biến đếm
// b2: kiểm tra điều kiện
//      nếu điều kiện: true  => chạy thân for => <thực thi> ==> quay về b2
//      nếu điều_kiện: false =>  dừng lại - kết thúc vòng for


// log ra màn console tất cả các giá trị từ 1 đến 10
var k = 1;
console.log("giá trị hiển thị: ", k);
k = k +1;
console.log("giá trị hiển thị: ", k);
k++;
console.log("giá trị hiển thị: ", k);
k++;
console.log("giá trị hiển thị: ", k);
k++;
console.log("giá trị hiển thị: ", k);
k++;
console.log("giá trị hiển thị: ", k);
k++;
console.log("giá trị hiển thị: ", k);
k++;
console.log("giá trị hiển thị: ", k);

for(var i = 1; i <= 10 ; i++){
    console.log("giá trị hiển thị i là: ", i);
}

// log ra màn console tất cả các giá trị là số chẵn từ 1 đến 10

for(var i = 1; i <= 10 ; i++){
   if(i % 2 == 0){
        console.log("giá trị chẵn hiển thị là: ", i);  
   }
}

// log ra màn console tổng tất cả các giá trị là số chẵn từ 1 đến 10
var sum = 0;
for(var i = 1; i <= 10 ; i++){
    debugger;
    if(i % 2 == 0){
       sum =  sum + i;
    }
}
console.log("tổng tất cả các giá trị là số chẵn từ 1 đến 10: ", sum);  


// log ra màn console tích tất cả các giá trị là số lẻ từ 1 đến 10