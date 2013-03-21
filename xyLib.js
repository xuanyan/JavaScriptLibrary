/*
 * This file is part of the Geek-Zoo Projects.
 *
 * @copyright (c) 2010 Geek-Zoo Projects More info http://www.geek-zoo.com
 * @license http://opensource.org/licenses/gpl-2.0.php The GNU General Public License
 * @author xuanyan <xuanyan@geek-zoo.com>
 *
 */

(function(){

if (typeof window.xyLib != "undefined") {
  return;
}

var xyLib = {

  callbackStack : {},

  callback : function(name) {
    var callbackStack = this.callbackStack[name];
    for (var i = 0; i < callbackStack.length; i++) {
      callbackStack[i]();
    }
  },

  load : function(name, callback) {
    var self = this;
    // if (typeof name != 'string') {
    //   name = name.join('___');
    // }
    //name = name.replace(/::/g, "/");
    var url = 'http://xuanyan.org/JavaScriptLibrary/'+name+'.js',
    script = document.createElement('script');
    script.type = 'text/javascript';
    script.charset = "utf-8";
    script.id = 'xyLib_loader_'+name;
    var js = document.getElementById(script.id);
    callback = callback || function(){};

    this.callbackStack[name] = this.callbackStack[name] || [];
    this.callbackStack[name].push(callback);

    if (js) {
      if (js.isLoad) {
        // call back
        self.callback(name);
      }

      return true;
    }

    script.src  = url;
    script.onload = function () {
      this.isLoad = true;
      // call back
      self.callback(name);
    };
    // for ie
    script.onreadystatechange = function () {
     if (/loaded|complete/.test(this.readyState)) {
       this.onload();
     }
    };

    document.getElementsByTagName('head')[0].appendChild(script);
  }

};

window.xyLib = xyLib;

})();
