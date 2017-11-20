function __webdocument_objForElement($, target) {
  var obj = target.$jobject;
  if(!obj) {
    console.log("Converting", target.nodeName, "to class impl");
    var targetType = "net/nexustools/jvm/webdocument/dom/";

    switch(target.nodeName) {
      case "IMG":
        targetType += "WebImage";
        break;

      case "CANVAS":
        targetType += "WebCanvas";
        break;

      default:
        targetType += "WebElement";
    }

    obj = $.jvm.initializeObject(targetType);
    Object.defineProperty(target, "$jobject", {
        value: obj
    });
    obj.$prop['_target'] = target;
  }
  return obj;
}
