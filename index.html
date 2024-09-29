
window.onload = function () {
    loadEntriesFromStorage();
  };
  
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

  

    const entry = { name, email, password, dob, terms };
  

    saveEntryToStorage(entry);
  

    addEntryToTable(entry);
    
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
  
  function addEntryToTable(entry) {
    const table = document.getElementById('entriesTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    
    newRow.innerHTML = `
      <td>${entry.name}</td>
      <td>${entry.email}</td>
      <td>${entry.password}</td>
      <td>${entry.dob}</td>
      <td>${entry.terms}</td>
    `;
  }
  

  function saveEntryToStorage(entry) {
    let entries = JSON.parse(localStorage.getItem('entries')) || [];
    entries.push(entry);
    localStorage.setItem('entries', JSON.stringify(entries));
  }
  

  function loadEntriesFromStorage() {
    const entries = JSON.parse(localStorage.getItem('entries')) || [];
    entries.forEach(addEntryToTable);
  }
  
