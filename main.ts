namespace SpriteKind {
    export const npc = SpriteKind.create()
    export const npc2 = SpriteKind.create()
    export const Image = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (page == 0) {
        sprites.destroy(Start_Text)
        sprites.destroy(Abutton)
        nerdBig = sprites.create(assets.image`Nerd`, SpriteKind.Image)
        BullyBig = sprites.create(img`
            1111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111
            111111111111111115d155d15111111111111111111
            111111111111111115d155d15d11111111111111111
            1111111111111111555555544555551111111111111
            1111111111111ddd55555544455dd11111111111111
            1111111111111555555554445551111111111111111
            11111111111dd554e555eeee555dd11111111111111
            11111111111d5554f555ffff5555551111111111111
            11111111111d555db555bbbb5555111111111111111
            11111111111d45dddddddddd5555111111111111111
            11111111111cffbbfddddfed5551111111111111111
            11111111111cffbbfddddfed55d1111111111111111
            11111111111cfddbfddddfeddec1111111111111111
            11111111111cfdddcddddceddec1111111111111111
            11111111111cfddddddddddddec1111111111111111
            11111111111cfc4dccccccedcfc1111111111111111
            11111111111cffbbffffffedffc1111111111111111
            11111111111cf4dd444444dd4cc1111111111111111
            11111111111cfddddddddddddec1111111111111111
            11111111111cffffffffffffffc1111111111111111
            11111111111cffffffffffffffc1111111111111111
            111111111111111dfddddfc11111111111111111111
            11111111111111dbfddddfcd1111111111111111111
            11111111111111cffddddfff1111111111111111111
            1111111111111bffcb4dbcffbd11111111111111111
            1111111111111fff9fedf9cffb11111111111111111
            11111111111bcfc696cc6966ffc1111111111111111
            11111111111cff6999cf9999ffc1111111111111111
            1111111111fbdf6999999999fbbf111111111111111
            1111111111fbdf6999999999fb4f111111111111111
            11111111dfdeff6999999999fffdfc1111111111111
            1111111dbcbecf6999999999fccbccb111111111111
            1111111cfdfb1f6999999999fbdfdbf111111111111
            1111111cfecd1f6999999999fbdceef111111111111
            1111111cff111f6999999999fb11fff111111111111
            1111111bbb111fccccccccccfb11bbb111111111111
            1111111111111ffffffffffffb11111111111111111
            1111111111111f7777777777fb11111111111111111
            1111111111111f7777777777fb11111111111111111
            1111111111111f7777777777fb11111111111111111
            1111111111111f7777777777fb11111111111111111
            1111111111111f7777cf7777fb11111111111111111
            1111111111111fc777cf7777fb11111111111111111
            1111111111111ffffffffffffb11111111111111111
            1111111111111dcfbfcdfbefdd11111111111111111
            11111111111111cfdfb1fdef1111111111111111111
            11111111111111ccdfb1fdef1111111111111111111
            11111111111111ccdfb1fdef1111111111111111111
            11111111111111cc1fb1f1bf1111111111111111111
            1111111111111dcc1fb1f1bcd111111111111111111
            1111111111111fd11fb1f111fb11111111111111111
            1111111111111bd11bd1b111bd11111111111111111
            1111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111
            `, SpriteKind.Image)
        emoBig = sprites.create(img`
            111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111
            1111111111111ff1bfffffffffff11111111111111
            1111111111111ff1bfffffffffff11111111111111
            111111111fffffffffffccccffffff111111111111
            111111111fffffffffffcaaaffffff111111111111
            1111111bcffffffffccccfffffffffcb1111111111
            1111111cfffffffffaaacffffffffffc1111111111
            11111bccfffffffccacfffffebbbfffc1111111111
            11111bfffffffffaaacfffffddddfffc1111111111
            11111bfffffffffaaacfffffddddfffc1111111111
            11111bfffffaaacfffffedddddddfffc1111111111
            11111bfffffaaccfffffcdddddddfffc1111111111
            1111111cfffaaff66666bdefffddfffffb11111111
            1111111cfffaaff66666bdefffddfffffb11111111
            11111bcffffff886bddddddbffddccccfb11111111
            11111bfffffff666bdddddddffddaaacfb11111111
            11111bfffcccc66cbdbcccccbbddccacfb11111111
            11111bfff666666fcdefffffddddffacfb11111111
            11111bfff666666fcdefffffddddffacfb11111111
            11111966666ffffdddddddddddddddacfb11111111
            11111b66666ffffdddddddddddddddacfb11111111
            111bffffffffffffcdddddddcfffffacfb11111111
            111bffffffffffffcdddddddffffffacfb11111111
            111bfffffffccfffffedddefffffcaaa6911111111
            111bfffffffaafffffedddefffffaaaa6911111111
            111dbcffcffaafffffedbecfffbbaaaa6911111111
            11111bf86ffaafffffedefffff11aaaa6911111111
            11111bf86ffaafffffedefffff11aaaa6911111111
            11111bf8666aaacfffffffffffffffaa6911111111
            11111bfc666ccacfffffffffffffffaa6911111111
            111111dcf66ffacfffffffffffffffaa6911111111
            1111111cf66ffacfffffffffffffff666911111111
            111bfffca66ffacfffffffffffffff68fb11111111
            111bfffca66ffacfffffffffffffff68fb11111111
            111bffcca66ffacffcfffcffccffff68ccbd111111
            111bfcaaa66ffacfcbcfcbcfbbffff666cfb111111
            111bfccca66ffacfcbcfcbcfbbffff666cfb111111
            1bfffffbdffffaaacfffffffff11fffc6cfffb1111
            1bfffffbdffffaaccfffffffff11fffc6cfffb1111
            fffffcdcfccff1dfffffffffff11fffffffffb1111
            fffffb1cfaaff11fffffffffff11fffffffffb1111
            fffffb1cf11ff11fffffffffff1111111bfffb1111
            fffffb1cf11ff11fffffffffff1111111bfffb1111
            cccccb1bc11cc11eeeccccceee1111111bcccb1111
            111111111111111dddd111dddd1111111111111111
            1111111111111ddbbbd111dbbbdd11111111111111
            1111111111111fffffb111cfffff11111111111111
            1111111111111fffffb111cfffff11111111111111
            11111111111fffffffb111cfffffff111111111111
            11111111111fffffffb111cfffffff111111111111
            11111111111ffff1bfb111cfd1ffff111111111111
            11111111111ffff1bfb111cfd1ffff111111111111
            11111111111cccc1dcb111bcd1cccc111111111111
            111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111
            `, SpriteKind.Player)
        nerdBig.setPosition(29, 44)
        BullyBig.setPosition(75, 44)
        emoBig.setPosition(120, 44)
        Selection = sprites.create(img`
            4444444444444444444444444444444444444444444
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4.........................................4
            4444444444444444444444444444444444444444444
            `, SpriteKind.Image)
        Selection.setPosition(29, 44)
        page = 1
        Abutton = sprites.create(assets.image`A Button`, SpriteKind.Image)
        Selection.setPosition(29, 44)
    }
    if (page == 1) {
        page = 2
    }
})
browserEvents.Three.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (page == 1) {
        Selection.setPosition(120, 44)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
browserEvents.Two.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (page == 1) {
        Selection.setPosition(75, 44)
    }
})
browserEvents.One.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (page == 1) {
        Selection.setPosition(29, 44)
    }
})
let Selection: Sprite = null
let emoBig: Sprite = null
let BullyBig: Sprite = null
let nerdBig: Sprite = null
let page = 0
let Start_Text: Sprite = null
let Abutton: Sprite = null
scene.setBackgroundColor(15)
Abutton = sprites.create(assets.image`A Button`, SpriteKind.Image)
Start_Text = sprites.create(assets.image`Start Text`, SpriteKind.Image)
Start_Text.setPosition(70, 99)
Abutton.setPosition(44, 98)
