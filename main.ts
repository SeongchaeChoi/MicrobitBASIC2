input.onGesture(Gesture.TiltLeft, function () {
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    led.plot(2, 2)
    led.toggle(3, 3)
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(1)
})
input.onSound(DetectedSound.Loud, function () {
    soundExpression.giggle.playUntilDone()
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Hello!")
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        . . . . #
        # # # # #
        . . . . #
        . . . . #
        `)
})
input.onGesture(Gesture.LogoUp, function () {
    music.playMelody("C5 B A G F E D C ", 120)
})
basic.showIcon(IconNames.Happy)
