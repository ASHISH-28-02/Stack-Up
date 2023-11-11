// Initialize Firebase Authentication
const auth = firebase.auth();

function authenticate() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log('User logged in:', userCredential.user);

            // Redirect to index.html upon successful authentication
            window.location.href = 'index.html';
        })
        .catch((error) => {
            console.error('Login failed:', error.message);
        });
}
