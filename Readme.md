# How to make a chrome extension ?

* Folder Structure

```sh
yarn init -y
mkdir public
mkdir src
```

* Creating manifest.json

Link : <https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/>

```json
{
    "manifest_version": 3,
    "name": "chrome-Extension",
    "description": "This is a chrome extension",
    "version": "1.0",
    "action": {
        "default_popup": "popup.html"
    }
}
```

```sh
touch public/manifest.json
touch src/popup.html
```

* Install ReactJS

```sh
yarn add react react-dom
```

Configure React

```jsx
import React from "react";
import { render } from "react-dom";

function PopUp() {
  return <div>Hello World</div>;
}

render(<PopUp />, document.getElementById("react-target"));

```

* Install Webpack

```sh
yarn add webpack webpack-cli --dev
```

* In root folder make webpack.config.js

```sh
yarn add babel-loader @babel/core @babel/preset-env @babel/preset-react 
```

Add configs

```sh
yarn add html-webpack-plugin --dev
yarn add copy-webpack-plugin --dev
```

* configuring the modes of extension

```sh
yarn add webpack-merge --dev
touch webpack.dev.js
touch webpack.prod.js
```

Now add new scripts for dev and build
