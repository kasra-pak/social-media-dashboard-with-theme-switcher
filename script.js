const themeSwitcher = document.querySelector('.theme-switcher-container')
const body = document.querySelector('#body')
const circleSwitch = document.querySelector('.switch')



themeSwitcher.addEventListener('click', (e) => {
  body.classList.toggle('dark-theme')
  circleSwitch.classList.toggle('switch--left')
})