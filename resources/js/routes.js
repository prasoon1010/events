const Welcome = () => import('./components/Welcome.vue')

const EventList = () => import('./components/event/EventList')
const Event = () => import('./components/event/Event')

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Welcome
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