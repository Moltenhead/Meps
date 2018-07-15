/*removing specified style
* RegExp based style searcher and remover
*/
(function ($)
{
  $.fn.removeStyle = function (style)
  {
    var search = new RegExp(style + '[^;]+;?', 'g');

    return this.each(function ()
    {
      $(this).attr('style', function (i, style)
      {
        return style && style.replace(search, '');
      });
    });
  };
}(jQuery));