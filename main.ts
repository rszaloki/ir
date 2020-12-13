maqueen.IR_callbackUser(function (message) {
    if (maqueen.IR_read() == 10) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        basic.pause(100)
    }
    if (maqueen.IR_read() == 12) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
        basic.pause(100)
    }
    if (maqueen.IR_read() == 6) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
        basic.pause(50)
    }
    if (maqueen.IR_read() == 9) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
        basic.pause(50)
    }
    if (maqueen.IR_read() == 92) {
        if (lapat == 0) {
            lapat = 1
            maqueen.servoRun(maqueen.Servos.S1, 65)
        } else {
            lapat = 0
            maqueen.servoRun(maqueen.Servos.S1, 0)
        }
    }
    if (maqueen.IR_read() == 3) {
        stripon = (stripon + 1) % 3
    }
    if (maqueen.IR_read() == 95) {
        basic.showString("menu")
    }
    maqueen.motorStop(maqueen.Motors.All)
    basic.showString("" + (stripon))
    if (stripon == 0) {
    	
    }
    if (stripon == 1) {
        strip.setBrightness(255)
        strip.showRainbow(1, 360)
        strip.show()
    }
})
let stripon = 0
let strip: neopixel.Strip = null
let lapat = 0
lapat = 0
maqueen.servoRun(maqueen.Servos.S1, 0)
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
stripon = 0
basic.forever(function () {
    if (stripon == 2) {
        strip.rotate(1)
        strip.show()
        basic.pause(100)
    }
})
