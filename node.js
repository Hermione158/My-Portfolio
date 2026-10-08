   // GSAP animations: replaces old checkFade()
      // Fallback: show everything if GSAP fails to load
      if (!window.gsap) {
        var items = document.querySelectorAll(".fade");
        for (var i = 0; i < items.length; i++) {
          items[i].style.opacity = 1;
          items[i].style.transform = "none";
        }
      } else {
        gsap.registerPlugin(ScrollTrigger);

        // Skip heavy motion if user prefers reduced motion
        var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (reduceMotion) {
          gsap.set(".fade", { opacity: 1, y: 0 });
        } else {
          // 1. Hero intro on page load
          gsap.set(".hero", { opacity: 1 });
          gsap.timeline({ defaults: { ease: "power3.out" } })
            .from(".hero-divider", { scaleX: 0, opacity: 0, duration: 0.5, transformOrigin: "left center" })
            .from(".hero .welcome", { y: 30, opacity: 0, duration: 0.6 }, "-=0.25")
            .from(".hero h2", { y: 40, opacity: 0, duration: 0.7 }, "-=0.3")
            .from(".hero-role", { y: 25, opacity: 0, duration: 0.6 }, "-=0.4")
            .from(".hero-desc", { y: 30, opacity: 0, duration: 0.6 }, "-=0.35")
            .from(".hero-meta span", { y: 20, opacity: 0, duration: 0.5, stagger: 0.1 }, "-=0.3")
            .from(".hero-btns a", { y: 20, opacity: 0, duration: 0.5, stagger: 0.15 }, "-=0.3");

          // 2. Section titles + misc fade-up (auto-covers all .fade except cards)
          gsap.utils.toArray(".fade:not(.activity-card)").forEach(function (el) {
            gsap.fromTo(el,
              { y: 30, opacity: 0 },
              {
                y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
                scrollTrigger: { trigger: el, start: "top 88%" }
              });
          });

          // 3. Priority: Activities grid stagger - bouncy entrance
          ScrollTrigger.batch(".activity-card", {
            start: "top 88%",
            onEnter: function (batch) {
              gsap.fromTo(batch,
                { y: 50, opacity: 0, scale: 0.95 },
                { y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.12, ease: "back.out(1.4)", overwrite: true });
            }
          });
          // Set initial state for cards (prevents flash before trigger)
          gsap.set(".activity-card", { y: 50, opacity: 0, scale: 0.95 });

          // 4. Bouncy playful hover - cards
          var cards = document.querySelectorAll(".activity-card");
          for (var c = 0; c < cards.length; c++) {
            (function (card) {
              card.addEventListener("mouseenter", function () {
                gsap.to(card, { y: -10, scale: 1.03, boxShadow: "0 20px 40px rgba(0,0,0,0.45)", duration: 0.4, ease: "back.out(2)", overwrite: "auto" });
              });
              card.addEventListener("mouseleave", function () {
                gsap.to(card, { y: 0, scale: 1, boxShadow: "0 0 0 rgba(0,0,0,0)", duration: 0.5, ease: "elastic.out(1,0.6)", overwrite: "auto" });
              });
            })(cards[c]);
          }

          // 5. Bouncy hover - buttons
          var btns = document.querySelectorAll(".btn, .btn-outline, .card-btn");
          for (var b = 0; b < btns.length; b++) {
            (function (btn) {
              btn.addEventListener("mouseenter", function () {
                if (btn.disabled) return;
                gsap.to(btn, { y: -3, scale: 1.05, duration: 0.3, ease: "back.out(2.5)", overwrite: "auto" });
              });
              btn.addEventListener("mouseleave", function () {
                if (btn.disabled) return;
                gsap.to(btn, { y: 0, scale: 1, duration: 0.4, ease: "elastic.out(1,0.6)", overwrite: "auto" });
              });
            })(btns[b]);
          }

          // 6. Sidebar pic + socials + nav - playful
          var pic = document.querySelector("header img");
          if (pic) {
            pic.addEventListener("mouseenter", function () {
              gsap.to(pic, { scale: 1.1, duration: 0.5, ease: "elastic.out(1,0.5)", overwrite: "auto" });
            });
            pic.addEventListener("mouseleave", function () {
              gsap.to(pic, { scale: 1, duration: 0.5, ease: "elastic.out(1,0.6)", overwrite: "auto" });
            });
          }

          var navLinks = document.querySelectorAll(".links a");
          for (var n = 0; n < navLinks.length; n++) {
            (function (link) {
              link.addEventListener("mouseenter", function () {
                gsap.to(link, { x: 8, duration: 0.3, ease: "power2.out", overwrite: "auto" });
              });
              link.addEventListener("mouseleave", function () {
                gsap.to(link, { x: 0, duration: 0.4, ease: "elastic.out(1,0.6)", overwrite: "auto" });
              });
            })(navLinks[n]);
          }

          // 7. Header social icons - bouncy lift
          var socials = document.querySelectorAll(".header-icons a");
          for (var s = 0; s < socials.length; s++) {
            (function (icon) {
              icon.addEventListener("mouseenter", function () {
                gsap.to(icon, { y: -6, scale: 1.15, duration: 0.35, ease: "back.out(2.5)", overwrite: "auto" });
              });
              icon.addEventListener("mouseleave", function () {
                gsap.to(icon, { y: 0, scale: 1, duration: 0.5, ease: "elastic.out(1,0.5)", overwrite: "auto" });
              });
            })(socials[s]);
          }
        }
      }

      // 8. Contact form - stop page refresh, show success message
      var form = document.getElementById("contact-form");
      if (form) {
        form.addEventListener("submit", function (e) {
          e.preventDefault();
          var btn = document.getElementById("send-btn");
          var status = document.getElementById("form-status");
          btn.textContent = "Message Sent!";
          btn.disabled = true;
          status.textContent = "Thanks! I'll get back to you soon.";
          status.classList.add("show"); 
          setTimeout(function () {
            btn.textContent = "Send Message";
            btn.disabled = false;
            status.textContent = "";
            status.classList.remove("show");
            form.reset();
          }, 1500);
        });
      }