import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Housing from '../pages/Housing';
import Error404 from '../pages/Error404';

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/about" element={<Layout><About /></Layout>} />
            <Route path="/housing/:id" element={<Layout><Housing /></Layout>} />
            <Route path="*" element={<Layout><Error404 /></Layout>} />
        </Routes>
    );
}