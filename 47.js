var dispatchEventAll = function (elementID, sEvent) {
  try {
    var element = document.querySelector(elementID);

    if (element.fireEvent) {
      element.fireEvent('on' + sEvent);
    } else {
      if (element.dispatchEvent) {
        var evt = document.createEvent("MouseEvents");
        evt.initMouseEvent(sEvent,
        true, true,
        window);

        element.dispatchEvent(evt);
      }
    }
  } catch (error) {
    
  }
}