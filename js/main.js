console.log('Sample JavaScript #5 HW #17');
let container = null;//по умолчанию значение нул
let prevIndicator = null;//по умолчанию значение нул
function createContainer() {
  el = document.createElement('div');//создаем блок див
  el.setAttribute('id', 'carousel');//создаем атрибут айди со значением карусель
  el.setAttribute('class', 'carousel');//создаем класс со значение карусель
  document.querySelector('body').appendChild(el);//апендим во внутрь тега боди
  container = document.querySelector('#carousel');// контейнер равен диву с айди карусель
}
function createSlides(n) {
  slidesContainer = document.createElement('ul');//создаем тег ul
  slidesContainer.setAttribute('class', 'slides');//создаем атрибут класс со значением слайды
  for (i = 0; i < n; i++) {// когда и больше 0 тогда создаем елементы
    let slideItem = document.createElement('li');//первый елемент тег li = slideItem
    let slideLink = document.createElement('a');//второй елемент link a = slideLink
    slideItem.setAttribute( //добавляем класс эктив когда активный слайд иначе класс удаляем
      'class',
      i === 0 ? 'slides__item active' : 'slides__item'
    );
    slideLink.setAttribute('href', '#');//добавляем атрибуты href и # для slideLink
    slideItem.appendChild(slideLink);//в slideItem внутырь помещаем slideLink a в li
    slidesContainer.appendChild(slideItem);//в список ul ложим slideItem это li
  }
  container.appendChild(slidesContainer);// в div с айди #carousel ложим наш список ul
}
function createIndicators(n) {
  indicatorsContainer = document.createElement('div');//создаем div
  indicatorsContainer.setAttribute('class', 'indicators');//создаем в нем атрибут класс со значением индикаторы
  for (i = 0; i < n; i++) { //когда больше 0 плюсуем
    let indicatorsItem = document.createElement('span');//создаем спан
    indicatorsItem.setAttribute(//когда спан активный добавляем клас ектив иначе удаляем
      'class',
      i === 0 ? 'indicators__item active' : 'indicators__item'
    );
    indicatorsItem.setAttribute('data-slide-to', i);//в indicatorsItem добавляем атрибут data-slide-to
    indicatorsContainer.appendChild(indicatorsItem);//помещяем indicatorsItem в блок indicatorsContainer
  }
  container.appendChild(indicatorsContainer);//помещаем indicatorsContainer в container div #carousel
}
function createControls() {
  controlsContainer = document.createElement('div');// создаем div
  controlsContainer.setAttribute('class', 'controls');//создаем атрибут класс со значением controls
  for (i = 0; i < 3; i++) {// от 0 до 3 создаем 
    let controlItem = document.createElement('div');// создаем тег div
    let controlIcon = document.createElement('i');// создаем тег i
    const defItemClass = 'controls__item';//константа defItemClass со значением controls__item
    const defIconClass = 'fas';//константа со значением fas
    switch (i) {
      case 0:
      //массиву со значением 0 controlItem добавляем классы controls__item и controls__prev
        controlItem.setAttribute('class', `${defItemClass} controls__prev`);
      //массиву со значением 0 controlIcon добавляем классы fas и chevron-left
        controlIcon.setAttribute('class', `${defIconClass} fa-chevron-left`);
        break;
      case 1:
      //массиву со значением 1 controlItem добавляем классы controls__item и controls__next
        controlItem.setAttribute('class', `${defItemClass} controls__next`);
      //массиву со значением 1 controlIcon добавляем классы fas и chevron-right
        controlIcon.setAttribute('class', `${defIconClass} fa-chevron-right`);
        break;
      case 2:
      //массиву со значением 2 controlItem добавляем классы controls__item и controls__pause
        controlItem.setAttribute('class', `${defItemClass} controls__pause`);
      //массиву со значением 2 controlIcon добавляем классы fas и fa-play
        controlIcon.setAttribute('class', `${defIconClass} fa-play`);
        break;
    }
    controlItem.appendChild(controlIcon);//в див controlItem помещаем controlIcon тег i
    controlsContainer.appendChild(controlItem);//в див с классом controls помещаем div  склассом controls__item
  }
  container.appendChild(controlsContainer);//помещаем controlsContainer в div с айди карусель
}
function indicatorsHandler(e) {
  let target = e.target;
  //когда индикатор активный добавляем стиль backgroundColor со значение красный
  if (target.classList.contains('indicators__item')) {
    target.style.backgroundColor = 'red';
    //если индикатор не активный стиль удаляем
    if (prevIndicator !== null) prevIndicator.removeAttribute('style');
    prevIndicator = target;
  }
}
function setListener() {
  let indicatorsContainer = document.querySelector('div.indicators');
  //отслеживаем клик в div.indicators
  indicatorsContainer.addEventListener('click', indicatorsHandler);
}
function createStyle() {
  styleContainer = document.createElement('style');//добавляем тег style
  let styleCode = `
    .controls,
    .slides {
      position: relative;
      list-style: none;
      width:600px;
      height:300px;
      background-color: yellow;
      display:block;
      margin:0 auto;
    }
    .indicators {
      display: flex;
      justify-content: center;
    }
    .indicators__item {
      display: block;
      width: 10px;
      height: 10px;
      background-color: black;
      margin: 5px;
      border: 1px solid green;
    }`;
  styleContainer.innerHTML = styleCode;
  container.appendChild(styleContainer);
}
function createCarousel(slidesCount = 5) {
  container = document.querySelector('#carousel');
  createSlides(slidesCount);
  createIndicators(slidesCount);
  createControls();
  createStyle();
  setListener();
}
createCarousel(4);