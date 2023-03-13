import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './meta-force.abi'

export const abi = new ethers.utils.Interface(ABI_JSON);

export const events = {
    GovernanceTransited: new LogEvent<([governor: string, newGovernor: string] & {governor: string, newGovernor: string})>(
        abi, '0x564590b81987d147246f63910a8e1ee4eb09c4d64cc75ee975a8ffedfcc2210e'
    ),
    Initialized: new LogEvent<([version: number] & {version: number})>(
        abi, '0x7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498'
    ),
    LostMoney: new LogEvent<([accountId: ethers.BigNumber, fromId: ethers.BigNumber, amount: ethers.BigNumber] & {accountId: ethers.BigNumber, fromId: ethers.BigNumber, amount: ethers.BigNumber})>(
        abi, '0x97240e45ea2392d4c58e068f493d50fb5833b48443422db0372ee0c3076a0f18'
    ),
    MFCPackIsActivated: new LogEvent<([user: ethers.BigNumber, level: ethers.BigNumber, timestampEndPack: ethers.BigNumber] & {user: ethers.BigNumber, level: ethers.BigNumber, timestampEndPack: ethers.BigNumber})>(
        abi, '0x1ce63c6e3c1e758770ce82723881d86340e40ae765766fa432477ce5fa9d99a8'
    ),
    MFCPackIsRenewed: new LogEvent<([user: ethers.BigNumber, level: ethers.BigNumber, timestampEndPack: ethers.BigNumber] & {user: ethers.BigNumber, level: ethers.BigNumber, timestampEndPack: ethers.BigNumber})>(
        abi, '0xbb123f7234db90d050bdff876b61b2e758f4af84064577d30b98024f87716c69'
    ),
    MFCRegistryContractAddressSetted: new LogEvent<([registry: string] & {registry: string})>(
        abi, '0x330614b13bcae457cfa0a07d5c69ddfe6e132d2b39378e1bc0f1b1646968f73f'
    ),
    PendingGovernanceTransition: new LogEvent<([governor: string, newGovernor: string] & {governor: string, newGovernor: string})>(
        abi, '0xc606c9af1451cadeb333f6ff7b24a5540974f4e800bac274fa7fff9edc305cb1'
    ),
    RevenueMFS: new LogEvent<([accountId: ethers.BigNumber, fromId: ethers.BigNumber, amount: ethers.BigNumber] & {accountId: ethers.BigNumber, fromId: ethers.BigNumber, amount: ethers.BigNumber})>(
        abi, '0xdb39da8a03990dd96fb286fe385eecf09e520aeceec11cd97f00a169864e93f4'
    ),
    RevenueStable: new LogEvent<([accountId: ethers.BigNumber, fromId: ethers.BigNumber, amount: ethers.BigNumber] & {accountId: ethers.BigNumber, fromId: ethers.BigNumber, amount: ethers.BigNumber})>(
        abi, '0xe0aaf3bcd742970f1ee89161992b5273acc14f70600552de0977990f55951fc9'
    ),
}

export const functions = {
    acceptGovernance: new Func<[], {}, []>(
        abi, '0x238efcbc'
    ),
    activationPack: new Func<[level: ethers.BigNumber], {level: ethers.BigNumber}, []>(
        abi, '0x905e443e'
    ),
    buyMFS: new Func<[amountMFS: ethers.BigNumber], {amountMFS: ethers.BigNumber}, []>(
        abi, '0x3a46e1e4'
    ),
    countRenewal: new Func<[_: ethers.BigNumber, _: ethers.BigNumber], {}, ethers.BigNumber>(
        abi, '0x2a5155cd'
    ),
    datesForBuying: new Func<[_: ethers.BigNumber, _: ethers.BigNumber], {}, ([date: ethers.BigNumber, amount: ethers.BigNumber] & {date: ethers.BigNumber, amount: ethers.BigNumber})>(
        abi, '0x01e38ea5'
    ),
    firstActivationPack: new Func<[marketinReferrerId: ethers.BigNumber], {marketinReferrerId: ethers.BigNumber}, []>(
        abi, '0x0359f6ec'
    ),
    firstActivationPackWithReplace: new Func<[replaceId: ethers.BigNumber], {replaceId: ethers.BigNumber}, []>(
        abi, '0xb82a840e'
    ),
    getDatesForBuying: new Func<[userId: ethers.BigNumber, index: ethers.BigNumber], {userId: ethers.BigNumber, index: ethers.BigNumber}, ([date: ethers.BigNumber, amount: ethers.BigNumber] & {date: ethers.BigNumber, amount: ethers.BigNumber})>(
        abi, '0x25da714e'
    ),
    getDatesForBuyingLength: new Func<[userId: ethers.BigNumber], {userId: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x50371fda'
    ),
    governor: new Func<[], {}, string>(
        abi, '0x0c340a24'
    ),
    initialize: new Func<[_registry: string], {_registry: string}, []>(
        abi, '0xc4d66de8'
    ),
    lastIndexBuying: new Func<[_: ethers.BigNumber], {}, ethers.BigNumber>(
        abi, '0x57f40ba9'
    ),
    pendingGovernor: new Func<[], {}, string>(
        abi, '0xe3056a34'
    ),
    renewalPack: new Func<[level: ethers.BigNumber, amount: ethers.BigNumber, amountsCurrency: Array<ethers.BigNumber>], {level: ethers.BigNumber, amount: ethers.BigNumber, amountsCurrency: Array<ethers.BigNumber>}, []>(
        abi, '0x02db9649'
    ),
    renewalPackForMFS: new Func<[level: ethers.BigNumber, amount: ethers.BigNumber], {level: ethers.BigNumber, amount: ethers.BigNumber}, []>(
        abi, '0x9c22f248'
    ),
    transitGovernance: new Func<[newGovernor: string, force: boolean], {newGovernor: string, force: boolean}, []>(
        abi, '0xddc12526'
    ),
}

export class Contract extends ContractBase {

    countRenewal(arg0: ethers.BigNumber, arg1: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.countRenewal, [arg0, arg1])
    }

    datesForBuying(arg0: ethers.BigNumber, arg1: ethers.BigNumber): Promise<([date: ethers.BigNumber, amount: ethers.BigNumber] & {date: ethers.BigNumber, amount: ethers.BigNumber})> {
        return this.eth_call(functions.datesForBuying, [arg0, arg1])
    }

    getDatesForBuying(userId: ethers.BigNumber, index: ethers.BigNumber): Promise<([date: ethers.BigNumber, amount: ethers.BigNumber] & {date: ethers.BigNumber, amount: ethers.BigNumber})> {
        return this.eth_call(functions.getDatesForBuying, [userId, index])
    }

    getDatesForBuyingLength(userId: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.getDatesForBuyingLength, [userId])
    }

    governor(): Promise<string> {
        return this.eth_call(functions.governor, [])
    }

    lastIndexBuying(arg0: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.lastIndexBuying, [arg0])
    }

    pendingGovernor(): Promise<string> {
        return this.eth_call(functions.pendingGovernor, [])
    }
}
