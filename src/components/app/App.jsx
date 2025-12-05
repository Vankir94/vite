import {Layout} from "../layout/Layout";
import {Tab} from "../tab/Tab";

export const App = ({title}) => {
    return (
        <Layout>
            <div>
                <h1>{title}</h1>
                <Tab />
            </div>
        </Layout>
    );
};
