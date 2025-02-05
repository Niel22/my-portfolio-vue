import {createRouter, createWebHistory} from 'vue-router';
import AboutPage from './pages/AboutPage.vue';
import ResumePage from './pages/ResumePage.vue';
import PortfolioPage from './pages/PortfolioPage.vue';
import ContactPage from './pages/ContactPage.vue';
import ProjectDetails from './pages/ProjectDetails.vue';
import PageNotFound from './pages/PageNotFound.vue';

const routes = [
    {
        name: 'index',
        component: AboutPage,
        path: '/',
        meta: {
            title: "About"
        }
    },
    {
        name: 'resume',
        component: ResumePage,
        path: '/resume',
        meta: {
            title: "Resume"
        }
    },
    {
        name: 'portfolio',
        component: PortfolioPage,
        path: '/portfolio',
        meta: {
            title: "Portfolio"
        }
    },
    {
        name: 'contact',
        component: ContactPage,
        path: '/contact',
        meta: {
            title: "Contact"
        }
    },
    {
        name: 'project.details',
        path: '/project/:slug',
        component: ProjectDetails
    },
    {
        name: 'notfound',
        component: PageNotFound,
        path: '/:pathMatch(.*)*',
        meta: {
            title: 'Page Not Found'
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "bg1-color",
    scrollBehavior() {
        
        return { top: 0 }
      },
});

router.beforeEach((to, from, next) => {
    document.title = "NIEL || " + to.meta.title || 'Default Title';
    next();
  });

export default router;