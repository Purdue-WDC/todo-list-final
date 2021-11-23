import React, { useReducer } from "react";
import axios from "axios";

const initialState = {
	user: null,
	authenticated: false,
	token: null,
};

const AUTHENTICATED = "AUTHENTICATED";
const LOGOUT = "LOGOUT";

const AuthContext = React.createContext({
	...initialState,
	login: () => {},
	logout: () => {},
	register: () => {},
    getUser: () => {}
});

const AuthReducer = (state, action) => {
	switch (action.type) {
		case AUTHENTICATED:
			return {
				user: action.payload,
				authenticated: true,
				token: localStorage.getItem("token"),
			};
		case LOGOUT:
			localStorage.removeItem("token");
			axios.defaults.headers.common["Authorization"] = "";
			return {
				user: null,
				authenticated: false,
				token: null,
			};
		default:
			return state;
	}
};

export const AuthContextProvider = (props) => {
	const [state, dispatch] = useReducer(AuthReducer, initialState);

	// Login user
	const login = async (user) => {
		try {
			const res = await axios.post("/api/auth/login", user);

			const token = res.data.token;

			localStorage.setItem("token", token);

			axios.defaults.headers.common["Authorization"] = token;

			await getUser(token);
		} catch (err) {
			throw new Error("Something went wrong");
		}
	};

	// Logout user
	const logout = () => {
		dispatch({
			type: LOGOUT,
		});
	};

	// Register user
	const register = async (user) => {
		try {
			const res = await axios.post("/api/auth/register", user);

			const token = res.data.token;
			localStorage.setItem("token", token);

			axios.defaults.headers.common["Authorization"] = token;

			await getUser(token);
		} catch (err) {
			throw new Error("Something went wrong");
		}
	};

	// Get logged in user
	const getUser = async (token) => {
		try {
			const res = await axios.get("/api/auth/", {
				headers: {
					Authorization: token,
				},
			});

			dispatch({
				type: AUTHENTICATED,
				payload: res.data.user,
			});
		} catch (err) {
			alert("Something went wrong");
		}
	};

	return (
		<AuthContext.Provider
			value={{
				user: state.user,
				authenticated: state.authenticated,
				login,
				logout,
				register,
                getUser
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
