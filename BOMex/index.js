let myWindow;

function newWindow() {
  myWindow = window.open(
    "https://perscholas.org/",
    "perscholas",
    "width=800, height=400, resizable=yes, scrollbars=yes, location=yes"
  );
  myWindow.focus();
}

// Note that the close() method can only
// affect windows created by the open() method.
// You cannot close the current browsing window
// using this method, for example.
function closeWindow() {
  myWindow.close();
}

// A sneak peek at event handling!
// This will be covered in depth during a future lesson.
document.getElementById("openWindowBtn").addEventListener("click", newWindow);
document
  .getElementById("closeWindowBtn")
  .addEventListener("click", closeWindow);

  console.log(window.location);
  console.log(window.screen);
  console.log(window.alert);
  