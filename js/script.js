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

