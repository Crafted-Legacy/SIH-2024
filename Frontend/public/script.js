const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Toggle between sign-in and sign-up forms
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.addEventListener('DOMContentLoaded', () => {
    const signUpForm = document.querySelector('.sign-up form');
    const signInForm = document.querySelector('.sign-in form');

    // Sign-Up Form Submission
    signUpForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = signUpForm.querySelector('input[type="text"]').value;
        const email = signUpForm.querySelector('input[type="email"]').value;
        const password = signUpForm.querySelector('input[type="password"]').value;

        try {
            const response = await fetch('http://localhost:5000/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password })
            });
            const data = await response.json();
            if (response.status === 201) {
                alert(data.message);
                window.location.href = 'index.html'; // Redirect to index.html after sign-up
            } else {
                alert(data.message);
            }
        } catch (err) {
            console.error(err);
        }
    });

    // Sign-In Form Submission
   
    signInForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = signInForm.querySelector('input[type="email"]').value;
        const password = signInForm.querySelector('input[type="password"]').value;
        
        console.log('Submitting sign-in form:', { email, password });
    
        try {
            const response = await fetch('http://localhost:5000/api/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
    
            console.log('Response:', response);
    
            const data = await response.json();
    
            if (response.ok) {
                localStorage.setItem('token', data.token);
                alert('Signed in successfully');
                window.location.href = 'index.html';
            } else {
                console.error('Server response error:', data.message);
                alert(data.message);
            }
        } catch (err) {
            console.error('Sign-in error:', err);
        }
    });
    
    
});
