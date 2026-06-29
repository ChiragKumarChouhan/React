import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// eslint-disable-next-line react-refresh/only-export-components
function MyApp() {
  return (
    <div>
      <h1>Custom App!</h1>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyApp />
  </StrictMode>
);
