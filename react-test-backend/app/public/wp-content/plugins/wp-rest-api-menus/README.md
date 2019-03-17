# WP REST API Menus
Adds menu routes for WP HTTP REST API.

## Routes
Get all menus:

    GET /wp-menus/v1/menus
    https://yourwpsite.com/wp-json/wp-menus/v1/menus
    
Get menu data from slug:

    GET /wp-menus/v1/menus/{slug}
    https://yourwpsite.com/wp-json/wp-menus/v1/menus/{slug}
    
The slug is the name of the menu as it appears in Appearance > Menus (/wp-admin/nav-menus.php?action=locations). 

If your menu name is "Main Menu" the slug would be "main-menu", similar to a post slug.