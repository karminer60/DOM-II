function get(selector) {
    return document.querySelector(selector)
  }
  


const headingIntro = get('.intro h2')



  

  function launch(event) {
    
    headingIntro.style.color = 'green';

  }

  
 headingIntro.addEventListener(
    
    'dblclick',
    
    launch,
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

  document.addEventListener("keydown", changeFirstSignUp); 


  function changeSecondSignUp(event) {
      signMeUps[1].style.color = 'purple';
  }

  document.addEventListener("keypress", changeSecondSignUp )

  function changeThirdSignUp(event) {
    signMeUps[2].style.color = 'green';
}

document.addEventListener("keyup", changeThirdSignUp )
