import React from 'react'

export function PropsWithObject (props){
	// props is an object containing the arguments being passed to the function/component (jsx attributes)
	// destructuring the props object to access the arguments (jsx attributes)
	const {resource} = props

	console.log(resource)
	console.log(resource.resourceAddress)

	return(
		<>
			<h1>{resource.resourceTitle}</h1>
			<p>{resource.resourceOrganization}</p>
			<p>{resource.resourceUrl}</p>
			<p>{resource.resourceAddress}</p>
		</>
	)
}