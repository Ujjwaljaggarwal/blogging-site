let firebaseConfig = {
    apiKey: "AIzaSyCTUIhz_tjAbOACdSLA9uwoceRrEzcsHyE",
    authDomain: "blogging-website-f3491.firebaseapp.com",
    projectId: "blogging-website-f3491",
    storageBucket: "blogging-website-f3491.appspot.com",
    messagingSenderId: "285695935780",
    appId: "1:285695935780:web:b0e65943560200e8285fb1"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();