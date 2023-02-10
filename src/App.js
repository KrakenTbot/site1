import s from './App.module.css';
import CliendInjuriForm from './Components/ClientInjuriForm/CliendInjuriForm';
import ContactUs from './Components/ContactUs/ContactUs';
import CoreValues from './Components/CoreValues/CoreValues';
import Header from './Components/Header/Header';
import MeetYourTeam from './Components/MeetYourTeam/MeetYourTeam';
import Organization from './Components/Organization/Organization';
import OurWork from './Components/OurWork/OurWork';
import TopScreen from './Components/TopScreen/TopScreen';
import WhoWeAre from './Components/WhoWeAre/WhoWeAre';
import store from './redux/store'

function App() {
  return (
    <div className={s.container}>
      <Header/>
      <TopScreen/>
      <WhoWeAre/>
      <Organization/>
      <CoreValues/>
      <OurWork/>
      <MeetYourTeam store={store}/>
      <ContactUs/>
      <CliendInjuriForm/>
    </div>
  );
}

export default App;
