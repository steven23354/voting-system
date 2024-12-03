 // JavaScript to handle voting logic
 const votes = { 
    'Option A': 0, 
    'Option B': 0, 
    'Option C': 0 
};

function vote(option) {
    // Increment the vote count
    votes[option]++;
    
    // Update the results in the UI
    document.getElementById('votesA').textContent = votes['Option A'];
    document.getElementById('votesB').textContent = votes['Option B'];
    document.getElementById('votesC').textContent = votes['Option C'];
}
//javascript to handle regidtrationForm logic
 // If all validations pass

 if (isValid) {
    alert('Registration successful!');
    document.getElementById('registrationForm').submit();//this submits the form programmatically
  }