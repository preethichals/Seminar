import "./App.css";
import Bonuses from "./components/Bonuses";
import Business from "./components/Business";
import Coach from "./components/Coach";
import Faq from "./components/Faq";
import Founder from "./components/Founder";
import RightFor from "./components/RightFor";
import Seminar from "./components/Seminar";
import Stars from "./components/Stars";
import Training from "./components/Training";

function App() {
  return (
    <>
      <div className="">

        {/* 4-Hour Training */}
        <Training />

        {/* Business Breakthrough */}
        <Business />

        {/* FREE BONUSES */}
        <Bonuses />

        {/* Seminar */}
        <Seminar />

        {/* right for */}
        <RightFor />

        {/* Stars  */}
        <Stars />

        {/* Meet Your Coach */}
        <Coach />

        {/* Founder of */}
        <Founder />
        
        {/* FAQ */}
        <Faq />

      </div>
    </>
  );
}

export default App;
