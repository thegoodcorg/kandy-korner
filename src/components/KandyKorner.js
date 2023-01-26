import { Outlet, Route, Routes } from "react-router-dom"
import { Authorized } from "./views/Authorized"
import { ApplicationViews } from "./views/ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { Locations } from "./Locations.js"
import { Products } from "./Products.js"
import "./KandyKorner.css"
import { ProductContainer } from "./ProductsContainer"
import { JobApplication } from "./jobApplication/JobApplication"
import { EmployeeList } from "./EmployeeList"


export const KandyKorner = () => {
	return (


		<Routes>
			<Route
				path="/"
				element={
					<>
					<NavBar />
					<Outlet />
					</>
				}
				>
				<Route index path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/locations" element={<Locations />} />
				<Route path="/products" element={<ProductContainer />} />
				<Route path="/job_app" element={<JobApplication />}/>
				<Route path="/employees" element={<EmployeeList />} />
			</Route>
	  </Routes>
	)
}

