import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
    <ul>
        {[1,2,3,4].map(el => <li>{el}</li>)}
        <button onClick={console.log}>click</button>
    </ul>
)
