import ReactDOM from "react-dom/client";
import { routeConfig } from "./router/index";
import { Router } from 'react-router';

const node = document.querySelector("#root")
console.log('node:', node)
let root;
if (node) {
    root = ReactDOM.createRoot(node);
    root.render(<Router routes={routeConfig} />);
} else {
    console.error('React没有找到root根节点')
}
