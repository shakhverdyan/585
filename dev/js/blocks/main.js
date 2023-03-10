

const goodsTabsElem = document.querySelector('.goods__tabs');
const gridItemElems = document.querySelectorAll('.grid__item')
const overlay = document.querySelector('.overlay')


goodsTabsElem.addEventListener('click', e => {
  e.preventDefault()

  const activeBtn = goodsTabsElem.querySelector('.goods__tab-active')

  if (!e.target.closest('.goods__tab')) return;
  activeBtn.classList.remove('goods__tab-active')


  gridItemElems.forEach(item => {
    if (e.target.dataset.gender === item.dataset.gender) {
      item.classList.remove('hide');
      e.target.classList.add('goods__tab-active');
    }
    else item.classList.add('hide');
  })
})


setTimeout(() => {
  document.querySelector('.main_wrapper').style.filter = 'blur(10px)';
  document.querySelector('.main_wrapper').style.cssText = `
  transition: all .5s; filter:blur(10px)
  `
  overlay.classList.remove('hide');

}, 2000);

overlay.addEventListener('click', e => {
  if (e.target == overlay || e.target.closest('.close')) {
    overlay.classList.add('hide');
    document.querySelector('.main_wrapper').style.filter = '';
  }
})