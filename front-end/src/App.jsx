import {useState, useEffect } from 'react';
import DetailTodoComponent from "./components/DetailTodoComponent.jsx";
import './App.css'
import ComponentTodoList from "./components/ComponentTodoList.jsx";
import axios from "axios";
import AddTodoComponent from "./components/AddTodoComponent";



function App() {


  return (
    <>
      {/*<ComponentTodoList />*/}
        <AddTodoComponent />
    </>

  )
}

export default App
