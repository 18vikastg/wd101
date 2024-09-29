document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const acceptedTerms = document.getElementById('terms').checked ? 'true' : 'false';
    

    const table = document.getElementById('entriesTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    
    const nameCell = newRow.insertCell(0);
    const emailCell = newRow.insertCell(1);
    const passwordCell = newRow.insertCell(2);
    const dobCell = newRow.insertCell(3);
    const termsCell = newRow.insertCell(4);
    
    nameCell.textContent = name;
    emailCell.textContent = email;
    passwordCell.textContent = password;
    dobCell.textContent = dob;
    termsCell.textContent = acceptedTerms;


    document.getElementById('tableContainer').style.display = 'block';
    

    document.getElementById('registrationForm').reset();
});
