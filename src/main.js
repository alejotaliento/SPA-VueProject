import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate';
import VueMoment from 'vue-moment';

//import components
import Searcher from './components/Searcher';
import Redirect from './components/Redirect';
import LastArticles from './components/LastArticles';
import MyComponent from './components/MyComponent';
import HelloWorld from './components/HelloWorld';
import Test from './components/Test';
import Blog from './components/Blog';
import ArticleDetail from './components/ArticleDetail';
import CreateArticle from './components/create-article/CreateArticle.vue';
import EditArticle from './components/EditArticle';
import Form from './components/Form';
import Movies from './components/Movies';
import ErrorComponent from './components/ErrorComponent';

Vue.config.productionTip = false

Vue.use(VueRouter); //Cargo dentro de Vue el VueRouter
Vue.use(Vuelidate); //Cargo Validacion de formularios
Vue.use(VueMoment); //Cargo Formatos Date de formularios

const routes = [
  { path: '/home', component: LastArticles },
  { path: '/last-articles', component: LastArticles },
  { path: '/searcher/:search', component: Searcher },
  { path: '/redirect/:search', component: Redirect },
  { path: '/movies', name: 'movies', component: Movies },
  { path: '/blog', component: Blog },
  { path: '/article/:id', name: 'article', component: ArticleDetail },
  { path: '/create-article', name: 'create', component: CreateArticle },
  { path: '/edit-article/:id', name: 'edit', component: EditArticle },
  { path: '/form', component: Form },
  { path: '/test/:id?', name: 'test', component: Test },
  { path: '/my-component', component: MyComponent },
  { path: '/hello-world', component: HelloWorld },
  { path: '/', component: LastArticles },
  { path: '*', component: ErrorComponent }
];

const router = new VueRouter({ //Dar de alta todas las rutas
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
