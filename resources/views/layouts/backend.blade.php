<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-touch-fullscreen" content="yes">
    <meta name="description" content="Anagram">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title')</title>
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="{{ mix('assets/css/backend/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
        <!-- let people make clients -->
        <passport-clients></passport-clients>

        <!-- list of clients people have authorized to access our account -->
        <passport-authorized-clients></passport-authorized-clients>

        <!-- make it simple to generate a token right in the UI to play with -->
        <passport-personal-access-tokens></passport-personal-access-tokens>
    </div>
    @yield('content')
    <script src="{{ mix('assets/vue/backend/manifest.js') }}"></script>
    <script src="{{ mix('assets/vue/backend/vendor.js') }}"></script>
    <script src="{{ mix('assets/vue/backend/app.js') }}"></script>
</body>
</html>
