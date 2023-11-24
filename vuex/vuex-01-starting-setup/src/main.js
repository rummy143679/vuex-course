import { createApp } from 'vue';
import {createStore} from 'vuex'

import App from './App.vue';

const store = createStore({
    state(){
        return{
            count:1
        }
    },
    mutations:{
        addOne(state){
            state.count++
        },
        addSome(state,payload){
            state.count += payload.value
        }
    },
    actions:{
        addOne(context){
            setTimeout(() => {
                context.commit('addOne')
            }, 1000);
        },
        addSome(context,payload){
            console.log(context)
            context.commit('addSome',payload)
        }
    },
    getters:{
        finalCounter(state){
            return state.count*3
        },
        favoriteCount(state,getters){
            const final = getters.finalCounter
            if(final < 0){
                return 0 
            }
            if(final > 100){
                return 100
            }
            return final
        }
    }
})
const app = createApp(App);
app.use(store)

app.mount('#app');
