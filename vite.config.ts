import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app2",
      filename: "remoteEntry.js",
      exposes: {
        "./App2Home": "./src/App2Home",
        "./App2Content": "./src/App2Content",        
        "./CounterButton": "./src/CounterButton",
      },
      remotes: {
        shellApp: "http://localhost:5001/assets/remoteEntry.js",
        //shellApp: "http://localhost:8080/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})
