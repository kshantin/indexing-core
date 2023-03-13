import {MarketingReferrerChanged} from "./_marketingReferrerChanged"
import {TimestampEndPack} from "./_timestampEndPack"
import {RevenueMFS} from "./_revenueMfs"
import {RevenueStable} from "./_revenueStable"
import {LostMoney} from "./_lostMoney"

export type Log = MarketingReferrerChanged | TimestampEndPack | RevenueMFS | RevenueStable | LostMoney

export function fromJsonLog(json: any): Log {
    switch(json?.isTypeOf) {
        case 'MarketingReferrerChanged': return new MarketingReferrerChanged(undefined, json)
        case 'TimestampEndPack': return new TimestampEndPack(undefined, json)
        case 'RevenueMFS': return new RevenueMFS(undefined, json)
        case 'RevenueStable': return new RevenueStable(undefined, json)
        case 'LostMoney': return new LostMoney(undefined, json)
        default: throw new TypeError('Unknown json object passed as Log')
    }
}
