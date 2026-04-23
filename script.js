window.onscroll = function() {
  const navbar = document.getElementById("navbar");
  
  // Change 50 to the distance you want the user to scroll
  if (window.scrollY > 50) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};