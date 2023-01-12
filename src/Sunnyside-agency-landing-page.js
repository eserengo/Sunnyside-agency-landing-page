(function () {
  window.addEventListener('DOMContentLoaded', displayEl);
  
  let timer;
  window.addEventListener('resize', () => {
    window.clearTimeout(timer);
    timer = window.setTimeout(displayEl(), 500);
  })    

  document.getElementById('hamburguer').addEventListener('click', () => {
    document.getElementById('modal').classList.remove('hidden');
  })

  document.getElementById('close-btn').addEventListener('click', () => {
    document.getElementById('modal').classList.add('hidden');
  })

  function displayEl() {
    if (window.matchMedia("(width<=400px)").matches) {
      // GENERAL RULES
      document.querySelectorAll('.desktop').forEach(item => item.classList.add('hidden'));
      document.querySelectorAll('.mobile').forEach(item => item.classList.remove('hidden'));
      //SPECIFIC RULES
      document.querySelector('.client').classList.add('flex-col');
      document.querySelector('.client').classList.remove('flex-row');
    }
    if (window.matchMedia("(width>400px)").matches) {
      // GENERAL RULES
      document.querySelectorAll('.desktop').forEach(item => item.classList.remove('hidden'));
      document.querySelectorAll('.mobile').forEach(item => item.classList.add('hidden'));
      //SPECIFIC RULES
      document.getElementById('modal').classList.add('hidden');
      document.querySelector('.client').classList.add('flex-row');
      document.querySelector('.client').classList.remove('flex-col');
      document.querySelector('.transform').classList.remove('center');
      document.querySelector('.standout').classList.remove('center');
    };
  }
})();