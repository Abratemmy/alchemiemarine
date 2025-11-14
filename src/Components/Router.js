import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import OurTeam from '../Pages/About/OurTeam';
import Contact from '../Pages/Contact/Contact';
import BlogList from "../Pages/Blog/BlogList";
import BlogSingle from "../Pages/Blog/BlogSingle";
import Services from "../Pages/Services/Services";
import ProcurementLogistics from "../Pages/Services/ProcurementLogistics";
import MarineLogistic from "../Pages/Services/MarineLogistic";
import AlternativeCrude from "../Pages/Services/AlternativeCrude";
import SecuritySupport from "../Pages/Services/SecuritySupport";
import Consultancy from "../Pages/Services/Consultancy";


const Router = () => {

    return (
        <Routes>
            <Route exact path="/" caseSensitive={false} element={<Home />} />
            <Route exact path="/about_us" caseSensitive={false} element={<About />} />
            <Route exact path="/our_team" caseSensitive={false} element={<OurTeam />} />
            <Route exact path="/contact_us" caseSensitive={false} element={<Contact />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogSingle />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/procurement-logistics" element={<ProcurementLogistics />} />
            <Route path="/services/marine-logistics" element={<MarineLogistic />} />
            <Route path="/services/alternative-crude-evacuation" element={<AlternativeCrude />} />
            <Route path="/services/security-and-support" element={<SecuritySupport />} />
            <Route path="/services/consultancy-service" element={<Consultancy />} />
          
            {/* 👇 Catch-all route for undefined paths */}
            {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
    )
}
export default Router
