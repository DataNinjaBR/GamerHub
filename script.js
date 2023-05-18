// Função de rolagem suave
document.querySelector('.scroll-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
});

// Mostrar o botão de rolagem suave quando rolar
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var btn = document.querySelector('.scroll-to-top');
    if (scrollPosition > 500) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});
