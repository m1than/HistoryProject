import './App.css';
import ModelViewer from "./Components/ModelViewer/ModelViewer";

function App() {
    const modelSrc = '3Dmodels/Home.glb'
  return (
      <div className= "App">
          <ModelViewer src={modelSrc} />
      </div>
  );
}

export default App;
