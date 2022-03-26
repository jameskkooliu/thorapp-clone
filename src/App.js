import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Online from './pages/Online';
import OnPremise from './pages/Onpremise';
import NotFound from './pages/NotFound';
import ContactPage from './pages/Contact';
import Pricing from './pages/Pricing';
import CaseStudies from './pages/Case-Studies';
import Faq from './pages/Faq';
import About from './pages/About';
import Supportpolicy from './pages/Supportpolicy';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome';
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
            <Route path="/on-premise" element={<OnPremise />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/supportpolicy" element={<Supportpolicy />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/bi-service-ssrs-reports-sharepoint" element={<About />} />
            <Route path="/list-sync-sql-sharepoint-online" element={<About />} />
            <Route path="/project-sync-project-online" element={<About />} />
          </Routes>
          <Footer />
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
