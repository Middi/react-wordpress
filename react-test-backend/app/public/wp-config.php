<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'sg4XVKKMZ0fa8TAuMQ71OdZQ+65c6E6KdGL3qVmZGd95ycgT+MJ7NnKxxhokaiwyF+/pNNwYJwA55K5LVe7CNw==');
define('SECURE_AUTH_KEY',  'MYOZPV3bRUBQ9OK3alPeXPL2lXuZhYYEAyfN16CbtUNR27Pb0m0Hr5hFem1k8rhL0XopmdVfEW99Qh5bwwJQJA==');
define('LOGGED_IN_KEY',    'sp/7W0oZYljBE8LMwq/m1Lx7xu8sKPq6P5A8rfXvXSHKtw+Mi3E1eqxtYfMNx7IYxSI8fce8pio4RFe/YKYeXw==');
define('NONCE_KEY',        '0PtAKVCNeOb3ajzQV8KouQA0xp71C+HYuJiJHt048xBTKA/CN3kr5gfAJs+Fl/911VXQTih37JzRQ4SdLNIT4w==');
define('AUTH_SALT',        'lHz0Li7zTPmX7f6h9g2aoqZsUY2NLRQ8pYMrYCB7l4qirJsdXsQNKtr2GJzeCvX0QNOY48NlZYyMjmbDbgIQMQ==');
define('SECURE_AUTH_SALT', 'm18PjwYGgJg1vooPwmcHeLZvdKhIir/6TYt5Wwl65/QaF1LnE0HD+A4ay2Z9HEBRtrqB0tD+lO0Jln79ikgtmw==');
define('LOGGED_IN_SALT',   'reY47qY/VOQIFyEMm1c4lo9z0Lk72CgBOILGWGg6qGGwuJAt1LspE5T4e/7C5WF3aXO3VCgEvcCbWEx+uCD7dA==');
define('NONCE_SALT',       '5yzWOsZpoUE3zmL/jSdnUs9wPRyd+HbPI3+mkYaWGPSzdgnnL04JgUXjjZIIpiBDJJptcwaecFoF7vOJlAfOHw==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) )
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
