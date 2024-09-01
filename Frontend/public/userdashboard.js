let message1=document.getElementById("message1");

let yourOrder1=document.getElementById('home-order1');
let your_Order1=document.getElementById('your-order1');

let payment1=document.getElementById("payment1");
let upgrade1=document.getElementById("upgrade1");
let help1=document.getElementById("help1");
let myaccount1=document.getElementById("my-account1");
let account1=document.getElementById("account1");
let home_message1=document.getElementById("home-message1");

let home_payment1=document.getElementById("your-payment1");
let home_upgrade1=document.getElementById("your-upgrade1");
let home_help1=document.getElementById("your-help1");
account1.addEventListener('click',()=>
{ console.log("clicked")
   myaccount1.style.display="block";
   your_Order1.style.display="none";

   message1.style.display="none";
   
   
    payment1.style.display="none";
   
    upgrade1.style.display="none";
   
    help1.style.display="none";
}
);

yourOrder1.addEventListener('click',()=>
{
   myaccount1.style.display="none";
   message1.style.display="none";
   your_Order1.style.display="block"
  
   
    payment1.style.display="none";
   
    upgrade1.style.display="none";
   
    help1.style.display="none";
}
);

home_message1.addEventListener('click',()=>
{
   myaccount1.style.display="none";
   message1.style.display="block";
   your_Order1.style.display="none";
   
  
   
    payment1.style.display="none";
   
    upgrade1.style.display="none";
   
    help1.style.display="none";
}
);


home_payment1.addEventListener('click',()=>
{
   myaccount1.style.display="none";
   message1.style.display="none";
   your_Order1.style.display="none";
   
   
    payment1.style.display="block";
   
    upgrade1.style.display="none";
   
    help1.style.display="none";
}
);
home_upgrade1.addEventListener('click',()=>
{
   myaccount1.style.display="none";
   message1.style.display="none";
   your_Order1.style.display="none";
  
    payment1.style.display="none";
   
    upgrade1.style.display="block";
   
    help1.style.display="none";
}
);
home_help1.addEventListener('click',()=>
{ console.log("clicked");
   myaccount1.style.display="none";
   message1.style.display="none";
   your_Order1.style.display="none";
   
   
   
    payment1.style.display="none";
   
    upgrade1.style.display="none";
   
    help1.style.display="block";
}
);
