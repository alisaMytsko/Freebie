import '../styles/index.scss';
const navigation = document.querySelector('.navigation');
const burger = document.querySelector('.burger-trigger');

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

burger.addEventListener('click', () => {
  if(navigation.classList.contains('inactive')){
    navigation.classList.remove('inactive'); // делает видимой , т.е  display: block;
    burger.classList.remove('fa-bars');
    burger.classList.add('fa-times');
    console.log(burger);
  } else {
    navigation.classList.add('inactive');
  }
});




const contentObj = {
  '1': ' Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
  '2': ' Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
  '3': 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
  '4': ' Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
  '5': ' Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
};

const buttonsGroup = document.getElementsByClassName('button');
[...buttonsGroup].map(button => button.addEventListener('click', () => {
  const activeBtn = document.querySelector('.active-btn'); //по всему документу ищу какая уже активна
  activeBtn.classList.remove('active-btn'); //что бы не была активны две на одной удаляю
  button.classList.add('active-btn'); // а потом ставлю активность на кнопке по которой нажал
}));


const containerQuestion = document.getElementsByClassName('stick');
[...containerQuestion].map(conainer => conainer.addEventListener('click', (e) => {
  const previousContent = document.querySelector('.container-question__content');
  const openedP = document.querySelector('.container-question__p');
  if(previousContent){
    previousContent.remove();
    openedP.classList.remove('container-question__p');
  };
  const child = document.createElement("p");
  const id = e.target.parentNode.getAttribute('id');
  child.classList.add('container-question__content');
  e.target.parentNode.firstChild.nextSibling.classList.add('container-question__p');
  child.innerText = contentObj[id];
  e.target.parentNode.appendChild(child);
}));
