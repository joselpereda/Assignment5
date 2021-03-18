// GLOBAL VARIABLES
// var employeeId;
// var employeeName;
// var extension;
// var email;
// var department;
// var submit;

const f = selector => document.querySelector(selector);


// GET DOM ELEMENTS
// const employeeId =            window.document.getElementById("id");
// const employeeName =          window.document.getElementById("name");
// const extension =             window.document.getElementById("ext");
// const email =                 window.document.getElementById("email");
// const department =            window.document.getElementById("department");
// const submit =                window.document.getElementById("submit");

const processEntries = () => {
    const employeeId =              f("#id");
    const employeeName =            f("#name");
    const extension =               f("#ext");
    const email =                   f("#email");
    const department =              f("#department");

   // window.console.log(`ID: ${employeeId}`);
    window.console.log(employeeName);

};

// submit.addEventListener("click", function () {
//     window.console.log(`ID: ${employeeId}`);
// });

//window.console.log(`ID: ${employeeId}`);
// window.console.log("name");
// window.console.log("ext");
// window.console.log("email");
// window.console.log("department");

document.addEventListener("DOMContentLoaded", () => {
    f("#submit").addEventListener("click", processEntries);
});

	
window.addEventListener('load', init);
    function init() {
        let btn = document.getElementById('email');
        btn.addEventListener('click', function () {
            //console.log(employeeId);		
        });	
    }
/*--window.addEventListener('submit', )*/

window.addEventListener('submit', function (e) {
    e.preventDefault();
});

