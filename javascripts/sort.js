jQuery.fn.sort = function() {
  return this.pushStack(Array.prototype.sort.apply(this, arguments), []);
};

function sortAlpha(a, b) {
  var atext = a.innerHTML;
  var btext = b.innerHTML;
  var alower = atext.toLowerCase();
  var blower = btext.toLowerCase();
  return alower > blower ? 1 : (
    alower < blower ? -1 : (
      atext > btext ? 1 : (
        atext < btext ? -1 : 0
  )
  )
  );
};


$(document).ready(function(){
  $('ul li').sort(sortAlpha).appendTo('ul');
});
