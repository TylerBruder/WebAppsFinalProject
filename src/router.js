import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Add from "./components/AddTodo.vue";
import Login from "./components/login.vue";
import Create from "./components/Create.vue";
import Logout from "./components/Logout.vue";
import firebase from "firebase";

Vue.use(Router);

//export default new Router({
let router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/adds",
      name: "add",
      component: Add
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout,
      meta: {
        requiresTest: true
      }
    },
    {
      path: "/create",
      name: "create",
      component: Create
    }
  ]
});

//Nav Guards
router.beforeEach((to, from, next) => {
  if (to.path === "/login") {
    if (firebase.auth().currentUser) {
      next("/logout");
    } else {
      next();
    }
  } else {
    next();
  }
});

/* check for requiredAuth guard
  if (to.matched.some(record => record.meta.requiresTest)) {
    // check if not logged in
    if (firebase.auth().currentUser) {
      // go to login
      next({
        path: "/logout",
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // proceed to route
      next();
    }
  }
});*/
/*else if (to.matched.some(record => record.meta.requiresTest)) {
    // check if not logged in
    if (firebase.auth().currentUser) {
      // go to login
      next({
        path: "/logout",
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // proceed to route
      next();
    }
  } else {
    next();
  }
});*/

export default router;
