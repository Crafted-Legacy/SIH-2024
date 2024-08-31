// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBTDRSQKdd6gsDwM4u4W7MGfl4yrkpAGa8",
    authDomain: "crafted-legacyyy.firebaseapp.com",
    projectId: "crafted-legacyyy",
    storageBucket: "crafted-legacyyy.appspot.com",
    messagingSenderId: "567514521643",
    appId: "1:567514521643:web:d11058e513f79086dd8a6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function showmessage(message , name){
    alert(message + name);
}


const SignUp = document.getElementById('Sign--up');
SignUp.addEventListener('click', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    const selrole = document.getElementById('selectrole').value;

    const auth = getAuth();
    const db = getFirestore();

    createUserWithEmailAndPassword(auth,email,pass)
    .then((userCredential) =>{
        const user = userCredential.user;
        const Userdata={
            email : email,
            name : name,
            selrole : selrole
        };

        showmessage(selrole , ' Account Created Successfully');
        const docRef = doc(db , "user" , user.uid);
        setDoc(docRef,Userdata)
        .then(()=>{
            window.location.href = 'index.html';
        })
        .catch(()=>{
            console.error("Error Writing the doc " , error);
        });
    })
    .catch((error) =>{
        const errorcode = error.code;
        if(errorcode === 'auth/email-aldready-in-use'){
            showmessage(email + ' Aldready exists !!!!!');
        }else{
            showmessage('Unable to create user ' , name);
        }
    })
});

const Signin = document.getElementById('Sign--in');
Signin.addEventListener('click' , (event)=>{
    event.preventDefault();
    const email = document.getElementById('sigemail').value;
    const pass = document.getElementById('sinpass').value;

    const auth = getAuth();

    signInWithEmailAndPassword(auth , email , pass)
    .then((userCredential) => {
        showmessage('Login Successfull' , '!!!');
        const user = userCredential.user;
        localStorage.setItem('loggedInUserId',user.uid);
        window.location.href='index.html';
    })
    .catch((error)=>{
        const errorCode = error.code;
        if(errorCode === 'auth/invalid-credential'){
            showmessage('Incorrect Email or Password' , ' Retry !!');
        }
        else{
            showmessage(email , ' Account does not Exits');
        }
    })
})