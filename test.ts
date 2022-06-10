input.onButtonPressed(Button.A, function () {
    customEvents.customEventFire(512, 3)
})
customEvents.customEventHandler(512, 0, function () {
    basic.showString("v=" + convertToText(customEvents.customEventValue()) + "t=" + convertToText(customEvents.customEventTimestamp()))
})
