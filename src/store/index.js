import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    articleId: '',
    articles: ''
  },
  mutations: {
    setArticleId(state, id) {
      state.articleId = id
    },
    setArticles(state, articles) {
      state.articles = articles
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
