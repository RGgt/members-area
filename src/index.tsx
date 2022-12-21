// Import the functions you need from the SDKs you need
// import { firebaseConfig } from "./firebaseConfig";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

ReactDOM.createRoot(
	document.getElementById('react-root') as HTMLElement
).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
