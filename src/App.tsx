import './App.css';
import Navbar from './components/Navbar';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import AboutMe from './components/about/AboutMe';
import GitHubStats from './components/githubStats/GitHubStats';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Header />
      <Projects />
      <AboutMe />
      {/* <GitHubStats /> */}
    </>
  );
}

export default App;
