import './App.css';

function Validate(element, predicate) {
  debugger;
  console.log(element, predicate);
}

function ValidateAll() {
  debugger;
  const allFields = document.querySelectorAll(".signup-form input");
  
}

function App() {
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
          <input placeholder="First Name" id="first-name"></input>
          <input placeholder="Last Name" id="last-name"></input>
          <input placeholder="Email Address" id="email-address"></input>
          <input placeholder="Password" type="password" id="password"></input>
          <div className="claim-free-trial green-bg white clickable" onClick={ValidateAll}>
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
