import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Online from './pages/online';
import NotFound from './pages/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome'
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Fragment>
          <Header />
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Online />} />
          </Routes>
          <Footer />
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
