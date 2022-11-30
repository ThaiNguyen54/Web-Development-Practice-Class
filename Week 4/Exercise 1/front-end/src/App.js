import logo from './logo.svg';
// import './App.css';
import * as React from 'react';
import {FadeLoader} from 'react-spinners';
import MyPage from './components/MyPage';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import PeopleContainer from './PeopleContainer'
import 'typeface-roboto'
import React from 'react'
import FormGroup from '@mui/material/FormGroup'
import MyTextInput from './MyTextInput'
import MySelect from './MySelect';
import {useState} from 'react'
import useMessages from './components/useMessages'
import './App.css'
// import FormExample0 from './FormExample0'
// import FormExample1 from './FormExample1'
// import ShowData from './ShowData'

// function fetchUser(){
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({id: 1, name: 'Adam'});
//     }, 1000);
//   });
// }

const onSubmit = (v) => 
  alert('Submit value: ' + JSON.stringify(v, null, 2))

function App() {
  // const [id, setId] = React.useState('loading....');
  // const [name, setName] = React.useState('loading...');

  // React.useEffect(() => {
  //   fetchUser().then((user) => {
  //     setId(user.id);
  //     setName(user.Name);
  //   });
  // });

  // const [formFields, setFormFields] = useState({})
  // const [errors, setErrors] = useState({})
  // const [valid, setValid] = useState()
  // const [firstForm, setFirstForm] = useState(true)

  const [forum, setForum] = useState('nasa')
  const {
    data: messages,
    loading: messagesLoading, 
    error: messagesError,
  } = useMessages(forum)

  return (
    // <>
    //   <p>ID: {id}</p>
    //   <p>Name: {name}</p>
    // </>

    // <React.Suspense fallback={<FadeLoader color={'lightblue'} size={150}/>}>
    //   <MyPage/>
    // </React.Suspense>

    // <BrowserRouter>
    //   <Switch>
    //     <Route path='/people'>
    //       <PeopleContainer/>
    //     </Route>
    //     <Link to='/people'>People</Link>
    //   </Switch>
    // </BrowserRouter>
    
    // <FormGroup style={{ width: 200, margin: 10 }}>
    //   <MyTextInput/>
    //   <MySelect/>
    // </FormGroup>

    // <div className="App">
    //   <nav>
    //     <select
    //       onChange={(evt) =>
    //         setFirstForm(evt.target.value === 'first') 
    //       }
    //     >
    //       <option value='first'>Single field</option>
    //       <option value='second'>Multiple fields</option>
    //     </select>
    //   </nav>
    //   <main>
    //     {firstForm ? (
    //       <FormExample0
    //         onChange={(ff, v, e) => {
    //           setFormFields(ff)
    //           setValid(v)
    //           setErrors(e)
    //         }}
    //         onSubmit={onSubmit}
    //         initialValue={{
    //           field1: 'some stuff'
    //         }}
    //       />
    //     ) : (
    //       <FormExample1
    //       onChange={(ff, v, e) => {
    //         setFormFields(ff)
    //         setValid(v)
    //         setErrors(e)
    //       }}
    //       onSubmit={onSubmit}
    //       initialValue={{
    //         field1: '1 Main Street'
    //       }}  
    //       />
    //     )}

    //     <ShowData
    //       formFields={formFields}
    //       errors={errors}
    //       valid={valid}
    //     />
    //   </main>
    // </div>

    <div className='App'>
      <button onClick={() => setForum('nasa')}>NASA</button>
      <button onClick={() => setForum('notNasa')}>Not NASA</button>
      {messageError ? (
        <div className='error'>
          Something went wrong:
          <div className='error-contents'>
            {messagesError.message}
          </div>
        </div>
      ) : messagesLoading ? (
        <div className='loading'>Loading...</div>
      ) : messages && messages.length ? (
        <dl>
          {messages.map((m) => (
            <>
              <dt>{m.author}</dt>
              <dd>{m.text}</dd>
            </>
          ))}
        </dl>
      ) : (
        'No messages'
      )}
    </div>
  );
}

export default App;
