
//% block="Custom Events" 
//% block.loc.ja="カスタム・イベント" 
//% weight=100
//% color=#0fbc11
//% icon="\uf135"
namespace customEvents {

    //% block="on custom event from $id with value$val"
    //% block.loc.ja="カスタム・イベントが届いたとき 発生源$id 値$val"
    //% weight=200
    export function customEventHandler(id: number, val: number, handler: () => void) {
        control.onEvent(id, val, handler)
    }

    //% block="raise custom event from source$id with value$val"
    //% block.loc.ja="カスタム・イベントを発生させる 発生源$id 値$val"
    //% weight=100
    export function customEventFire(id: number, val: number) {
        control.raiseEvent(id, val)
    }

    //% block="event timestamp(uSec)"
    //% block.loc.ja="イベントのタイムスタンプ（μ秒）"
    //% weight=50
    export function customEventTimestamp() {
        return control.eventTimestamp()
    }

    //% block="event value"
    //% block.loc.ja="イベントの値"
    //% weight=40
    export function customEventValue() {
        return control.eventValue()
    }

}
