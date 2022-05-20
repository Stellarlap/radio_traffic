input.onButtonPressed(Button.A, function () {
    radio.sendValue("Fisher", 1)
    radio.sendValue("Dynes", 2)
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("Fisher", 2)
    radio.sendValue("Dynes", 3)
})
radio.setGroup(58)
