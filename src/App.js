import { AgeContext } from "./AgeContext";
import { NameContext } from "./NameContext";
import Header from "./Header";

function App() {
  console.log(AgeContext, NameContext);
  return (
    <AgeContext.Provider value="30">
      <NameContext.Provider value="거북이">
        <Header />
      </NameContext.Provider>
    </AgeContext.Provider>
  );
}

export default App;
