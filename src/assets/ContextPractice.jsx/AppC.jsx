import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { TodoProvider} from './TodoLists';
import Todo from './CTodo';
import Layout from './Layout';
import About from './About';
export function App(){
  return (
    <Router>
      <div className="">
      <Layout/>
       <div className="content">
       <Routes>
          <Route path="/" element={
            <TodoProvider >
              <Todo />
            </TodoProvider> 
          }/>
            <Route path="/about" element={<About/>}/>
        </Routes>
       </div>
      </div>
    </Router>
  ); 
  
}
