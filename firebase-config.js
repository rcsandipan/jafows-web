
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";

const firebaseConfig = {

  
  
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const rtdb = getDatabase(app);
  export {app,rtdb};