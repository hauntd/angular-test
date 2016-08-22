<?php
$url = 'http' . (!empty($_SERVER['HTTPS']) ? 's' : '') . '://' . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];
?>
<!DOCTYPE html>
<html lang="en" ng-app="myApp" class="no-js">
<head>
    <base href="<?= $url ?>">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Angular Test - VK API</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="bower_components/angular-notify/angular-notify.css">
    <link rel="stylesheet" href="css/app.min.css">
</head>
<body>
    <div ng-view></div>
    <script src="bower_components/angular/angular.js"></script>
    <script src="bower_components/angular-route/angular-route.js"></script>
    <script src="bower_components/angular-notify/angular-notify.js"></script>
    <script src="js/app.js"></script>
    <script src="js/services.js"></script>
    <script src="js/controllers.js"></script>
</body>
</html>
