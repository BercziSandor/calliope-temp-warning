input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    limit += -11
    basic.showNumber(limit)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    basic.showNumber(input.temperature())
    basic.pause(5000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    limit += 1
    basic.showNumber(limit)
    basic.pause(1000)
    basic.clearScreen()
})
let limit = 0
limit = 12
basic.forever(function on_forever() {
    if (input.temperature() < limit) {
        basic.setLedColor(0x00ff00)
    } else {
        basic.setLedColor(0xff0000)
        music.playTone(494, music.beat(BeatFraction.Quarter))
    }
    
    basic.pause(1000)
    basic.setLedColor(Colors.Off)
    basic.pause(2000)
})
