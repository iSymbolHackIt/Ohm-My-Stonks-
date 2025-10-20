import { app, BrowserWindow, ipcMain} from "electron";
import path from "path";

function createWindow() {
  const window = new BrowserWindow({
    width:  800,
    height: 600
  });

  window.loadFile(path.join(__dirname, "../../src/renderer/index.html"));
}


app.whenReady().then(() => {
  createWindow();
})