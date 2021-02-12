
export const state = () => ({
  product: []
})

export const getters = {
  getProduct: state => state.product
}

export const mutations = {
  setProduct(state, product) {
    state.product.push(product);
  }
}

export const actions = {
  async setProduct({commit}) {
    try {
      const accessToken = "access_token=r27iavtafltg4e18dc265dd6a6452d21d89771b7deb6435";
      const json = "json=true";
      const connectionString = 'https://vsem-edu-oblako.ru/adminapi/api/getSimpleFood' + `?${accessToken}` + `&${json}`;
      const product = await this.$axios.$get(connectionString);
      commit('setProduct', product);
    } catch(e) {
      console.error(e.message);
    }
  }
}
