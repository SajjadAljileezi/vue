import Vue from 'vue'

import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        token: localStorage.getItem('access_token') || null ,
    },
    getters:{

        loggedIn(state){
            return state.token !==null
        }
    },
    mutations:{
        destroyToken(state){
            state.token=null

        },
        retrieveToken(state,token){
            state.token = token
        }
    },
    actions:{
        retrieveToken(context, credentials){
            return new Promise((resolve, reject)=>{
                axios.post('/api/auth/login',{
                    email:credentials.email,
                    password:credentials.password,
                    remeberme:credentials.remeberme,
                }).then(response=>{
                    const token= response.data.access_token
                    localStorage.setItem('access_token', token)
                    context.commit('retrieveToken',token)
                }).catch(error=>{
                    console.log(error)
                })
            })
       },

     destroyToken(context){
         axios.defaults.headers.common['Authorization'] = 'Bearer' + context.state.token
         if(context.getters.loggedIn){
             return new Promise((resolve,reject)=>{
                 axios.get('/api/logout')
                 .then(response=>{
                     localStorage.removeItem('access_token')
                     context.commit('destroyToken')
                     resolve(response)
                 })
                 .catch(error=>{
                     localStorage.removeItem('access_token')
                     context.commit('destroyToken')
                     reject(error)
                 })
             })
         }
     }
    }
   })
