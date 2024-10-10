import { DisplayProvider } from "./context/DisplayContext";
import Controls from "./components/Controls/Controls";
import Board from "./components/Board/Board";

const App = () => {
  return (
    <DisplayProvider>
      <Controls /> {/* UI for display settings */}
      <Board /> {/* Displays tasks */}
    </DisplayProvider>
  );
};

export default App;