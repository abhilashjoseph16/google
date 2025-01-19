import AICourseBox from "./components/AICourseBox";
import Footer from "./components/Footer";
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
      <Footer/>
    </div>
  );
}

export default App;
