window.onload = function(){
    document.querySelector(".menu_mobile").addEventListener("click", function(){
        if(document.querySelector(".menu nav ul").style.display == 'flex') {
            document.querySelector(".menu nav ul").style.display = 'none';
    } else {
        document.querySelector(".menu nav ul").style.display = 'flex';
    }
    });
};

function hideMenu() {
    var menu = document.querySelector('.menu nav ul');
    menu.style.display = 'none';
}

function changeColor(element) {
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.classList.remove('clicked');
    });

    element.classList.add('clicked');
}

