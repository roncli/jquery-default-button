/*
* Default Button - A jQuery plugin to easily define a default button
* Version 1.1 - 2011-12-06
* Requires jQuery 1.7+
* 
* ©2010-2011 Ronald M. Clifford (roncli@roncli.com)
*
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
* 
* Usage:
* $(region).defaultButton(button);
*
* region: A selector that indicates the region where you want the enter key to
*         click the default button.
* button: A selector that indicates the default button to be clicked when the
*         enter key is pressed inside the specified region.
*/

(function ($) {
    "use strict";
    $.fn.defaultButton = function (ui) {
        $(this).find("input").on("keypress", function (ev) {
            var e = ev,
                which = e.which,
                keyCode = e.keyCode;
            if (((which && which === 13) || (keyCode && keyCode === 13)) &&
                    e.target.type !== "textarea") {
                $(ui).click();
                return true;
            }
        });
    };
}(jQuery));
