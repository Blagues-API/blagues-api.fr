<template>
  <div class="container token-page">
    <div class="card">
      <div class="token">
        <div class="language">VOTRE TOKEN</div>
        <div ref="target" class="code">
          <label class="overlay" for="copy"></label>
          {{ $auth.user.token }}
        </div>
        <div class="buttons">
          <button class="regerate" @click="regenerateToken()">
            {{ regenerated ? 'REGÉNÉRÉ !' : 'REGÉNÉRER' }}
          </button>
          <button id="copy" class="copy" @click="copyToClipboard()">
            {{ copied ? 'COPIÉ !' : 'COPIER' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['auth'],
  data() {
    return {
      copied: false,
      regenerated: false,
    }
  },
  methods: {
    copyToClipboard() {
      window.getSelection().removeAllRanges()
      const range = document.createRange()
      range.selectNode(this.$refs.target)
      window.getSelection().addRange(range)
      document.execCommand('copy')
      this.copied = true
      setTimeout(() => {
        this.copied = false
        window.getSelection().removeAllRanges()
      }, 2000)
    },
    async regenerateToken() {
      const { token, key } = await this.$axios.$post(
        '/api/regenerate',
        {
          key: this.$auth.user.token_key,
        },
        {
          headers: {
            Authorization: `Bearer ${this.$auth.user.token}`,
          },
        }
      )

      await this.$auth.setUser({ ...this.$auth.user, token, token_key: key })

      this.regenerated.value = true
      setTimeout(() => {
        this.regenerated.value = false
        window.getSelection().removeAllRanges()
      }, 2000)
    },
  },
}
</script>

<style lang="scss">
.token-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  @media (max-width: 420px) {
    padding: 40px 20px;
  }

  .head {
    margin-bottom: 40px;

    .title {
      margin-bottom: 20px;
      color: #0067ad;
      font-size: 26px;
      font-weight: bold;
      text-align: center;
    }

    p {
      margin-bottom: 3px;
      color: #393939;
      font-size: 14px;
      font-weight: bold; //  600
      text-align: center;
    }
  }

  .card {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;

    .token {
      display: flex;
      flex-direction: column;

      .language {
        margin: 0 0 6px 2px;
        color: #8b8b8b;
        font-size: 12px;
        font-weight: bold;
      }

      .code {
        position: relative;
        padding: 16px;
        background-color: #202020;
        color: white;
        font-size: 14px;
        letter-spacing: 0.5px;
        line-height: 28px;
        word-break: break-all;

        .overlay {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          cursor: pointer;
        }

        &::selection {
          background: transparent !important;
        }
      }

      .buttons {
        display: flex;
        margin-top: 10px;

        button {
          display: flex;
          flex: 1;
          align-items: center;
          justify-content: center;
          height: 40px;
          padding: 10px 16px;
          transition: background-color 0.3s;
          border-radius: 6px;
          outline: revert;
          background-color: var(--primary);
          color: var(--white);
          font-size: 15px;
          font-weight: bold;
          cursor: pointer;

          &:first-child {
            margin-right: 10px;
          }

          &:hover {
            background-color: var(--primary-dark);
          }
        }
      }
    }
  }
}
</style>
