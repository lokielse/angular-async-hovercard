angular-async-hovercard
=================

Hovercard is a very lightweight Angular directive that is written purely in AngularJS. It is a card that is displayed when you hover over a label. The card can contain any html element.


How to Use
----------
Include `angular-hovercard.(js|css|tmpl)` in your project (you can do so via `bower install angular-hovercard`).
You might want to modify `templateUrl` field in `angular-hovercard.js` to point to
`angular-hovercard.tmpl` correctly.

Load the directive after loading `angular.js`

```
<script src="<path to angular.js>"></script>
<script src="<path to angular-hovercard.js>"></script>
```

Specify angular-hovercard as a dependency of your Angular module.

```
var app = angular.module('ngApp', [
  'yaru22.directives.hovercard'
]);
```

Use it in your project.

```
<html ng-app="ngApp">
...
<body>
  <hovercard hover-tmpl-url="'hoverCardDetail.tmpl'" *async="true"*>Hover over here</hovercard>.
  ...
</body>
</html>
```




How to Contribute
-----------------
```
$ git clone https://github.com/lokielse/angular-async-hovercard.git
$ cd angular-hovercard
$ npm install; bower install
$ # modify the source code in src/
$ grunt clean; grunt build
$ # test your changes; you can modify demo/ and serve it locally to see the changes.
$ # submit a pull request
```
