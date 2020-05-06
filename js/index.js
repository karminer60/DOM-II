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

  function exitLaunch(event) {
    
    headingIntro.style.color = 'red';

  }

  headingIntro.addEventListener(
    
    'mouseover',
    
    exitLaunch,
  ) 


