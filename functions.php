<?php
/**
 * CineCoder WP Starter Theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @subpackage cinecoder
 * @since 1.0.0
 * @version 1.0.0
*/

 function cinecoder_scripts(){
    wp_enqueue_style('style', get_stylesheet_uri(), array(), '1.0.0', 'all');

    wp_enqueue_script( 'jquery' );
   wp_enqueue_script( 'script', get_template_directory_uri() . '/script.js', array('jquery'), '1.0.0', true );
 }

 add_action('wp_enqueue_scripts','cinecoder_scripts');