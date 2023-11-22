
    const Navhamburger = document.querySelector('.nav-links')
      
      function onToggleMenu(e) {
      console.log(e.name)
      e.name = e.name === 'menu' ? 'close' : 'menu'
      navLinks.classList.toggle('top-[9%]')
      }
 
export default Navhamburger