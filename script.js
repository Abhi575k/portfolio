function openNav() {
    document.getElementById("mySidebar").style.width = "20%";
    document.getElementById("main").style.marginLeft = "20%";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }


  //The idea is to scroll the page to the required section on selecting the option from menu.
  //By doing so, only one html file is required.