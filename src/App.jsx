import { Content } from "./components/data.js";
import Header from "./components/header.jsx"
import SubHeader from "./components/subheader.jsx";
function App() {
  return (
    <div>
      <main>
          <Header />
          <SubHeader {...Content[0]} />
      </main>
    </div>
  );
}

export default App;
