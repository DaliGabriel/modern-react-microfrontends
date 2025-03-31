import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [RemoteComponent, setRemoteComponent] = useState(null);

  useEffect(() => {
    import("http://localhost:3001/product-list.js")
      .then((mod) => setRemoteComponent(() => mod.default))
      .catch((err) => console.error("Failed to load remote", err));
  }, []);

  return (
    <>
      <div>
        <h1>Home App</h1>
        {RemoteComponent ? (
          <RemoteComponent />
        ) : (
          <p>Loading remote component...</p>
        )}
      </div>
    </>
  );
}

export default App;
