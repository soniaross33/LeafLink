import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDBofnUPmRYAQH4fOpifTyBXrv2PNaWlMo",
  authDomain: "leaflink-b3bea.firebaseapp.com",
  projectId: "leaflink-b3bea",
  storageBucket: "leaflink-b3bea.firebasestorage.app",
  messagingSenderId: "521650302778",
  appId: "1:521650302778:web:8707dc2dbbe17067206a03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const requestsEl = document.querySelector(".requests");

function renderCard(data) {
  const article = document.createElement("article");
  article.className = "nameCardDetails";

  article.innerHTML = `
    <div class="profile-image">
      <img src="${data.profileImageUrl}" class="profileImg" alt="${data.name}">
    </div>

    <div class="request-details">
      <p class="date">${data.dateRange}</p>
      <p class="name">${data.name}</p>
      <p class="plants">${data.plantName}</p>
      <p class="distance">Distance: ${data.distanceMiles} miles</p>
      <button class="beASitter">Be a sitter</button>
    </div>

    <img src="${data.plantImageUrl}" class="plantImg" alt="${data.plantName}">
  `;

  return article;
}

async function loadRequests() {
  requestsEl.innerHTML = "";

  const snapshot = await getDocs(collection(db, "requests"));
  snapshot.forEach((doc) => {
    requestsEl.appendChild(renderCard(doc.data()));
  });
}

// Run on page load
loadRequests();