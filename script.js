const changeTheme = () => {
  let btnbutton = document.querySelector(".btntheme");
  let nav = document.querySelector("nav");
  let col1 = document.querySelector(".col-1");
  if (nav.classList.value == "light") {
    btnbutton.innerHTML = '<i class="fa fa-sun-o"></i>';
  } else {
    btnbutton.innerHTML = '<i class="fa fa-moon-o" aria-hidden="true"></i>';
  }
  nav.classList.toggle("light");
  col1.classList.toggle("light");
};
