import { createBrowserRouter } from 'react-router-dom';
import Alarm from '../screens/Alarm/Alarm';
import Home from '../screens/Home/Home';
import Clock from '../screens/Clock/Clock';
import Stopwatch from '../screens/Stopwatch/Stopwatch';
import Timer from '../screens/Timer/Timer';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/alarm',
        element: <Alarm/>
    },
    {
        path: '/clock',
        element: <Clock/>
    },
    {
        path: '/stopwatch',
        element: <Stopwatch/>
    },
    {
        path: '/timer',
        element: <Timer/>
    }
])