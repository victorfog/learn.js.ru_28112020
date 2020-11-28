import React from 'react'; // постройка самого дерева реакта
import ReactDOM from 'react-dom'; // рендер дерева он может быть разный и рендерить не только в браузер например для 3d очков
import './index.css';

// ReactDom.render (что мы рендерим, во что)
ReactDOM.render (<h1>Hello Word</h1>, document.getElementById('root'));