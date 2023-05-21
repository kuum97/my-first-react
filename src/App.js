import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} element={<Home />}></Route>
        <Route
          path={process.env.PUBLIC_URL + "/movie/:id"}
          element={<Detail />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
