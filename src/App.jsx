import "./App.css";
import { IndexPage } from "./pages/IndexPage";
import AppContextProvider from "./context/appContext";

function App() {
  return (
    <>
      <AppContextProvider>
        <header className="flex items-center justify-center h-20 p-8 bg-slate-800">
          <p>header here</p>
        </header>
        <IndexPage />
        <footer className="flex items-center justify-center h-20 p-8 bg-slate-800">
          <p>footer here</p>
        </footer>
      </AppContextProvider>
    </>
  );
}

export default App;
