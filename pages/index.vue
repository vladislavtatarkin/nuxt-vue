<template>
  <main class="container">
    <div class="container__title">
      <h1>Мастер акций</h1>
    </div>
    <ul class="container__cards-list" v-for="group in companyGroup">
      <li class="container__card" v-for="companyGr in group">
        <div class="container__card-item">
          <div class="container__card-img">
            <img :src="picturesUrlReplace(companyGr.picture)" alt="">
          </div>
          <div class="container__card-content">
            <div class="container__card-description">
              <h1>{{companyGr.description}}</h1>
              <h3>{{companyGr.name}}</h3>
            </div>
            <div class="container__card-button">
              <nuxt-link
                class="container__btn"
                to="/CreatePromotion"
                :class="companyGr.active === null ? 'disabled' : 'hover'"
                :disabled="companyGr.active === null"
              >
                {{companyGr.active ? 'Запустить' : 'Скоро'}}
              </nuxt-link>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  async fetch({store}) {
    if (store.getters['companyGroup/getCompanyGroup'].length === 0) {
      await store.dispatch('companyGroup/setGroup');
    }
  },
  data: () => ({

  }),
  computed: {
    companyGroup() {
      return this.$store.getters['companyGroup/getCompanyGroup'];
    }
  },
  methods: {
    picturesUrlReplace(url = '') {
      return url.replace('/store/merchant29', '');
    }
  }
}
</script>

<style scoped>
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  li,
  a {
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  body {
    margin: 0;
    padding: 0;
  }

  .container {
    width: 900px;
    margin: 0 auto;
    font-family: 'Montserrat', sans-serif;
  }

  .container__title {
    margin: 36px 0 27px;
  }

  .container__title > h1 {
    line-height: 29px;
    font-size: 24px;
    font-weight: 500;
    color: #4A545A;
  }

  .container__cards-list {
    display: flex;
    flex-direction: column;
  }

  .container__card {
    border: 2px solid #E4E7EA;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 24px;
    margin-bottom: 16px;
    list-style-type: none;
  }

  .container__card-item {
    display: flex;
    flex-direction: row;
  }

  .container__card-img {
    margin-right: 24px;
  }

  .container__card-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .container__card-description {
    min-height: 90px;
    max-width: 460px;
    color: #4A545A;
    margin-right: 74px;
    word-break: break-word;
  }

  .container__card-description > h1 {
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 12px;
  }

  .container__card-description > h3  {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }

  .container__card-button {
    display: flex;
    align-items: center;
  }

  .container__btn{
    background: none;
    border-radius: 8px;
    border: 2px solid #626A6F;
    padding: 16px 62px;
    color: #4A545A;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    outline: none;
    width: calc(220px - 64px * 2);
    text-align: center;
  }

  .container__btn.hover:hover {
    cursor: pointer;
    border: 2px solid #94D163;
    background: #94D163;
    color: #FFFFFF;
    transition: .15s all ease-in;
  }

  .container__btn.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>
