// GLOBAL VARIABLES
let employeeId;
let employeeName;
let extension;
let email;
let department;
let form;

window.addEventListener('load', () => {

    //GET DOM ELEMENTS
    const $ = (idValue) => {
        return document.getElementById(idValue);
    };

    //GET USER INPUT VALUES
    employeeId =            $("id").value;
    employeeName =          $("name").value;
    extension =             $("extension").value;
    email =                 $("email").value;
    department =            $("department").value;

    //GET THE FORMS'S ID
    form =                  window.document.getElementById("empForm");    

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        console.log('hello world - 1');
        console.log('hello world - 2');
        console.log('hello world - 3');
    });
    
    console.log(employeeName);
});




// const f = selector => document.querySelector(selector);


// // GET DOM ELEMENTS
// // const employeeId =            window.document.getElementById("id");
// // const employeeName =          window.document.getElementById("name");
// // const extension =             window.document.getElementById("ext");
// // const email =                 window.document.getElementById("email");
// // const department =            window.document.getElementById("department");
// // const submit =                window.document.getElementById("submit");

// const processEntries = () => {
//     const employeeId =              f("#id");
//     const employeeName =            f("#name");
//     const extension =               f("#ext");
//     const email =                   f("#email");
//     const department =              f("#department");

//    // window.console.log(`ID: ${employeeId}`);
//     window.console.log(employeeName);

// };

// // submit.addEventListener("click", function () {
// //     window.console.log(`ID: ${employeeId}`);
// // });

// //window.console.log(`ID: ${employeeId}`);
// // window.console.log("name");
// // window.console.log("ext");
// // window.console.log("email");
// // window.console.log("department");

// document.addEventListener("DOMContentLoaded", () => {
//     f("#submit").addEventListener("click", processEntries);
// });

	
// window.addEventListener('load', init);
//     function init() {
//         let btn = document.getElementById('email');
//         btn.addEventListener('click', function () {
//             //console.log(employeeId);		
//         });	
//     }
// /*--window.addEventListener('submit', )*/

// window.addEventListener('submit', function (e) {
//     e.preventDefault();
// });

