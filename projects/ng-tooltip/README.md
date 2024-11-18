# @duyvq/ng-tooltip-directive

### Tooltip for Angular, Ionic/Angular projects.

### Automatically reposition if content overflows

## Installation

```bash
npm install @duyvq/ng-tooltip
```

or

```bash
npm install @duyvq/ng-tooltip-directive
```

## Usage

### declare in NgModule

```python
import { TooltipModule } from '@duyvq/ng-tooltip-directive';

@NgModule({
  declarations: [...],
  imports: [..., TooltipModule],
  exports: [....],
  providers: [],
})
```

### in template

```python
<element
	tooltip
	tooltipText="tooltipText"
	tooltipClass="custom-css"
>
	///
</element>
```

### css

```python

.tooltip-container {
  --tooltip-background :
  --tooltip-color :
  --tooltip-border-radius :
  --tooltip-padding:
  --tooltip-width :
  --tooltip-height :
}

```

or

```python

Customize with the className passed into tooltipClass

...
tooltipClass="custom-css"

.custom-css {
 ...
}

```

## Example

```python
<ion-button
	tooltip
	tooltipText="delete"
	color="danger"
>
	<ion-icon name="trash-outline"></ion-icon>
</ion-button>
```
