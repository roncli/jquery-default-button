/**
 * jquery-default-button - A jQuery plugin to easily define a default button.
 * v2.0.0
 * ©2010-2022 Ronald M. Clifford (roncli@roncli.com)
 */
(($) => {
    $.fn.defaultButton = function(element) {
        $(this).off("keypress").on("keypress", (ev) => {
            if (ev.target.nodeName === "INPUT" && ev.key === "Enter") {
                $(element).trigger("click");
            }
        });

        return this;
    };
})(jQuery);
