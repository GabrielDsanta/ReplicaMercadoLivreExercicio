import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout/DefaultLayout";
import { Home } from "./pages/Home";
import { Register } from "./pages/RegisterProduct";

export function Router() {
    return (
      <Routes>
          <Route path='/' element={<DefaultLayout />}>
              <Route path='/' element={<Home />}/>
              <Route path='/register' element={<Register />}/>
          </Route>
      </Routes>
    )
  }