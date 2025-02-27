import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import styles from './styles/app.module.css'

const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App className={styles.title}/>
  </React.StrictMode>
);
