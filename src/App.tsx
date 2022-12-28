import { Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"

import { Home } from "home"
import { RoverPhotosContainer } from "rovers"
import { NotFoundView } from "errors"

const App: React.FC = () => (
  <div className="flex h-screen w-full overflow-hidden bg-black">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rover/:roverName/sol/:solDay" element={<RoverPhotosContainer />} />
      <Route path="*" element={<NotFoundView />} />
    </Routes>
    <ToastContainer autoClose={10000} theme={"light"} position={"bottom-left"} />
  </div>
)

export { App }
