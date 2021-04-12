controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.vy += -1
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.setVelocity(0, 0)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.setPosition(79, 55)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.vx += -1
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.vx += 1
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.vy += 1
})
let agent: Sprite = null
agent = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . . 2 . . . . . 2 2 . . . . 
    . 2 . . . . 2 2 2 2 2 2 . . . . 
    . . 2 2 . . 2 . . 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 . 2 2 . . . . 
    . . . . . 2 2 2 . . 2 . . . . . 
    . . . . . 2 2 . 2 2 . . . . . . 
    . . . . . 2 . 2 . . . . . . . . 
    . . . . . 2 . . 2 2 . . . . . . 
    . . . . . 2 . . . 2 2 . . . . . 
    . . . . . 2 . . . . . 2 . . . . 
    . . . . . 2 2 2 2 2 2 2 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
