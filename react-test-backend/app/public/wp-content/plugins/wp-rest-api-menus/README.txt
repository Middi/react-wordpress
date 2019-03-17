=== WP-REST-API Menus ===
Contributors: jcdev518
Donate link: https://amorphouswebsolutions.com/plugins
Tags: wp-api, wp-rest-api, json-rest-api, json, menus, rest, api, menu-routes, endpoints, routes, menu, menus
Requires at least: 4.7.0
Tested up to: 4.9.4
Requires PHP: 5.6
Stable tag: 4.9
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Adds menu endpoints to core WP REST API.

== Description ==

This plugin adds "routes" or "endpoints" to WP REST API that allows for retrieval of
menu data as JSON.

Updated port of "WP-REST-API V2 Menus" by Claudio La Barbera (http://www.claudiolabarbera.com)

**Usage**

**Get all registered menus:**

    GET /wp-menus/v1/menus
    https://yourwpsite.com/wp-json/wp-menus/v1/menus

**Get menu data as JSON from menu slug:**

    GET /wp-menus/v1/menus/{slug}
    https://yourwpsite.com/wp-json/wp-menus/v1/menus/{slug}

Gets the contents of a registered menu by its "slug".

When assigning a menu a location in /wp-admin/nav-menus.php?action=locations
the slug is the name of the menu in lowercase and without any spaces like a post slug.

If your menu name is Main Menu:
https://yourwpsite.com/wp-json/menus/v1/wp-menus/main-menu

== Installation ==

There are no requirements other than Wordpress and one active menu. Installation is simple:

1. Upload the `wp-rest-api-menus` folder to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress

== Frequently Asked Questions ==

= How do I use this plugin? =

It creates a JSON interpretation of any "registered" menu mainly for front-end use. If you have any questions feel free to contact me: https://www.amorphouswebsolutions.com/contact/

== Changelog ==

= 1.0 =
* Requires PHP 5.6x at the very least.