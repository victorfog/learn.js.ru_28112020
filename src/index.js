import React from 'react'; // постройка самого дерева реакта
import ReactDOM from 'react-dom'; // рендер дерева он может быть разный и рендерить не только в браузер например для 3d очков
import './index.css';
import App from "./components/app";

// ReactDom.render (что мы рендерим, во что)
ReactDOM.render(<App/>, document.getElementById('root'));
