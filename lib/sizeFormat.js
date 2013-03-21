/*
 * This file is part of the Geek-Zoo Projects.
 *
 * @copyright (c) 2010 Geek-Zoo Projects More info http://www.geek-zoo.com
 * @license http://opensource.org/licenses/gpl-2.0.php The GNU General Public License
 * @author xuanyan <xuanyan@geek-zoo.com>
 *
 */
(function(){

if (typeof window.sizeFormat != "undefined") {
 return;
}

function sizeFormat(value, option) {
  var value = parseInt(value);
  var option = option || {};
  option.dec = option.dec || 2;
  option.prefixArr = option.prefixArr || [" B", " KB", " MB", " GB", " TB"];
  option.convertUnits = option.convertUnits || 1024;

  while (value > option.convertUnits) {
    value /= option.convertUnits;
    option.prefixArr.shift();
  }

  return (Math.round(value * Math.pow(10, option.dec)) / Math.pow(10, option.dec)) + option.prefixArr.shift();
}

window.sizeFormat = sizeFormat;

})();