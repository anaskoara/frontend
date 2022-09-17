import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Login";
import RequireAuth from "./components/RequireAuth";
import LinkPage from "./components/LinkPage";
import Unauthorized from "./components/Unauthorized";
import Layout from "./components/Layout";
import Missing from "./components/Missing";
import Home from "./components/Home";
import Editor from "./components/Editor";
import Lounge from "./components/Lounge";
import Admin from "./components/Admin";

const ROLES = {
	User: 2001,
	Editor: 1984,
	Admin: 5150,
};
function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				{/*public routes */}
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />
				<Route path="linkpage" element={<LinkPage />} />
				<Route path="unauthorized" element={<Unauthorized />} />

				<Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
					<Route path="/" element={<Home />} />
				</Route>

				<Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
					<Route path="/editor" element={<Editor />} />
				</Route>

				<Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
					<Route path="/admin" element={<Admin />} />
				</Route>

				<Route
					element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />}
				></Route>
				<Route path="/lounge" element={<Lounge />} />
			</Route>

			<Route path="*" element={<Missing />} />
		</Routes>
	);
}

export default App;
