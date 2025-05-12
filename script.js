 function openMenu() {
      const overlay = document.getElementById("overlay");
      const offcanvas = document.getElementById("offcanvas");

      overlay.style.width = "100%";

      setTimeout(() => {
        offcanvas.style.left = "0";
      }, 500);
    }

    function closeMenu() {
      const overlay = document.getElementById("overlay");
      const offcanvas = document.getElementById("offcanvas");

      offcanvas.style.left = "-350px";

      setTimeout(() => {
        overlay.style.width = "0";
      }, 500);
    }