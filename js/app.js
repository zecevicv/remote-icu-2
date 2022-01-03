// Header Scroll
const header = document.querySelector('#step1');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('header-white');
  } else {
    header.classList.remove('header-white');
  }
});

if (window.scrollY > 50) {
  header.classList.add('header-white');
} else {
  header.classList.remove('header-white');
}

// Step 3 Text Expansion
const step3Btns = document.querySelectorAll('#step3 button');
const step3Li = document.querySelectorAll('#step3 ul li');

if (window.innerWidth > 1024) {
  step3Li.forEach((li) => {
    li.classList.add('show');
  });
}

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