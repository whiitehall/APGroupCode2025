namespace SpriteKind {
    export const npc = SpriteKind.create()
    export const npc2 = SpriteKind.create()
    export const Image = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    sprites.destroy(Start_Text)
    sprites.destroy(Abutton)
    nerdBig = sprites.create(img`
        fffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffeeeeeeffffff
        fffffffffffffffffffffffffffffffeeeeeeffffff
        ffffffffffff4444444444444444444eeeeeeeeeeff
        ffffffffff444444444444444444444eeeeeeeeeeff
        ffffffffff44444444444444444444444eeeeeeeeff
        ffffffffff44444444444444444444444eeeeeeeeff
        ffffffff444444444444444444444444444eeeeeeee
        ffffff44444444444444444444444444444eeeeeeee
        ffffff4444444444444444444444444444444eeeeee
        ffffff4444444444444444444444444444444eeeeee
        ffffff4444444444444444444444444444444eeeeff
        ffff4444444444ee444444444444444444444eeeeff
        ffff4444444444ee4444444444444444444444eeeff
        ffff44444444eeee4444444444444444444444eeeff
        ffff44444444eeee4444444444444444444444eeeff
        ffff44444444eeeeee44444444444444444444eeeff
        ffff44444444eeeeee44444444444444444444eeeff
        ffff444444ffeeffeeee4444444ff44ff44444eeeff
        ffff444444ffeeffeeff444ff44ff44ff44444eeeff
        ffff444444ffeeffceffeeeffeecfbbff44444eeeff
        ffff444444ffcc88ccffeeeffccc8ccff444444ffff
        ffff444444fffffffffffffffffffffff444444ffff
        ffff444444eeeeeeeeeeeeeeeeeeeeeee444444ffff
        ffff444444eeeeeeffeeeeeeeeffeeeee444444ffff
        ffff444444eeeeeeffeeeeeeeeffeeeee444444ffff
        ffffff4444eeeeeeffffffffffffeeeee4444ffffff
        ffffff4444eeeeeeffffffffffffeeeee4444ffffff
        ffffff444444eeeeeeeeeeeeeeeeeee444444ffffff
        ffffff444444effffffffffffffffffb44444ffffff
        ffffffff4444cffffffffffffffffffb4444fffffff
        ffffffff4444effffffffffffffffffb444bfffffff
        ffffffffff444fffffffeeeffffffff44ffffffffff
        ffffffffffffffffff1beeed1dfffffffffffffffff
        ffffffffffffffffff1beeed1dfffffffffffffffff
        ffffffffffffffffff1dbbbd1dfffffffffffffffff
        ffffffffffffffeeff1111111dfeeffffffffffffff
        ffffffffffffffeefffffffffffeeffffffffffffff
        ffffffffffffccffcccccccccccffccffffffffffff
        ffffffffffffb1ffeeeeeeeeeeeff11ffffffffffff
        ffffffffffffb1ffeeeeeeeeeeeff11ffffffffffff
        ffffffffff111166ffcffffffffff111dffffffffff
        ffffffffffcccc66ffcccccccccccccccffffffffff
        fffffffffeffff66fffc66666666bffffeeffffffff
        fffffffffeffffbbfffc66bbbb66bffffeeffffffff
        ffffffffffffc6cccc666bcccb66bccffffffffffff
        fffffffffffffcfffcccccfffccccffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffeeffeefeeeefffeffccffffffffffff
        ffffffffffffeeffeefeeeefffeffccffffffffffff
        ffffffffffffffffbbffffffffdffffffffffffffff
        ffffffffffffffffddfffffffc1cfffffffffffffff
        ffffffffffffffffddfffffffc1cfffffffffffffff
        ffffffffffffffffddfffffffc1cfffffffffffffff
        ffffffffffffffffccffffffffcffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff
        `, SpriteKind.Player)
})
let nerdBig: Sprite = null
let Start_Text: Sprite = null
let Abutton: Sprite = null
scene.setBackgroundColor(15)
Abutton = sprites.create(assets.image`A Button`, SpriteKind.Image)
Abutton.setPosition(47, 93)
Start_Text = sprites.create(assets.image`Start Text`, SpriteKind.Image)
Start_Text.setPosition(73, 94)
