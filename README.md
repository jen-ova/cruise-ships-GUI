<h1 align="center">Welcome to Cruise Ships 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/jen-ova/cruise-ships#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/jen-ova/cruise-ships/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
</p>

> Part of the MCR Codes Programming Fundamentals module, exploring Object Orientated Programming

### 🏠 [Homepage](https://github.com/jen-ova/cruise-ships)

## Install

```sh
npm install
```

## Run tests

```sh
npm run test
```

## How to
1. Open your terminal and start up Node REPL
```sh
node
```

2. Import constructors
```sh
.load src/ship.js
.load src/port.js
.load src/itinerary.js
```

3. Create ports for Daenerys to sail between
```sh
const qarth = new Port("Qarth")
const astapor = new Port("Astapor")
```

4. Create an itinerary for the crusade
```sh
const itinerary = new Itinerary([qarth, astapor])
```

5. Create a ship for Daenerys and the Dothraki to sail on
```sh
const balerion = new Ship("Balerion", itinerary)
```

6. Set sail to Astapor
```sh
balerion.setSail()
```

7. Dock at Astapor to free the Unsullied
```sh
balerion.dock()
```

## Author

👤 **Jen Stewart**

* Github: [@jen-ova](https://github.com/jen-ova)
* LinkedIn: [@jennifer-stewart-403184113](https://linkedin.com/in/jennifer-stewart-403184113)
