const goodsTabsElem = document.querySelector('.goods__tabs');
const gridItemElems = document.querySelectorAll('.grid__item')



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