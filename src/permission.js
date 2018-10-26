import router from './router'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getCookie } from '@/utils/auth'
// permission judge function
function hasPermission(roles, permissionRoles) {
    if (roles.indexOf("admin") >= 0) return true; // admin permission passed directly
    if (!permissionRoles) return true;
    return roles.some(role => permissionRoles.indexOf(role) >= 0);
}

NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })
router.beforeEach((to, from, next) => {
    NProgress.start() // start 
    // verification login
    if (getCookie()) {
        if (to.path === '/login') {//如果是登录页面路径，就直接next()
            next('/');
        } else {//不然就跳转到登录；
            next();
        }
        // if (to.path === "/login") {
        //     NProgress.done(); // if current page is dashboard will not trigger	afterEach hook, so manually handle it
        // } else {
        //     //   pull user info
        //     if (store.getters.roles.length === 0) {
        //         store.dispatch("getUserInfo");
        //     } else {
        //         // test user permission
        //         if (hasPermission(store.getters.roles, to.meta.roles)) {
        //             next(); //
        //         } else {
        //             next({ path: "/401", replace: true, query: { noGoBack: true } });
        //         }
        //     }
        // }
        next();
    } else {
        if (to.path === '/login') {//如果是登录页面路径，就直接next()
            next();
        } else {//不然就跳转到登录；
            next('/login');
        }
        NProgress.done();
    }

})
router.afterEach(() => {
    NProgress.done() // finish
})
