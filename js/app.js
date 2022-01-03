// Step 3 Text Expansion
const step3Btns = document.querySelectorAll('#step3 button');

step3Btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    btn.closest('li').classList.toggle('show');

    if (btn.closest('li').classList.contains('show')) {
      btn.innerHTML = 'Show less';
    } else {
      btn.innerHTML = 'Show more';
    }
  });
});