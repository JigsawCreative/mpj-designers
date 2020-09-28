<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width" />
<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<div id="wrapper" class="hfeed">

<header id="header">

    <nav id="menu" class="bg-primary">

        <div class="main-menu wrapper">

            <div class="site-logo">

                <img src="/wp-content/uploads/montpelier-joinery-logo.png" alt="Montpelier Joinery Logo" class="logo">

            </div>

            <?php wp_nav_menu( array( 'theme_location' => 'main-menu' ) ); ?>

        </div>   
            
    </nav>

</header>

<div id="container">