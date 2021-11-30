# React: POST/PUT and Formik
- Question: How does our capstone front-end get information from the user and pass it to the backend so it can be stored?
    - Examples: user sign-up, user-generated content
- Answer - Use Formik to build a form, and pass the information using POST/PUT

## POST and PUT
- POST - create new information
- PUT - create new information OR update already existing information
- POST and PUT are often used interchangeably.
    - If you POST the same information twice, server will attempt to create the object twice.  Can lead to duplicates!
    - If you PUT the same information twice, the server will merely update the existing object twice.
    - You need to have an ID already specified to use PUT
        - Often you want the server to automatically assign that, so you use POST
    - We use mostly POST

## Formik and Yup
- Formik - form helper for react
- Yup - handles form validator logic
- React forms by default are very verbose, Formik allows us to streamline them
    - Formik provides form validation tools that allow us to write less code
- Further reading:
    - https://blog.logrocket.com/building-better-react-forms-with-formik/
    - https://github.com/formium/formik
    - https://formik.org/
    - https://github.com/jquense/yup

## Example: Sign up
- https://github.com/Deep-Dive-Coding-Fullstack-Licensing/example-capstone/
- SignUpFormContent.js - HTML-ish markup that contains the actual form
- SignUpForm.js - Controls form validation for signup form and directs form to php backend

## Code walkthrough: Adding a Post Form
- Add src/ui/posts/PostForm.js
  ```JavaScript
  import React from "react";
  import Form from "react-bootstrap/Form";
  import InputGroup from "react-bootstrap/InputGroup";
  import FormControl from "react-bootstrap/FormControl";
  import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
  import Button from "react-bootstrap/Button";
  import {Formik} from "formik";
  import {httpConfig} from "../../utils/httpConfig";
  import {useDispatch} from "react-redux";
  import {fetchAllMisquotes} from "../../store/misquote";
  import * as Yup from "yup"
  import {FormDebugger} from "../../utils/FormDebugger";
  
  export function PostForm() {
  
      const dispatch = useDispatch()
  
      const validator = Yup.object().shape({
          misquoteAttribution: Yup.string()
              .required("A misquote attribution is required to create a misquote")
              .max(64, "misquote attribution cannot be over 64 characters "),
          misquoteContent: Yup.string()
              .required(" misquote content is required to create a misquote")
              .max(255, "misquote content cannot be over 255 characters "),
          misquoteSubmitter: Yup.string()
              .required("Please specify who is submitting this misquote")
              .max(64, "misquote submitter cannot be over 64 characters "),
  
      })
  
      const handleSubmit = (values, {resetForm, setStatus}) => {
          httpConfig.post("/apis/misquote/", values).then(reply => {
              const {message, type, status} = reply
              if (status === 200) {
                  resetForm()
                  dispatch(fetchAllMisquotes())
              }
              setStatus({message, type})
          })
      }
  
      const misquote = {
          misquoteAttribution: "",
          misquoteContent: "",
          misquoteSubmitter: ""
      }
  
      return (
          <>
              <Formik
                  onSubmit={handleSubmit}
                  initialValues={misquote}
                  validationSchema={validator}
              >
                  {PostFormContent}
              </Formik>
          </>
      )
  }
  
  
  function PostFormContent(props) {
      const {
        status,
        values,
        errors,
        touched,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
      } = props;
      return (
          <>
              <Form onSubmit={handleSubmit}>
              <Form.Group>
                  <InputGroup>
                      <FormControl
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Attribution"
                          value={values.misquoteAttribution}
                          name="misquoteAttribution"
                      />
                  </InputGroup>
                  {errors.misquoteAttribution && touched.misquoteAttribution && <>
                      <div className="alert alert-danger">
                          {errors.misquoteAttribution}
                      </div>
                  </>}
              </Form.Group>
  
                  <Form.Group>
                      <InputGroup>
                          <FormControl
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="Submitter"
                              value={values.misquoteSubmitter}
                              name="misquoteSubmitter"
                          />
  
                      </InputGroup>
                      {errors.misquoteSubmitter && touched.misquoteSubmitter && <>
                          <div className="alert alert-danger">
                              {errors.misquoteSubmitter}
                          </div>
                      </>}
                  </Form.Group>
  
                  <Form.Group>
                      <InputGroup>
                          <InputGroup.Prepend>
                              <InputGroup.Text>
                                  <FontAwesomeIcon icon="dog"/>
                              </InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl
                              as="textarea"
                              placeholder="Meow Meow Goes Here"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.misquoteContent}
                              name="misquoteContent"
                          />
  
                          <InputGroup.Append>
                              <Button variant="primary" type="submit"> Submit <FontAwesomeIcon
                                  icon="envelope"/></Button>
                          </InputGroup.Append>
                      </InputGroup>
                      {errors.misquoteContent && touched.misquoteContent && <>
                          <div className="alert alert-danger">
                              {errors.misquoteContent}
                          </div>
                      </>}
                  </Form.Group>
                  {/*<FormDebugger {...props} />*/}
              </Form>
              {
                  status && (<div className={status.type}>{status.message}</div>)
              }
          </>
      )
  }
  ```
- Modify frontend/src/ui/posts/Posts.js
    - Add PostsForm import: `import {PostForm} from "./PostForm";`
    - Replace the existing card body that contains a form with an import
      ```js
      <Card bg="shadow-light" className="border-0 rounded-6 col" >
          <Card.Body>
                  <PostForm />
          </Card.Body>
      </Card>
      ```
- Add frontend/src/utils/FormDebugger.js
  ```js
  import React from "react";
  
  export const FormDebugger = props => (
      <div style={{margin: '1rem 0'}}>
          <h3 style={{fontFamily: 'monospace'}}>.</h3>
          <pre
              style={{
                  background: '#f6f8fa',
                  fontSize: '.65rem',
                  padding: '.5rem',
              }}
          >
        <strong>props</strong> ={' '}
              {JSON.stringify(props, null, 2)}
      </pre>
      </div>
  );
  ```