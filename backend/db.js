// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getDatabase, ref, set, get } = require("firebase/database");

require('dotenv').config()
const API_KEY = process.env.API_KEY
const firebaseConfig = {
  apiKey: API_KEY,
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

module.exports = {storeListings, readListings, logError, logSuccessful}