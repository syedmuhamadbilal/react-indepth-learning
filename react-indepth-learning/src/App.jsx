import Chant from "./Chant";
import Counter from "./components/Counter";
import Card from "./components/Card";
function App() {
  return (
    <>
      <Chant />
      <Counter />
      <Card username={"Bilal"} btnText="Click Me" />
      <Card username={"My Username"} />
    </>
  );
}

export default App;
