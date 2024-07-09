for (let index = 0; index < array.length; index++) {
    const element = array[index];
    let btn = document.querySelector('.btn');
    let body = document.querySelector('body');
    btn.oneclick = function () {
        body.classList.toggle('on');
    };
}
