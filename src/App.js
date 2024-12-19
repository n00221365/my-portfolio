import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Provider } from "./components/ui/provider"
import { Container } from "@chakra-ui/react"
import { Row, Button } from 'react-bootstrap';

//pages
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'
import RedirectExample from './pages/RedirectExample';
import PageNotFound from './pages/PageNotFound';
import ProjectsIndex from './pages/projects/Index';
import ProjectsShow from './pages/projects/Show';

//style={{backgroundColor: "#F5F5DD"}}

const App = () => {
    return (
        <div style={{backgroundColor: "#e3a3f9"}}>

        <Provider>
        
        <Router>
            <Navbar />
            <Container>
            <Routes>
                <Route path={"/"} element={<Home />}/>
                <Route path={"/about"} element={<About />}/>
                <Route path={"/contact"} element={<Contact />}/>
                <Route path={"/redirect-example"} element={<RedirectExample />}/>

                <Route path={"/projects"} element={<ProjectsIndex />}/>
                <Route path={"/projects/:slug"} element={<ProjectsShow />} />

                <Route path='*' element={<PageNotFound />}/>

            </Routes>
            </Container>
        </Router>
        
        </Provider>
        </div>
    );
};

export default App;