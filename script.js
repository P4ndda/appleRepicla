var cont = 0;

function clickMenu(){

    if(cont == 0){
        bag.style.visibility = 'hidden';
        document.getElementById('test').style.backgroundColor = 'black';
        document.getElementById(`nav`).style.backgroundColor = 'black';
        document.getElementById('test').style.height = '100vh';
        document.getElementById('menuMobil').style.display = 'block'
        cont++;
    }else{
        bag.style.visibility = '';
        document.getElementById('test').style.backgroundColor = 'black';
        document.getElementById(`nav`).style.backgroundColor = 'var(--colorTitle)';
        document.getElementById('test').style.height = '48px';
        document.getElementById('menuMobil').style.display = 'none'
        cont = 0;
    }
}

function clickInputSear(){
    document.getElementById('iSearch').style.width = '72.5%'
    document.getElementById('stop').style.display = 'inline-block'
    document.getElementById(`nav`).style.display = 'none';
}

