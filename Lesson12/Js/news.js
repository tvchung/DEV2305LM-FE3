// ứng dụng sử dụng jquery 
// cách sử dụng:
// đặc điểm giữa JS và Jquery

// document             $
// .get...              ('selector').action()

// b1: xác định được phần tử cần tương tác $(selector)  vd: $('h2')         |  $('h2').show();
// b2: thực hiện thao tác:   action()                   vd: .show() .hide() |  $('h2').hide();


var view = `<div class="news-item w-30">
                <div class="news-img">
                    <img src="../images/14_ Am tra 1 coc.png" alt="item">
                </div>
                <div class="news-content">
                    <div class="news-title">
                        <h4>Cách sử dụng trà thảo dược mang lại ách sử dụng trà thảo dược mang lại ách sử dụng trà thảo dược mang lại ách sử dụng trà thảo dược mang lại hiệu quả tốt cho sức khỏe</h4>
                    </div>
                    <div class="news-desc">
                        <p>
                        Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có...
                        Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có...
                        Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có...
                        </p>
                    </div>
                </div>
            </div>`;
// for(let j = 0; j < 3; j++){
//     $('.list-news').append(view);
// }
$('.list-news').css('flex-wrap', 'wrap');

var arrNews = [
    {
        image: "../images/14_ Am tra 1 coc.png",
        title: "Cách sử dụng trà thảo dược mang lại ách sử dụng trà thảo dược mang",
        content: "Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có"
    },
    {
        image: "../images/15_ Coc tra 1(1).png",
        title: "2 Cách sử dụng trà thảo dược mang lại ách sử dụng trà thảo dược mang",
        content: "Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có"
    },
    {
        image: "../images/14_ Am tra 1 coc.png",
        title: " 3Cách sử dụng trà thảo dược mang lại ách sử dụng trà thảo dược mang",
        content: "Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có"
    },
    {
        image: "../images/14_ Am tra 1 coc.png",
        title: " 4 Cách sử dụng trà thảo dược mang lại ách sử dụng trà thảo dược mang",
        content: "Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có"
    },
    {
        image: "../images/14_ Am tra 1 coc.png",
        title: " 4 Cách sử dụng trà thảo dược mang lại ách sử dụng trà thảo dược mang",
        content: "Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có"
    },
    {
        image: "../images/14_ Am tra 1 coc.png",
        title: " 4 Cách sử dụng trà thảo dược mang lại ách sử dụng trà thảo dược mang",
        content: "Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có"
    },
    {
        image: "../images/14_ Am tra 1 coc.png",
        title: " 4 Cách sử dụng trà thảo dược mang lại ách sử dụng trà thảo dược mang",
        content: "Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có"
    },
    {
        image: "../images/14_ Am tra 1 coc.png",
        title: " 4 Cách sử dụng trà thảo dược mang lại ách sử dụng trà thảo dược mang",
        content: "Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có"
    },
    {
        image: "../images/14_ Am tra 1 coc.png",
        title: " 4 Cách sử dụng trà thảo dược mang lại ách sử dụng trà thảo dược mang",
        content: "Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có"
    },
    {
        image: "../images/14_ Am tra 1 coc.png",
        title: " 4 Cách sử dụng trà thảo dược mang lại ách sử dụng trà thảo dược mang",
        content: "Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có"
    },
    {
        image: "../images/14_ Am tra 1 coc.png",
        title: " 4 Cách sử dụng trà thảo dược mang lại ách sử dụng trà thảo dược mang",
        content: "Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có"
    },
    {
        image: "../images/14_ Am tra 1 coc.png",
        title: " 4 Cách sử dụng trà thảo dược mang lại ách sử dụng trà thảo dược mang",
        content: "Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có"
    },
    {
        image: "../images/14_ Am tra 1 coc.png",
        title: " 4 Cách sử dụng trà thảo dược mang lại ách sử dụng trà thảo dược mang",
        content: "Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có"
    },
    {
        image: "../images/14_ Am tra 1 coc.png",
        title: " 4 Cách sử dụng trà thảo dược mang lại ách sử dụng trà thảo dược mang",
        content: "Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có"
    },
    {
        image: "../images/14_ Am tra 1 coc.png",
        title: " 4 Cách sử dụng trà thảo dược mang lại ách sử dụng trà thảo dược mang",
        content: "Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có"
    },
    {
        image: "../images/14_ Am tra 1 coc.png",
        title: " 4 Cách sử dụng trà thảo dược mang lại ách sử dụng trà thảo dược mang",
        content: "Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có"
    },
    {
        image: "../images/14_ Am tra 1 coc.png",
        title: " 4 Cách sử dụng trà thảo dược mang lại ách sử dụng trà thảo dược mang",
        content: "Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có"
    },
    {
        image: "../images/14_ Am tra 1 coc.png",
        title: " 4 Cách sử dụng trà thảo dược mang lại ách sử dụng trà thảo dược mang",
        content: "Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có"
    },
    {
        image: "../images/14_ Am tra 1 coc.png",
        title: " 4 Cách sử dụng trà thảo dược mang lại ách sử dụng trà thảo dược mang",
        content: "Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có"
    }
];
// ""; ''; 1231; []; {}; ``;
// arrNews.length = 19; => index max = 18
var pageNumber = 4;
var pageSize = 5; 
// 1: 0-> 4
// 2: 5-> 9
// 3: 10 - 14
// 4: 15-18

// yêu cầu hiển thị các sản phẩm ở trang số 4
// for(let j = 0; j < arrNews.length; j++){
// for(let j = 15; j < 19; j++){
//     let view2 = `<div class="news-item w-30">
//                     <div class="news-img">
//                         <img src="${arrNews[j].image}" alt="item">
//                     </div>
//                     <div class="news-content">
//                         <div class="news-title">
//                             <h4>${arrNews[j].title}</h4>
//                         </div>
//                         <div class="news-desc">
//                             <p>
//                             ${arrNews[j].content}
//                             </p>
//                         </div>
//                     </div>
//                 </div>`;
//     debugger;
//     $('.list-news').append(view2);
// }


// b1: xác định mảng dữ liệu cần view
// b2: lặp ra các phần tử thỏa mãn trong mảng để khởi tạo view => append

function checklist(){
    debugger;
    var search =  $('#search').val();
    $('.list-news').html('');
    for(let i = 0; i < arrNews.length; i++){
        if(arrNews[i].title.includes(search)){
            let view2 = `<div class="news-item w-30">
                        <div class="news-img">
                            <img src="${arrNews[i].image}" alt="item">
                        </div>
                        <div class="news-content">
                            <div class="news-title">
                                <h4>${arrNews[i].title}</h4>
                            </div>
                            <div class="news-desc">
                                <p>
                                ${arrNews[i].content}
                                </p>
                            </div>
                        </div>
                    </div>`;
            $('.list-news').append(view2);
        }
       
    }
}


// thực hành tạo phân trang và tìm kiếm với jquery

// caching: 
var bien_toan_cuc = "str";
var bien_cuc_bo = "123";
var cache = "555"; 

localStorage.setItem("dev", "javascript");
var x = localStorage.getItem("dev"); //==> x = 'javascript'

//Tổng kết: mục đích & ý nghĩa jquery
//          cú pháp: b1: khai báo thư viện: $ is not define
//                   b2: $('selector').action(); *
//          tương tác với array object *
//*) gán giá trị html cho một biến :  ``;
//*) gán giá trị của biến trên một chuỗi html:  ${tham_số} *