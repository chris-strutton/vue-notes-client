import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import Notes from './components/Notes.vue'
import AddNote from './components/AddNote.vue'

export default [
  { path: '/', component: Login },
  { path: '/login', component: Login },
  { path: '/home', component: Home },
  { path: '/signup', component: Signup },
  { path: '/notes', component: Notes },
  { path: '/create', component: AddNote }
]
