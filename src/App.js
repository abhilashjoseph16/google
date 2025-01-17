import AICourseBox from "./components/AICourseBox";
import GoogleSearchBox from "./components/GoogleSearchBox";
import Header from "./components/Header";
import LanguagePreference from "./components/LanguagePreference";

function App() {
  return (
    <div className="App">
      <Header/>
      <GoogleSearchBox/>
      <AICourseBox/>
      <LanguagePreference/>
    </div>
  );
}

export default App;
