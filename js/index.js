// Your code goes here
// BUTTONS
const launchButton = get('#launchButton')
const confirmButton = get('#confirmButton')
const cancelButton = get('#cancelButton')

// MESSAGES
const successMessage = get('.report.success')
const failureMessage = get('.report.failure')

// MODAL
const modal = get('div.modal')
const modalOpacity = get('div.modal-opacity')

function launch(event) {
    // contains code that should run in the future
    // take out the off classname from the modal
    modal.classList.remove('off')
    successMessage.classList.add('off')
    failureMessage.classList.add('off')
  
    // absolute power right here
  }
  // on click of launchButton, run the launch function pretty please
  launchButton.addEventListener(
    // type of event
    'click',
    // the callback that should run
    launch,
  )
  
  // 👉 TASK 4- Create a function to confirm the launch.
  // It should close the modal and display a success report.
  // Add it as a listener for clicks on the confirmation button.
  const yes = (event) => {
    modal.classList.add('off')
    successMessage.classList.remove('off')
  }
  confirmButton.addEventListener('click', yes)
  
  // 👉 TASK 5- Create a function to cancel the launch.
  // It should close the modal and display a failure report.
  // Add it as a listener for clicks on the cancellation button.
  const denyLaunch = (event) => {
    // console.log('denyLaunch runs')
    // event has a wealth of info about the event
    // which we could use right here!
    modal.classList.add('off')
    failureMessage.classList.remove('off')
  }
  cancelButton.addEventListener(
    'click', denyLaunch
  )
  