import './App.css'
import Grandpa from './Component/Grandpa/Grandpa'
// import ReuseableForm from './Component/ReuseableForm.jsx/ReuseableForm'
// import HookForm from './Component/HookForm/HookForm'
// import RefFrom from './Component/RefFrom/RefFrom'
// import SimpleForm from './Component/SimpleForm/SimpleForm'
// import StatefulFrom from './Component/StatefulFrom/StatefulFrom'

function App() {

  // const handleSignUpSubmit = data => {
  //  console.log('sign up data', data);
  // }
  // const handleUpdateProfile = data => {
  //  console.log('update profile', data);
  // }

  return (
    <>
    <h1>Form master</h1>
    <Grandpa></Grandpa>
    {/* <SimpleForm></SimpleForm> */}
    {/* <StatefulFrom></StatefulFrom> */}
    {/* <RefFrom></RefFrom> */}
    {/* <HookForm></HookForm> */}
    {/* <ReuseableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit}>
      <div>
        <h2>sign up </h2>
        <p>sign up right now</p>
      </div>
    </ReuseableForm>
    <ReuseableForm formTitle={'Profile Update'} handleSubmit={handleUpdateProfile} submitBtnText='Update'>
    <div>
        <h2>update profile </h2>
        <p> update your profile</p>
      </div>
    </ReuseableForm> */}
    </>
  )
}

export default App
