
export const state = () => ({
  companyGroup: []
})

export const getters = {
  getCompanyGroup: state => state.companyGroup
}

export const mutations = {
  setCompanyGroup(state, group) {
    state.companyGroup.push(group.details);
  }
}

export const actions = {
  async setGroup({commit}) {
    try {
      const accessToken = "access_token=r27iavtafltg4e18dc265dd6a6452d21d89771b7deb6435";
      const json = "json=true";
      const connectionString = 'https://vsem-edu-oblako.ru/adminapi/api/getListCampaign' + `?${accessToken}` + `&${json}`;
      const group = await this.$axios.$get(connectionString);
      commit('setCompanyGroup', group);
    } catch(e) {
      console.error(e.message);
    }
  }
}
