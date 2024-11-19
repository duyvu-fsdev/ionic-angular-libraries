# @duyvq/ng-tooltip-directive

## Introduce

### Tooltip designed for Angular and Ionic/Angular applications.

### Automatically adjusts its position when overflowing the screen

## Installation

```bash
npm install @duyvq/ng-tooltip-directive
```

## Usage

### declare in NgModule

```python
component.module.ts
--------
import { TooltipModule } from '@duyvq/ng-tooltip-directive';

@NgModule({
  imports: [..., TooltipModule],
})

export class YourModule {}
```

### In template

```python
<element
 tooltip
 tooltipText="tooltipText"
 tooltipClass="custom-css"
>
	///
</element>
```

### css configuration

import css **_important_**

```python
/* angular.json */

"styles": [
 ...,
 "node_modules/ng-tooltip/ng-tooltip.component.scss"
]
```

or

```python
/* global.scss */

@import '~ng-tooltip/ng-tooltip.component.scss';
```

You can also customize the CSS by defining CSS variables in the global.scss

```python
/* global.scss */

ng-tooltip.tooltip-container {
 --tooltip-background: #fff;
 --tooltip-color: #000;
 --tooltip-border-radius: 4px;
 --tooltip-padding: 8px;
 --tooltip-width: auto;
 --tooltip-height: auto;
}
```

Or use a custom class by passing it in via the tooltipClass property

```bash
tooltipClass="custom-css"
```

```python
/* global.scss */

.custom-css {
 background: #f00;
 color: #fff;
 padding: 10px;
 border-radius: 8px;
}
```

## Example

### Here is an example of usage in an Ionic app

```python
<ion-button
 tooltip
 tooltipText="delete"
 tooltipClass="custom-css"
 color="danger"
>
 <ion-icon name="trash-outline"></ion-icon>
</ion-button>
```
