window.addEventListener("popstate", onPopState);

document.addEventListener("click", onclick);

document.querySelector("button").addEventListener("click", onLogin);

function onLogin() {
  window.history.pushState({}, "", "/login-section");
  onPopState();
}

function onclick(event) {
  if (event.target.tagName == "A") {
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);
    onPopState();
  }
}

function onPopState() {
 const {pathname}=window.location;
 
 if(pathname =="/home-section"){
   showView("home");
 }else if(pathname =="/catalog-section"){
  showView("catalog");
 }else if(pathname =="/about-section"){
  showView("about");
 }else if(pathname =="/login-section"){
  showView("login");
 }
 
}

function showView(id) {
  document.querySelectorAll("section").forEach((s) => {
    s.style.display = s.id == id ? "block" : "none";
  });
}
showView("home");


