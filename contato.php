<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">

    <title>Cover Template for Bootstrap</title>

    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <link href="css/css.css" rel="stylesheet">


    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <style>
        body {
            background: #f0ad4e;
        }
    </style>
</head>

<body>

    <div class="site-wrapper">

        <div class="site-wrapper-inner">

            <div class="cover-container">

                <div class="masthead clearfix">
                    <div class="inner">
                        <h3 class="masthead-brand">Mateus Gabi ⚡</h3>
                        <nav>
                            <ul class="nav masthead-nav">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="portfolio.html">Portfólio</a></li>
                                <li class="active"><a href="contato.html">Contato</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div class="inner cover">
                    <h1 style="display:none">Mateus Gabi</h1>
                    <h2 style="display:none">Web-Designer</h2>


                    <?php 
                    
                    if(!isset($_GET['l'])){
                        $lang = "pt-BR";
                    }
                    else {
                        $lang = "en-US";
                    }
                    
                    $link = "http://localhost/site/lang/" . $lang . "/contato.json";
                $enviar = file_get_contents($link);
                $resultado = json_decode($enviar, true);
                
                // echo $link;

                ?>
                    <p class="lead"><?php echo $resultado["0"]; ?></p>
                    <p class="lead"><?php echo $resultado["1"]; ?></p>

                    <p class="lead"><a class="btn btn-lg btn-default" href="mailto:mateusgabimoreira@hotmail.com">E-mail</a>
                    <?php echo $resultado["2"]; ?>
                                            <a class="btn btn-lg btn-default" href="http://twitter.com/matgabi17" target="_blank">Twitter</a></p>
                </div>

                <div class="mastfoot">
                    <div class="inner">
                        <p>Desenvolvido a base de tereré por <a href="http://twitter.com/matgabi17" target="_blank">Mateus Gabi</a>.</p>
                    </div>
                </div>

            </div>

        </div>

    </div>

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script>
        window.jQuery || document.write('<script src="../../assets/js/vendor/jquery.min.js"><\/script>')
    </script>
    <script src="js/bootstrap.min.js"></script>

</body>

</html>