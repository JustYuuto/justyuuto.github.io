import Header from './components/Header.tsx';
import MainSection from './components/MainSection.tsx';
import {useEffect, useState} from 'react';
import Loading from './components/Loading.tsx';
import ProjectsSection from './components/ProjectsSection.tsx';
import ContactSection from './components/ContactSection.tsx';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch('https://api.lanyard.rest/v1/users/269415459735076864')
      .then(res => res.json())
      .then(data => {
        setUser(data.data);
      });
  }, []);

  return (
    <>
      {!user ? <Loading /> : <>
        <Header />
        <MainSection user={user} />
        <ProjectsSection />
        <ContactSection user={user} />
      </>}
    </>
  );
}

export default App;
