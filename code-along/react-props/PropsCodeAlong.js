import React from 'react'

export function PropsCodeAlong ({message, subject}){
	// console.log("props ", props)
	// console.log("props.message ", props.message)
	// console.log("props.subject ", props.subject)
	// const {message, subject} = props
	// console.log("message ", message)
	// console.log("subject ", subject)

	return(
		<>
			<h1>Props Code Along</h1>
			<h2>{subject}</h2>
			<h3>{message}</h3>
		</>
	)
}
