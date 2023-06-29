// product: id, img, title, content, price, unit
// listProduct = [product1, product2,...]

var listProduct = [
    {
        id: 1,
        image: "https://devmaster.edu.vn/uploads/images/course/java_form.jpg",
        title: "sản phẩm 1",
        content: "nội dung sản phẩm 1",
        price: "1.000.000",
        unit: "vnđ"
    },
    {
        id: 2,
        image: "https://devmaster.edu.vn/uploads/images/course/java_web.jpg",
        title: "Sản phẩm 2",
        content: "nội dung sản phẩm 2",
        price: "2.000.000",
        unit: "$"
    },
    {
        id: 3,
        image: "https://devmaster.edu.vn/uploads/images/2022/Devmaster-frontend%20(1).png",
        title: "sản phẩm 3",
        content: "nội dung sản phẩm 3",
        price: "3.000.000",
        unit: "vnđ"
    },
    {
        id: 4,
        image: "https://devmaster.edu.vn/uploads/images/course/php.jpg",
        title: "javascript",
        content: "nội dung sản phẩm javascript",
        price: "1.500.000",
        unit: "$"
    },
    {
        id: 5,
        image: "https://devmaster.edu.vn/uploads/images/course/asp.jpg",
        title: "HTML",
        content: "Chào mừng bạn đến với học phần HTML",
        price: "5.000.000",
        unit: "vnđ"
    },
    {
        id: 6,
        image: "https://devmaster.edu.vn/uploads/images/course/csharp.jpg",
        title: "CSS",
        content: "Chào mừng bạn đến với học phần Css",
        price: "5.000.000",
        unit: "vnđ"
    },
    {
        id: 7,
        image: "https://devmaster.edu.vn/uploads/images/course/csharp.jpg",
        title: "CSS",
        content: "Chào mừng bạn đến với học phần Css",
        price: "5.000.000",
        unit: "vnđ"
    },
    {
        id: 8,
        image: "https://devmaster.edu.vn/uploads/images/course/csharp.jpg",
        title: "CSS",
        content: "Chào mừng bạn đến với học phần Css",
        price: "5.000.000",
        unit: "vnđ"
    },
    {
        id: 9,
        image: "https://devmaster.edu.vn/uploads/images/course/csharp.jpg",
        title: "CSS",
        content: "Chào mừng bạn đến với học phần Css",
        price: "5.000.000",
        unit: "vnđ"
    },
    {
        id: 10,
        image: "https://devmaster.edu.vn/uploads/images/course/csharp.jpg",
        title: "CSS",
        content: "Chào mừng bạn đến với học phần Css",
        price: "5.000.000",
        unit: "vnđ"
    },
    {
        id: 11,
        image: "https://devmaster.edu.vn/uploads/images/course/php.jpg",
        title: "javascript",
        content: "nội dung sản phẩm javascript",
        price: "1.500.000",
        unit: "$"
    },
    {
        id: 12,
        image: "https://devmaster.edu.vn/uploads/images/course/php.jpg",
        title: "javascript",
        content: "nội dung sản phẩm javascript",
        price: "1.500.000",
        unit: "$"
    },
    {
        id: 13,
        image: "https://devmaster.edu.vn/uploads/images/course/php.jpg",
        title: "javascript",
        content: "nội dung sản phẩm javascript",
        price: "1.500.000",
        unit: "$"
    },
    {
        id: 14,
        image: "https://devmaster.edu.vn/uploads/images/course/php.jpg",
        title: "javascript",
        content: "nội dung sản phẩm javascript",
        price: "1.500.000",
        unit: "$"
    },
    {
        id: 15,
        image: "https://devmaster.edu.vn/uploads/images/course/php.jpg",
        title: "javascript",
        content: "nội dung sản phẩm javascript",
        price: "1.500.000",
        unit: "$"
    }

];

// b1: xây dựng dữ liệu
// b2: xác định dữ liệu cần hiển thị => khởi tạo và render giao diện

function setListProduct(arr){
    $('#list-product').html('');
    for(let i = 0; i < arr.length; i++){
        //arr[i]
        setProduct(arr[i]);
    }
}
function setProduct(product){
    var view =  `<div class=" col-6 col-lg-3 mb-3">
                    <div class="card product" >
                        <img src="${product.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.content}</p>
                        <p class="text-center"> 
                            <span>${product.price}</span>
                            <span> ${product.unit}</span>
                        </p>
                        </div>
                    </div>
                </div>`;
    $('#list-product').append(view);
}
setListProduct(listProduct);

function setListProductSearch(){
    debugger;
    var search = $('#search').val().toLowerCase();
    $('#list-product').html('');
    for(let i = 0; i < listProduct.length; i++){
        //arr[i]
        if(listProduct[i].title.toLowerCase().includes(search)){
            setProduct(listProduct[i]);

        }
    }
}

var pageSize = 4;
function setListProductPage(start){
    $('#list-product').html('');
    for(let i = start; (i < (start + pageSize)) && (i < listProduct.length); i++){
        //arr[i]
        setProduct(listProduct[i]);
    }
}

// pageNumber: 1 => 0-3
// pageNumber: 2 => 4-7
// pageNumber: 3 => 8-11



// b1: tổng số trang - (product length)/(pagesize): 5 =có 5 trang
//                                                  5.123 => có 6 trang
// b2: set view và render view: 