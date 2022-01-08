const createNav = () => {
  let nav = document.querySelector(".navbar");
  nav.innerHTML = `
  <div class="nav">
        <img
          src="files/images/dark-logo.png"
          alt=""
          srcset=""
          class="brand-logo"
        />
        <div class="nav-items">
          <div class="search">
            <input
              type="search"
              class="search-box"
              placeholder="search brand, product"
            />
            <button class="search-btn">search</button>
          </div>
          <a href=""><img src="files/images/user.png" alt="" /></a>
          <a href=""><img src="files/images/cart.png" alt="" /></a>
        </div>
      </div>
      <ul class="links-container">
        <li class="list-item"><a href="" class="link">home</a></li>
        <li class="list-item"><a href="" class="link">women</a></li>
        <li class="list-item"><a href="" class="link">men</a></li>
        <li class="list-item"><a href="" class="link">kids</a></li>
        <li class="list-item"><a href="" class="link">accessories</a></li>
      </ul>
  `;
};
createNav();
