<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Jeff Nielsen | Web developer</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet"> 

        <!-- Styles -->
        <style>
            html, body {
                background-color: #f7f8f9;
                color: #3e4b51;
                font-family: 'Open Sans', sans-serif;
                font-weight: 200;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 70px;
            }

            .links {
                font-size: 14px;
                padding: 15px;
                box-shadow: 0 1px 2px rgba(0,0,0,.24);
                border-radius: 3px;
                background: #fff;
                font-weight: 600;
            }

            .links > span {
                padding: 0 25px;
                display: inline-block;
            }

            .links > a {
                color: #009fee;
                padding: 0 25px;
                font-size: 13px;
            }

            .m-b-md {
                margin-bottom: 30px;
            }
        </style>
    </head>
    <body>
        <div class="flex-center position-ref full-height">
            <div class="content">
                <div class="title m-b-md">
                    Jeff Nielsen
                </div>
                <div class="links">
                    <span>Web developer</span>
                    |<a href="https://github.com/itsjeffro" title="itsjeffro@github" target="_blank">itsjeffro@Github</a>
                </div>
            </div>
        </div>
    </body>
</html>
