import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css"
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import { Home } from './Home'
import {About} from "./About";
import {Navigation} from "./Navigation";
import {PropsCodeAlong} from "./PropsCodeAlong";
import {PropsWithObject} from "./PropsWithObject";

export function App() {
	const message = "This is my message"
	const subject = "This is my subject"

	const productDescription = "Really Nice Table"
	const productTitle = "Super Cool Table"

	const resource = {
		resourceId: "aksdjhfkjasdhfkjasdhf",
		resourceUrl: "superawesomeresource.com",
		resourceAddress: "100 Resource St ABQ",
		resourceTitle: "wicked awesome resource title",
		resourceOrganization: "Great Org"
	}
	return(
		<>
			<Navigation/>
			<BrowserRouter>
				<Switch>
					<Route exact path='/about' component={About} />
					<Route exact path='/' component={Home} />
				</Switch>
			</BrowserRouter>
			<PropsCodeAlong message={message} subject={subject}/>
			<PropsCodeAlong message={productDescription} subject={productTitle}/>
			<PropsWithObject resource={resource}/>
		</>
	)

}