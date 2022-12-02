import { getToken, setToken, removeToken } from '@/utils/auth'
import { deviceLogin } from '@/api/device'

const getDefaultState = () => {
    return {
      token: getToken(),
    }
}

const state = getDefaultState()

const mutations = {
    RESET_STATE: (state) => {
        Object.assign(state, getDefaultState())
    },
    SET_TOKEN: (state, token) => {
        state.token = token
    },
}

const actions = {
    //device login
    login({ commit }, mac) {
        return new Promise((resolve, reject) => {
            deviceLogin({mac:mac.trim()}).then( response => {
                const { token } = response
                commit('SET_TOKEN', token)
                setToken(token)
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },

    //device loginout
    logout({ commit }) {
        return new Promise((resolve, reject) => {
          logout().then(() => {
            removeToken() // must remove  token  first
            resolve()
          }).catch(error => {
            reject(error)
          })
        })
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}