var $lft = $(".indxLft");
var $rght = $(".indxRight");
var hl = $lft.height();
var hr = $rght.height();
var bp;

if (hl > hr) {

    $rght.height(hl);

} else if (hr > hl) {
    bp = hr - hl;
    $lft.height(hr);
    $lft.css("background-position-y", bp);
}