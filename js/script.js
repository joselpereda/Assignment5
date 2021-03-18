// GLOBAL VARIABLES
let employeeId;
let employeeName;
let extension;
let email;
let department;
let form;

// HANDLE FORM EVENT
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

    //PREVENT DEFAULT SUBMIT BUTTON BEHAVIOR
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // INSTEAD PRINT FORM INPUT VALUES TO THE CONSOLE
        // DID NOT WORK IF USED VARIALBE NAMES LISTED ABOVE. NOT SURE WHY.
        // USED $().value instead
        console.log("Some messages have been moved to the Issues panel.");
        console.log(`ID: ${$('id').value}`);
        console.log(`Name: ${$('name').value}`);
        console.log(`Extension: ${$('extension').value}`);
        console.log(`Email: ${$('email').value}`);
        console.log(`Department: ${$('department').value}`);
    });

});

