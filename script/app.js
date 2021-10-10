function navslide(){
  let nav = document.getElementById('nav-links');
  nav.classList.toggle("nav-active");            
}


function openSubject(evt,subjectName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");

  for(i =0;i<tabcontent.length;i++){
      tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for(i = 0; i < tablinks.length;i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(subjectName).style.display = "block";
  evt.currentTarget.className += " active";
}
// get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();

