const interest = document.querySelector('.interests_main');

interest.addEventListener('change', ev => {
    // определяем потомка
    const tar = ev.target.closest('.interest'),
    // все не нажатые дети
        child = tar.querySelectorAll('.interests'),
    // ul нажатых элементов
        dad = tar.querySelector('.interest__check');

    child.forEach(inter => {
        const check = inter.querySelectorAll('.interest__check');
        check.forEach((element) => {
            // если родитель нажат - детей отправляем в нажатие
            if (dad.checked) 
            element.checked = true; 
            else element.checked = false;
            // console.log(dad.checked);
        });
    });
});