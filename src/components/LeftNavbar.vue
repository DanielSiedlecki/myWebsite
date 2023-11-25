<template>
  <div class="side-nav mobile">
    <router-link to="/">
      <a class="logo">
        <p class="text-white font-semibold">D Siedlecki</p>
      </a>
    </router-link>
    <ul class="nav-links">
      <li>
        <router-link to="/home">
          <a
            ><i class="bi bi-house-door-fill"></i>
            <p>Home</p></a
          >
        </router-link>
      </li>
      <li>
        <router-link to="/about">
          <a
            ><i class="bi bi-person-fill"></i>
            <p>About Me</p></a
          >
        </router-link>
      </li>
      <li>
        <a href="#"
          ><i class="bi bi-folder-fill"></i>
          <p>Portfolio</p></a
        >
      </li>
      <li>
        <router-link to="/contact">
          <a
            ><i class="bi bi-envelope-open-fill"></i>
            <p>Contact</p></a
          >
        </router-link>
      </li>
    </ul>

    <p class="copyright_text">
      Created and Designed by Daniel Siedlecki © 2023 - All Rights Reserved
    </p>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style lang="scss" scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css");

.active {
  color: white;
}
.side-nav {
  z-index: 1000;
  color: #767676;
  width: 250px;
  height: 100%;
  background: #000000;
  position: fixed;
  top: 0;
  left: 0;
  padding: 25px;

  .logo {
    display: block;
    margin-bottom: 50px;
    margin-top: 125px;

    p {
      font-size: 1.5rem;
    }
  }

  .nav-links {
    list-style: none;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 2rem;

    li {
      padding: 10;
      a {
        display: flex;
        gap: 8px;
        p,
        i {
          font-size: 1.1rem;
          transition: 0.2s ease-in-out;
        }
        i.iconShow {
          display: none;
        }
      }

      p:hover {
        transition: 0.2s ease-in-out;
        letter-spacing: 2px;
      }
    }
  }

  p {
    font-size: 0.8rem;
    letter-spacing: 0.5px;
  }
}

@media screen and (max-width: 1024px) {
  .side-nav.mobile {
    display: flex;
    justify-content: center;

    .logo {
      display: none;
    }
    width: 50px;

    .nav-links {
      li {
        padding: 10;
        a {
          p {
            display: none;
          }

          i {
            font-size: 1.2rem;
          }
        }
      }
    }
  }
  .copyright_text {
    display: none;
  }
}
</style>
