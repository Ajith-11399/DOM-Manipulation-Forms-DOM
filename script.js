const container = document.createElement("div");
container.className = 'container';

const row1 = document.createElement("div");
row1.className = 'row text-center align-items-center justify-content-center mt-5 m-1';



 // Form Division Begins // 
const col1 = document.createElement("div");
col1.className = 'col-lg-6 col-md-12 col-sm-12 rounded-3 shadow-lg mt-3 mb-5';

const head1 = document.createElement("h1");
head1.id = 'title';
head1.className = 'pt-4 text-dark-emphasis';
head1.innerText = 'DOM - Form';

const para1 = document.createElement("p");
para1.id = 'description';
para1.innerText = 'Please fill this form!';


 //  Form Fields // 
const form = document.createElement("form");
form.id = 'form';
form.action = '';


 // First Name // 
const col11 = document.createElement("div");
col11.className = 'form-group col-lg-12 col-md-12 col-sm-12 mt-3 mb-3';
const inp11 = document.createElement("input");
inp11.type = 'text';
inp11.id = 'first-name';
inp11.className = 'form-control';
inp11.placeholder = 'Enter your First name';
inp11.setAttribute("aria-label", "First name");
inp11.required = true;


 // Last Name // 
const col12 = document.createElement("div");
col12.className = 'form-group col-lg-12 col-md-12 col-sm-12 mt-3 mb-3';
const inp12 = document.createElement("input");
inp12.type = 'text';
inp12.id = 'last-name';
inp12.className = 'form-control';
inp12.placeholder = 'Enter your Last name';
inp12.setAttribute("aria-label", "Last name");
inp12.required = true;


 // Gender // 
const head4 = document.createElement("h4");
head4.className = ' text-dark-emphasis';
head4.innerText = 'Choose your gender';

const col13 = document.createElement("div");
col13.classList = 'col-lg-4 col-md-12 col-sm-12 mt-3 mb-3';


 // Male // 
const forChe1 = document.createElement("div");
forChe1.classList = 'form-check';

const inp21 = document.createElement("input");
inp21.type = 'radio';
inp21.id = 'male';
inp21.name = 'gender';
inp21.className = 'form-check-input';
inp21.value = 'male';

const lbl21 = document.createElement("label"); 
lbl21.classList = 'form-check-label';
lbl21.setAttribute("for","male");
lbl21.innerText = 'Male';


 // Female // 
const forChe2 = document.createElement("div");
forChe2.className = 'form-check';

const inp22 = document.createElement("input");
inp22.type = 'radio';
inp22.id = 'female';
inp22.name = 'gender';
inp22.className = 'form-check-input';
inp22.value = 'female';

const lbl22 = document.createElement("label"); 
lbl22.className = 'form-check-label';
lbl22.setAttribute("for", "female");
lbl22.innerText = 'Female';


 // Others //  
const forChe3 = document.createElement("div");
forChe3.className = 'form-check';
 
const inp23 = document.createElement("input");
inp23.type = 'radio';
inp23.id = 'others';
inp23.name = 'gender';
inp23.className = 'form-check-input';
inp23.value = 'others';
 
const lbl23 = document.createElement("label"); 
lbl23.className = 'form-check-label';
lbl23.setAttribute("for", "others");
lbl23.innerText = 'Others';


 // Address // 
const col14 = document.createElement("div");
col14.className = 'form-group col-lg-12 col-md-12 col-sm-12 mt-3 mb-3';
const textarea = document.createElement("textarea"); 
textarea.id = 'address';
textarea.className = 'form-control';
textarea.placeholder = 'Enter your Address';
textarea.setAttribute("aria-label", "Address");
textarea.required = true;


 // Pincode // 
const col15 = document.createElement("div");
col15.className = 'form-group col-lg-12 col-md-12 col-sm-12 mt-3 mb-3';
const inp13 = document.createElement("input");
inp13.type = 'text';
inp13.id = 'pincode';
inp13.className = 'form-control';
inp13.placeholder = 'Enter your Pincode';
inp13.setAttribute("aria-label", "Pincode");
inp13.required = true;


 // State // 
const col16 = document.createElement("div");
col16.className = 'form-group col-lg-12 col-md-12 col-sm-12 mt-3 mb-3';
const inp14 = document.createElement("input");
inp14.type = 'text';
inp14.id = 'state';
inp14.className = 'form-control';
inp14.placeholder = 'Enter your State';
inp14.setAttribute("aria-label", "State");
inp14.required = true;


 // Country // 
const col17 = document.createElement("div");
col17.className = 'form-group col-lg-12 col-md-12 col-sm-12 mt-3 mb-3';
const inp15 = document.createElement("input");
inp15.type = 'text';
inp15.id = 'country';
inp15.className = 'form-control';
inp15.placeholder = 'Enter your Country';
inp15.setAttribute("aria-label", "Country");
inp15.required = true;


 // Checkbox // 
const row2 = document.createElement("div");
row2.className = 'row align-items-center justify-content-center m-0 p-3';

const para2 = document.createElement("p");
para2.innerText = 'What are your favorite cars';

const col21 = document.createElement("div");
col21.className = 'col-lg-6 col-md-6 col-sm-6 mt-1 mb-1';

 // BMW // 
const forChe4 = document.createElement("div");
forChe4.className = 'form-check mt-2 mb-2';

const inp24 = document.createElement("input");
inp24.type = 'checkbox';
inp24.id = 'bmwCheckbox';
inp24.className = 'form-check-input';
inp24.value = "";

