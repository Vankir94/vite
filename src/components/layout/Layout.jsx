import {Count} from "../count/Count.jsx";

export function Layout({children}) {
    return (
        <div>
            <Count/>
            <header>header</header>
            {children}
            <footer>footer</footer>
        </div>
    );
};
