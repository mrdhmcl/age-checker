function agechecker(){
    date = new Date()
    year = date.getFullYear()

    var bday = document.getElementById('ibyear')
    var result = document.querySelector('div#res')
    var age = year - Number(bday.value)

    if (bday.value.length == 0 || Number(bday.value) > year){
    window.alert('[ERROR] Check all the informations filled and try again.')
    } else{

    var sex = document.getElementsByName('radsex')
    var gender = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'photo')

    if (sex[0].checked){
        gender = `Man`
        if(age >= 0 && age < 10){
        img.setAttribute('src', 'boy.png')}
        else if(age < 21){
        img.setAttribute('src', 'young-man.png')}
        else if(age < 50){
        img.setAttribute('src', 'adult-man.png')}
        else{
            img.setAttribute('src', 'old-man.png')
        }
    } else if (sex[1].checked){
        gender = 'Woman'
        if(age >= 0 && age < 10){
        img.setAttribute('src', 'girl.png')}
        else if(age < 21){
            img.setAttribute('src', 'young-woman.png')
        }
        else if(age < 51){
            img.setAttribute('src', 'adult-woman.png')
        }        
        else{
            img.setAttribute('src', 'old-woman.png')
        }
    }
    }
    result.innerHTML = `<p>We detect ${gender} at age ${age}.</p>`
    result.style.textAlign = 'center'
    result.appendChild(img)
}