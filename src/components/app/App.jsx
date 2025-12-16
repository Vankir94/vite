import { IonApp } from '@ionic/react';
import {Layout} from "../layout/Layout";
import {Tabs} from "../tabs/Tabs.jsx";
import MY_RESTAURANTS from "../../materials/mock.js";
import {useState } from 'react';
import { ThemeContext } from '../themeContext/use-theme-context.js';

export const App = ({title}) => {
    const [theme, setTheme] = useState('light');

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <IonApp>
            <Layout>
                <h1>{title}</h1>
                <Tabs restaurants={MY_RESTAURANTS} />
            </Layout>
        </IonApp>
        </ThemeContext.Provider>
    
    );
};
