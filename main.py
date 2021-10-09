def on_button_pressed_a():
    global limit
    limit += -1
    basic.show_number(limit)
    basic.pause(1000)
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    basic.show_number(input.temperature())
    basic.pause(5000)
    basic.clear_screen()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global limit
    limit += 1
    basic.show_number(limit)
    basic.pause(1000)
    basic.clear_screen()
input.on_button_pressed(Button.B, on_button_pressed_b)

limit = 0
limit = 12

def on_forever():
    if input.temperature() < limit:
        basic.set_led_color(0x00ff00)
    else:
        basic.set_led_color(0xff0000)
        music.play_tone(494, music.beat(BeatFraction.QUARTER))
    basic.pause(1000)
    basic.set_led_color(Colors.OFF)
    basic.pause(2000)
basic.forever(on_forever)
