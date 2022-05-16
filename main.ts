input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
basic.showLeds(`
    . . # . .
    . . # . .
    # # # # #
    . . # . .
    . . # . .
    `)
radio.setGroup(58)
