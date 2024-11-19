# @ng-tooltip/ng-tooltip

## Introduction

### A Tooltip designed for Angular and Ionic/Angular applications.

### Automatically adjusts its position when overflowing the screen.

![tooltip](https://github.com/user-attachments/assets/d223a674-6b1b-4f25-8194-dc09c737c05e)

## Installation

```bash
npm i @ng-tooltip/ng-tooltip
```

### If you encounter a dependency conflict with the required version of @angular/common, you can fix it by:

Upgrading @angular/common:

```bash
ng update @angular/core @angular/cli
```

Or using the --legacy-peer-deps flag if upgrading Angular is not possible:

```bash
npm install @ng-tooltip/ng-tooltip --legacy-peer-deps
```

## Usage

### declare in NgModule

```python
/* YourModule.module.ts */

import { TooltipModule } from '@ng-tooltip/ng-tooltip';

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
 "node_modules/@ng-tooltip/ng-tooltip/styles/ng-tooltip.component.scss"
]
```

or

```python
/* global.scss */

@import 'node_modules/@ng-tooltip/ng-tooltip/styles/ng-tooltip.component.scss';
```

You can also customize the CSS by defining CSS variables in the global.scss file

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

##

## Author

[duyvu.fsdev](https://github.com/duyvu-fsdev)
