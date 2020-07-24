//1 make variables 
let dark = false;
let light = true;
let sun='<i class="fas fa-sun"></i>'; 
let moon='<i class="fas fa-moon"></i>';
//2.let one condition false and the other condition true on click
function mode() {
  if (dark === false) {
    dark = true;
    light = false;
    //acess the elements and assign them colors for dark mode.
   
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("body").style.color = "white";
    document.querySelector("button").style.backgroundColor="gray";
    document.getElementById("cd").style.backgroundColor="black";
    document.getElementById("purple").style.color="purple"
    document.getElementById("head1").style.color="purple"
    document.getElementById("head2").style.color="purple"
    document.getElementById("head3").style.color="purple"
    document.getElementById("head4").style.color="purple"
    document.getElementById("head5").style.color="purple"
    document.getElementById("head6").style.color="purple"
    document.getElementById("bt").innerHTML=sun;
   
//3. set the other boolean condition for light mode

  } else if (dark === true) {
    dark = false;
    light = true;
    
    //4.access the elements and assign them color according to light mode.
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("body").style.color = "black";
    document.querySelector("button").style.backgroundColor="white";
    document.getElementById("purple").style.color="black"
    document.getElementById("head1").style.color="black"
    document.getElementById("head2").style.color="black"
    document.getElementById("head3").style.color="black"
    document.getElementById("head4").style.color="black"
    document.getElementById("head5").style.color="black"
    document.getElementById("head6").style.color="black"
    document.getElementById("bt").innerHTML=moon;

    


  }
}