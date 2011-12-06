# Default Button
### Version 1.1 - 2011-12-06

A jQuery plugin to easily define a default button<br />
Requires jQuery 1.7+

©2010-2011 [Ronald M. Clifford](mailto:roncli@roncli.com)

Dual licensed under the MIT and GPL licenses:<br />
[MIT license](http://www.opensource.org/licenses/mit-license.php)<br />
[GPL license](http://www.gnu.org/licenses/gpl.html)

## Example Usage

The following HTML and script demonstrates how to use the plugin.

    <html>
    <head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
        <script src="jquery-defaultButton-1.1.js"></script>
    </head>
    <body>
        <div id="Div1">
            Pressing enter in either of these textboxes will press Button1.<br />
            <input type="text"/>
            <input type="text"/>
        </div>
        <div id="Div2">
            Pressing enter in either of these textboxes will press Button2.<br />
            <input type="text"/>
            <input type="text"/>
        </div>
        <input type="button" id="Button1" value="Button1" />
        <input type="button" id="Button2" value="Button2" />
        <script>
            $(document).ready(function()
            {
                $("#Div1").defaultButton("#Button1");
                $("#Div2").defaultButton("#Button2");
                $("input[type=button]").on("click", function()
                {
                    alert("You pressed " + $(this).attr("id"));
                });
            });
        </script>
    </body>
    </html>
