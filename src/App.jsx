  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  import CreateRedux from "./Layout/Crud/CreateRedux";
  import Header from "./Pages/Header";
  import 'bootstrap/dist/css/bootstrap.css'
  import ReduxView from "./Layout/Crud/ReduxView";
  import ReduxUpdate from "./Layout/Crud/ReduxUpdate";

  function App() {
    return (
      <>
        <Router>
          <Header></Header>
          <Routes>
            <Route path="/" element={<CreateRedux></CreateRedux>} ></Route>
            <Route path="/ReduxView" element={<ReduxView></ReduxView>} ></Route>
            <Route path="/UpdateRedux/:id" element={<ReduxUpdate></ReduxUpdate>} ></Route>
          </Routes>
        </Router>
      </>
    );
  }

  export default App;
