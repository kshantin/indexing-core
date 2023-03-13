export const ABI_JSON = [
    {
        "type": "constructor",
        "payable": false,
        "inputs": []
    },
    {
        "type": "error",
        "name": "FixedPointMathExp2ArgumentTooBig",
        "inputs": [
            {
                "type": "uint256",
                "name": "a"
            }
        ]
    },
    {
        "type": "error",
        "name": "FixedPointMathLog2ArgumentTooBig",
        "inputs": [
            {
                "type": "uint256",
                "name": "a"
            }
        ]
    },
    {
        "type": "error",
        "name": "FixedPointMathMulDivOverflow",
        "inputs": [
            {
                "type": "uint256",
                "name": "prod1"
            },
            {
                "type": "uint256",
                "name": "denominator"
            }
        ]
    },
    {
        "type": "error",
        "name": "GovernedCantGoverItself",
        "inputs": []
    },
    {
        "type": "error",
        "name": "GovernedGovernorZeroAddress",
        "inputs": []
    },
    {
        "type": "error",
        "name": "GovernedOnlyGovernorAllowedToCall",
        "inputs": []
    },
    {
        "type": "error",
        "name": "GovernedOnlyPendingGovernorAllowedToCall",
        "inputs": []
    },
    {
        "type": "error",
        "name": "MetaForceSpaceCoreActiveUser",
        "inputs": []
    },
    {
        "type": "error",
        "name": "MetaForceSpaceCoreEmissionCommitted",
        "inputs": []
    },
    {
        "type": "error",
        "name": "MetaForceSpaceCoreMarketingReferralAdditionFailed",
        "inputs": []
    },
    {
        "type": "error",
        "name": "MetaForceSpaceCoreMarketingReferralRemovalFailed",
        "inputs": []
    },
    {
        "type": "error",
        "name": "MetaForceSpaceCoreNoMoreSpaceInTree",
        "inputs": []
    },
    {
        "type": "error",
        "name": "MetaForceSpaceCoreReferrerIsNotRegistredInMarketing",
        "inputs": []
    },
    {
        "type": "error",
        "name": "MetaForceSpaceCoreRewardsIsNotChange",
        "inputs": []
    },
    {
        "type": "error",
        "name": "MetaForceSpaceCoreSaleOpenIsLastWorkflowStep",
        "inputs": []
    },
    {
        "type": "error",
        "name": "MetaForceSpaceCoreSenderIsNotMetaContract",
        "inputs": []
    },
    {
        "type": "error",
        "name": "MetaForceSpaceCoreSumRewardsMustBeHundred",
        "inputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "BigBlockMove",
        "inputs": [
            {
                "type": "uint256",
                "name": "nowNumberBigBlock",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "GovernanceTransited",
        "inputs": [
            {
                "type": "address",
                "name": "governor",
                "indexed": true
            },
            {
                "type": "address",
                "name": "newGovernor",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Initialized",
        "inputs": [
            {
                "type": "uint8",
                "name": "version",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "MarketingReferrerChanged",
        "inputs": [
            {
                "type": "uint256",
                "name": "accountId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "marketingReferrer",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "PendingGovernanceTransition",
        "inputs": [
            {
                "type": "address",
                "name": "governor",
                "indexed": true
            },
            {
                "type": "address",
                "name": "newGovernor",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "PoolMFSBurned",
        "inputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RewardsReferrerSetted",
        "inputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RoleAdminChanged",
        "inputs": [
            {
                "type": "bytes32",
                "name": "role",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "previousAdminRole",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "newAdminRole",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RoleGranted",
        "inputs": [
            {
                "type": "bytes32",
                "name": "role",
                "indexed": true
            },
            {
                "type": "address",
                "name": "account",
                "indexed": true
            },
            {
                "type": "address",
                "name": "sender",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RoleRevoked",
        "inputs": [
            {
                "type": "bytes32",
                "name": "role",
                "indexed": true
            },
            {
                "type": "address",
                "name": "account",
                "indexed": true
            },
            {
                "type": "address",
                "name": "sender",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "SmallBlockMove",
        "inputs": [
            {
                "type": "uint256",
                "name": "nowNumberSmallBlock",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "TimestampEndPackSet",
        "inputs": [
            {
                "type": "uint256",
                "name": "accountId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "level",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "WorkflowStageMove",
        "inputs": [
            {
                "type": "uint8",
                "name": "workflowstage",
                "indexed": false
            }
        ]
    },
    {
        "type": "function",
        "name": "DEFAULT_ADMIN_ROLE",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32"
            }
        ]
    },
    {
        "type": "function",
        "name": "acceptGovernance",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "bigBlockSize",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "burnMFSPool",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "calcMFSAmountForUSD",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "amountUSD"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "amount"
            }
        ]
    },
    {
        "type": "function",
        "name": "calcUSDAmountForMFS",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "amountMFS"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "amountUSD"
            }
        ]
    },
    {
        "type": "function",
        "name": "checkRegistrationInMarketing",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "userId"
            }
        ],
        "outputs": [
            {
                "type": "bool"
            }
        ]
    },
    {
        "type": "function",
        "name": "clearInfo",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "userId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "distibuteMFSEmission",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "endBigBlock",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "endSmallBlock",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "getDateStartSaleOpen",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "getEnergyConversionFactor",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "getLevelForNFT",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_userId"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "getMarketingReferrals",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "userId"
            }
        ],
        "outputs": [
            {
                "type": "uint256[]"
            }
        ]
    },
    {
        "type": "function",
        "name": "getMarketingReferrer",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "userId"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "getReferrer",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "userId"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "getRegistrationDate",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "userId"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "getRewardsDirectReferrers",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256[]"
            }
        ]
    },
    {
        "type": "function",
        "name": "getRewardsMarketingReferrers",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256[]"
            }
        ]
    },
    {
        "type": "function",
        "name": "getRoleAdmin",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
            }
        ],
        "outputs": [
            {
                "type": "bytes32"
            }
        ]
    },
    {
        "type": "function",
        "name": "getTimestampEndPack",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "userId"
            },
            {
                "type": "uint256",
                "name": "level"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "getTypeReward",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "userId"
            }
        ],
        "outputs": [
            {
                "type": "uint8"
            }
        ]
    },
    {
        "type": "function",
        "name": "getUserLevel",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "userId"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "getWorkflowStage",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint8"
            }
        ]
    },
    {
        "type": "function",
        "name": "giveMFSFromPool",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "userId"
            },
            {
                "type": "uint256",
                "name": "amount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "giveStableFromPool",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "userId"
            },
            {
                "type": "uint256",
                "name": "amount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "governor",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "grantRole",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
            },
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "hasRole",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
            },
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": [
            {
                "type": "bool"
            }
        ]
    },
    {
        "type": "function",
        "name": "increaseTimestampEndPack",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "userId"
            },
            {
                "type": "uint256",
                "name": "level"
            },
            {
                "type": "uint256",
                "name": "amount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "increaseTotalEmission",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "amount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "initialize",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_registry"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "isPackActive",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "userId"
            },
            {
                "type": "uint256",
                "name": "level"
            }
        ],
        "outputs": [
            {
                "type": "bool"
            }
        ]
    },
    {
        "type": "function",
        "name": "isUserActive",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "userId"
            }
        ],
        "outputs": [
            {
                "type": "bool"
            }
        ]
    },
    {
        "type": "function",
        "name": "meanDecreaseMicroBlock",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "meanSmallBlock",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "nextWorkflowStage",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "nowCoeffDecreaseMicroBlock",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "nowNumberBigBlock",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "nowNumberSmallBlock",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "nowPriceFirstPackInMFS",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "pendingGovernor",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "priceMFSInUSD",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "renounceRole",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
            },
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "replaceUserInMarketingTree",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "from"
            },
            {
                "type": "uint256",
                "name": "to"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "revokeRole",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
            },
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "rewardsDirectReferrers",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "rewardsMarketingReferrers",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "setEnergyConversionFactor",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_energyConversionFactor"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setMarketingReferrer",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "user"
            },
            {
                "type": "uint256",
                "name": "marketingReferrer"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setRewardsDirectReferrers",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256[]",
                "name": "_rewardsReferrers"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setRewardsMarketingReferrers",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256[]",
                "name": "_rewardsMarketingReferrers"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setRewardsReferrers",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256[]",
                "name": "_rewardsDirectReferrers"
            },
            {
                "type": "uint256[]",
                "name": "_rewardsMarketingReferrers"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setTimestampEndPack",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "userId"
            },
            {
                "type": "uint256",
                "name": "level"
            },
            {
                "type": "uint256",
                "name": "timestamp"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setTypeReward",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint8",
                "name": "typeReward"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "supportsInterface",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes4",
                "name": "interfaceId"
            }
        ],
        "outputs": [
            {
                "type": "bool"
            }
        ]
    },
    {
        "type": "function",
        "name": "totalEmissionMFS",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "transitGovernance",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "newGovernor"
            },
            {
                "type": "bool",
                "name": "force"
            }
        ],
        "outputs": []
    }
]
