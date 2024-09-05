import page from "../node_modules/page/page.mjs";

document.querySelector("button").addEventListener("click", onLogin);

function onLogin() {
  page.redirect('/catalog-section');
}
page(()=> console.log("page loaded"));

page('/home-section', () => showView("home"));
page('/catalog-section', (ctx,next)=>{console.log('middleware');next();}, () =>showView("catalog")); 
page('/about-section', () => showView("about"));
page('/details/:id', (event) => showView("details",event));

page.start();


  function showView(id, event) {
    document.querySelectorAll("section").forEach(s => {
      s.style.display = s.id == id ? "block" : "none";
    });
    const productId = event.params.id;

     if(productId){
       document.querySelector('p').textContent = "Product details" + productId;
    }
  }