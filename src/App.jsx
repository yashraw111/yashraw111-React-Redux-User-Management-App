  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  import CreateRedux from "./Layout/Crud/CreateRedux";
  // import Header from "./Pages/Header";
  import 'bootstrap/dist/css/bootstrap.css'
  import ReduxView from "./Layout/Crud/ReduxView";
  import ReduxUpdate from "./Layout/Crud/ReduxUpdate";
import SingleUser from "./Layout/Crud/SingleUser";
import './assets/css/style.css'
import './assets/css/viewCss.css'
  function App() {
    return (
      <>
        <Router>
          {/* <Header></Header> */}
          <Routes>
            <Route path="/" element={<CreateRedux></CreateRedux>} ></Route>
            <Route path="/ReduxView" element={<ReduxView></ReduxView>} ></Route>
            <Route path="/UpdateRedux/:id" element={<ReduxUpdate></ReduxUpdate>} ></Route>
            <Route path="/SingleUser/:id" element={<SingleUser></SingleUser>} ></Route>
          </Routes>
        </Router>
      </>
    );
  }

  export default App;
