# Data downloaders & Seed Data

## High level overview
* You need some way to get data into your database so that your application can use it.
* If you are using somebody else's data (i.e. an API) you will use a **data downloader** to copy data to your database
* If you are planning on using user-contributed data, you need to create your own **seed data** to initially populate your database

## Creating a data downloader or seed data

### API = Application Programming Interface
- A software intermediary that allows two applications to communicate with one another and transfer data
- APIs define the classes, methods, functions and variables your application needs to carry out
  a desired task

### What?
- **Data downloader**: a process built to ping an API to grab and format necessary information for an application.
- **Data seeder**: usually a file built to automate the initial seeding of a database with information necessary for testing

### Why?
- **Data downloader**: you don’t have to store massive amounts of moving (and unnecessary) data for your application.
- **Data seeder**: Nobody wants to waste time manually building objects for your database for testing.

### Necessary components:
- API key
- Endpoint URL
- Somewhere to display or store the output
    - [browser, database, insomnia (which is kinda basically like a browser)]

## Example
```
import axios from "axios"

interface Post {
	postId: string | null,
	postUserId: number,
	postContent: string,
	postTitle: string
}

function dataDownloader() : Promise<any> {
	return main()
	async function main() {
		try {
			await downloadPosts()
			
		} catch (e) {
			console.log(e)
		}
	}
	
	async function downloadPosts() {
		try {
			const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts")
			
			const createPosts = (array: any[]) : Post[] => {
				// Change this part.  Instead of putting the posts into an arrray insert them into the database. 
    // See https://github.com/Deep-Dive-Coding-Fullstack-Licensing/example-capstone/blob/development/backend/utils/tweet/insertTweet.ts for example.
				const  posts : Post[] = []
				for(let currentPost of array) {
					let post : Post = {postId: null, postUserId: currentPost.userId, postContent: currentPost.body, postTitle: currentPost.title}
					posts.push(post)
				}
				return posts
			}
			
			console.log(createPosts(data))
			
		} catch (error) {
			console.error(error)
		}
	}
}

dataDownloader().catch(error => console.error(error))
```

## Instructions for running the file
1. Put the file into the `utils/dataDownLoader` folder
1. check to make sure the containers are running `docker ps`
2. access the node container `docker container exec -it containerName|containerId /bin/bash`
3. cd into the directory inside the droplet `cd utils/dataDownLoader`
4. Compile the dataDownloder `npx tsc dataDownloaderFoo.ts`
5. Execute the DataDownloader `node dataDownloaderFoo.js`

## Helpful Extra Stuff:
[JSON Formatter](https://jsonformatter.org/json-pretty-print), [Chrome JSON extension](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en), [Snapchat](https://developers.snapchat.com/api/docs/#get-all-organizations), [Instagram](https://www.instagram.com/developer/endpoints/)
