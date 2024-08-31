import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth,onAuthStateChanged , signOut} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { getFirestore, getDoc, doc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
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

const auth = getAuth();
const db = getFirestore();



onAuthStateChanged(auth , (user) =>{
    const loggedInUserId = localStorage.getItem('loggedInUserId');
    
    if(loggedInUserId){
        
        const docRef = doc(db , "users" , loggedInUserId);
        getDoc(docRef)
        .then((docSnap)=>{
            console.log(docSnap);
            if(docSnap.exists()){
                document.getElementById('loggedUserName').innerText=userData.name;
                document.getElementById('loggedUseremail').innerText=userData.email;
                document.getElementById('loggedUserrole').innerText=userData.selrole;
                console.log("Found");
            }
            else{
                console.log("no document found matching id");
            }
        })
        .catch((error)=>{
            console.log("Error getting document");
        })
    }
    else{
        console.log("User Id not found in Localstorage");
    }
})

const signout = document.getElementById('logout-signout');

signout.addEventListener('click' , ()=> {
    localStorage.removeItem('loggedInUserId');
    signOut(auth)
    .then(()=>{
        window.location.href = 'Sign_up.html';
    })
    .catch((error)=>{
        console.error('Error Signing out:',error);
    })
})