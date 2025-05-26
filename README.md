# goahead-test

## Тестовое задание на Vue3 + Typescript для Go Ahead

В разработке использовал pnpm, но с npm тоже должно работать, так же использовал:
-- [PrimeVue](https://primevue.org/) как UI библиотеку
-- [Vue Router](https://router.vuejs.org/)
-- [Pinia](https://pinia.vuejs.org/)
-- [FSD](https://feature-sliced.github.io/documentation/ru/) как архитектура и файловая структура
---[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) как IDE.


### Что реализовано:

- *Поиск видео* - нажание Enter отлавливается, query поиска хранится в адресе*
- *Добавление видео в избранное с хранением в localStorage*
- *Фильтрация поиска по разным порядкам* - добавить еще несколько фильтраций не успел
- *Обработка ошибок* - при ошибке перенаправляет на страницу с отображением ошибки, так же на нее идет переход при вводе несуществующей страницы


## Как запустить:
### Установить зависимости

```sh
pnpm install
```

### Запустить development режим

```sh
pnpm dev
```

### Проверка типов, компиляция и минификация для production

```sh
pnpm build
```

### Запустить [ESLint](https://eslint.org/)

```sh
pnpm lint
```
