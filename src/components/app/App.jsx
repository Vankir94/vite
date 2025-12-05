import {Layout} from "../layout/Layout";
import {Tabs} from "../tabs/Tabs.jsx";
import MY_RESTAURANTS from "../../materials/mock.js";
import React from "react";

export const App = ({title}) => {
    return (
        <Layout>
            <div>
                <h1>{title}</h1>
                <Tabs restaurants={MY_RESTAURANTS} />
            </div>
        </Layout>
    );
};
