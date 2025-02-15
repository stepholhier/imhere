import { Home } from '../src/screens/Home/main';

import { StatusBar } from 'expo-status-bar';

export default function App () {
    return (
        <>
        <StatusBar 
        style="dark"
        translucent
        backgroundColor="transparent" 
        />
        <Home />
        </>
    );
}