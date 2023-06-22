import React from 'react'
import Home from './JsonServer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from './LayoutPage'
import NewNames from './NewNames'
import NameDetails from './NameDetails'
import NotFound from './NotFound'
function Appj() {
  return (
    <Router>
        <div className='home'>
        <Layout/>
            <Switch>
                <Route exact path="/">
                 <Home/>
                </Route>
                <Route path="/newnames">
                 <NewNames/>
                </Route>
                <Route path="/names/:id">
                  <NameDetails/>
                </Route>
                <Route path="*">
                  <NotFound/>
                </Route>
            </Switch>
        </div>
    </Router>
  )
}

export default Appj