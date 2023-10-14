import React from 'react'
import Quiz from './components/Quiz'
import Quotes from './components/Quotes'
import Landing from './components/Landing'
import Calc from './components/calculator/Calc';
import Weather from './components/weather/Weather'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Qwiz from './components/quiz/Qwiz';

function App() {
  return (
    <div>
        <Router>
            <Landing />
            <Switch>
                <Route path='/quiz' exact component={Quiz} />
                <Route path='/quotes' exact component={Quotes} />
                <Route path='/calc' exact component={Calc} />
                <Route path='/weather' exact component={Weather} />
                <Route path='/qwiz' exact component={Qwiz} />
            </Switch>
        </Router>
    </div>
  )
}

export default App
