import assert from "assert"
import * as marshal from "./marshal"
import {User} from "./user.model"

export class MarketingReferrerChanged {
    public readonly isTypeOf = 'MarketingReferrerChanged'
    private _accountId!: string

    constructor(props?: Partial<Omit<MarketingReferrerChanged, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._accountId = marshal.string.fromJSON(json.accountId)
        }
    }

    get accountId(): string {
        assert(this._accountId != null, 'uninitialized access')
        return this._accountId
    }

    set accountId(value: string) {
        this._accountId = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            accountId: this.accountId,
        }
    }
}
