let title = document.getElementById(`title`);
let price = document.getElementById(`price`);
let taxes = document.getElementById(`taxes`);
let ads = document.getElementById(`ads`);
let discount = document.getElementById(`discount`);
let total = document.getElementById(`total`);
let count = document.getElementById(`count`);
let category = document.getElementById(`category`);
let submit = document.getElementById(`submit`);
let mood = `update`;
let dataProduct=[];
let searchTitle = document.getElementById(`searchTitle`);
let search =document.getElementById(`search`);








/  get total  ///




    if (localStorage.product != null) {
    let save=  localStorage.getItem.dataProduct = JSON.stringify(localStorage.product);
        table.innerHTML= save;
    }
    else {
    dataProduct = [];
    }

function getTotal(){

    if(price.value!=``)
    {

        let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHTML=result;
        total.style.background=`green`;

    }
    else{

        total.style.background = `red`;

    }


};



///  create product  ///



submit.onclick=function(){


    if(title.value !=""){





        let newProduct = {

            title: title.value,
            price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value,

    };


    dataProduct.push(newProduct);
    // localStorage.setItem(`product`, JSON.stringify(dataProduct));

    showData();



clearInputs();


}
};


/// clear inputs  ///

function clearInputs() {



    title.value = ``;
    price.value = ``;
    taxes.value = ``;
    ads.value = ``;
    discount.value = ``;
    total.innerHTML = ``;
    count.value = ``;
    category.value = ``;



}



/// read data  ///


function showData(){

    let table=``;


    for(let i = 0; i<dataProduct.length;i++)

        {
            table += `
                <tr>
                    <td>${i}</td>
                    <td>${dataProduct[i].title}</td>
                    <td>${dataProduct[i].price}</td>
                    <td>${dataProduct[i].taxes}</td>
                    <td>${dataProduct[i].ads}</td>
                    <td>${dataProduct[i].discount}</td>
                    <td>${dataProduct[i].total}</td>
                    <td>${dataProduct[i].count}</td>
                    <td>${dataProduct[i].category}</td>
                    <td><button onclick="updateData(${i})">update</button></td>
                    <td><button id="delete" onclick="deleteData(${i})">delete</button></td>

                </tr>
            `;
        }

    document.getElementById(`tbody`).innerHTML=table;

        tbody.style.background=`green`


};



///  delete data  ///



function deleteData(i){


    dataProduct.splice(i,1)
    showData();



}



///  update data  ///




function updateData(i){

    title.value=dataProduct[i].title;
    price.value = dataProduct[i].price;
    taxes.value = dataProduct[i].taxes;
    ads.value = dataProduct[i].ads;
    discount.value = dataProduct[i].discount;
    total.value = dataProduct[i].total;
    count.value = dataProduct[i].count;
    category.value = dataProduct[i].category;

    deleteData();
};





///  serch in data  ///

function data(value){

    if(search.value !=``)
            {
                let table=``;

        for(let i =0; i<dataProduct.length; i++)
        {

            if(dataProduct[i].title.includes(value) )
            {
                table += `

                        <td>${i}</td>
                        <td>${dataProduct[i].title}</td>
                        <td>${dataProduct[i].price}</td>
                        <td>${dataProduct[i].taxes}</td>
                        <td>${dataProduct[i].ads}</td>
                        <td>${dataProduct[i].discount}</td>
                        <td>${dataProduct[i].total}</td>
                        <td>${dataProduct[i].count}</td>
                        <td>${dataProduct[i].category}</td>
                        <td><button onclick="updateData(${i})">update</button></td>
                        <td><button id="delete" onclick="deleteData(${i})">delete</button></td>
                `;
                document.getElementById(`tbody`).innerHTML = table;
                    tbody.style.background = `red`;
                }

            }
        }

        else{
            tbody.style.background = `green`;
            showData();
        }


};
