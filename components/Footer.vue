<template>
  <footer>
    <div class="copyright">
      <div>
        Blagues API © 2019-{{ new Date().getFullYear() }}
        <a href="https://www.draftman.fr" title="DraftMan Developer">DraftMan</a>
      </div>
      <span class="separator">|</span>
      <div>
        Powered by
        <a href="https://www.draftbot.fr" title="DraftBot Discord Bot">DraftBot</a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
footer {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  background-color: var(--secondary);
  color: var(--white);

  .copyright {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 0;
    color: #ffffff;
    font-size: 14px;
    font-weight: bold;
    line-height: 22px;

    a {
      text-decoration: none;
    }

    .separator {
      margin: 0 8px;
    }
    @media screen and(max-width: 720px) {
      flex-direction: column;

      .separator {
        display: none;
      }
    }
  }
}
</style>
