import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <main className="bg-[#111111ec] min-h-screen w-full flex flex-col justify-center items-center">
        <App />
      </main>
    </QueryClientProvider>
  </React.StrictMode>
);
