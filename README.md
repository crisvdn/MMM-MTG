# MMM-MTG

## Introduction

This module fetches a MTG random card from Scryfall [Api](https://scryfall.com/docs/api).
Depending on configurations, it will fetch commanders only (legendary creatures) or random cards.

![Example of MTG module](images/example.png?raw=true "Example")

## Installation

Clone this repo to your modules directory and add the configuration.

```shell
cd MagicMirror/modules
git clone https://github.com/crisvdn/MMM-MTG.git # or secure shell link
```



## Configuration

Minimal configuration
```js
{
    module: "MMM-MTG",
    position: "bottom_right", // location
},
```


| Configuration | Values | Summary | Default |
| ----- | ------ | ----- | ----- |
| showCommandersOnly | `true/false` | Shows legendary creatures only or random cards | `true` |
| fetchInterval | 0-X | Fetch interval in minutes. 0 is disabled. | 1 |
| sizePx | 0-x px | Max size in height (string) | `450px` |

Example configuration
```js
{
    module: "MMM-MTG",
    position: "bottom_right", // location
    config: {
        showCommandersOnly: false,
        fetchInterval: 10, // every 10 minutes
        sizePx: "300px",
    }
},
```
