function get(selector) {
    return document.querySelector(selector)
  }
  


const headingIntro = get('.intro h2')



  

  function greenHeadingIntro(event) {
    
    headingIntro.style.color = 'green';

  }

  
 headingIntro.addEventListener(
    
    'dblclick',
    
    greenHeadingIntro,
  ) 

  function redHeadingIntro(event) {
    
    headingIntro.style.color = 'red';

  }

  headingIntro.addEventListener(
    
    'mouseover',
    
    redHeadingIntro,
  ) 

  const signMeUps = document.querySelectorAll('.btn')
  
  function changeFirstSignUp(event) {
    
    signMeUps[0].style.color = 'red';

  }

  document.addEventListener("click", changeFirstSignUp); 


  function changeSecondSignUp(event) {
      signMeUps[1].style.color = 'purple';
  }

  document.addEventListener("keypress", changeSecondSignUp )

  function changeThirdSignUp(event) {
    signMeUps[2].style.color = 'green';
}

document.addEventListener("keyup", changeThirdSignUp )

const imgTop = get('.intro img');

function opacityChange(event) {
    
    imgTop.style.opacity = .5;

  }

document.addEventListener("mouseenter", opacityChange)

function opacityNormal(event) {
    
    imgTop.style.opacity = 1;

  }

document.addEventListener("mouseleave", opacityNormal)

const imgCenter1 = get(".img-content img")

function transparent(event) {
    
    imgCenter1.style.opacity = 0;

  }

document.addEventListener("mouseover", transparent)

function opacityNormalCenter(event) {
    
    imgCenter1.style.opacity = 1;

  }

document.addEventListener("mouseout", opacityNormalCenter )

const logo = get(".logo-heading")

function pink(event) {
    
    logo.style.color = 'pink';

  }

function blue(event) {
    
    logo.style.color= 'blue';

  }

  document.addEventListener("scroll", pink )

  document.addEventListener("keydown", blue)



