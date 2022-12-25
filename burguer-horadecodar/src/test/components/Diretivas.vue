<template>
    <div>
        <h2>Diretivas</h2>
        <p v-if="logged">Usuário está logado.</p>
        <p v-else>Usuário não está logado.</p>
        <button type="button" v-on:click="changeLogged">{{ statusLogged }}</button>
        <p v-show="logged">Usuário confirmado sua autenticação!</p>

        <article>
            <p> <span>v-text:</span> <small v-text="nome"></small></p>
            <p> <span>v-once:</span> <small v-once>{{ nome }}</small></p>
            <p> <span>v-html:</span> <small v-html="someHtml"></small> </p>
            <p> <span>v-bind:</span> <a v-bind:href="url">{{ linkText }}</a></p>
            <p> <span>v-bind:</span> <a :href="url">{{ linkText }}</a></p>
            <p> <span>v-model:</span> <input v-model="message" placeholder="Informe seu nome" />
                <small v-text="message"></small>
            </p>
            <p> <span>v-show:</span> <small v-show="1 == 1">1=1?</small></p>
            <p>
                <span>v-if, v-else-if v-else:</span> <small v-if="1 == 2">1=2?</small>
                <small v-else-if="2 == 3">2=3?</small> <small v-else>1!=2</small>
            </p>
            <p> <span>Condicional:</span> <span v-text="nome == 'Higor' ? 'Olá Higor!' : 'Olá' + nome + '!'"></span></p>
            <p> <span>v-for:</span> <small>
                    <li v-for="item of itens">{{ item }}</li>
                </small></p>
            <p> <span>v-for: Obj</span> <small>
                    <li v-for="todo of todos" v-text="todo.nome"></li>
                    <li v-for="(todo, index) in todos" v-bind:href="index">{{ todo.nome }} - {{ todo.id }} - {{ index }}
                    </li>
                </small> </p>
        </article>
    </div>
</template>

<script>
export default {
    name: 'DiretivasVue',
    data() {
        return {
            logged: false,
            statusLogged: 'Login',
            nome: 'Higor',
            someHtml: 'html',
            url: 'http://localhost:8080',
            linkText: 'Home',
            message: '',
            itens: ['Red', 'Green', 'Blue'],
            todos: [
                { id: 1, nome: 'Estudar JS' },
                { id: 2, nome: 'Estudar Vue.js' }
            ]
        }
    },
    methods: {
        changeLogged(event) {
            if (this.logged) {
                this.logged = false;
                this.statusLogged = 'Login';
                return;
            }

            this.logged = true;
            this.statusLogged = 'Loggout';
        }
    }
}
</script>

<style scoped>
div {
    background-color: darkgrey;
}

article {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
</style>