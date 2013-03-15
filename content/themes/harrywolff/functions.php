<?php
/**
 * Toolbox functions and definitions
 *
 * Sets up the theme and provides some helper functions. Some helper functions
 * are used in the theme as custom template tags. Others are attached to action and
 * filter hooks in WordPress to change core functionality.
 *
 * When using a child theme (see http://codex.wordpress.org/Theme_Development and
 * http://codex.wordpress.org/Child_Themes), you can override certain functions
 * (those wrapped in a function_exists() call) by defining them first in your child theme's
 * functions.php file. The child theme's functions.php file is included before the parent
 * theme's file, so the child theme functions would be used.
 *
 * Functions that are not pluggable (not wrapped in function_exists()) are instead attached
 * to a filter or action hook. The hook can be removed by using remove_action() or
 * remove_filter() and you can attach your own function to the hook.
 *
 * For more information on hooks, actions, and filters, see http://codex.wordpress.org/Plugin_API.
 *
 * @package WordPress
 * @subpackage twentyeleven
 * @since twentyeleven 0.1
 */

// from: http://wpti.ps/functions/replace-remove-header-image-twenty-eleven-theme/

// REMOVE TWENTY ELEVEN DEFAULT HEADER IMAGES
function wptips_remove_header_images() {
	unregister_default_headers( array('wheel','shore','trolley','pine-cone','chessboard','lanterns','willow','hanoi') );
}
add_action( 'after_setup_theme', 'wptips_remove_header_images', 11 );


//ADD NEW DEFAULT HEADER IMAGES
function wptips_new_default_header_images() {
	$child2011_dir = get_bloginfo('stylesheet_directory');
	register_default_headers( array (
		'image1' => array(
			'url' => "$child2011_dir/images/headers/sombrero.jpg",
			'thumbnail_url' => "$child2011_dir/images/headersimage1-thumb.jpg", // 230 x 66px
			'description' => __( 'Image Description', 'child2011' )
		)
	));
}
add_action( 'after_setup_theme', 'wptips_new_default_header_images' );