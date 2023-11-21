const { getDownloadURL, getStorage, ref } = require("firebase/storage");

const { initializeApp } = require('firebase/app');

const firebaseConfig = {
    apiKey: "AIzaSyDo1ARw0gVjQpHBr9lR-e4a1Nz1FSKUmEg",
    authDomain: "proscreens-b6891.firebaseapp.com",
    projectId: "proscreens-b6891",
    storageBucket: "proscreens-b6891.appspot.com",
    messagingSenderId: "162912356218",
    appId: "1:162912356218:web:d2cc90c8171a3aa61a78c3",
    measurementId: "G-RPNB5RJBRM"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app)

const getExtention = (filename: string) => {
    return /[.]/.exec(filename) ?
             /[^.]+$/.exec(filename) : undefined;
};

export async function POST(request: Request) {
    const res = await request.json()
    const pathReference = ref(storage, res?.path);
    const url = await getDownloadURL(pathReference)
    
    return Response.json({ url })
}