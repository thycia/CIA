/* firestore 的初始宣告 */
const firebaseConfig = {
    apiKey: "AIzaSyBiTTx6ZNggajmMn_R_xUQ4H1Pe73Np-s0",
    authDomain: "ciateam-6d554.firebaseapp.com",
    projectId: "ciateam-6d554",
    storageBucket: "ciateam-6d554.appspot.com",
    messagingSenderId: "892094395466",
    appId: "1:892094395466:web:a9fa12d743357b910522b3",
    measurementId: "G-Z5JXQMSE3V"
  };
  const app = firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore()
  
  var modal = document.getElementById('id01');
  window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        window.location.reload();
    }
  };