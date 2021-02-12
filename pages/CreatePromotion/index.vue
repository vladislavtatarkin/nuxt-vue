<template>
  <main class="container">
    <div class="promotion__title">
      <h1>Мастер акций &#8212; <span>Шаг {{currentStep}}/{{allSteps}}</span></h1>
    </div>
    <form @submit.prevent="onSubmit">

      <div class="promotion__select">
        <h1>Что даем за первый заказ?</h1>
        <div class="promotion__select-block">
          <div class="checkbox" v-for="radio in this.radio">
            <input
              :type="radio.type"
              :data-type="radio.dataType"
              name="promotion"
              class="promotion__checkbox"
              checked
              :id="radio.span"
              @click="promotionHandler"
            />
            <label :for="radio.span"></label>
            <span>{{ radio.span }}</span>
          </div>
        </div>
      </div>

      <div class="promotion__sale-block" v-if="this.checkboxType === 'promoCode'">
        <h1>Размер скидки</h1>
        <div class="promotion__sale">
          <p>{{this.sale}}</p>
        </div>
      </div>

      <div class="promotion__select-gift" v-else-if="this.checkboxType === 'gift'">
        <h1>Выберите подарок из списка</h1>
        <div class="promotion__gift">
          <select size="1" v-for="pr in product">
            <option disabled selected>Выберите подарок</option>
            <option>{{pr.msg}}</option>
          </select>
        </div>
      </div>

      <div class="promotion__promo-code">
        <div class="checkbox">
          <input
            type="checkbox"
            id="promo"
            class="promotion__checkbox"
            @click="promoCodeHandler"
          >
          <label for="promo"></label>
          <span>Свой промокод</span>
        </div>
      </div>

      <div class="promotion__promo-code-block" v-if="this.promoCodeCheckbox">
        <p>{{this.promoCode}}</p>
      </div>

      <div class="promotion__buttons">
        <nuxt-link class="btn" to="/">
          Назад
        </nuxt-link>
        <nuxt-link class="btn hover" :to="{ path: '/CreatePromotion/2', query: { step: currentStep + 1, steps: allSteps, code: promoCode}}">
          Далее
        </nuxt-link>
      </div>

    </form>
  </main>
</template>

<script>
export default {
  async fetch({store}) {
    if (store.getters['product/getProduct'].length === 0) {
      await store.dispatch('product/setProduct');
    }
  },
  data: () => ({
    radio: [
      {type: 'radio', dataType: 'promoCode', span: 'Скидка'},
      {type: 'radio', dataType: 'gift', span: 'Подарок'}
    ],
    checkboxType: 'gift',
    sale: "30%",
    promoCodeCheckbox: false,
    promoCode: 'TestPromo',
    allSteps: 2,
    currentStep: 1
  }),
  computed: {
    product() {
      return this.$store.getters['product/getProduct'];
    }
  },
  methods: {
    async onSubmit() {
      try {
        const code = {
          code: 'first_order'
        }
        const accessToken = "access_token=r27iavtafltg4e18dc265dd6a6452d21d89771b7deb6435";
        const connectionString = 'https://vsem-edu-oblako.ru/adminapi/api/addCampaignItem' + `?${accessToken}` + '&code=first_order';
        await this.$axios.$post(connectionString, JSON.stringify(code));
      } catch(e) {
        console.error(e.message)
      }
    },
    promotionHandler(e) {
      const target = e.target;
      this.checkboxType = target.dataset.type;
    },
    promoCodeHandler(e) {
      this.promoCodeCheckbox = !this.promoCodeCheckbox;
    }
  }
}
</script>

<style lang="css" scoped>
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  li,
  input[type="checkbox"],
  input[type="radio"],
  input,
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
    width: 400px;
    margin: 0 auto;
    font-family: 'Montserrat', sans-serif;
  }

  .promotion__title {
    margin: 42px 0 32px;
  }

  .promotion__title > h1 {
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #4A545A;
  }

  .promotion__select {
    margin-bottom: 16px;
  }

  .promotion__select > h1 {
    margin: 0 0 16px 20px;
    color: #4A545A;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }

  .promotion__select-block {
    display: flex;
    flex-direction: column;
    border: 2px solid #B6C0C6;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 19px;
  }

  .checkbox {
    display: flex;
  }

  .checkbox span {
    color: #4A545A;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }

  .checkbox:first-child {
    margin-bottom: 20px;
  }

  .promotion__checkbox {
    display: none;
  }

  .promotion__checkbox + label {
    margin-right: 15px;
    cursor: pointer;
  }

  .promotion__checkbox + label {
    background-color: #FFFFFF;
    border: 2px solid #4A545A;;
    padding: 8px;
    border-radius: 3px;
    display: inline-block;
    position: relative;
  }

  .promotion__checkbox:checked + label {
    background: #4FC1E4;
    border-color: #4FC1E4;
    color: #99a1a7;
    transition: .15s all ease-in;
  }

  .promotion__checkbox:checked + label:after {
    content: '\2714';
    font-size: 17px;
    position: absolute;
    height: 20px;
    bottom: 0;
    left: 2px;
    color: #ffffff;
    transform: rotate(6deg);
  }

  .promotion__select-gift {
    margin-bottom: 17px;
  }

  .promotion__select-gift > h1 {
    margin: 0 0 8px 20px;
    color: #4A545A;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }

  .promotion__gift  {
    border: 2px solid #B6C0C6;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 20px 16px;
    width: 100%;
  }

  .promotion__gift > select {
    border: none;
    width: 100%;
    outline: none;
    color: #4A545A;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }

  .promotion__sale-block {
    color: #4A545A;
    margin-bottom: 17px;
  }

  .promotion__sale {
    border: 2px solid #B6C0C6;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 20px 16px;
  }

  .promotion__sale-block > h1 {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    margin: 0 0 8px 20px;
  }

  .promotion__promo-code {
    margin-left: 20px;
    margin-bottom: 11px;
  }

  .promotion__promo-code-block {
    border: 2px solid #B6C0C6;
    box-sizing: border-box;
    border-radius: 8px;
    margin-bottom: 15px;
  }

  .promotion__promo-code-block > p {
    padding: 20px 16px;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #4A545A;
  }

  .promotion__buttons {
    margin-top: 40px;
  }

  .btn{
    background: none;
    border-radius: 8px;
    border: 2px solid #626A6F;
    padding: 14px 68px;
    color: #4A545A;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    outline: none;
    text-align: center;
    margin-top: 10px;
  }

  .btn:first-child {
    margin-right: 10px;
  }

  .btn.hover {
    cursor: pointer;
    border: 2px solid #94D163;
    background: #94D163;
    color: #FFFFFF;
    transition: .15s all ease-in;
  }
</style>
