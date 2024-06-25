// Firebase SDK
const { initializeApp } = require('firebase/app');
const { signInWithEmailAndPassword, getAuth } = require("firebase/auth");
const { getDatabase, ref, set, get } = require("firebase/database");

//Admin SDK
const { getAuth: getAdminAuth } = require("firebase-admin/auth");
const { initializeApp: initializeAdminApp } = require('firebase-admin/app');
var admin = require("firebase-admin");

require("dotenv").config();
// Initialize firebase-admin

const adminApp = initializeAdminApp({credential: admin.credential.cert(JSON.parse(process.env.SERVICE)), databaseURL: "https://hg-rs-23b08-default-rtdb.firebaseio.com"});
// admin.initializeApp( {credential: admin.credential.cert(service_key), databaseURL: "https://hg-rs-23b08-default-rtdb.firebaseio.com"} );
const adminAuth = getAdminAuth();


// Initialize Firebase
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "hg-rs-23b08.firebaseapp.com",
    projectId: "hg-rs-23b08",
    storageBucket: "hg-rs-23b08.appspot.com",
    messagingSenderId: "215922663554",
    appId: "1:215922663554:web:ac7e1048bf591202a4549b",
    measurementId: "G-F6EY7HKQ2Q",
    databaseURL: "https://hg-rs-23b08-default-rtdb.firebaseio.com"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);


async function storeListings(path, listings) {
    const db = getDatabase(app); // Pass the app instance
    const listingsRef = ref(db, `listings/${path}`);

    try {
        await set(listingsRef, listings);
        console.log('Listings updated');
    } catch (error) {
        console.error('Error updating listings:', error);
    }
}

async function readListings(path) {
    const db = getDatabase();
    const listingsRef = ref(db, `listings/${path}`);

    return get(listingsRef).then((snapshot) => {
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            console.log('No data available');
            return null;
        }
    }).catch((error) => {
        console.error('Error reading listings:', error);
        return null;
    });
}

async function clearListings(path) {
    const db = getDatabase();
    const listingsRef = ref(db, `listings/${path}`);

    set(listingsRef, []);
}

async function logError() {
    const db = getDatabase();
    const listingsRef = ref(db, `listings/errors`);

    set(listingsRef, `Error occurred at ${new Date()}`)
}

async function logSuccessful() {
    const db = getDatabase();
    const listingsRef = ref(db, `listings/lastUpdated`);

    set(listingsRef, `Last updated at ${new Date()}`)
}


async function login() {
  const email = "sidhupahul0@gmail.com";
  const password = "Grewal@firebase.com";

  try {
    const userCredential = await signInWithEmailAndPassword(
      getAuth(),
      email,
      password
    );
    const idToken = userCredential._tokenResponse.idToken;
    return idToken;
  } catch (error) {
    console.error("Error signing in:", error);
    return null; // or handle the error appropriately
  }
}

module.exports = {
  storeListings,
  readListings,
  logError,
  logSuccessful,
  login,
  adminAuth,
  clearListings,
};
