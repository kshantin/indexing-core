import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './core.abi'

export const abi = new ethers.utils.Interface(ABI_JSON);

export const events = {
    BigBlockMove: new LogEvent<([nowNumberBigBlock: ethers.BigNumber] & {nowNumberBigBlock: ethers.BigNumber})>(
        abi, '0xd62343e8c3aae916cbfebb6cc3c8b4efbf251af42ebdb2b074c7e15d957eb56f'
    ),
    GovernanceTransited: new LogEvent<([governor: string, newGovernor: string] & {governor: string, newGovernor: string})>(
        abi, '0x564590b81987d147246f63910a8e1ee4eb09c4d64cc75ee975a8ffedfcc2210e'
    ),
    Initialized: new LogEvent<([version: number] & {version: number})>(
        abi, '0x7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498'
    ),
    MarketingReferrerChanged: new LogEvent<([accountId: ethers.BigNumber, marketingReferrer: ethers.BigNumber] & {accountId: ethers.BigNumber, marketingReferrer: ethers.BigNumber})>(
        abi, '0xe60fff86f0cb01ff7149d12eb88a8a715f53b45a1f0745108b6f8d411bcaee2e'
    ),
    PendingGovernanceTransition: new LogEvent<([governor: string, newGovernor: string] & {governor: string, newGovernor: string})>(
        abi, '0xc606c9af1451cadeb333f6ff7b24a5540974f4e800bac274fa7fff9edc305cb1'
    ),
    PoolMFSBurned: new LogEvent<[]>(
        abi, '0xed76ae9e497226027a7a48ca7cfa01857fff0cdf25d1cfeb17288469593491aa'
    ),
    RewardsReferrerSetted: new LogEvent<[]>(
        abi, '0x3d07b0bdd4ee39f2a5e50ef795d1d96b37be6d4351874adfc5b8e6b9d57cda99'
    ),
    RoleAdminChanged: new LogEvent<([role: string, previousAdminRole: string, newAdminRole: string] & {role: string, previousAdminRole: string, newAdminRole: string})>(
        abi, '0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff'
    ),
    RoleGranted: new LogEvent<([role: string, account: string, sender: string] & {role: string, account: string, sender: string})>(
        abi, '0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d'
    ),
    RoleRevoked: new LogEvent<([role: string, account: string, sender: string] & {role: string, account: string, sender: string})>(
        abi, '0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b'
    ),
    SmallBlockMove: new LogEvent<([nowNumberSmallBlock: ethers.BigNumber] & {nowNumberSmallBlock: ethers.BigNumber})>(
        abi, '0x0008e06e394bbb00dd35ec5761f5f52eb0d2ab3298749dd9c44e537f76144a31'
    ),
    TimestampEndPackSet: new LogEvent<([accountId: ethers.BigNumber, level: ethers.BigNumber, timestamp: ethers.BigNumber] & {accountId: ethers.BigNumber, level: ethers.BigNumber, timestamp: ethers.BigNumber})>(
        abi, '0x89918f56d16e7335cd533f79979ccff686cd544622f9d38edd69d91fb7637510'
    ),
    WorkflowStageMove: new LogEvent<([workflowstage: number] & {workflowstage: number})>(
        abi, '0x0d3d64c771dcbb76356a4925079896feba320a1872497e5a410b92855473d779'
    ),
}

