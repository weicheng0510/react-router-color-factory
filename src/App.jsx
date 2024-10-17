import { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Nav from "./components/Nav"
import ColorList from "./components/ColorList";
import ColorDetail from "./components/ColorDetail";
import NewColorForm from "./components/NewColorForm";

function App() {
  const initialColors = JSON.parse(localStorage.getItem('colors')) || [
    { name: "red", color: "#FF0000" },
    { name: "green", color: "#00FF00" },
    { name: "blue", color: "#0000FF" }
  ];

  const [colors, setColors] = useState(initialColors);

  useEffect(() => {
    localStorage.setItem('colors', JSON.stringify(colors));
  }, [colors]);

  const handleAddColor = (newColor) => {
    setColors(preColors => [...preColors, newColor]);
  }

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/colors">
          <Route index element={<ColorList colors={colors} />} />
          <Route path=":color" element={<ColorDetail colors={colors} />} />
          <Route path="new" element={<NewColorForm addColor={handleAddColor} />} />
        </Route>
        <Route path='*' element={<Navigate to='/colors' />} />
      </Routes>
    </div>
  )
}

export default App;
