document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById('registrationForm');
  
    registrationForm.addEventListener('submit', function(event) {
      event.preventDefault();
      if (validateForm()) {
        // Perform form submission
        console.log('Form submitted successfully');
        registrationForm.reset();
      }
    });
  
    function validateForm() {
      const fullname = document.getElementById('fullname').value;
      const contact = document.getElementById('contact').value;
      const dob = document.getElementById('dob').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const gender = document.getElementById('gender').value;
  
      // Perform validation here
      if (fullname === '' || contact === '' || dob === '' || email === '' || password === '' || gender === '') {
        alert('Please fill in all fields');
        return false;
      }
  
      return true;
    }
  });
  