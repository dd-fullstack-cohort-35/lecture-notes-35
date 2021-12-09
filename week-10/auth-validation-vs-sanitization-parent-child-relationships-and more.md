## How AUTH and SESSIONS works
- sign in on front end and send POST request to sign in controller
- controller hashes password and compares it to the stored profileHash
- If it matches, create session on the back end and create jwt token and pass it to the front end.
- The back end remembers the session info for the user and the secret in the jwt token for the specified length of time.
- The front end stores the jwt token data in state (redux store) to improve the user experience by conditionally rendering components for logged in users.
- Requests that require the user to be logged in, require the jwt token (secret to be sent in the header).
- The API(route and controller) checks the secret in the jwt token against the secret saved in the session on the backend.
- If the token is still active in the session, the request is allowed.

## What is the difference between front end validation and back end validation?
- Front end validation improves the user experience.
- Back end validation verifies that the data is of the type and range to be used.

## What is sanitization?
- Sanitization cleans code from the submitted data.
 
## what is a parent-child relationship...
- between react components?
- between directories?
- between html elements?