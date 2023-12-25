const nama = document.querySelector('input[name=nama]')
const NPM = document.querySelector('input[name=npm]')
const jurusan = document.querySelector('input[name=jurusan]')
const No = document.querySelector('input[name=no]')

const button = document.querySelector('button')
const button1 = document.querySelector('.table button')
const table = document.querySelector('.table')
const dark = document.getElementById('mm')
const siang = document.getElementById('ss')
const input = document.querySelector('form')




button.addEventListener('click', function () {


    if (nama.value && NPM.value && jurusan.value && No.value != ''){
        
        
        if( parseInt(NPM.value) < 999999999  || parseInt(NPM.value) > 9999999999){
            alert("Nomor NPM tidak boleh kurang dari 10 digit");
            return;
        } ;


        alert("Pendaftaran Berhasil")


        document.getElementById('name').innerHTML = nama.value
        document.getElementById('NPM').innerHTML = NPM.value
        document.getElementById('Jurusan').innerHTML = jurusan.value
        document.getElementById('No').innerHTML = No.value
        

        table.style.display = 'flex'

        

    } else {
        alert('Mohon Lengkapi Data Diri')
    }


});

button1.addEventListener('click', function(){
    table.style.display = 'none'

        nama.value = ''
        NPM.value = ''
        jurusan.value = ''
        No.value = ''
});

dark.addEventListener('click', function(){
    document.body.classList.toggle('dark')
    dark.style.display = 'none'
    siang.style.display = 'block'

    
});

siang.addEventListener('click', function(){
    dark.style.display = 'block'
    siang.style.display = 'none'
    document.body.classList.toggle('dark')
    
    
})