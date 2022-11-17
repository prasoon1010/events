const Welcome = () => import('./components/Welcome.vue')
const CategoryList = () => import('./components/category/List.vue')
const CategoryCreate = () => import('./components/category/Add.vue')
const CategoryEdit = () => import('./components/category/Edit.vue')

const EventList = () => import('./components/event/EventList')
const Event = () => import('./components/event/Event')

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Welcome
    },
    {
        name: 'categoryList',
        path: '/category',
        component: CategoryList
    },
    {
        name: 'categoryEdit',
        path: '/category/:id/edit',
        component: CategoryEdit
    },
    {
        name: 'categoryAdd',
        path: '/category/add',
        component: CategoryCreate
    },
    {
        name: 'event-list',
        path: '/events',
        component: EventList
    },
    {
        name: 'event-edit',
        path: '/event/:id/edit',
        component: Event
    },
    {
        name: 'event-add',
        path: '/event/add',
        component: Event
    }
]