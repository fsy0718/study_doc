define(['support','tool/type'],function(support,type){
  var element = {};
  /**
   * 获取StyleSheet实例
   * @param  {number} idx 位置
   * @return {StyleSheet}     实例
   */
  element.getSheet = function (idx){
    idx = +idx || 0;
    var sheet = document.styleSheets;
    function _getSheet(sheets,idx){
      var len;
      if(len = sheets.length){
        return sheets[Math.min(idx,len)];
      }
    }
    if(!sheet.length){
      var style = document.createElement('style');
      document.head.appendChild(style);
      sheet = document.styleSheets;
    }
    return _getSheet(sheet,idx)
  }
  element.addCSSRule = function(sheet,selector,rules,index){
    var idx = sheet.cssRules && sheet.cssRules.length || sheet.rules.length;
    index = Math.min(idx,+index) || 0
    if('insertRule' in sheet){
      var a = sheet.insertRule(selector + '{' + rules + '}',index);
    }else if('addRule' in sheet){
      var a = sheet.addRule(selector,rules,index);
    }
    console.log(a);
  }

  element.removeCSSRule= function(sheet,idx){
    if('deleteRule' in sheet){
      var a = sheet.deleteRule(idx);
      console.log(a);
    }else if('removeRule' in sheet){
      var a = sheet.removeRule(idx);
      console.info(a)
    }

  }

  if(support.classList){
    element.addClass = function(dom,className){
      dom.classList.add(className);
      return dom;
    };
    element.removeClass = function(dom,className){
      dom.classList.remove(className);
      return dom;
    }
    element.toggleClass = function(dom,className){
      dom.classList.toggleClass(className);
      return dom;
    }
    element.hasClass = function(dom,className){
      return dom.classList.contains(className);
    }
  }else{
    element.addClass = function(dom,className){
      if(!element.hasClass(dom,className)){
        dom.className += ' ' + className;
      }
      return dom;
    };
    element.hasClass  = function(dom,className){
      var oldClass = dom.className;
      var regClass = new RegExp('\\b' + className + '\\b');
      return regClass.test(oldClass);
    }
    element.removeClass = function(dom,className){
      var oldClass = dom.className;
      var regClass = new RegExp('\\b' + className + '\\b','g');
      if(element.hasClass(dom,className)){
        var newClass = oldClass.replace(regClass,'');
        dom.className = newClass;
      }
      return dom;
    }
    element.toggleClass = function(dom,className){
      if(element.hasClass(dom,className)){
        element.removeClass(dom,className);
      }else{
        element.addClass(dom,className);
      }
      return dom;
    }
  }

  function setCss(dom,key,val,mutiple){
    if(mutiple){
      var _cssText = dom.style.cssText;
      console.log(_cssText);
      var cssText = ''
      for(var i in key){
        cssText += i + ':' + key[i] + ';'
      }
      dom.style.cssText = _cssText + cssText;
    }else{
      dom.style[key] = val;
    }

  }

  var rnumnonpx = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i
  var rposition = /^(top|right|bottom|left)$/

  function getCss(dom,key){
    if(support.computedStyle){
      return window.getComputedStyle(dom,null)[key];
    }else{
      var currentStyle = dom.currentStyle;
      var curCss = dom.currentStyle[key];
      if(rnumnonpx.test(curCss) && !rposition.test(curCss)){
        var style = dom.style;
        var left = style.left;
        var rsLeft = dom.runtimeStyle.left;
        dom.runtimeStyle.left = currentStyle.left;
        style.left = key === 'fontSize' ? '1em' : (curCss || 0);
        curCss = style.pixelLeft + 'px';
        style.left = left;
        dom.runtimeStyle.left = rsLeft;
      }
      return curCss;
    }
  }

  element.css = function(dom,key,val){
    var mutiple = type.isObject(key);
    if(val || mutiple){
      return setCss(dom,key,val,mutiple)
    }else{
      return getCss(dom,key);
    }
  }

  return element;
})