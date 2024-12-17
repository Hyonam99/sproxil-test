import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import AppLayout from "./layouts/AppLayout.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";
import Customers from "./pages/Customers.tsx";
import Product from "./pages/Product.tsx";
import Income from "./pages/Income.tsx";
import Promote from "./pages/Promote.tsx";
import Help from "./pages/Help.tsx";
import Login from "./pages/login/Login.tsx";

import "./index.css";

const router = createBrowserRouter([
	{
		path: "/login",
		element: <Login />,
	},
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
				path: "product",
				element: <Product />,
			},
			{
				path: "income",
				element: <Income />,
			},
			{
				path: "customers",
				element: <Customers />,
			},
			{
				path: "promote",
				element: <Promote />,
			},
			{
				path: "help",
				element: <Help />,
			},
		],
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
