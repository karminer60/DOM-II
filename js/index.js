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

