<script>
document.addEventListener("DOMContentLoaded", () => {

  /* ===== CAROUSEL CENTER EFFECT ===== */
  const track = document.querySelector('.carousel-track');
  const cards = document.querySelectorAll('.perfume-card');

  function highlightCenterCard() {
    const center = track.scrollLeft + track.offsetWidth / 2;

    cards.forEach(card => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(center - cardCenter);

      if (distance < card.offsetWidth / 2) {
        card.classList.add('center');
      } else {
        card.classList.remove('center');
      }
    });
  }

  track.addEventListener('scroll', highlightCenterCard);
  window.addEventListener('load', highlightCenterCard);

  /* ===== MODAL ===== */
  const modal = document.getElementById('perfume-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalImg = document.getElementById('modal-img');
  const modalPrice = document.getElementById('modal-price');
  const modalDesc = document.getElementById('modal-desc');
  const closeBtn = document.querySelector('.close');

  cards.forEach(card => {
    card.addEventListener('click', () => {

      modalTitle.textContent = perfumeData[key].title;
      modalImg.src = perfumeData[key].img;
      modalPrice.textContent = perfumeData[key].price;
      modalDesc.textContent = perfumeData[key].desc;

      modal.style.display = "block";
    });
  });

  closeBtn.addEventListener('click', () => modal.style.display = "none");
  window.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = "none";
  });

});
</script>

cards.forEach(card => {
  card.addEventListener('click', () => {
    alert("CARD CLICKED");
  });
});

const cards = document.querySelectorAll(".perfume-card");
const modal = document.getElementById("perfume-modal");
const closeBtn = document.querySelector(".close");

cards.forEach(card => {
  card.addEventListener("click", () => {
    const key = card.dataset.perfume;
    const data = perfumeData[key];

    document.getElementById("modal-title").innerText = data.title;
    document.getElementById("modal-img").src = data.img;
    document.getElementById("modal-price").innerText = data.price;
    document.getElementById("modal-desc").innerText = data.desc;

    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

const cards = document.querySelectorAll(".perfume-card");
const modal = document.getElementById("perfume-modal");
const closeBtn = document.querySelector(".close");

const modalTitle = document.getElementById("modal-title");
const modalImg = document.getElementById("modal-img");
const modalPrice = document.getElementById("modal-price");
const modalDesc = document.getElementById("modal-desc");

cards.forEach(card => {
  card.addEventListener("click", () => {
    modalTitle.textContent = card.dataset.title;
    modalImg.src = card.dataset.img;
    modalPrice.textContent = card.dataset.price;
    modalDesc.textContent = card.dataset.desc;

    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});


