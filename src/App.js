import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import Dashboard from './components/Dashboard';
import PipeLine from './components/PipeLine';
import { useDispatch, useSelector } from 'react-redux';
import HomeScreen  from './screens/HomeScreen';
import JobInfoScreen  from './screens/JobInfoScreen';
import CandidateScreen  from './screens/CandidateScreen';
import PipelineScreen  from './screens/PipelineScreen';


function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
       <Dashboard />
       <main>  <br/>
       <Route path="/jobinfo/:id/" component={JobInfoScreen} />
            <Route path="/pipeline/:id" component={PipelineScreen} />
            <Route path="/information/:id/:name" component={PipeLine} />
            <Route exact path="/" component={HomeScreen} />
       </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
