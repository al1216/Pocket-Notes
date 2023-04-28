import "./App.css";
import {
  BrowserView,
  MobileView,
} from "react-device-detect";
import Browser from './BrowserView-Body/Body.jsx'
import Mobile from './MobileView-Body/Body.jsx'

function App() {
  return (
    <div className="App">
      <BrowserView>
        <Browser></Browser>
      </BrowserView>
      <MobileView>
        <Mobile></Mobile>
      </MobileView>
    </div>
  );
}

export default App;
