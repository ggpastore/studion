$(document).ready(() => {
  const slickOptions = {
    autoplay: true,
    autoplaySpeed: 2500,
    dots: false,
    prevArrow:
      '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>',
    nextArrow:
      '<button type="button" class="slick-next slider__next-arrow">Previous</button>',
  };
  $(".slider").slick(slickOptions);
  $(".testimonies__slider").slick(slickOptions);


  $(".footer__form-button").on("click", () => {
      const email = $("#email").val();
      Email.send({
        Host : "smtp.yourisp.com",
        Username : "username",
        Password : "password",
        To : "ggspastore@gmail.com",
        From : email,
        Subject : "Por favor, me adicione na newsletter",
        Body : `Olá,
        eu gostaria de ser adicionado à newsletter do site. 
        
        Meu e-mail é ${email}
        
        Obrigado!`
    }).then(
      message => alert(message)
    );
  });
});
