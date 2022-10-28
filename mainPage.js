feather.replace()

const header = document.querySelector('header')
const bg = document.querySelector('.bg')

window.addEventListener('scroll', () => {
  header.classList.toggle('sticky', window.scrollY > 0)
  if(header.classList.contains('sticky')){
    header.style.background = '#F5F5F5'
    bg.style.transition = '2s'
  } else  {
    header.style.background = 'white'
    bg.style.transform = 'translateY(0%)'
  }
})

const toggle = document.querySelector('.exitWrapper')

toggle.addEventListener('click', function showSidebar(){
  document.body.classList.toggle('sidebar')
  if(document.body.classList.contains('sidebar')){
    header.style.left = '0'
  } else {
    header.style.left = '-375px'
  }
})