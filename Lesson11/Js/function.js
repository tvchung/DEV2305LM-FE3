


// mục đích: xử lý các tác vụ cụ thể
// lưu ý: trước khi xây dựng 1 function thì cần phân tích các bước định làm (cần thực hiện)
// cú pháp: 
    // function funtionName(param_input){
    //     .. js ..
    // }
    // chú ý: Main(int a)   | không cần phải khai báo datatype
    //        Main(a)       |

    // function => return hoặc ko cần return

// vd: viết 1 hàm tính toán tổng giá trị của 2 số bất kỳ

var a = 15;
var b = 30;
function sum(){
    var s = a + b;
    alert("tổng hai số là: " + a + " + " + b + " = " + s );
}

// sum();

function sum_input(m , n){
    var s = parseInt(m) + parseInt(n);
    alert("tổng hai số là: " + m + " + " + n + " = " + s );
}

a = 50;

//sum_input(80, "90");
// => cần kiểm soát kiểu dữ liệu dạng number
// => kiểm soát phạm vi của các biến sử dụng: toàn cục - cục bộ

var arr = [5 , 6 , 8 , "10", "50", 80];
// xây dựng hàm tính tổng tất cả các giá trị trong mảng arr

// b1, khởi tạo biến chứa tổng                          | xác định là biến toàn cục/cục bộ
// b2, lặp và lấy được tất cả các giá trị trong mảng    | xem xét sử dụng vòng lặp gì?
// b3, lặp đến đâu thì cộng dồn đến đấy                 | đảm bảo được tất cả phần tử có dạng số

var total = 0;
function sumArr(arrInput){
    for (let index = 0; index < arrInput.length; index++) {
        total = convertStrToNumber(arrInput[index]) + total;
    }
    console.log("tổng của mảng là: " , total)
}

function convertStrToNumber(a){
    return parseInt(a);
}
//sumArr(arr)

// yêu cầu: khi ng dùng click vào button lưu => log ra màn hình các thông tin ng dùng đã nhập
// b1: xây dựng hàm hiển thị thông tin
// b2: xấy dựng hàm: - đón giá trị trong từng ô input khi ng dùng bấm lưu
//                   - log thông tin

function showInfor(){
    var fullName = document.getElementById("fullName").value;
    var age = document.getElementById("age").value;
    console.log("thông tin người dùng là: tên - " + fullName + " ; tuổi - " + age );
}


// object
// Khái niệm: được xây dựng từ các thuộc tính
// vd: people - name : "dev",
//            - age : "20",
//            - gen : "nam"
//            - address: "HN"

// cú pháp khai báo: 
    var people = new Object();
    people.name = "dev";
    people.age = 20;
    people.gen = "Nam";
    people.address = "HN";

    var people2 = {
        name : "dev 2",
        age  : 23,
        gen  : "Nữ",
        address : "HP"
    }
    people2.age = 50;

// array object => một mảng với các phẩn tử là object
//array: tập hợp của các phần tử [1 ,"1", [1, 2], {name: "dev"}]
var arrObj = [people, people2];
// để tương tác với một giá trị thuộc tính của phần tử trong arrObj thì cần:
// Xác định: vị trí của phẩn tử trong mảng
//           thuộc tính cần tương tác

// yêu cầu: thay đổi thuộc tính gen của people2 thành "Nam"

arrObj[1].gen = "nam";


// tạo một array object chứa thông tin của các user;
// sử dụng form check xem có tồn tại thông tin user hay ko

var listUser = [
    {
        username : "HTML",
        age : 2020,
        pass : "123456"
    },
    {
        username : "JS",
        age : 2020,
        pass : "123456"
    },
    {
        username : "JAVASCRIPT",
        age : 2020,
        pass : "1234567"
    },
    {
        username : "CSS",
        age : 2020,
        pass : "123456"
    },
    {
        username : "huynhduc752",
        age : 2020,
        pass : "123456789"
    }
]
function checkInfor(){
    var username = document.getElementById('userName').value;
    var password = document.getElementById('pass').value;
    var check =false;
    if(username == "" || password == ""){
        alert("Tên đăng nhập và mật khẩu không được để trống");
        return;
    }
    for(let i = 0; i < listUser.length ; i++){
        if(username == listUser[i].username && password == listUser[i].pass){
            check = true;
        }
    }

    if(check == false){
       listUser.push({
        username : username,
        age : 2020,
        pass : password
       })
        
    } else{
        alert("username và password hoàn toàn chính xác");
    }
}

// tạo một array object chứa thông tin của các user;
// sử dụng form check xem có tồn tại thông tin user hay ko 
// và chỉ kiểm tra khi người dùng không để trông tên đăng nhập và mật khẩu
// nếu bỏ sót => hiển thị thông báo
// nếu đã tồn tại: => thông báo : đã tồn tại
// nếu chưa có => insert thông tin vừa nhập vào listUser

var demo =
{
    username : "CSS",
    age : 2020,
    pass : "123456"
}
listUser.push(demo);

// bài toán tìm kiếm : cho 1 tập hợp gồm n số tự nhiên; tìm xem trong hợp có chưa 
// số x cho trước hay không