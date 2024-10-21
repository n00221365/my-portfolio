import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


//pages
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'
import RedirectExample from './pages/RedirectExample';
import PageNotFound from './pages/PageNotFound';
import BooksIndex from './pages/books/Index';
import BooksShow from './pages/books/Show';



const App = () => {
    return (
        <>
        <Router>
            <Navbar />
            <Routes>
                <Route path={"/"} element={<Home />}/>
                <Route path={"/about"} element={<About />}/>
                <Route path={"/contact"} element={<Contact />}/>
                <Route path={"/redirect-example"} element={<RedirectExample />}/>

                <Route path={"/books"} element={<BooksIndex />}/>
                <Route path={"/books/:id"} element={<BooksShow />} />

                <Route path='*' element={<PageNotFound />}/>

            </Routes>

        </Router>
        </>
    );
};

export default App;