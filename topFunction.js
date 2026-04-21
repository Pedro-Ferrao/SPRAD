var mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  // Mostra o botão após rolar 300px para baixo
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}


// botão do whatsApp flutuante
// Botão WhatsApp flutuante — aparece quando a hero sai do viewport
