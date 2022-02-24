import "../css/main.css";
import "../css/darklightmode.css";

const moreOptions = document.querySelector("#bmore");
const bShowMobileLinks = document.querySelector("#bmenu");
const mobileMenu = document.querySelector(".links");
const moreMenu = document.querySelector(".more .menu");

bShowMobileLinks.addEventListener("click", (e) => {
  e.preventDefault();
  mobileMenu.classList.toggle("show");
});

moreOptions.addEventListener("click", (e) => {
  e.preventDefault();
  moreMenu.classList.toggle("show");
});

//-------------------------------------------------------
const videos = [
  {
    id: "PyMlV5_HRWk",
  },
  {
    id: "XCbMVbeKlCg",
  },
  {
    id: "Fmdb-KmlzD8",
  },
  {
    id: "lOthvD1rMbQ",
  },
  {
    id: "nXDk86lQhto",
  },
];

const sliderContainer = document.querySelector("#slider");
const currentContainer = document.querySelector("#current");
const videosContainer = document.querySelector("#videos-container");
const bNext = document.querySelector(".right");
const bPrev = document.querySelector(".left");
let current = 0;

bNext.addEventListener("click", (e) => {
  let changed = current;
  current = current + 1 <= videos.length ? current + 1 : current;
  if (current !== changed) {
    renderCurrentVideo(videos[current].id);
  }
});

bPrev.addEventListener("click", (e) => {
  let changed = current;
  current = current - 1 >= 0 ? current - 1 : current;
  if (current !== changed) {
    renderCurrentVideo(videos[current].id);
  }
});

function renderCurrentVideo(id) {
  currentContainer.innerHTML = `
            <iframe width="100%" height="720" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `;
}
renderVideos();
renderCurrentVideo(videos[current].id);

function renderVideos() {
  const thumbnails = videos.map((video) => {
    return `
          <div class="item">
              <a href="#">
                  <img src="https://i3.ytimg.com/vi/${video.id}/mqdefault.jpg" />
              </a>
          </div>`;
  });
  videosContainer.innerHTML = thumbnails.join("");
}
