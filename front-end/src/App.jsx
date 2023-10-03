import DetailTodoComponent from "./components/DetailTodoComponent.jsx";
import './App.css'
import ComponentTodoList from "./components/ComponentTodoList.jsx";
// import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AddTodoComponent from "./components/AddTodoComponent";



function App() {


  return (
    // <Router>
    //     <Switch>
    //         <Route path="/" component={<ComponentTodoList />}/>
    //         {/*<Route path="/todos:id" component={<DetailTodoComponent }/>*/}
    //     </Switch>
    // </Router>

      <ComponentTodoList />
      // {/*  <AddTodoComponent />*/}


  )
}

export default App
