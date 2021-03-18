// GLOBAL VARIABLES
let employeeId;
let employeeName;
let extension;
let email;
let department;
let form;

window.addEventListener('load', () => {

    //GET DOM ELEMENTS
    const $ = (id) => {
        return document.getElementById(id);
    };

    //GET USER INPUT VALUES
    employeeId =            $('id').value;
    employeeName =          $('name').value;
    extension =             $('extension').value;
    email =                 $('email').value;
    department =            $('department').value;

    //GET THE FORMS'S ID
    form =                  $('empForm');    

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        console.log("Some messages have been moved to the Issues panel.");
        console.log(`ID: ${employeeId}`);
        console.log(`Name: ${employeeName}`);
        console.log(`Extension: ${extension}`);
        console.log(`Email: ${email}`);
        console.log(`Department: ${department}`);
    });

});

