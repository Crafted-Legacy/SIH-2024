import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
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



onAuthStateChanged(auth, (user) => {
    const loggedInUserId = localStorage.getItem('loggedInUserId');
    if (loggedInUserId) {
        const docRef = doc(db, "user", loggedInUserId);
        console.log(docRef);
        getDoc(docRef)
            .then((docSnap) => {
                console.log(docSnap);
                if (docSnap.exists()) {
                    const userData = docSnap.data();
                    document.getElementById('loggedUserName').innerText = userData.name;
                }
                else {
                    console.log("no document found matching id");
                }
            })
            .catch((error) => {
                console.log("Error getting document");
            })
    }
    else {
        console.log("User Id not found in Localstorage");
    }
})


const signout = document.getElementById('sign-out');

signout.addEventListener('click', () => {
    localStorage.removeItem('loggedInUserId');
    signOut(auth)
        .then(() => {
            window.location.href = 'main.html';
        })
        .catch((error) => {
            console.error('Error Signing out:', error);
        })
})

let message=document.getElementById("message");
let product=document.getElementById("product");
let yourOrder=document.getElementById('home-order');
let your_Order=document.getElementById('your-order');
let earnings=document.getElementById("earnings");
let payment=document.getElementById("payment");
let upgrade=document.getElementById("upgrade");
let help=document.getElementById("help");
let myaccount=document.getElementById("my-account");
let account=document.getElementById("account");
let home_message=document.getElementById("home-message");
let home_product=document.getElementById("yourProducts");
let home_earnings=document.getElementById("your-Earnings");
let home_payment=document.getElementById("your-payment");
let home_upgrade=document.getElementById("your-upgrade");
let home_help=document.getElementById("your-help");
account.addEventListener('click',()=>
{
   myaccount.style.display="block";
   your_Order.style.display="none";

   message.style.display="none";
   product.style.display="none";
  
   earnings.style.display="none";
   
    payment.style.display="none";
   
    upgrade.style.display="none";
   
    help.style.display="none";
}
);

yourOrder.addEventListener('click',()=>
{
   myaccount.style.display="none";
   message.style.display="none";
   your_Order.style.display="block"
   product.style.display="none";
  
   earnings.style.display="none";
   
    payment.style.display="none";
   
    upgrade.style.display="none";
   
    help.style.display="none";
}
);

home_message.addEventListener('click',()=>
{
   myaccount.style.display="none";
   message.style.display="block";
   your_Order.style.display="none";
   product.style.display="none";
  
   earnings.style.display="none";
   
    payment.style.display="none";
   
    upgrade.style.display="none";
   
    help.style.display="none";
}
);
home_product.addEventListener('click',()=>
{
   myaccount.style.display="none";
   message.style.display="none";
   your_Order.style.display="none";
   product.style.display="block";
  
   earnings.style.display="none";
   
    payment.style.display="none";
   
    upgrade.style.display="none";
   
    help.style.display="none";
}
);
home_earnings.addEventListener('click',()=>
{
   myaccount.style.display="none";
   message.style.display="none";
   your_Order.style.display="none";
   product.style.display="none";
  
   earnings.style.display="block";
   
    payment.style.display="none";
   
    upgrade.style.display="none";
   
    help.style.display="none";
}
);
home_payment.addEventListener('click',()=>
{
   myaccount.style.display="none";
   message.style.display="none";
   your_Order.style.display="none";
   product.style.display="none";
  
   earnings.style.display="none";
   
    payment.style.display="block";
   
    upgrade.style.display="none";
   
    help.style.display="none";
}
);
home_upgrade.addEventListener('click',()=>
{
   myaccount.style.display="none";
   message.style.display="none";
   your_Order.style.display="none";
   product.style.display="none";
  
   earnings.style.display="none";
   
    payment.style.display="none";
   
    upgrade.style.display="block";
   
    help.style.display="none";
}
);
home_help.addEventListener('click',()=>
{ console.log("clicked");
   myaccount.style.display="none";
   message.style.display="none";
   your_Order.style.display="none";
   product.style.display="none";
  
   earnings.style.display="none";
   
    payment.style.display="none";
   
    upgrade.style.display="none";
   
    help.style.display="block";
}
);



//user page


