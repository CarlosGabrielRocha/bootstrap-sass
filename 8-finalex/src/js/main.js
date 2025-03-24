import './bootstrap.js'
import '../scss/styles.scss'

const myModal = document.getElementById('modal')
const textarea = document.getElementById('modal-text-area')
const newPostInput = document.getElementById('new-post-input')
const switchTheme = document.getElementById('switch-theme')
const dropdown = document.querySelector('.dropdown-menu')

newPostInput.addEventListener('focus', () => {
  newPostInput.blur()
})

myModal.addEventListener('shown.bs.modal', () => {
  textarea.focus()
}) 

switchTheme.addEventListener('click', () => {
  const root = document.documentElement
  if (root.dataset.bsTheme === 'dark') {
    document.querySelector('.message-numbers').style.color = '#dee2e6'
    document.querySelector('#dropdown-btn').classList.replace('btn-outline-primary', 'btn-primary')
    switchTheme.querySelector('.bi-moon-stars').classList.replace('bi-moon-stars', 'bi-sun')
    root.dataset.bsTheme = 'light'

  } else {
    root.dataset.bsTheme = 'dark'
    document.querySelector('#dropdown-btn').classList.replace('btn-primary', 'btn-outline-primary')
    switchTheme.querySelector('.bi-sun').classList.replace('bi-sun', 'bi-moon-stars')
  }
})


resize()
window.addEventListener('resize', resize)

function resize() {
  if (window.innerWidth > 767) {
     dropdown.style.left = '-120%'
  } else {
     dropdown.style.left = '0'
  }
}


/* import './scss/styles.scss'

import { Dropdown, Modal, Carousel, Button, } from 'bootstrap'

document.getElementById('newPostBtnInput').addEventListener('click', () => {
  const modalElement = document.getElementById('postModal')
  const postModal = new Modal(modalElement)
  postModal.show()
  setTimeout(() => {
    document.getElementById('writePostInput').focus()
  }, 500)
}) */




 