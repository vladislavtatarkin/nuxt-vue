<template>
  <main class="container">
    <div class="success__title">
      <h1>Мастер акций &#8212; <span>Шаг {{this.$route.query.step}}/{{this.$route.query.steps}}</span></h1>
    </div>
    <div class="success__block">
      <div class="success__content">
        <div class="success__icon">
          <svg-icon name="ok" />
        </div>
        <div class="success__title-subtitle">
          <h1>Акция успешно запущена!</h1>
          <h3>Промокод: <span>{{this.$route.query.code}}</span></h3>
        </div>
        <div class="success__btn">
          <nuxt-link class="btn hover" to="/">
            Все акции
          </nuxt-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {

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
  a {
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  .container {
    width: 400px;
    margin: 0 auto;
    font-family: 'Montserrat', sans-serif;
  }

  .success__title {
    margin: 45px 0 26px;
  }

  .success__title > h1 {
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #4A545A;
  }

  .success__block {
    border: 2px solid #B6C0C6;
    box-sizing: border-box;
    border-radius: 8px;
  }

  .success__content {
    text-align: center;

  }

  .success__icon {
    margin-top: 88px;
  }

  .success__title-subtitle {
    color: #4A545A;
  }

  .success__title-subtitle h1{
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    width: 200px;
    margin: 35px auto 35px;
  }

  .success__title-subtitle h3 {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }

  .success__title-subtitle h3 span {
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
  }

  .success__btn {
    margin: 50px 0 60px;
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
