import './App.scss'
import Navigation from './components/LAYOUT/Navigation/Navigation';
import WelcomeContent from './components/LAYOUT/WelcomeContent/WelcomeContent';
import ObjetiveContent from './components/LAYOUT/ObjetiveContent/ObjetiveContent';
import CompaniesContent from './components/LAYOUT/CompaniesContent/CompaniesContent';
import EventsContent from './components/LAYOUT/EventsContent/EventsContent';
import NavigationExample from './components/LAYOUT/NavigationExample/NavigationExample';


function App() {

  return (
    <>
      <Navigation />
      {/* <NavigationExample/> */}
      <div className='container-content'>
        <WelcomeContent />
        <ObjetiveContent />
        <CompaniesContent />
        <EventsContent />
      </div>
    </>
  )
}

export default App