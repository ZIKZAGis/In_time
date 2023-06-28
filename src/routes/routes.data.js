import Alarm from '../screens/Alarm/Alarm';
import Home from '../screens/Home/Home';
import Clock from '../screens/Clock/Clock';
import Stopwatch from '../screens/Stopwatch/Stopwatch';
import Timer from '../screens/Timer/Timer';

export const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/alarm',
        component: Alarm
    },
    {
        path: '/clock',
        component: Clock
    },
    {
        path: '/stopwatch',
        component: Stopwatch
    },
    {
        path: '/timer',
        component: Timer
    }
]