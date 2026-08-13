<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php wp_title( '|', true, 'right' ); bloginfo( 'name' ); ?></title>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <a class="skip-link" href="#main-content"><?php esc_html_e( 'Saltar al contenido', 'cinecoder' ); ?></a>

    <header>
        <h1><a href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php esc_html_e( 'Hola Miguel', 'cinecoder' ); ?></a></h1>
    </header>

    <nav role="navigation" aria-label="<?php esc_attr_e( 'Menú principal', 'cinecoder' ); ?>">
        <ul>
            <li><a href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php esc_html_e( 'Inicio', 'cinecoder' ); ?></a></li>
            <li><a href="#"><?php esc_html_e( 'Acerca', 'cinecoder' ); ?></a></li>
            <li><a href="#"><?php esc_html_e( 'Contacto', 'cinecoder' ); ?></a></li>
            <li><a href="#"><?php echo esc_html__( 'Adiós Luis', 'cinecoder' ); ?></a></li>
            <li><a href="#"><?php echo esc_html__( 'Hola Luis Negrete', 'cinecoder' ); ?></a></li>
        </ul>
    </nav>

    <main id="main-content" tabindex="-1">
        <p><?php esc_html_e( 'Adiós Luis', 'cinecoder' ); ?></p>
    </main>

    <?php wp_footer(); ?>
</body>
</html>