export const functions = {
    DEFAULT_ADMIN_ROLE: new Func<[], {}, string>(
        abi, '0xa217fddf'
    ),
    acceptGovernance: new Func<[], {}, []>(
        abi, '0x238efcbc'
    ),
    bigBlockSize: new Func<[], {}, ethers.BigNumber>(
        abi, '0x0b7fe3b0'
    ),
    burnMFSPool: new Func<[], {}, []>(
        abi, '0xc81f011c'
    ),
    calcMFSAmountForUSD: new Func<[amountUSD: ethers.BigNumber], {amountUSD: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x5ab7b68a'
    ),
    calcUSDAmountForMFS: new Func<[amountMFS: ethers.BigNumber], {amountMFS: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x7646a885'
    ),
    checkRegistrationInMarketing: new Func<[userId: ethers.BigNumber], {userId: ethers.BigNumber}, boolean>(
        abi, '0x6bda49ec'
    ),
    clearInfo: new Func<[userId: ethers.BigNumber], {userId: ethers.BigNumber}, []>(
        abi, '0xe1b1c691'
    ),
    distibuteMFSEmission: new Func<[], {}, []>(
        abi, '0x70921431'
    ),
    endBigBlock: new Func<[], {}, ethers.BigNumber>(
        abi, '0x2cd12f25'
    ),
    endSmallBlock: new Func<[], {}, ethers.BigNumber>(
        abi, '0x2cea762b'
    ),
    getDateStartSaleOpen: new Func<[], {}, ethers.BigNumber>(
        abi, '0xb5901951'
    ),
    getEnergyConversionFactor: new Func<[], {}, ethers.BigNumber>(
        abi, '0xca4fcebb'
    ),
    getLevelForNFT: new Func<[_userId: ethers.BigNumber], {_userId: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x7e64ece7'
    ),
    getMarketingReferrals: new Func<[userId: ethers.BigNumber], {userId: ethers.BigNumber}, Array<ethers.BigNumber>>(
        abi, '0xf69b9726'
    ),
    getMarketingReferrer: new Func<[userId: ethers.BigNumber], {userId: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x25f8b06e'
    ),
    getReferrer: new Func<[userId: ethers.BigNumber], {userId: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x18c6203a'
    ),
    getRegistrationDate: new Func<[userId: ethers.BigNumber], {userId: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x51747ce8'
    ),
    getRewardsDirectReferrers: new Func<[], {}, Array<ethers.BigNumber>>(
        abi, '0x3905301e'
    ),
    getRewardsMarketingReferrers: new Func<[], {}, Array<ethers.BigNumber>>(
        abi, '0x8d040582'
    ),
    getRoleAdmin: new Func<[role: string], {role: string}, string>(
        abi, '0x248a9ca3'
    ),
    getTimestampEndPack: new Func<[userId: ethers.BigNumber, level: ethers.BigNumber], {userId: ethers.BigNumber, level: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x2d9784a8'
    ),
    getTypeReward: new Func<[userId: ethers.BigNumber], {userId: ethers.BigNumber}, number>(
        abi, '0xeab8a813'
    ),
    getUserLevel: new Func<[userId: ethers.BigNumber], {userId: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x38f8fe83'
    ),
    getWorkflowStage: new Func<[], {}, number>(
        abi, '0x2119351d'
    ),
    giveMFSFromPool: new Func<[userId: ethers.BigNumber, amount: ethers.BigNumber], {userId: ethers.BigNumber, amount: ethers.BigNumber}, []>(
        abi, '0xdcadf4a2'
    ),
    giveStableFromPool: new Func<[userId: ethers.BigNumber, amount: ethers.BigNumber], {userId: ethers.BigNumber, amount: ethers.BigNumber}, []>(
        abi, '0x0b20243c'
    ),
    governor: new Func<[], {}, string>(
        abi, '0x0c340a24'
    ),
    grantRole: new Func<[role: string, account: string], {role: string, account: string}, []>(
        abi, '0x2f2ff15d'
    ),
    hasRole: new Func<[role: string, account: string], {role: string, account: string}, boolean>(
        abi, '0x91d14854'
    ),
    increaseTimestampEndPack: new Func<[userId: ethers.BigNumber, level: ethers.BigNumber, amount: ethers.BigNumber], {userId: ethers.BigNumber, level: ethers.BigNumber, amount: ethers.BigNumber}, []>(
        abi, '0x23057774'
    ),
    increaseTotalEmission: new Func<[amount: ethers.BigNumber], {amount: ethers.BigNumber}, []>(
        abi, '0xe9d33b8b'
    ),
    initialize: new Func<[_registry: string], {_registry: string}, []>(
        abi, '0xc4d66de8'
    ),
    isPackActive: new Func<[userId: ethers.BigNumber, level: ethers.BigNumber], {userId: ethers.BigNumber, level: ethers.BigNumber}, boolean>(
        abi, '0x30d61b2f'
    ),
    isUserActive: new Func<[userId: ethers.BigNumber], {userId: ethers.BigNumber}, boolean>(
        abi, '0x55e1dfd2'
    ),
    meanDecreaseMicroBlock: new Func<[], {}, ethers.BigNumber>(
        abi, '0x034cc564'
    ),
    meanSmallBlock: new Func<[], {}, ethers.BigNumber>(
        abi, '0xa184168c'
    ),
    nextWorkflowStage: new Func<[], {}, []>(
        abi, '0xc01c8fcc'
    ),
    nowCoeffDecreaseMicroBlock: new Func<[], {}, ethers.BigNumber>(
        abi, '0x73b9303e'
    ),
    nowNumberBigBlock: new Func<[], {}, ethers.BigNumber>(
        abi, '0x0687b6ef'
    ),
    nowNumberSmallBlock: new Func<[], {}, ethers.BigNumber>(
        abi, '0x46adc1e3'
    ),
    nowPriceFirstPackInMFS: new Func<[], {}, ethers.BigNumber>(
        abi, '0x9a105dc9'
    ),
    pendingGovernor: new Func<[], {}, string>(
        abi, '0xe3056a34'
    ),
    priceMFSInUSD: new Func<[], {}, ethers.BigNumber>(
        abi, '0x1925a38e'
    ),
    renounceRole: new Func<[role: string, account: string], {role: string, account: string}, []>(
        abi, '0x36568abe'
    ),
    replaceUserInMarketingTree: new Func<[from: ethers.BigNumber, to: ethers.BigNumber], {from: ethers.BigNumber, to: ethers.BigNumber}, []>(
        abi, '0xe55bc4ce'
    ),
    revokeRole: new Func<[role: string, account: string], {role: string, account: string}, []>(
        abi, '0xd547741f'
    ),
    rewardsDirectReferrers: new Func<[_: ethers.BigNumber], {}, ethers.BigNumber>(
        abi, '0xfe480124'
    ),
    rewardsMarketingReferrers: new Func<[_: ethers.BigNumber], {}, ethers.BigNumber>(
        abi, '0xefdf046c'
    ),
    setEnergyConversionFactor: new Func<[_energyConversionFactor: ethers.BigNumber], {_energyConversionFactor: ethers.BigNumber}, []>(
        abi, '0x110edc39'
    ),
    setMarketingReferrer: new Func<[user: ethers.BigNumber, marketingReferrer: ethers.BigNumber], {user: ethers.BigNumber, marketingReferrer: ethers.BigNumber}, []>(
        abi, '0x87f59e2a'
    ),
    setRewardsDirectReferrers: new Func<[_rewardsReferrers: Array<ethers.BigNumber>], {_rewardsReferrers: Array<ethers.BigNumber>}, []>(
        abi, '0x93a88a5b'
    ),
    setRewardsMarketingReferrers: new Func<[_rewardsMarketingReferrers: Array<ethers.BigNumber>], {_rewardsMarketingReferrers: Array<ethers.BigNumber>}, []>(
        abi, '0x9a3846db'
    ),
    setRewardsReferrers: new Func<[_rewardsDirectReferrers: Array<ethers.BigNumber>, _rewardsMarketingReferrers: Array<ethers.BigNumber>], {_rewardsDirectReferrers: Array<ethers.BigNumber>, _rewardsMarketingReferrers: Array<ethers.BigNumber>}, []>(
        abi, '0x93870eee'
    ),
    setTimestampEndPack: new Func<[userId: ethers.BigNumber, level: ethers.BigNumber, timestamp: ethers.BigNumber], {userId: ethers.BigNumber, level: ethers.BigNumber, timestamp: ethers.BigNumber}, []>(
        abi, '0xfedbb117'
    ),
    setTypeReward: new Func<[typeReward: number], {typeReward: number}, []>(
        abi, '0xca16b3aa'
    ),
    supportsInterface: new Func<[interfaceId: string], {interfaceId: string}, boolean>(
        abi, '0x01ffc9a7'
    ),
    totalEmissionMFS: new Func<[], {}, ethers.BigNumber>(
        abi, '0x86588b36'
    ),
    transitGovernance: new Func<[newGovernor: string, force: boolean], {newGovernor: string, force: boolean}, []>(
        abi, '0xddc12526'
    ),
}

