import assert from "assert"
import * as marshal from "./marshal"

export class TimestampEndPack {
    public readonly isTypeOf = 'TimestampEndPack'
    private _level!: number
    private _timestamp!: Date

    constructor(props?: Partial<Omit<TimestampEndPack, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._level = marshal.int.fromJSON(json.level)
            this._timestamp = marshal.datetime.fromJSON(json.timestamp)
        }
    }

    get level(): number {
        assert(this._level != null, 'uninitialized access')
        return this._level
    }

    set level(value: number) {
        this._level = value
    }

    get timestamp(): Date {
        assert(this._timestamp != null, 'uninitialized access')
        return this._timestamp
    }

    set timestamp(value: Date) {
        this._timestamp = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            level: this.level,
            timestamp: marshal.datetime.toJSON(this.timestamp),
        }
    }
}
