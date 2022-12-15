
var cont = 0;

function onMenuMobil(){
    document.getElementById('bag').style.visibility = 'hidden';
    document.getElementById('test').style.backgroundColor = 'black';
    document.getElementById('test').style.opacity = '1';
    document.getElementById(`nav`).style.backgroundColor = 'black';
    document.getElementById('test').style.height = '100vh';
    document.getElementById('menuMobil').style.display = 'block'
    document.getElementById('contents').style.display = '';
    cont++; 
}

function offMenuMobil(){
    bag.style.visibility = '';
    document.getElementById('nav').style.backgroundColor = 'var(--colorTitle)';
    document.getElementById('test').style.backgroundColor = 'var(--colorTitle)';
    document.getElementById('test').style.height = '48px';
    document.getElementById('menuMobil').style.display = 'none'
    document.getElementById('contents').style.display = 'block';
    cont = 0;
}

function adjustingMenuMobil(){
    if (document.body.clientWidth > 765) {
        return offMenuMobil();
    }
}

function clickMenu(){

        if(cont == 0){
            return onMenuMobil();
        }else{
            return offMenuMobil();
    }
}

function clickInputSear(){
    document.getElementById('iSearch').style.width = '72.5%'
    document.getElementById('cancel').style.display = 'inline-block'
    document.getElementById(`nav`).style.display = 'none';
    document.getElementById(`input`).style.marginTop = '15px';   
}

function clickCancel(){
    document.getElementById('iSearch').style.width = '98%'
    document.getElementById('cancel').style.display = 'none';
    document.getElementById(`nav`).style.display = 'flex';
    document.getElementById(`input`).style.marginTop = '50px';
}