export class Contract extends ContractBase {

    DEFAULT_ADMIN_ROLE(): Promise<string> {
        return this.eth_call(functions.DEFAULT_ADMIN_ROLE, [])
    }

    bigBlockSize(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.bigBlockSize, [])
    }

    calcMFSAmountForUSD(amountUSD: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.calcMFSAmountForUSD, [amountUSD])
    }

    calcUSDAmountForMFS(amountMFS: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.calcUSDAmountForMFS, [amountMFS])
    }

    checkRegistrationInMarketing(userId: ethers.BigNumber): Promise<boolean> {
        return this.eth_call(functions.checkRegistrationInMarketing, [userId])
    }

    endBigBlock(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.endBigBlock, [])
    }

    endSmallBlock(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.endSmallBlock, [])
    }

    getDateStartSaleOpen(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.getDateStartSaleOpen, [])
    }

    getEnergyConversionFactor(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.getEnergyConversionFactor, [])
    }

    getLevelForNFT(_userId: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.getLevelForNFT, [_userId])
    }

    getMarketingReferrals(userId: ethers.BigNumber): Promise<Array<ethers.BigNumber>> {
        return this.eth_call(functions.getMarketingReferrals, [userId])
    }

    getMarketingReferrer(userId: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.getMarketingReferrer, [userId])
    }

    getReferrer(userId: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.getReferrer, [userId])
    }

    getRegistrationDate(userId: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.getRegistrationDate, [userId])
    }

    getRewardsDirectReferrers(): Promise<Array<ethers.BigNumber>> {
        return this.eth_call(functions.getRewardsDirectReferrers, [])
    }

    getRewardsMarketingReferrers(): Promise<Array<ethers.BigNumber>> {
        return this.eth_call(functions.getRewardsMarketingReferrers, [])
    }

    getRoleAdmin(role: string): Promise<string> {
        return this.eth_call(functions.getRoleAdmin, [role])
    }

    getTimestampEndPack(userId: ethers.BigNumber, level: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.getTimestampEndPack, [userId, level])
    }

    getTypeReward(userId: ethers.BigNumber): Promise<number> {
        return this.eth_call(functions.getTypeReward, [userId])
    }

    getUserLevel(userId: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.getUserLevel, [userId])
    }

    getWorkflowStage(): Promise<number> {
        return this.eth_call(functions.getWorkflowStage, [])
    }

    governor(): Promise<string> {
        return this.eth_call(functions.governor, [])
    }

    hasRole(role: string, account: string): Promise<boolean> {
        return this.eth_call(functions.hasRole, [role, account])
    }

    isPackActive(userId: ethers.BigNumber, level: ethers.BigNumber): Promise<boolean> {
        return this.eth_call(functions.isPackActive, [userId, level])
    }

    isUserActive(userId: ethers.BigNumber): Promise<boolean> {
        return this.eth_call(functions.isUserActive, [userId])
    }

    meanDecreaseMicroBlock(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.meanDecreaseMicroBlock, [])
    }

    meanSmallBlock(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.meanSmallBlock, [])
    }

    nowCoeffDecreaseMicroBlock(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.nowCoeffDecreaseMicroBlock, [])
    }

    nowNumberBigBlock(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.nowNumberBigBlock, [])
    }

    nowNumberSmallBlock(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.nowNumberSmallBlock, [])
    }

    nowPriceFirstPackInMFS(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.nowPriceFirstPackInMFS, [])
    }

    pendingGovernor(): Promise<string> {
        return this.eth_call(functions.pendingGovernor, [])
    }

    priceMFSInUSD(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.priceMFSInUSD, [])
    }

    rewardsDirectReferrers(arg0: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.rewardsDirectReferrers, [arg0])
    }

    rewardsMarketingReferrers(arg0: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.rewardsMarketingReferrers, [arg0])
    }

    supportsInterface(interfaceId: string): Promise<boolean> {
        return this.eth_call(functions.supportsInterface, [interfaceId])
    }

    totalEmissionMFS(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.totalEmissionMFS, [])
    }
}
