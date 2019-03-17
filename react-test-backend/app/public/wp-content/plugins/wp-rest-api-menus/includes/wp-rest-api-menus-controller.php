<?php

namespace Amorphous;

use WP_REST_Controller;

/**
 * Class WP_REST_API_Menus_Controller
 *
 * Extends abstract WP_REST_Controller class as a guide. We're actually only
 * overriding the register_routes method.
 *
 * @package Amorphous
 */
class WP_REST_API_Menus_Controller extends WP_REST_Controller {

	/**
	 * @var string $namespace
	 */
	protected $namespace = 'wp-menus/v1';
	/**
	 * @var WP_REST_API_Menus_Controller
	 */
	protected static $instance;

	/**
	 * Get instance of class in the singleton pattern
	 *
	 * @return WP_REST_API_Menus_Controller
	 */
	public static function getInstance() {
		if ( self::$instance === NULL ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Register the routes. Leaving permissions callback and args parameters to their
	 * defaults for now.
	 */
	public function register_routes() {
		register_rest_route( $this->namespace, '/menus', array(
			'methods' => \WP_REST_Server::READABLE,
			'callback' => [$this, 'get_all_menus']
		));
		register_rest_route( $this->namespace, '/menus/(?P<id>[a-zA-Z(-]+)', array(
			'methods' => \WP_REST_Server::READABLE,
			'callback' => [$this, 'get_menu_data'],
		) );
	}

	/**
	 * Get all registered menus
	 *
	 * @return array List of menus with slug and description
	 */
	public function get_all_menus() {
		$menus = [];
		foreach ( get_registered_nav_menus() as $slug => $description ) {
			$obj = new \stdClass;
			$obj->slug = $slug;
			$obj->description = $description;
			$menus[] = $obj;
		}

		return $menus;
	}

	/**
	 * @param \WP_REST_Request $request
	 * - $request has <id> parameter as found in $wpdb_prefix_terms table as term_id column
	 * - slug column is queried
	 *
	 * @return mixed|\WP_REST_Response
	 */
	public function get_menu_data( \WP_REST_Request $request ) {
		$menuId = $request->get_param( 'id' );

		$menu_data = [];
		/**
		 * returns WP_Term object of matching menu slug
		 */
		$menu_term = get_term_by( 'slug', $menuId, 'nav_menu' );

		if ( $menu_term->term_id ) {
			$menu_data = wp_get_nav_menu_items( $menu_term->term_id );
		}

		return rest_ensure_response( $menu_data );
	}
}