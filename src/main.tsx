import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.tsx'
import AppLayout from './layouts/AppLayout.tsx';
import PageNotFound from './pages/PageNotFound.tsx';
import './index.css'
import Customers from './pages/Customers.tsx';

const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		errorElement: <PageNotFound />,
		children: [
			{
				index: true,
				element: <App />,
			},
			{
				path: "login",
				element: <>Login</>,
			},
			{
				path: "customers",
				element: <Customers />,
			},

		],
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
