window.addEventListener("keydown", e => {
    const key = document.getElementById(e.key);
    if (key){
        key.classList.add('joy');
        document.getElementsByClassName("joy")[0].innerText="31415926";
    }
  });
  
  
  window.addEventListener("keyup", e => {
    const key = document.getElementById(e.key);
    if (key) {
        key.classList.remove('joy');
        document.getElementsByName("joy")[0].innerText="...";
    }
  });