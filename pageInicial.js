

const firebaseConfig = {
    apiKey: "AIzaSyAPocQYxFJzTOMw_L6ithsTL-1OU0cicyI",
    authDomain: "boletim-online-ae95b.firebaseapp.com",
    projectId: "boletim-online-ae95b",
    storageBucket: "boletim-online-ae95b.appspot.com",
    messagingSenderId: "649218727469",
    appId: "1:649218727469:web:1ec0f7cae123fd563062a4",
    measurementId: "G-95SN6VMYR2"
};
firebase.initializeApp(firebaseConfig)

var auth = firebase.auth()
var dataBase = firebase.firestore()
var email = document.querySelector("#icon")
const password = document.querySelector("#icon2")


function login() {
    const emailStudant = email.value
    localStorage.setItem("email", emailStudant);


    auth.signInWithEmailAndPassword(email.value, password.value)
        .then(() => {
            if (email.value.includes("professor")) {
                location.href = "./pages/pageTeacher/index.html"
            } else {
                location.href = "./pages/pageStudent/index.html"
            }
        }).catch(() => {
            alert("Algo deu errado.")
        })
}

