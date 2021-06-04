
export const state = () => ({
  hero: {},
  aboutCompany: {},
  offer: {}
})

export const getters = {
  hero: (state) => state.hero,
  aboutCompany: (state) => state.aboutCompany,
  offer: (state) => state.offer
}
export const actions = {
  async nuxtServerInit({ commit }, { $fire }) {
  const messageRef = $fire.firestore.collection('main').doc('hero');
    let messageDoc = {};
    try {
      messageDoc = await messageRef.get();
    } catch (e) {
      console.error(e);
    }

    const messageRefAboutCompany = $fire.firestore
      .collection('main')
      .doc('about_company');
    let messageDocAboutCompany = {};
    try {
      messageDocAboutCompany = await messageRefAboutCompany.get();
    } catch (e) {
      console.error(e);
    }

    const messageRefOffer = $fire.firestore.collection('main').doc('offer');
    let messageDocOffer = {};
    try {
      messageDocOffer = await messageRefOffer.get();
    } catch (e) {
      console.error(e);
    }

    commit('assignHero', messageDoc.data())
    commit('assignaAboutCompany', messageDocAboutCompany.data())
    commit('assignOffer', messageDocOffer.data())
  }
};

export const mutations = {
  assignHero(state, data) {
    state.hero = data
  },
  assignaAboutCompany(state, data) {
    state.aboutCompany = data
  },
  assignOffer(state, data) {
    state.offer = data
  }
}
