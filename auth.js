// Initialize Firebase Authentication
const auth = firebase.auth();

// Register function
function register() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log('User registered:', userCredential.user);
        })
        .catch((error) => {
            console.error('Registration failed:', error.message);
        });
}

// Login function
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log('User logged in:', userCredential.user);
        })
        .catch((error) => {
            console.error('Login failed:', error.message);
        });
}

// Logout function
function logout() {
    auth.signOut()
        .then(() => {
            console.log('User logged out');
        })
        .catch((error) => {
            console.error('Logout failed:', error.message);
        });
}

// Listen for authentication state changes
auth.onAuthStateChanged((user) => {
    if (user) {
        console.log('User is logged in:', user);
    } else {
        console.log('User is logged out');
    }
});
