# MMM-MTG

## Introduction

This module fetches a MTG random card from Scryfall.
Depending on configurations, it will fetch commanders only (legendary creatures) or random cards.

![Example of MTG module](images/example.png?raw=true "Example")


## configuration

Minimal configuration
```js
{
    module: "MMM-MTG",
    position: "bottom_right", // location
},
```


| Configuration | values | summary | default |
| ----- | ------ | ----- | ----- |
| showCommandersOnly | `true/false` | Shows legendary creatures only or random cards | `true` |
| FetchInterval | 0-X | Fetch interval in minutes. 0 is disabled. | 1 |
| sizePx | 0-X px | Max size in height (string) | `450px` |

Example configuration
```js
{
    module: "MMM-MTG",
    position: "bottom_right", // location
    config: {
        showCommandersOnly: false,
        FetchInterval: 10, // every 10 minutes
        sizePx: "300px", //
    }
},
```