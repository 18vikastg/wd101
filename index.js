document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const terms = document.getElementById('terms').checked;
  
    
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    
    const age = calculateAge(new Date(dob));
    if (age < 18 || age > 55) {
      alert('Only users between 18 and 55 years old are allowed.');
      return;
    }
  
    
    addEntryToTable(name, email, password, dob, terms);
    
    
    document.getElementById('registrationForm').reset();
  });
  
  
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  }
  
  
  function calculateAge(dob) {
    const diff = Date.now() - dob.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  
  
  function addEntryToTable(name, email, password, dob, terms) {
    const table = document.getElementById('entriesTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    
    newRow.innerHTML = `
      <td>${name}</td>
      <td>${email}</td>
      <td>${password}</td>
      <td>${dob}</td>
      <td>${terms}</td>
    `;
  }
  
