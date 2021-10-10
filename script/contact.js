const firebaseConfig = {
    apiKey: "AIzaSyCjMx3WPTSTMXJdD4tSa3qnkVUrYZRJcXA",
    authDomain: "feedback-form-cf35a.firebaseapp.com",
    projectId: "feedback-form-cf35a",
    storageBucket: "feedback-form-cf35a.appspot.com",
    messagingSenderId: "363445847543",
    appId: "1:363445847543:web:467f71b30ab8d6896e9af2"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// var firebase = firebase.firebase();
// const app = initializeApp(firebaseConfig);


//Referenece contactInfo collections
let contactinfo = firebase.database().ref('messages');



document.querySelector(".feedback-form").addEventListener('submit', submitForm);

//submit form
function submitForm(e){
    e.preventDefault();

    // Get the input Values
    let name = document.querySelector(".Name").value;
    let email = document.querySelector(".Email").value;
    let message = document.querySelector(".feedback-msg").value;
    let date = new Date();

    saveContactInfo(name,email,message,date);    

    // show alert
    document.querySelector('.alert').style.display = 'block';
    // hide alert after 3 seconds;
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);

}


// Save informations to the firebase

function saveContactInfo(name, email, message, date){
    let newContactInfo = contactinfo.push();

    newContactInfo.set({
        Name: name,
        Email: email,
        Message: message,
        Date: date,
    })
}