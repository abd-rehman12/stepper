import { createRoot } from "react-dom/client";
import App from "./App.jsx"
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import FirstName from "./Components/FirstName.jsx";
import LastName from "./Components/LastName.jsx";
import PhNum from "./Components/PhNum.jsx";
import Email from "./Components/Email.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<FirstName/>}/>
      <Route path="lastName" element={<LastName />} />
      <Route path="phoneNumber" element={<PhNum />} />
      <Route path="Email" element={<Email />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