const lbl24 = document.createElement("label"); 
lbl24.className = 'form-check-label';
lbl24.setAttribute("for", "bmwCheckbox");
lbl24.innerText = 'BMW 740i M Sport';


 // VW // 
const forChe5 = document.createElement("div");
forChe5.className = 'form-check mt-2 mb-1';

const inp25 = document.createElement("input");
inp25.type = 'checkbox';
inp25.id = 'volkswagenCheckbox';
inp25.className = 'form-check-input';
inp25.value = "";
 
const lbl25 = document.createElement("label"); 
lbl25.className = 'form-check-label';
lbl25.setAttribute("for", "volkswagenCheckbox");
lbl25.innerText = 'Volkswagen VIRTUS GT TSI';


const col22 = document.createElement("div");
col22.className = 'col-lg-6 col-md-6 col-sm-6 mt-1 mb-1';

 // PS // 
const forChe6 = document.createElement("div");
forChe6.className = 'form-check mt-2 mb-2';
 
const inp26 = document.createElement("input");
inp26.type = 'checkbox';
inp26.id = 'porscheCheckbox';
inp26.className = 'form-check-input';
inp26.value = "";
 
const lbl26 = document.createElement("label"); 
lbl26.className = 'form-check-label';
lbl26.setAttribute("for", "porscheCheckbox");
lbl26.innerText = 'Porsche GT-3 RS';

 // FORD // 
const forChe7 = document.createElement("div");
forChe7.className = 'form-check mt-2 mb-1';
 
const inp27 = document.createElement("input");
inp27.type = 'checkbox';
inp27.id = 'fordCheckbox';
inp27.className = 'form-check-input';
inp27.value = "";
 
const lbl27 = document.createElement("label"); 
lbl27.className = 'form-check-label';
lbl27.setAttribute("for", "fordCheckbox");
lbl27.innerText = 'FORD Mustang MACH-1';

 // Submit Button // 
const col18 = document.createElement("div");
col18.className = ' class="col-lg-12 col-md-12 col-sm-12 mt-3 mb-3';
const submit = document.createElement("button");
submit.type = 'submit';
submit.id = 'submit';
submit.className = 'btn btn-primary px-5 py-2';
submit.innerText = "Submit"
 // Form Division Ends // 


const head3 = document.createElement("h3");
head3.className = 'mt-5 mb-3';
head3.innerText = 'Fill the above form and see your details here!';


 // Table code Begins // 
const col2 = document.createElement("div");
col2.className = 'col-lg-12 col-md-12 col-sm-12 mt-3 overflow-auto';

const tb = document.createElement("table");
tb.className = 'table';

 // Table head // 
const tbh = document.createElement("thead");
const tro = document.createElement("tr");
tro.className = 'table-dark';

const th1 = document.createElement("th");
th1.innerText = 'First Name';
const th2 = document.createElement("th");
th2.innerText = 'Last Name';
const th3 = document.createElement("th");
th3.innerText = 'Gender';
const th4 = document.createElement("th");
th4.innerText = 'Address';
const th5 = document.createElement("th");
th5.innerText = 'Pincode';
const th6 = document.createElement("th");
th6.innerText = 'State';
const th7 = document.createElement("th");
th7.innerText = 'Country';
const th8 = document.createElement("th");
th8.innerText = 'Cars';

 // Table body // 
const tby = document.createElement("tbody");
tby.className = 'table-primary';
 // Table Code Ends // 

const para3 = document.createElement("p");
para3.className = 'mt-1 mb-3 aj';
para3.innerText = 'Scroll horizontally to view the table details';





forChe1.append(inp21, lbl21);
forChe2.append(inp22, lbl22);
forChe3.append(inp23, lbl23);
forChe4.append(inp24, lbl24);
forChe5.append(inp25, lbl25);
forChe6.append(inp26, lbl26);
forChe7.append(inp27, lbl27);

col21.append(forChe4, forChe5);
col22.append(forChe6, forChe7);

col11.appendChild(inp11);
col12.appendChild(inp12);
col13.append(forChe1, forChe2, forChe3);
col14.appendChild(textarea);
col15.appendChild(inp13);
col16.appendChild(inp14);
col17.appendChild(inp15);
row2.append(para2, col21, col22);
col18.appendChild(submit);

form.append(col11, col12, head4, col13, col14, col15, col16, col17, row2,col18);
col1.append(head1, para1, form);

tro.append(th1, th2, th3, th4, th5, th6, th7, th8);
tbh.appendChild(tro);
tb.append(tbh, tby);
col2.appendChild(tb);


container.appendChild(row1);
row1.appendChild(col1);
row1.appendChild(head3);
row1.appendChild(col2);
row1.appendChild(para3);


document.body.appendChild(container);




// Script for form handling //

const addToTable = document.getElementById("form");

addToTable.addEventListener("submit", function(event) {
    event.preventDefault();

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const address = document.getElementById("address").value;
    const pincode = document.getElementById("pincode").value;
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;

    const cars = [];
    const checkBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkBoxes.forEach(function(checkbox){
        cars.push(checkbox.nextElementSibling.innerText);
    });

    const tableBody = document.querySelector(".table tbody");
    const newRow = tableBody.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);
    const cell8 = newRow.insertCell(7);

    cell1.innerText = firstName;
    cell2.innerText = lastName;
    cell3.innerText = gender;
    cell4.innerText = address;
    cell5.innerText = pincode;
    cell6.innerText = state;
    cell7.innerText = country;
    cell8.innerText = cars.join(", ");

    document.getElementById("form").reset();

})