import './App.css';
import Header from './components/Header';
import Projects from './components/projects/Projects';
import AboutMe from './components/about/AboutMe';
import Navbar from './components/Navbar';
import GitHubStats from './components/GitHubStats';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Header />
      <Projects />
      <AboutMe />
      <GitHubStats />
    </>
  );
}

export default App;
