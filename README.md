<p align="center">
    <a href="https://github.com/fappurbate/fappify">
        <img src="https://github.com/buefy/buefy/blob/dev/static/img/buefy-banner.png" />
    </a>
    <!-- <a href="https://www.npmjs.com/package/buefy"><img src="https://img.shields.io/npm/v/buefy.svg" /></a> -->
    <!-- <a href="https://www.npmjs.com/package/buefy"><img src="https://img.shields.io/npm/dt/buefy.svg" /></a> -->
    <!-- <a href="https://circleci.com/gh/buefy/buefy"><img src="https://img.shields.io/circleci/project/github/buefy/buefy.svg?style=flat-square" /></a> -->
    <!-- <a href="https://codecov.io/gh/buefy/buefy"><img src="https://img.shields.io/codecov/c/github/buefy/buefy.svg?style=flat-square" /></a> -->
    <!-- <a href="https://www.npmjs.com/package/buefy"><img src="https://img.shields.io/npm/l/buefy.svg" /></a> -->
    <!-- <a href="https://discordapp.com/invite/ZkdFJMr"><img src="https://img.shields.io/badge/chat-on%20discord-7289DA.svg" /></a> -->
    <!-- <a href="https://buefy.org"><img src="https://img.shields.io/badge/code_style-buefy-7957d5.svg?style=flat-square" /></a> -->
</p>

> Fappify is a modification of Buefy created especially for Fappurbate.

## Features

* Keep your current Bulma theme / variables easily
* Supports both [Material Design Icons](https://materialdesignicons.com/) and [FontAwesome](http://fontawesome.io/)
* Very lightweight with none internal dependencies aside from Vue & Bulma
* About 60KB min+gzip (with Bulma included)
* Semantic code output
* Follows Bulma design and some of the [Material Design UX](https://material.io/)
* Focus on usability and performance without *over-animating* stuff

## Quick start

You need [Vue.js](https://vuejs.org/) **version 2.5+**.

### 1 Install via npm

```bash
npm install fappify
```

### 2 Import and use Fappify

Bundle
```javascript
import Vue from 'vue';
import Fappify from '@fappurbate/fappify';
import 'fappify/dist/fappify.css';

Vue.use(Fappify);

```
or Individual Components
```javascript

import Vue from 'vue'
import { Field, Input } from '@fappurbate/fappify/dist/components'
import 'fappify/dist/fappify.css'

Vue.use(Field)
Vue.use(Input)

or

import Vue from 'vue'
import Field from '@fappurbate/fappify/dist/components/field'
import Input from '@fappurbate/fappify/dist/components/input'
import 'fappify/dist/fappify.css'

Vue.use(Field)
Vue.use(Input)
```

## Browser support

Recent versions of Firefox, Chrome, Edge, Opera and Safari. IE10+ is only partially supported.

## License

Code released under [MIT](https://github.com/fappurbate/fappify/blob/master/LICENSE) license.

Copyright (c), [Fappurbate](https://github.com/fappurbate).
Copyright (c), [Rafael Beraldo](https://twitter.com/rafaelpimpa).
