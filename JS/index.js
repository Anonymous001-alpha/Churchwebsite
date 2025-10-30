const butt = document.getElementById('butt');
const info2 = document.getElementById('Info2');
butt.addEventListener('click', () => {
    if(info2.style.display === 'none'){
        info2.style.display = 'block';
    } else {
        info2.style.display = 'none';
    }
}); 


