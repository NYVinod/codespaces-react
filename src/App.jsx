import "./styles.css";
import Greeter from "./Greeter";
import Dog from "./Dog";
import LoginForm from './LoginForm';
import DiceRolls from './DiceRolls'



export default function App() {
  return (
    <div className="App">
      <LoginForm/>
      <Greeter/>
      <Dog/>
      <DiceRolls/>

    </div>
  );
}