document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", function () {
    document.querySelector("body").classList.add("loaded");
  });

  // main-color change btn
  const colorBg = localStorage.getItem("primary-color");
  document.documentElement.style.setProperty("--p1", colorBg);

  const ColorBtn = document.querySelectorAll(".color-btn");
  ColorBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      const color = btn.getAttribute("data-color");
      document.documentElement.style.setProperty("--p1", color);
      localStorage.setItem("primary-color", color);
    });
  });

  // color swicher
  // document.querySelector(".color-switcher").addEventListener("click", () => {
  //   document.querySelector(".color-switcher").classList.toggle("opened");
  // });

  const body = document.querySelector("body");
  const toggleButtons = document.querySelectorAll(".mood_toggle");
  const toggleName = document.querySelector(".toggle_name");
  const icons = document.querySelectorAll(".mood_icon");

  // Function  on the current mode
  function updateUI(isDarkMode) {
    body.classList.toggle("dark", isDarkMode);
    toggleName.innerText = isDarkMode ? "Light Mode" : "Dark Mode";

    icons.forEach((icon) => {
      if (isDarkMode) {
        icon.classList.remove("ph-moon");
        icon.classList.add("ph-sun");
      } else {
        icon.classList.remove("ph-sun");
        icon.classList.add("ph-moon");
      }
    });
  }

  //  stored preference
  let currentMode = localStorage.getItem("mode") || "light";
  updateUI(currentMode === "dark");

  // Add click event listener to all toggle buttons
  toggleButtons.forEach((toggleBtn) => {
    toggleBtn.addEventListener("click", function () {
      currentMode = currentMode === "light" ? "dark" : "light";
      localStorage.setItem("mode", currentMode);
      updateUI(currentMode === "dark");
    });
  });

  // toggle btn for sidebar
  const sidebarBtn = document.querySelectorAll(".sidebar-btn");
  sidebarBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      const sideMenu = document.querySelector(".side-menu");
      sideMenu && sideMenu.classList.toggle("active");
    });
  });

  // primary button
  document.querySelectorAll(".primary-btn").forEach((btn) => {
    let span = document.createElement("span");
    span.className = "primary-btnSpan";
    btn.appendChild(span);

    btn.onmousemove = (event) => {
      let rect = btn.getBoundingClientRect(),
        offsetX = event.clientX - rect.left,
        offsetY = event.clientY - rect.top;
      span.style.top = `${offsetY}px`;
      span.style.left = `${offsetX}px`;
    };
  });
  // primary button2
  document.querySelectorAll(".primary-btn2").forEach((btn) => {
    let span = document.createElement("span");
    span.className = "primary-btn2Span";
    btn.appendChild(span);

    btn.onmousemove = (event) => {
      let rect = btn.getBoundingClientRect(),
        offsetX = event.clientX - rect.left,
        offsetY = event.clientY - rect.top;
      span.style.top = `${offsetY}px`;
      span.style.left = `${offsetX}px`;
    };
  });
  // counter up
  function counterUp(el, t) {
    let n = 0;
    const r = parseFloat(el.innerHTML);
    const finalValue = Number.isInteger(r) ? parseInt(r, 10) : r;
    const i = t.duration || 2000;
    const u = t.delay || 16;
    const step = finalValue / (i / u);

    const l = setInterval(() => {
      n += step;
      el.innerHTML = Number.isInteger(finalValue)
        ? Math.floor(n)
        : n.toFixed(2);
      if (n >= finalValue) {
        clearInterval(l);
        el.innerHTML = finalValue;
      }
    }, u);
  }

  const counterElements = document.querySelectorAll(".counter");
  counterElements.forEach((el) => {
    const IO = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          counterUp(entry.target, { duration: 2000, delay: 16 });
          IO.unobserve(entry.target); // Stop observing once the element is intersecting
        }
      });
    });
    IO.observe(el);
  });

  // testimonial slider
  const testimonial = new Swiper(".testimonial_slider", {
    spaceBetween: 30,
    speed: 2500,
    loop: true,
    leftToRight: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      bulletClass: "swiper-custom-bullet",
      bulletActiveClass: "swiper-custom-bullet-active",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1400: {
        slidesPerView: 3,
      },
      1600: {
        slidesPerView: 4,
      },
    },
  });

  // contact -Send us a message
  const btn = document.getElementById("contact-submit-btn");
  btn && emailjs.init("Your public key");
  const contactForm = document.getElementById("contact-form");
  contactForm &&
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      btn.value = "Sending...";
      const serviceID = "Your service id";
      const templateID = "Your template id";
      // Uncomment this for working demo

      // emailjs.sendForm(serviceID, templateID, this).then(
      //   () => {
      //     btn.value = "Send Email";
      //     Swal.fire("Message Sent Successfully", "", "success");
      //     document.querySelector("#name").value = "";
      //     document.querySelector("#email").value = "";
      //     document.querySelector("#phone").value = "";
      //     document.querySelector("#location").value = "";
      //     document.querySelector("#message").value = "";
      //   },
      //   (err) => {
      //     btn.value = "Send Email";
      //     alert(JSON.stringify(err));
      //   }
      // );
    });

  // ----------portfolio page js-------------

  // tab
  const tabs = document.querySelectorAll("[data-tab-target]");
  const tabContents = document.querySelectorAll("[data-tab-content]");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = document.querySelector(tab.dataset.tabTarget);
      tabContents.forEach((tabContent) => {
        tabContent.classList.remove("active");
      });
      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });
      tab.classList.add("active");
      target.classList.add("active");
    });
  });

  // FAQs According auto height
  const accordionHeaders = document.querySelectorAll(
    ".accordion-single .header-area"
  );

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const accordionSingle = this.closest(".accordion-single");
      const contentArea = this.nextElementSibling;

      if (accordionSingle.classList.contains("active")) {
        accordionSingle.classList.remove("active");
        slideUp(contentArea);
      } else {
        const activeAccordion = document.querySelector(
          ".accordion-single.active"
        );
        if (activeAccordion) {
          activeAccordion.classList.remove("active");
          slideUp(activeAccordion.querySelector(".content-area"));
        }

        accordionSingle.classList.add("active");
        slideDown(contentArea);
      }
    });
  });

  function slideDown(element) {
    element.style.display = "block";
    const height = element.scrollHeight;
    element.animate(
      [
        { height: "0px", opacity: 0 },
        { height: height + "px", opacity: 1 },
      ],
      {
        duration: 300,
        easing: "ease-out",
      }
    );
  }

  function slideUp(element) {
    const height = element.scrollHeight;
    const animation = element.animate(
      [
        { height: height + "px", opacity: 1 },
        { height: "0px", opacity: 0 },
      ],
      {
        duration: 300,
        easing: "ease-in",
      }
    );

    animation.onfinish = () => {
      element.style.display = "none";
    };
  }
  // FAQs According auto height end

  // comment reply
  const replyContainer = document.querySelectorAll(".reply-container");
  replyContainer &&
    replyContainer.forEach((container) => {
      const replyBtn = container.querySelector(".reply-btn");
      const replyAnswer = container.querySelector(".reply-answer");

      replyBtn.addEventListener("click", function () {
        replyAnswer.classList.toggle("show");
      });
    });

  // increment & discrement function
  const incrementButtons = document.querySelectorAll(".increment");
  const decrementButtons = document.querySelectorAll(".discrement");

  incrementButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const countElement = this.previousElementSibling;
      let count = parseInt(countElement.textContent);
      count++;
      countElement.textContent = count;
    });
  });

  decrementButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const countElement = this.nextElementSibling;
      let count = parseInt(countElement.textContent);
      if (count > 1) {
        count--;
        countElement.textContent = count;
      }
    });
  });

  // radio active bg color set
  const radioButtons = document.querySelectorAll('input[name="radio"]');
  radioButtons.forEach(function (radio) {
    radio.addEventListener("change", function () {
      radioButtons.forEach(function (rb) {
        rb.closest(".radioBtn").classList.remove("active");
      });
      if (radio.checked) {
        radio.closest(".radioBtn").classList.add("active");
      }
    });
  });

  // radio active payment content
  {
    const radioButtons = document.querySelectorAll(".payment");

    radioButtons.forEach(function (radio) {
      radio.addEventListener("change", function () {
        radioButtons.forEach(function (rb) {
          const parentDiv = rb.closest(".radio-wrapper");
          const radioBtnDiv = parentDiv.querySelector(".radioBtn");
          const radioContentDiv = parentDiv.querySelector(".radio-content");

          // Slide up and remove active class from all sections
          if (radioContentDiv.style.display === "block") {
            slideUp(radioContentDiv);
          }
          radioBtnDiv.classList.remove("active");
        });

        // Add active class and slide down the selected section
        if (radio.checked) {
          const parentDiv = radio.closest(".radio-wrapper");
          const radioBtnDiv = parentDiv.querySelector(".radioBtn");
          const radioContentDiv = parentDiv.querySelector(".radio-content");

          radioBtnDiv.classList.add("active");
          slideDown(radioContentDiv);
        }
      });
    });

    function slideDown(element) {
      element.style.display = "block";
      const height = element.scrollHeight;
      element.animate(
        [
          { height: "0px", opacity: 0 },
          { height: height + "px", opacity: 1 },
        ],
        {
          duration: 300,
          easing: "ease-out",
        }
      );
    }

    function slideUp(element) {
      const height = element.scrollHeight;
      const animation = element.animate(
        [
          { height: height + "px", opacity: 1 },
          { height: "0px", opacity: 0 },
        ],
        {
          duration: 300,
          easing: "ease-in",
        }
      );

      animation.onfinish = () => {
        element.style.display = "none";
      };
    }
  }
  // radio active Bellings address content
  {
    const radioButtons = document.querySelectorAll(".billing");

    radioButtons.forEach(function (radio) {
      radio.addEventListener("change", function () {
        radioButtons.forEach(function (rb) {
          const parentDiv = rb.closest(".radio-wrapper");
          const radioBtnDiv = parentDiv.querySelector(".radioBtn");
          const radioContentDiv = parentDiv.querySelector(".radio-content");

          // Slide up and remove active class from all sections
          if (radioContentDiv.style.display === "block") {
            slideUp(radioContentDiv);
          }
          radioBtnDiv.classList.remove("active");
        });

        // Add active class and slide down the selected section
        if (radio.checked) {
          const parentDiv = radio.closest(".radio-wrapper");
          const radioBtnDiv = parentDiv.querySelector(".radioBtn");
          const radioContentDiv = parentDiv.querySelector(".radio-content");

          radioBtnDiv.classList.add("active");
          slideDown(radioContentDiv);
        }
      });
    });

    function slideDown(element) {
      element.style.display = "block";
      const height = element.scrollHeight;
      element.animate(
        [
          { height: "0px", opacity: 0 },
          { height: height + "px", opacity: 1 },
        ],
        {
          duration: 300,
          easing: "ease-out",
        }
      );
    }

    function slideUp(element) {
      const height = element.scrollHeight;
      const animation = element.animate(
        [
          { height: height + "px", opacity: 1 },
          { height: "0px", opacity: 0 },
        ],
        {
          duration: 300,
          easing: "ease-in",
        }
      );

      animation.onfinish = () => {
        element.style.display = "none";
      };
    }
  }

  // country select function
  const selectBoxes = document.querySelectorAll(".select-box");
  selectBoxes.forEach((selectBox) => {
    const selected = selectBox.querySelector(".selected");
    const optionsContainer = selectBox.querySelector(".options-container");
    const optionsList = selectBox.querySelectorAll(".option");

    selected.addEventListener("click", () => {
      optionsContainer.classList.toggle("active");
    });

    optionsList.forEach((option) => {
      option.addEventListener("click", () => {
        selected.innerHTML = option.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
      });
    });
  });
  // GLightbox
  if (document.querySelector(".glightbox3") !== null) {
    GLightbox({
      selector: ".glightbox3",
    });
  }
  // Aos
  AOS.init({
    offset: 120,
    duration: 800,
    easing: "ease-in-out",
    anchorPlacement: "top-bottom",
    once: true,
  });
});
