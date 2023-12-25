const contain = document.querySelector('.container')
const img = document.querySelectorAll('.img')
const pimg = document.querySelector('.primarypic img')

const btn = document.querySelector('.op button')

contain.addEventListener('click', function (event) {
    if (event.target.className == 'close') {
        event.target.parentElement.parentElement.parentElement.style.display = 'none'
        document.querySelector('.op').style.display ='flex'
    }

    if (event.target.className == 'img') {
        pimg.src = event.target.src;

        pimg.classList.add('fade')

        setTimeout(function () {
            pimg.classList.remove('fade')
        }, 500)

    }
})

btn.addEventListener('click',function(){
    document.querySelector('.op').style.display ='none'
    document.querySelector('.container').style.display = 'flex'
})