maqueen.IR_callbackUser(function (message) {
    if (maqueen.IR_read() == 10) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        basic.pause(800)
    }
    if (maqueen.IR_read() == 12) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
        basic.pause(800)
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
    maqueen.motorStop(maqueen.Motors.All)
})
let lapat = 0
lapat = 0
maqueen.servoRun(maqueen.Servos.S1, 0)
basic.forever(function () {
	
})
