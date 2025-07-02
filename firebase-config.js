// Firebase config já atualizado com dados do projeto real de Reinaldo

const firebaseConfig = {
  apiKey: "AIzaSyD2RoJqL7RtYHNy8_s7Vs2WcpZHC5TNmSE",
  authDomain: "efao-fc-f4f36.firebaseapp.com",
  projectId: "efao-fc-f4f36",
  storageBucket: "efao-fc-f4f36.firebasestorage.app",
  messagingSenderId: "275309668658",
  appId: "1:275309668658:web:d62f98f8cb9c1168d34f2b"
};

// Inicialização
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
