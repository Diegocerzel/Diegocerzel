$(document).ready(function () {
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  //Keen slider
  const rightLeft = document.querySelector(".arrow-right");
  const leftarrow = document.querySelector(".arrow-left");

  const rightLeft1 = document.querySelector(".arrow-right1");
  const leftarrow1 = document.querySelector(".arrow-left1");

  //Initiate the slider
  const slider = new KeenSlider("#my-keen-slider", {
    loop: true,
    slidesPerView: 1,
  });

  rightLeft1.addEventListener("click", (e) => {
    slider.next();
  });
  leftarrow1.addEventListener("click", (e) => {
    slider.prev();
  });

  const slider2 = new KeenSlider("#my-second-keen-slider", {
    loop: true,
    slidesPerView: 1,
  });

  rightLeft.addEventListener("click", (e) => {
    slider2.next();
  });
  leftarrow.addEventListener("click", (e) => {
    slider2.prev();
  });

  //scroll function of the menu
  if (screen.width < 800) {
    $("a").click(function () {
      $("html, body").animate(
        {
          scrollTop: $($(this).attr("href")).offset().top - 80,
        },
        500
      );
      return false;
    });
  } else {
    $("a").click(function () {
      $("html, body").animate(
        {
          scrollTop: $($(this).attr("href")).offset().top - 80,
        },
        500
      );
      return false;
    });
  }

  //Be able to scroll on mobile view when button has class menu-on
  $("button").hasClass("menu-on");
  {
    $("a").on("click", function () {
      $(".container").removeClass("invisible");
      $("button").removeClass("menu-on");
      $(".links").removeClass("show");
    });
  }

  // When clicking the button on mobile
  //1.- first the hamburger menu toggles to the x animation, adding the class menu-on
  //2.- the menumobile active toggles between hide and show. with the class visible
  //3.- The menu will toggle between absolute in order to let the menu on mobile to scroll.
  //4.- The container will toggle between hide and show. with the class invisible.
  $("button").on("click", function () {
    $(this).toggleClass("menu-on");
    $(".menumobileactive").toggleClass("show");
    $(".menu").toggleClass("absolute");
    $(".container").toggleClass("invisible");
    $("body").toggleClass("overflowhidden");
  });

  //when clicking on a link, body will remove overflowhidden
  $(".links a").on("click", function () {
    $("body").removeClass("overflowhidden");
  });

  // When the document is loaded the screen is checked, in order to determine if the menu desktop needs the class menumobile active

  //When the screen is higher than 800px the links, removes class menumobileactive
  if ($(window).width() > 800) {
    $(".links").removeClass("menumobileactive");
  }
  //When the screen is less than 800px the links is converted into menumobileactive, links for mobile
  else {
    $(".links").addClass("menumobileactive");
  }

  // Active menu link
  $(function () {
    var pgurl = window.location.href.substr(
      window.location.href.lastIndexOf("/") + 1
    );
    $(".links li a").each(function () {
      if ($(this).attr("href") == pgurl || $(this).attr("href") == "")
        $(this).addClass("on");
    });
  });
});

/*If browser resized, check width again */
$(window).resize(function () {
  //When the screen is higher than 800px the links, removes class menumobileactive
  if ($(window).width() > 800) {
    $(".links").removeClass("menumobileactive");
    $(".container").removeClass("invisible");
    $("button").hasClass("menu-on");
    {
      $("button").removeClass("menu-on");
      $(".links").removeClass("show");
    }
  }
  //When the screen is less than 800px the links is converted into menumobileactive, links for mobile
  else {
    $(".links").addClass("menumobileactive");
  }
});
