input.onPinPressed(TouchPin.P0, function on_pin_pressed_p0() {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    basic.pause(1000)
    limit += -1
    basic.showNumber(limit)
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    basic.pause(1000)
    limit += 1
    basic.showNumber(limit)
})
let limit = 0
limit = 25
basic.forever(function on_forever() {
    if (input.temperature() < limit) {
        basic.setLedColor(0x00ff00)
    } else {
        basic.setLedColor(0xff0000)
        music.playTone(494, music.beat(BeatFraction.Quarter))
    }
    
    basic.showString("Act: " + ("" + input.temperature()) + ", limit: " + ("" + limit))
    basic.pause(1000)
    basic.setLedColor(Colors.Off)
    basic.pause(5000)
})
