function foo() {
    var FirstName = document.getElementById("FirstName").value; 
    var Middlename = document.getElementById("Middlename").value;
    var Lastname = document.getElementById("Lastname").value;
    var Email = document.getElementById("Email").value;
    var Phonenumber = document.getElementById("Phonenumber").value;
    console.log(`
                 FirstName:${FirstName} 
                 Middlename:${Middlename}
                 Lastname:${Lastname} 
                 Email:${Email}
                 Phonenumber:${Phonenumber}`);
}