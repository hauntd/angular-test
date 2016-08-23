<?php
$config = require('config.php');
$url = $config['baseUrl'];
?>
<!DOCTYPE html>
<html lang="en" ng-app="myApp" class="no-js">
<head>
    <base href="<?= $url ?>">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Angular Test - VK API</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="<?= $url ?>bower_components/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="<?= $url ?>bower_components/angular-notify/angular-notify.css">
    <link rel="stylesheet" href="<?= $url ?>css/app.min.css">
</head>
<body>
    <div ng-view></div>
    <script src="<?= $url ?>bower_components/angular/angular.js"></script>
    <script src="<?= $url ?>bower_components/angular-route/angular-route.js"></script>
    <script src="<?= $url ?>bower_components/angular-notify/angular-notify.js"></script>
    <script src="<?= $url ?>bower_components/ng-lodash/build/ng-lodash.js"></script>
    <script src="<?= $url ?>js/app.js"></script>
    <script src="<?= $url ?>js/services.js"></script>
    <script src="<?= $url ?>js/controllers.js"></script>
    <script src="<?= $url ?>js/pagination.js"></script>
</body>
</html>
