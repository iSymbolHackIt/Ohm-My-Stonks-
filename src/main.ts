
import { app, BrowserWindow } from "electron";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  // Load the built HTML file
  win.loadFile(join(__dirname, "index.html"));
}

app.whenReady().then(createWindow);
