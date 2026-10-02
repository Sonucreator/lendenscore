importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyAWXEsrIsVnis90OysP_o1HJxvb7MsA0_o",
  authDomain: "lendenregistry.firebaseapp.com",
  projectId: "lendenregistry",
  storageBucket: "lendenregistry.firebasestorage.app",
  messagingSenderId: "352293736048",
  appId: "1:352293736048:web:b2f6de441f64470bd12eb5"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Background message received: ', payload);
  const notificationTitle = payload.notification.title || "Len-Den Alert";
  const notificationOptions = {
    body: payload.notification.body || "नया अपडेट आया है।",
    icon: 'https://api.dicebear.com/7.x/identicon/svg?seed=LenDenScore'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
