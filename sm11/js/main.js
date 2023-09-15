let modalShowButton = document.querySelector('.add-button');
let modalHideButton = document.querySelector('.close-button');
let modal = document.querySelector('.modal');

modalShowButton.addEventListener('click', () => {
    modal.classList.add('modal_active');
})

modalHideButton.addEventListener('click', () => {
    modal.classList.remove('modal_active');
})
// Смена темы
document.onkeydown = function(event){
    if(event.key.toLowerCase() == 'b'){
        document.body.classList.add('dark');
    }
    if(event.key.toLowerCase()=='w'){
        document.body.classList.remove('dark');
    }
}
// Валидация полей формы
let isError = false;
let inputName = document.querySelector('.text');
let inputText = document.querySelector('.textarea');
let arrNews = [
    {
        name:'Название новости',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad soluta odio vel accusantium eveniet rem tempora? Expedita, rem harum, esse praesentium possimus ex blanditiis aut similique eligendi animi, asperiores repellat!'
    },
    {
        name:'Название новости',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad soluta odio vel accusantium eveniet rem tempora? Expedita, rem harum, esse praesentium possimus ex blanditiis aut similique eligendi animi, asperiores repellat!'
    },
    {
        name:'Название новости',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad soluta odio vel accusantium eveniet rem tempora? Expedita, rem harum, esse praesentium possimus ex blanditiis aut similique eligendi animi, asperiores repellat!'
    },
];
modal__form.addEventListener('submit', submitForm);
function submitForm(event){
    isError = false;
    if(inputName.value.length == 0){
        error__name.innerHTML = 'Поле не должно быть пустым';
        error__name.style.display = 'block';
        isError = true;
    }
    else if(inputName.value.length<8){
        error__name.innerHTML = 'Введите не менее 8 символов';
        error__name.style.display = 'block';
        isError = true;
    }
    if(inputText.value.length == 0){
        error__text.innerHTML = 'Поле не должно быть пустым';
        error__text.style.display = 'block';
        isError = true;
    }
    else if(inputText.value.length > 300){
        error__text.innerHTML = 'Введите не более 300 символов';
        error__text.style.display = 'block';
        isError = true;
    }
    event.preventDefault();
    // Добавление новости
    let wrapper = document.querySelector('.news-wrapper');

    if(!isError){
        wrapper.innerHTML = '';
        arrNews.push({
            name: inputName.value,
            text: inputText.value
        });
        for(let i=0; i<arrNews.length; i++){
            elemConstuctor(arrNews[i].name, arrNews[i].text);
        }   
        modal.classList.remove('modal_active');
        inputName.value = '';
        inputText.value = '';
    }
    function elemConstuctor(name,text){
        wrapper.insertAdjacentHTML('beforeend',`
        <div class="news-item">
        <h3 class="h3">${name}</h3>
        <p class="news-item__p">
            ${text}
        </p>
    </div>
        `)
    }

}
inputName.onfocus = function(){
    error__name.innerHTML = '';
    error__name.style.display = 'none';
}
inputText.onfocus = function(){
    error__text.style.display = 'none';
    error__text.innerHTML = '';
}


//Пишите здесь
// не хочу