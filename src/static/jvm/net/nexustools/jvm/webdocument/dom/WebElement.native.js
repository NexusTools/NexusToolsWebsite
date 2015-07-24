(function(JVM) {
  var currentWindow;

  JVM.ClassLoader.defineNativeImpl("net/nexustools/jvm/webdocument/dom/WebElement", {
    'setAttribute$(Ljava/lang/String;Ljava/lang/String;)V': function($, key, val) {
      this.$prop._target.setAttribute(key.$prop._value, val.$prop._value);
    },
    'appendChild$(Lnet/nexustools/jvm/webdocument/dom/WebElement;)V': function($, el) {
      this.$prop._target.appendChild(el.$prop._target);
    }
  });
})($currentJVM);
