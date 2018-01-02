import Vue from 'vue'
import tokens from './tokens.json'

// State
const state = {
  tokens: tokens,
  current_token: {
    "addr": "0x255aa6df07540cb5d3d297f0d0d4d84cb52bc8e6",
    "name": "RDN",
    "decimals": 18
  },
  token_filter: "RDN",
}
const getters = {
  tokens: (state) => state.tokens,
  current_token: (state) => state.current_token,
  token_filter: (state) => state.token_filter,
  filtered_tokens: (state) => {
    if(state.token_filter.length){
      return state.tokens.filter(token => {
        if(token.name.toLowerCase().indexOf(state.token_filter.toLowerCase()) > -1){
          return true
        } else  {
          return false
        }
      }).sort((a,b) => {
      if(a.name < b.name){
        return -1
      }
      if(a.name > b.name){
        return 1
      }
      return 0
    })
    } else {
      return state.tokens.sort((a,b) => {
      if(a.name < b.name){
        return -1
      }
      if(a.name > b.name){
        return 1
      }
      return 0
    })
    }
  },

}

// Mutations
const mutations = {
  ["UPDATE_TOKENS"] (state, tokens) {
    state.tokens = tokens
  },
  ["UPDATE_CURRENT_TOKEN"] (state, token) {
    state.current_token = token
  },
  ["UPDATE_TOKEN_FILTER"] (state, filter) {
    state.token_filter = filter
  },

}


// Actions
const actions = {

}


export default  {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
