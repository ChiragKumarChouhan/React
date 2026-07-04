import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Chirag from "./Chirag";

// eslint-disable-next-line react-refresh/only-export-components
// function MyApp() {
//   return (
//     <div>
//       <h1>Custom App!</h1>
//     </div>
//   );
// }

const anotherElement = (
  <a href="https://google.com" target="_blank">
    visit google
  </a>
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {anotherElement}
  </StrictMode>
);
function App() {
  const username = "chai aur code";

  return (
    <>
      <div>
        <h1>chai aur react username{username}</h1>
        <p>text para</p>
      </div>
    </>
  );
}

export default App
