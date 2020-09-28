<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width" />
<link rel="stylesheet" media="print" href="<?php echo get_site_url(); ?>/wp-content/themes/mpj-designers/public/build/fonts/fonts.css" onload="this.media='all'" />
<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<div id="wrapper" class="hfeed">

<header id="header">

    <nav id="menu" class="bg-primary">

        <div class="main-menu wrapper">

            <div class="site-logo">

                <a href="/"><img src="/wp-content/uploads/montpelier-joinery-logo.png" alt="Montpelier Joinery Logo" class="logo"></a>
                
            </div>

            <?php wp_nav_menu( array( 'theme_location' => 'main-menu' ) ); ?>

        </div>   
            
    </nav>

</header>

<div id="container">