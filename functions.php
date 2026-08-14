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
  $theme_dir = get_stylesheet_directory();
  wp_enqueue_style( 'style', get_stylesheet_uri(), array(), filemtime( $theme_dir . '/style.css' ), 'all' );

  wp_enqueue_script( 'jquery' );
  wp_enqueue_script( 'script', get_template_directory_uri() . '/script.js', array( 'jquery' ), filemtime( $theme_dir . '/script.js' ), true );
  wp_enqueue_script( 'menu', get_template_directory_uri() . '/js/menu.js', array(), filemtime( $theme_dir . '/js/menu.js' ), true );
 }

 add_action('wp_enqueue_scripts','cinecoder_scripts');


 function cinecoder_setup(){
  load_theme_textdomain('cinecoder', get_stylesheet_directory().'/languages');
 }
add_action('after_setup_theme', 'cinecoder_setup');