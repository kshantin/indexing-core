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
        "name": "MFCBuyLimitOfMFSExceeded",
        "inputs": [
            {
                "type": "uint256",
                "name": "shortage"
            }
        ]
    },
    {
        "type": "error",
        "name": "MFCEarlyStageForActivatePack",
        "inputs": []
    },
    {
        "type": "error",
        "name": "MFCEarlyStageForRenewalPackInHMFS",
        "inputs": []
    },
    {
        "type": "error",
        "name": "MFCLateForBuyMFS",
        "inputs": []
    },
    {
        "type": "error",
        "name": "MFCLevelMoreMaxPackLevel",
        "inputs": []
    },
    {
        "type": "error",
        "name": "MFCNeedActivatePack",
        "inputs": [
            {
                "type": "uint256",
                "name": "level"
            }
        ]
    },
    {
        "type": "error",
        "name": "MFCNotEnoughHMFSNeedLevel",
        "inputs": []
    },
    {
        "type": "error",
        "name": "MFCNotFirstActivationPack",
        "inputs": []
    },
    {
        "type": "error",
        "name": "MFCPackIsActive",
        "inputs": [
            {
                "type": "uint256",
                "name": "level"
            }
        ]
    },
    {
        "type": "error",
        "name": "MFCPackLevelIs0",
        "inputs": []
    },
    {
        "type": "error",
        "name": "MFCRenewalAmountIs0",
        "inputs": []
    },
    {
        "type": "error",
        "name": "MFCRenewalPaymentIsOnlyPossibleInHMFS",
        "inputs": []
    },
    {
        "type": "error",
        "name": "MFCSizeArrayDifferentFromExpected",
        "inputs": []
    },
    {
        "type": "error",
        "name": "MFCUserIsNotRegistredInMarketing",
        "inputs": []
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
        "name": "LostMoney",
        "inputs": [
            {
                "type": "uint256",
                "name": "accountId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "fromId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "MFCPackIsActivated",
        "inputs": [
            {
                "type": "uint256",
                "name": "user",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "level",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "timestampEndPack",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "MFCPackIsRenewed",
        "inputs": [
            {
                "type": "uint256",
                "name": "user",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "level",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "timestampEndPack",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "MFCRegistryContractAddressSetted",
        "inputs": [
            {
                "type": "address",
                "name": "registry",
                "indexed": false
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
        "name": "RevenueMFS",
        "inputs": [
            {
                "type": "uint256",
                "name": "accountId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "fromId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RevenueStable",
        "inputs": [
            {
                "type": "uint256",
                "name": "accountId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "fromId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
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
        "name": "activationPack",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "level"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "buyMFS",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "amountMFS"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "countRenewal",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256"
            },
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
        "name": "datesForBuying",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256"
            },
            {
                "type": "uint256"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "date"
            },
            {
                "type": "uint256",
                "name": "amount"
            }
        ]
    },
    {
        "type": "function",
        "name": "firstActivationPack",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "marketinReferrerId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "firstActivationPackWithReplace",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "replaceId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getDatesForBuying",
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
                "name": "index"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "components": [
                    {
                        "type": "uint256",
                        "name": "date"
                    },
                    {
                        "type": "uint256",
                        "name": "amount"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getDatesForBuyingLength",
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
        "name": "lastIndexBuying",
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
        "name": "renewalPack",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "level"
            },
            {
                "type": "uint256",
                "name": "amount"
            },
            {
                "type": "uint256[]",
                "name": "amountsCurrency"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "renewalPackForMFS",
        "constant": false,
        "payable": false,
        "inputs": [
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
