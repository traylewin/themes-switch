import { changeTheme } from '../../../src/index';

import './main.scss';

const themes = process.themes; // eslint-disable-line prefer-destructuring
const buttonsContainer = document.getElementById('buttons');
let currentLink;

const title = document.createElement('div');
title.innerHTML = 'Title';
title.className = 'title';
buttonsContainer.appendChild(title);

const desc = document.createElement('div');
desc.innerHTML = 'Description';
desc.className = 'desc';
buttonsContainer.appendChild(desc);

const keys = Object.keys(themes);
keys.forEach((key) => {
  const button = document.createElement('button');
  button.innerHTML = key;
  button.onclick = () => {
    changeTheme(key, themes[key], currentLink, link => (currentLink = link));
  };
  buttonsContainer.appendChild(button);
});

