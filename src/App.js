import { useEffect, useState } from 'react';
import './App.css';

function CustomInput({ id, type, placeholder, checking, predicates, setValid }) {
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [inFocus, setInFocus] = useState(false);
  const [lastErrorMessage, setLastErrorMessage] = useState('');

  function makeChange(newValue) {
    setValue(newValue);

    for (let index in predicates) {
      const predicate = predicates[index];
      if (!predicate.predicate(newValue)) {
        setErrorMessage(predicate.text);
        setValid(false);
        return;
      }
    }

    setValid(true);
    setErrorMessage("");
  }

  useEffect(() => {
    makeChange(value);
  }, [checking]);

  function onFocus() {
    setInFocus(true);
    checking && setLastErrorMessage(errorMessage);
  }

  function onBlur() {
    setInFocus(false);
    checking && setLastErrorMessage("");
  }

  return (
    <>
      <input 
        placeholder={placeholder} 
        id={id} 
        type={type}
        value={value} 
        onChange={(e) => makeChange(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {checking && errorMessage !== "" ? 
        <label htmlFor={id}>{errorMessage}</label> :
        inFocus && lastErrorMessage !== "" && <label htmlFor={id}>{lastErrorMessage}</label>
      }
    </>
  )
}

function App() {
  const [checking, setChecking] = useState(false);
  const [validFirstName, setValidFirstName] = useState(false);
  const [validLastName, setValidLastName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  function claimHandler() {
    setChecking(true);
    if (validFirstName && validLastName && validEmail && validPassword) {
      console.log("form submit");
    }
  }

  return (
    <div className="app">
      <div className="left-side">
        <div className="all-text white">
          <p className="header-text bold">Learn to code by watching others</p>
          <p className="detail-text">See how experienced developers solve problems in real&#8209;time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
        </div>
      </div>
      <div className="right-side">
        <div className="try-free-box blue-bg bottom-shadow text-center-x">
          <div className="container">
            <span className="bold">Try it free 7 days</span>
            <span> then $20/mo. thereafter</span>
          </div>
        </div>
        <form className="signup-form white-bg bottom-shadow">
          <CustomInput 
            placeholder="First Name"
            id="first-name"
            type="text"
            predicates={[{predicate: (value) => value.length > 3, text: "First Name cannot be empty"}]}
            checking={checking}
            setValid={setValidFirstName}
          />
          <CustomInput
            placeholder="Last Name" 
            id="last-name"
            type="text"
            predicates={[{predicate: (value) => value.length > 3, text: "Last Name cannot be empty"}]}
            checking={checking}
            setValid={setValidLastName}
          />
          <CustomInput 
            placeholder="Email Address" 
            id="email-address"
            type="text"
            predicates={[{predicate: (value) => value.length > 3, text: "Looks like this is not an email"}]}
            checking={checking}
            setValid={setValidEmail}
          />
          <CustomInput 
            placeholder="Password"
            id="password"
            type="password"
            predicates={[{predicate: (value) => value.length > 3, text: "Password cannot be empty"}]}
            checking={checking}
            setValid={setValidPassword}
          />
          <div 
            className="claim-free-trial green-bg white clickable"
            onClick={claimHandler}
          >
            <span className="non-selectable">CLAIM YOUR FREE TRIAL</span>
          </div>
          <div className="terms-and-services text-center-x">
            <span className="grayish-blue">By clicking the button, you are agreeing to our </span>
            <span className="bold red clickable">Terms and Services</span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
