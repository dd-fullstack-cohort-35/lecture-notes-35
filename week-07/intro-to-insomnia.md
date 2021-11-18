# Intro to Insomnia

## What is Insomnia?
* the software we use to test our APIs
    * we use this software to mimic requests that our front-end will make
    * we can't build our dynamic React front-end until the back-end is ready
* Insomnia has some handy features
    * save your requests individually so you can come back to them later
    * much easier than trying to debug in the browser
* where to get it: https://insomnia.rest/download
    * download and install Insomnia core

## Below you will find the steps for testing various APIs in the Insomnia REST client.

### Test index API
1. Create a new request.
2. Name the request and select **GET**.
3. Insert http://example-capstone.uss-hopper.site/apis/ into the URL.
4. Click **SEND**
5. The response should be "🤯 😬 😱 🥵" and status of **200**.

### Get All Tweets
1. Create a new request.
2. Name the request "get all tweets" and select **GET**.
3. Insert http://example-capstone.uss-hopper.site/apis/tweet into the URL.
4. Click **SEND**
5. The response should be a list of all the tweets.

### Sign Up
1. Create a new request.
2. Name the request and select **POST**.
    1. On the dropdown menu where it says **No Body**, select **JSON**.
3. Insert http://example-capstone.uss-hopper.site/apis/sign-up into the URL & click send.
4. Enter valid **JSON** to sign up on your site.
5. Click **SEND**
    1. If successful, you should receive a status of **200**.
    2. If unsuccessful, you may have missed one of these steps or did not enter valid **JSON**.

### Activation
1. Create a new request.
2. Name the request, select **GET**
3. Check email in which you signed up for your site.
    1. There will be a link for your activating your profile in email
    2. Example: http://example-capstone.uss-hopper.site/apis/sign-up/activation/72c9238ebea318e69adfcbbc039b8e62
    3. Copy the link
4. Paste the URL in Insomnia.
5. Click **SEND**
    1. If successful, you should receive a status of 200 & have access to the **JWT-TOKEN**
    2. If unsuccessful, you may have missed one of these steps

### Sign In
1. Create a new request.
2. Name the request, select **POST**.
3. On the dropdown menu where it says No Body, select **JSON**.
4. Change the URL to your sign-in API
    1. Example: http://example-capstone.uss-hopper.site/apis/sign-in/
5. Click **JSON** tab.
    1. Enter valid **JSON** required to sign in to your site.
6. Click **SEND**
    1. If successful, you should receive a status of 200 & will be successfully logged in to your Profile/User.
    2. If unsuccessful, you may have missed one of these steps or did not enter valid **JSON**.

### Post Tweet
1. Create a new request.
2. Name the request and select **POST**.
3. On the dropdown menu where it says No Body, select **JSON**.
4. Change the URL to your tweet API
    1. Example: http://example-capstone.uss-hopper.site/apis/tweet/
5. Click **JSON** tab.
    1. Enter valid **JSON** required to post a tweet.
6. From the sign-in request, copy the authorization value from the response header.
7. Make a new request header named authorization.
8. Paste the copied authorization value as the value for the authorization request header.
9. Click **SEND**
    1. If successful, you should receive a status of 200 & the tweet should be posted.
    2. If unsuccessful, you may have missed one of these steps or did not enter valid **JSON**.

### Get Tweets by tweetProfileId
1. Create a new request.
2. Name the request "get tweets by profile id" and select **GET**.
3. Insert http://example-capstone.uss-hopper.site/apis/tweet/ into the URL.
4. Click **SEND**
5. The response should be a list of all the tweets.
6. Copy a tweetProfileId from the json response.
7. Add tweetProfileId/ to the end of the url
8. Paste the id on the end of the url
    1. Example: http://example-capstone.uss-hopper.site/apis/tweet/tweetProfileId/8d236681-e31f-11ea-bff3-0242ac1b0003
9. Click **SEND**
10. The response should be the tweets posted by the user with the id used.