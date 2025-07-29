import Chant from "./Chant";
import Counter from "./components/Counter";
import Card from "./components/Card";
import Todos from "./components/Todos";
import ViewTodos from "./components/ViewTodos";
import { Provider } from "react-redux";
import { store } from "./store/store";
function App() {
  return (
    <Provider store={store}>
      <Chant />
      <Counter />
      <Card username={"Bilal"} btnText="Click Me" />
      <Card username={"My Username"} />
      <Todos />
      <ViewTodos />
    </Provider>
  );
}

export default App;
