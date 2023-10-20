export const deployedContracts = {
  //goerli
  "5": [
    {
      name: "goerli",
      chainId: "5",
      contracts: {
        TestSafeProtocolManager: {
          address: "0x6a97233258CD825F45b73f4B14e2cE22D4627cAf",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "initialOwner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "registry",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "metadataHash",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "index",
                  type: "uint256",
                },
              ],
              name: "ActionExecutionFailed",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "ContractDoesNotImplementValidInterfaceId",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "bytes4",
                  name: "functionSelector",
                  type: "bytes4",
                },
              ],
              name: "FunctionHandlerNotSet",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidCalldataLength",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
              ],
              name: "InvalidPluginAddress",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
              ],
              name: "InvalidPrevPluginAddress",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
              ],
              name: "InvalidSender",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "metadataHash",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "index",
                  type: "uint256",
                },
              ],
              name: "InvalidToFieldInSafeProtocolAction",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
                {
                  internalType: "uint8",
                  name: "pluginRequires",
                  type: "uint8",
                },
                {
                  internalType: "uint8",
                  name: "requiredPermission",
                  type: "uint8",
                },
                {
                  internalType: "uint8",
                  name: "givenPermission",
                  type: "uint8",
                },
              ],
              name: "MissingPluginPermission",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
                {
                  internalType: "uint64",
                  name: "listedAt",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "flaggedAt",
                  type: "uint64",
                },
                {
                  internalType: "uint8",
                  name: "moduleType",
                  type: "uint8",
                },
              ],
              name: "ModuleNotPermitted",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
              ],
              name: "PluginAlreadyEnabled",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
              ],
              name: "PluginNotEnabled",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
                {
                  internalType: "uint8",
                  name: "requiredPermissions",
                  type: "uint8",
                },
                {
                  internalType: "uint8",
                  name: "givenPermissions",
                  type: "uint8",
                },
              ],
              name: "PluginPermissionsMismatch",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "metadataHash",
                  type: "bytes32",
                },
              ],
              name: "RootAccessActionExecutionFailed",
              type: "error",
            },
            {
              inputs: [],
              name: "ZeroPageSizeNotAllowed",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bytes32",
                  name: "metadataHash",
                  type: "bytes32",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "nonce",
                  type: "uint256",
                },
              ],
              name: "ActionsExecuted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "bytes4",
                  name: "selector",
                  type: "bytes4",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "functionHandler",
                  type: "address",
                },
              ],
              name: "FunctionHandlerChanged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "hooksAddress",
                  type: "address",
                },
              ],
              name: "HooksChanged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferStarted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
              ],
              name: "PluginDisabled",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint8",
                  name: "permissions",
                  type: "uint8",
                },
              ],
              name: "PluginEnabled",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "oldRegistry",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newRegistry",
                  type: "address",
                },
              ],
              name: "RegistryChanged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bytes32",
                  name: "metadataHash",
                  type: "bytes32",
                },
              ],
              name: "RootAccessActionExecuted",
              type: "event",
            },
            {
              stateMutability: "nonpayable",
              type: "fallback",
            },
            {
              inputs: [],
              name: "acceptOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
                {
                  internalType: "bool",
                  name: "success",
                  type: "bool",
                },
              ],
              name: "checkAfterExecution",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
                {
                  internalType: "enum Enum.Operation",
                  name: "operation",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "module",
                  type: "address",
                },
              ],
              name: "checkModuleTransaction",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "moduleTxHash",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
                {
                  internalType: "enum Enum.Operation",
                  name: "operation",
                  type: "uint8",
                },
                {
                  internalType: "uint256",
                  name: "safeTxGas",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "baseGas",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "gasPrice",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "gasToken",
                  type: "address",
                },
                {
                  internalType: "address payable",
                  name: "refundReceiver",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "signatures",
                  type: "bytes",
                },
                {
                  internalType: "address",
                  name: "msgSender",
                  type: "address",
                },
              ],
              name: "checkTransaction",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "prevPlugin",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
              ],
              name: "disablePlugin",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
                {
                  internalType: "uint8",
                  name: "permissions",
                  type: "uint8",
                },
              ],
              name: "enablePlugin",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "enabledHooks",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "enabledPlugins",
              outputs: [
                {
                  internalType: "uint8",
                  name: "permissions",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "nextPluginPointer",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  components: [
                    {
                      components: [
                        {
                          internalType: "address payable",
                          name: "to",
                          type: "address",
                        },
                        {
                          internalType: "uint256",
                          name: "value",
                          type: "uint256",
                        },
                        {
                          internalType: "bytes",
                          name: "data",
                          type: "bytes",
                        },
                      ],
                      internalType: "struct SafeProtocolAction",
                      name: "action",
                      type: "tuple",
                    },
                    {
                      internalType: "uint256",
                      name: "nonce",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes32",
                      name: "metadataHash",
                      type: "bytes32",
                    },
                  ],
                  internalType: "struct SafeRootAccess",
                  name: "rootAccess",
                  type: "tuple",
                },
              ],
              name: "executeRootAccess",
              outputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  components: [
                    {
                      components: [
                        {
                          internalType: "address payable",
                          name: "to",
                          type: "address",
                        },
                        {
                          internalType: "uint256",
                          name: "value",
                          type: "uint256",
                        },
                        {
                          internalType: "bytes",
                          name: "data",
                          type: "bytes",
                        },
                      ],
                      internalType: "struct SafeProtocolAction[]",
                      name: "actions",
                      type: "tuple[]",
                    },
                    {
                      internalType: "uint256",
                      name: "nonce",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes32",
                      name: "metadataHash",
                      type: "bytes32",
                    },
                  ],
                  internalType: "struct SafeTransaction",
                  name: "transaction",
                  type: "tuple",
                },
              ],
              name: "executeTransaction",
              outputs: [
                {
                  internalType: "bytes[]",
                  name: "data",
                  type: "bytes[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              name: "functionHandlers",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "getEnabledHooks",
              outputs: [
                {
                  internalType: "address",
                  name: "hooksAddress",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "bytes4",
                  name: "selector",
                  type: "bytes4",
                },
              ],
              name: "getFunctionHandler",
              outputs: [
                {
                  internalType: "address",
                  name: "functionHandler",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
              ],
              name: "getPluginInfo",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint8",
                      name: "permissions",
                      type: "uint8",
                    },
                    {
                      internalType: "address",
                      name: "nextPluginPointer",
                      type: "address",
                    },
                  ],
                  internalType: "struct SafeProtocolManager.PluginAccessInfo",
                  name: "enabled",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "start",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "pageSize",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "getPluginsPaginated",
              outputs: [
                {
                  internalType: "address[]",
                  name: "array",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "next",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
              ],
              name: "isPluginEnabled",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "pendingOwner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "registry",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "selector",
                  type: "bytes4",
                },
                {
                  internalType: "address",
                  name: "functionHandler",
                  type: "address",
                },
              ],
              name: "setFunctionHandler",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "hooks",
                  type: "address",
                },
              ],
              name: "setHooks",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newRegistry",
                  type: "address",
                },
              ],
              name: "setRegistry",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "tempHooksData",
              outputs: [
                {
                  internalType: "address",
                  name: "hooksAddress",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "preCheckData",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "testFunction",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        TestSafeProtocolRegistryUnrestricted: {
          address: "0x2b18E7246d213676a0b9741fE860c7cC05D75cE2",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "initialOwner",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "module",
                  type: "address",
                },
                {
                  internalType: "uint8",
                  name: "moduleTypes",
                  type: "uint8",
                },
              ],
              name: "CannotAddModule",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "module",
                  type: "address",
                },
              ],
              name: "CannotFlagModule",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "module",
                  type: "address",
                },
                {
                  internalType: "bytes4",
                  name: "expectedInterfaceId",
                  type: "bytes4",
                },
              ],
              name: "ModuleDoesNotSupportExpectedInterfaceId",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "module",
                  type: "address",
                },
              ],
              name: "ModuleAdded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "module",
                  type: "address",
                },
              ],
              name: "ModuleFlagged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferStarted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "acceptOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "module",
                  type: "address",
                },
                {
                  internalType: "uint8",
                  name: "moduleType",
                  type: "uint8",
                },
              ],
              name: "addModule",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "module",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "data",
                  type: "bytes32",
                },
              ],
              name: "check",
              outputs: [
                {
                  internalType: "uint64",
                  name: "listedAt",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "flaggedAt",
                  type: "uint64",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "module",
                  type: "address",
                },
              ],
              name: "flagModule",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "listedModules",
              outputs: [
                {
                  internalType: "uint64",
                  name: "listedAt",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "flaggedAt",
                  type: "uint64",
                },
                {
                  internalType: "uint8",
                  name: "moduleTypes",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "pendingOwner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        SafeProtocolRegistry: {
          address: "0xb83C63558FDF574101628B49c4610EdC32D038D4",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "initialOwner",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "module",
                  type: "address",
                },
                {
                  internalType: "uint8",
                  name: "moduleTypes",
                  type: "uint8",
                },
              ],
              name: "CannotAddModule",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "module",
                  type: "address",
                },
              ],
              name: "CannotFlagModule",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "module",
                  type: "address",
                },
                {
                  internalType: "bytes4",
                  name: "expectedInterfaceId",
                  type: "bytes4",
                },
              ],
              name: "ModuleDoesNotSupportExpectedInterfaceId",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "module",
                  type: "address",
                },
              ],
              name: "ModuleAdded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "module",
                  type: "address",
                },
              ],
              name: "ModuleFlagged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferStarted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "acceptOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "module",
                  type: "address",
                },
                {
                  internalType: "uint8",
                  name: "moduleTypes",
                  type: "uint8",
                },
              ],
              name: "addModule",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "module",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "data",
                  type: "bytes32",
                },
              ],
              name: "check",
              outputs: [
                {
                  internalType: "uint64",
                  name: "listedAt",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "flaggedAt",
                  type: "uint64",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "module",
                  type: "address",
                },
              ],
              name: "flagModule",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "listedModules",
              outputs: [
                {
                  internalType: "uint64",
                  name: "listedAt",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "flaggedAt",
                  type: "uint64",
                },
                {
                  internalType: "uint8",
                  name: "moduleTypes",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "pendingOwner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        SafeProtocolManager: {
          address: "0x2926dd0F729C0ac112BE7dde5f806D8d4E609529",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "initialOwner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_registry",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "metadataHash",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "index",
                  type: "uint256",
                },
              ],
              name: "ActionExecutionFailed",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "ContractDoesNotImplementValidInterfaceId",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "bytes4",
                  name: "functionSelector",
                  type: "bytes4",
                },
              ],
              name: "FunctionHandlerNotSet",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidCalldataLength",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
              ],
              name: "InvalidPluginAddress",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
              ],
              name: "InvalidPrevPluginAddress",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
              ],
              name: "InvalidSender",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "metadataHash",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "index",
                  type: "uint256",
                },
              ],
              name: "InvalidToFieldInSafeProtocolAction",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
                {
                  internalType: "uint8",
                  name: "pluginRequires",
                  type: "uint8",
                },
                {
                  internalType: "uint8",
                  name: "requiredPermission",
                  type: "uint8",
                },
                {
                  internalType: "uint8",
                  name: "givenPermission",
                  type: "uint8",
                },
              ],
              name: "MissingPluginPermission",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
                {
                  internalType: "uint64",
                  name: "listedAt",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "flaggedAt",
                  type: "uint64",
                },
                {
                  internalType: "uint8",
                  name: "moduleType",
                  type: "uint8",
                },
              ],
              name: "ModuleNotPermitted",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
              ],
              name: "PluginAlreadyEnabled",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
              ],
              name: "PluginNotEnabled",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
                {
                  internalType: "uint8",
                  name: "requiredPermissions",
                  type: "uint8",
                },
                {
                  internalType: "uint8",
                  name: "givenPermissions",
                  type: "uint8",
                },
              ],
              name: "PluginPermissionsMismatch",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "metadataHash",
                  type: "bytes32",
                },
              ],
              name: "RootAccessActionExecutionFailed",
              type: "error",
            },
            {
              inputs: [],
              name: "ZeroPageSizeNotAllowed",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bytes32",
                  name: "metadataHash",
                  type: "bytes32",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "nonce",
                  type: "uint256",
                },
              ],
              name: "ActionsExecuted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "bytes4",
                  name: "selector",
                  type: "bytes4",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "functionHandler",
                  type: "address",
                },
              ],
              name: "FunctionHandlerChanged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "hooksAddress",
                  type: "address",
                },
              ],
              name: "HooksChanged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferStarted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
              ],
              name: "PluginDisabled",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint8",
                  name: "permissions",
                  type: "uint8",
                },
              ],
              name: "PluginEnabled",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "oldRegistry",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newRegistry",
                  type: "address",
                },
              ],
              name: "RegistryChanged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bytes32",
                  name: "metadataHash",
                  type: "bytes32",
                },
              ],
              name: "RootAccessActionExecuted",
              type: "event",
            },
            {
              stateMutability: "nonpayable",
              type: "fallback",
            },
            {
              inputs: [],
              name: "acceptOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
                {
                  internalType: "bool",
                  name: "success",
                  type: "bool",
                },
              ],
              name: "checkAfterExecution",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
                {
                  internalType: "enum Enum.Operation",
                  name: "operation",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "module",
                  type: "address",
                },
              ],
              name: "checkModuleTransaction",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "moduleTxHash",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
                {
                  internalType: "enum Enum.Operation",
                  name: "operation",
                  type: "uint8",
                },
                {
                  internalType: "uint256",
                  name: "safeTxGas",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "baseGas",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "gasPrice",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "gasToken",
                  type: "address",
                },
                {
                  internalType: "address payable",
                  name: "refundReceiver",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "signatures",
                  type: "bytes",
                },
                {
                  internalType: "address",
                  name: "msgSender",
                  type: "address",
                },
              ],
              name: "checkTransaction",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "prevPlugin",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
              ],
              name: "disablePlugin",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
                {
                  internalType: "uint8",
                  name: "permissions",
                  type: "uint8",
                },
              ],
              name: "enablePlugin",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "enabledHooks",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "enabledPlugins",
              outputs: [
                {
                  internalType: "uint8",
                  name: "permissions",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "nextPluginPointer",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  components: [
                    {
                      components: [
                        {
                          internalType: "address payable",
                          name: "to",
                          type: "address",
                        },
                        {
                          internalType: "uint256",
                          name: "value",
                          type: "uint256",
                        },
                        {
                          internalType: "bytes",
                          name: "data",
                          type: "bytes",
                        },
                      ],
                      internalType: "struct SafeProtocolAction",
                      name: "action",
                      type: "tuple",
                    },
                    {
                      internalType: "uint256",
                      name: "nonce",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes32",
                      name: "metadataHash",
                      type: "bytes32",
                    },
                  ],
                  internalType: "struct SafeRootAccess",
                  name: "rootAccess",
                  type: "tuple",
                },
              ],
              name: "executeRootAccess",
              outputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  components: [
                    {
                      components: [
                        {
                          internalType: "address payable",
                          name: "to",
                          type: "address",
                        },
                        {
                          internalType: "uint256",
                          name: "value",
                          type: "uint256",
                        },
                        {
                          internalType: "bytes",
                          name: "data",
                          type: "bytes",
                        },
                      ],
                      internalType: "struct SafeProtocolAction[]",
                      name: "actions",
                      type: "tuple[]",
                    },
                    {
                      internalType: "uint256",
                      name: "nonce",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes32",
                      name: "metadataHash",
                      type: "bytes32",
                    },
                  ],
                  internalType: "struct SafeTransaction",
                  name: "transaction",
                  type: "tuple",
                },
              ],
              name: "executeTransaction",
              outputs: [
                {
                  internalType: "bytes[]",
                  name: "data",
                  type: "bytes[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              name: "functionHandlers",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "getEnabledHooks",
              outputs: [
                {
                  internalType: "address",
                  name: "hooksAddress",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "bytes4",
                  name: "selector",
                  type: "bytes4",
                },
              ],
              name: "getFunctionHandler",
              outputs: [
                {
                  internalType: "address",
                  name: "functionHandler",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
              ],
              name: "getPluginInfo",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint8",
                      name: "permissions",
                      type: "uint8",
                    },
                    {
                      internalType: "address",
                      name: "nextPluginPointer",
                      type: "address",
                    },
                  ],
                  internalType: "struct SafeProtocolManager.PluginAccessInfo",
                  name: "enabled",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "start",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "pageSize",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "getPluginsPaginated",
              outputs: [
                {
                  internalType: "address[]",
                  name: "array",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "next",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
              ],
              name: "isPluginEnabled",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "pendingOwner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "registry",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "selector",
                  type: "bytes4",
                },
                {
                  internalType: "address",
                  name: "functionHandler",
                  type: "address",
                },
              ],
              name: "setFunctionHandler",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "hooks",
                  type: "address",
                },
              ],
              name: "setHooks",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newRegistry",
                  type: "address",
                },
              ],
              name: "setRegistry",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "tempHooksData",
              outputs: [
                {
                  internalType: "address",
                  name: "hooksAddress",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "preCheckData",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
      },
    },
  ],
  // base-goerli
  "84531": [
    {
      name: "base-goerli",
      chainId: "5",
      contracts: {
        TestSafeProtocolManagerOld: {
          address: "0xF47c6040536D1A1584e4BEe580d65014E2fC55fE",
          abi: [
            {
              inputs: [],
              name: "acceptOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "initialOwner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "registry",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "AccountDoesNotImplementValidInterfaceId",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "metadataHash",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "index",
                  type: "uint256",
                },
              ],
              name: "ActionExecutionFailed",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
                {
                  internalType: "bool",
                  name: "success",
                  type: "bool",
                },
              ],
              name: "checkAfterExecution",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
                {
                  internalType: "enum Enum.Operation",
                  name: "operation",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "module",
                  type: "address",
                },
              ],
              name: "checkModuleTransaction",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "moduleTxHash",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
                {
                  internalType: "enum Enum.Operation",
                  name: "operation",
                  type: "uint8",
                },
                {
                  internalType: "uint256",
                  name: "safeTxGas",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "baseGas",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "gasPrice",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "gasToken",
                  type: "address",
                },
                {
                  internalType: "address payable",
                  name: "refundReceiver",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "signatures",
                  type: "bytes",
                },
                {
                  internalType: "address",
                  name: "msgSender",
                  type: "address",
                },
              ],
              name: "checkTransaction",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "prevPlugin",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
              ],
              name: "disablePlugin",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "allowRootAccess",
                  type: "bool",
                },
              ],
              name: "enablePlugin",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  components: [
                    {
                      components: [
                        {
                          internalType: "address payable",
                          name: "to",
                          type: "address",
                        },
                        {
                          internalType: "uint256",
                          name: "value",
                          type: "uint256",
                        },
                        {
                          internalType: "bytes",
                          name: "data",
                          type: "bytes",
                        },
                      ],
                      internalType: "struct SafeProtocolAction",
                      name: "action",
                      type: "tuple",
                    },
                    {
                      internalType: "uint256",
                      name: "nonce",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes32",
                      name: "metadataHash",
                      type: "bytes32",
                    },
                  ],
                  internalType: "struct SafeRootAccess",
                  name: "rootAccess",
                  type: "tuple",
                },
              ],
              name: "executeRootAccess",
              outputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  components: [
                    {
                      components: [
                        {
                          internalType: "address payable",
                          name: "to",
                          type: "address",
                        },
                        {
                          internalType: "uint256",
                          name: "value",
                          type: "uint256",
                        },
                        {
                          internalType: "bytes",
                          name: "data",
                          type: "bytes",
                        },
                      ],
                      internalType: "struct SafeProtocolAction[]",
                      name: "actions",
                      type: "tuple[]",
                    },
                    {
                      internalType: "uint256",
                      name: "nonce",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes32",
                      name: "metadataHash",
                      type: "bytes32",
                    },
                  ],
                  internalType: "struct SafeTransaction",
                  name: "transaction",
                  type: "tuple",
                },
              ],
              name: "executeTransaction",
              outputs: [
                {
                  internalType: "bytes[]",
                  name: "data",
                  type: "bytes[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "bytes4",
                  name: "functionSelector",
                  type: "bytes4",
                },
              ],
              name: "FunctionHandlerNotSet",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
                {
                  internalType: "uint64",
                  name: "listedAt",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "flaggedAt",
                  type: "uint64",
                },
              ],
              name: "IntegrationNotPermitted",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
              ],
              name: "InvalidPluginAddress",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
              ],
              name: "InvalidPrevPluginAddress",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "metadataHash",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "index",
                  type: "uint256",
                },
              ],
              name: "InvalidToFieldInSafeProtocolAction",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "requiresRootAccess",
                  type: "bool",
                },
                {
                  internalType: "bool",
                  name: "providedValue",
                  type: "bool",
                },
              ],
              name: "PluginAccessMismatch",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
              ],
              name: "PluginAlreadyEnabled",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
              ],
              name: "PluginEnabledOnlyForRootAccess",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
              ],
              name: "PluginNotEnabled",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
              ],
              name: "PluginRequiresRootAccess",
              type: "error",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "metadataHash",
                  type: "bytes32",
                },
              ],
              name: "RootAccessActionExecutionFailed",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "hooks",
                  type: "address",
                },
              ],
              name: "setHooks",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "ZeroPageSizeNotAllowed",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bytes32",
                  name: "metadataHash",
                  type: "bytes32",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "nonce",
                  type: "uint256",
                },
              ],
              name: "ActionsExecuted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "bytes4",
                  name: "selector",
                  type: "bytes4",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "functionHandler",
                  type: "address",
                },
              ],
              name: "FunctionHandlerChanged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "safe",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "hooksAddress",
                  type: "address",
                },
              ],
              name: "HooksChanged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferStarted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
              ],
              name: "PluginDisabled",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "safe",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "allowRootAccess",
                  type: "bool",
                },
              ],
              name: "PluginEnabled",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "oldRegistry",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newRegistry",
                  type: "address",
                },
              ],
              name: "RegistryChanged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bytes32",
                  name: "metadataHash",
                  type: "bytes32",
                },
              ],
              name: "RootAccessActionExecuted",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "selector",
                  type: "bytes4",
                },
                {
                  internalType: "address",
                  name: "functionHandler",
                  type: "address",
                },
              ],
              name: "setFunctionHandler",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newRegistry",
                  type: "address",
                },
              ],
              name: "setRegistry",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "testFunction",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "nonpayable",
              type: "fallback",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "enabledHooks",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "enabledPlugins",
              outputs: [
                {
                  internalType: "bool",
                  name: "rootAddressGranted",
                  type: "bool",
                },
                {
                  internalType: "address",
                  name: "nextPluginPointer",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              name: "functionHandlers",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "safe",
                  type: "address",
                },
              ],
              name: "getEnabledHooks",
              outputs: [
                {
                  internalType: "address",
                  name: "hooksAddress",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "bytes4",
                  name: "selector",
                  type: "bytes4",
                },
              ],
              name: "getFunctionHandler",
              outputs: [
                {
                  internalType: "address",
                  name: "functionHandler",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
              ],
              name: "getPluginInfo",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "rootAddressGranted",
                      type: "bool",
                    },
                    {
                      internalType: "address",
                      name: "nextPluginPointer",
                      type: "address",
                    },
                  ],
                  internalType: "struct SafeProtocolManager.PluginAccessInfo",
                  name: "enabled",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "start",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "pageSize",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "getPluginsPaginated",
              outputs: [
                {
                  internalType: "address[]",
                  name: "array",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "next",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
              ],
              name: "isPluginEnabled",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "pendingOwner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "registry",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "tempHooksData",
              outputs: [
                {
                  internalType: "address",
                  name: "hooksAddress",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "preCheckData",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        TestSafeProtocolRegistryUnrestrictedOld: {
          address: "0x5aea83D3C2837832fCb12703Bc677549bdBeb9A7",
          abi: [
            {
              inputs: [],
              name: "acceptOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "integration",
                  type: "address",
                },
                {
                  internalType: "enum Enum.IntegrationType",
                  name: "integrationType",
                  type: "uint8",
                },
              ],
              name: "addIntegration",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "integration",
                  type: "address",
                },
              ],
              name: "flagIntegration",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "initialOwner",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "integration",
                  type: "address",
                },
              ],
              name: "CannotAddIntegration",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "integration",
                  type: "address",
                },
              ],
              name: "CannotFlagIntegration",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "integration",
                  type: "address",
                },
                {
                  internalType: "bytes4",
                  name: "expectedInterfaceId",
                  type: "bytes4",
                },
              ],
              name: "IntegrationDoesNotSupportExpectedInterfaceId",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "integration",
                  type: "address",
                },
              ],
              name: "IntegrationAdded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "integration",
                  type: "address",
                },
              ],
              name: "IntegrationFlagged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferStarted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "integration",
                  type: "address",
                },
              ],
              name: "check",
              outputs: [
                {
                  internalType: "uint64",
                  name: "listedAt",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "flaggedAt",
                  type: "uint64",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "listedIntegrations",
              outputs: [
                {
                  internalType: "uint64",
                  name: "listedAt",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "flaggedAt",
                  type: "uint64",
                },
                {
                  internalType: "enum Enum.IntegrationType",
                  name: "integrationType",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "pendingOwner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        WhiteListPluginOld: {
          address: "0xBC6043bE52c675b3d465D60a1f7b7b951A3fF343",
          abi: [
            {
              inputs: [],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "AddressNotWhiteListed",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "safe",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
              ],
              name: "CallerIsNotOwner",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "AddressRemovedFromWhitelist",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "AddressWhitelisted",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "addToWhitelist",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract ISafeProtocolManager",
                  name: "manager",
                  type: "address",
                },
                {
                  internalType: "contract ISafe",
                  name: "safe",
                  type: "address",
                },
                {
                  components: [
                    {
                      components: [
                        {
                          internalType: "address payable",
                          name: "to",
                          type: "address",
                        },
                        {
                          internalType: "uint256",
                          name: "value",
                          type: "uint256",
                        },
                        {
                          internalType: "bytes",
                          name: "data",
                          type: "bytes",
                        },
                      ],
                      internalType: "struct SafeProtocolAction[]",
                      name: "actions",
                      type: "tuple[]",
                    },
                    {
                      internalType: "uint256",
                      name: "nonce",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes32",
                      name: "metadataHash",
                      type: "bytes32",
                    },
                  ],
                  internalType: "struct SafeTransaction",
                  name: "safetx",
                  type: "tuple",
                },
              ],
              name: "executeFromPlugin",
              outputs: [
                {
                  internalType: "bytes[]",
                  name: "data",
                  type: "bytes[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "metadataHash",
                  type: "bytes32",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "Metadata",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "removeFromWhitelist",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "metadataHash",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "metadataProvider",
              outputs: [
                {
                  internalType: "uint256",
                  name: "providerType",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "location",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "requiresRootAccess",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "version",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "whitelistedAddresses",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        WhiteListPlugin: {
          address: "0xa27D37dbe5B92478b45e9A3C92DC1D3517A55BD0",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "version",
                  type: "string",
                },
                {
                  internalType: "uint8",
                  name: "requiredPermissions",
                  type: "uint8",
                },
                {
                  internalType: "string",
                  name: "iconUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "appUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "category",
                  type: "string",
                },
                {
                  internalType: "string[]",
                  name: "ssUrls",
                  type: "string[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "AddressNotWhiteListed",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "safe",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
              ],
              name: "CallerIsNotOwner",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "AddressRemovedFromWhitelist",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "AddressWhitelisted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "metadataHash",
                  type: "bytes32",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "Metadata",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "addToWhitelist",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract ISafeProtocolManager",
                  name: "manager",
                  type: "address",
                },
                {
                  internalType: "contract ISafe",
                  name: "safe",
                  type: "address",
                },
                {
                  components: [
                    {
                      components: [
                        {
                          internalType: "address payable",
                          name: "to",
                          type: "address",
                        },
                        {
                          internalType: "uint256",
                          name: "value",
                          type: "uint256",
                        },
                        {
                          internalType: "bytes",
                          name: "data",
                          type: "bytes",
                        },
                      ],
                      internalType: "struct SafeProtocolAction[]",
                      name: "actions",
                      type: "tuple[]",
                    },
                    {
                      internalType: "uint256",
                      name: "nonce",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes32",
                      name: "metadataHash",
                      type: "bytes32",
                    },
                  ],
                  internalType: "struct SafeTransaction",
                  name: "safetx",
                  type: "tuple",
                },
              ],
              name: "executeFromPlugin",
              outputs: [
                {
                  internalType: "bytes[]",
                  name: "data",
                  type: "bytes[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "metadataHash",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "metadataProvider",
              outputs: [
                {
                  internalType: "uint256",
                  name: "providerType",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "location",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "removeFromWhitelist",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "requiresPermissions",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [],
              name: "version",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "whitelistedAddresses",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        TestSafeProtocolManager: {
          address: "0x4DA9d9e5F0C6f7718b29673947c54D4A5Bab7D85",
          abi: [
            {
              inputs: [],
              name: "acceptOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
                {
                  internalType: "bool",
                  name: "success",
                  type: "bool",
                },
              ],
              name: "checkAfterExecution",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "initialOwner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "registry",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "metadataHash",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "index",
                  type: "uint256",
                },
              ],
              name: "ActionExecutionFailed",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
                {
                  internalType: "enum Enum.Operation",
                  name: "operation",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "module",
                  type: "address",
                },
              ],
              name: "checkModuleTransaction",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "moduleTxHash",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
                {
                  internalType: "enum Enum.Operation",
                  name: "operation",
                  type: "uint8",
                },
                {
                  internalType: "uint256",
                  name: "safeTxGas",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "baseGas",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "gasPrice",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "gasToken",
                  type: "address",
                },
                {
                  internalType: "address payable",
                  name: "refundReceiver",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "signatures",
                  type: "bytes",
                },
                {
                  internalType: "address",
                  name: "msgSender",
                  type: "address",
                },
              ],
              name: "checkTransaction",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "ContractDoesNotImplementValidInterfaceId",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "prevPlugin",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
              ],
              name: "disablePlugin",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
                {
                  internalType: "uint8",
                  name: "permissions",
                  type: "uint8",
                },
              ],
              name: "enablePlugin",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  components: [
                    {
                      components: [
                        {
                          internalType: "address payable",
                          name: "to",
                          type: "address",
                        },
                        {
                          internalType: "uint256",
                          name: "value",
                          type: "uint256",
                        },
                        {
                          internalType: "bytes",
                          name: "data",
                          type: "bytes",
                        },
                      ],
                      internalType: "struct SafeProtocolAction",
                      name: "action",
                      type: "tuple",
                    },
                    {
                      internalType: "uint256",
                      name: "nonce",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes32",
                      name: "metadataHash",
                      type: "bytes32",
                    },
                  ],
                  internalType: "struct SafeRootAccess",
                  name: "rootAccess",
                  type: "tuple",
                },
              ],
              name: "executeRootAccess",
              outputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  components: [
                    {
                      components: [
                        {
                          internalType: "address payable",
                          name: "to",
                          type: "address",
                        },
                        {
                          internalType: "uint256",
                          name: "value",
                          type: "uint256",
                        },
                        {
                          internalType: "bytes",
                          name: "data",
                          type: "bytes",
                        },
                      ],
                      internalType: "struct SafeProtocolAction[]",
                      name: "actions",
                      type: "tuple[]",
                    },
                    {
                      internalType: "uint256",
                      name: "nonce",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes32",
                      name: "metadataHash",
                      type: "bytes32",
                    },
                  ],
                  internalType: "struct SafeTransaction",
                  name: "transaction",
                  type: "tuple",
                },
              ],
              name: "executeTransaction",
              outputs: [
                {
                  internalType: "bytes[]",
                  name: "data",
                  type: "bytes[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "bytes4",
                  name: "functionSelector",
                  type: "bytes4",
                },
              ],
              name: "FunctionHandlerNotSet",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
              ],
              name: "InvalidPluginAddress",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
              ],
              name: "InvalidPrevPluginAddress",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "metadataHash",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "index",
                  type: "uint256",
                },
              ],
              name: "InvalidToFieldInSafeProtocolAction",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
                {
                  internalType: "uint8",
                  name: "pluginRequires",
                  type: "uint8",
                },
                {
                  internalType: "uint8",
                  name: "requiredPermission",
                  type: "uint8",
                },
                {
                  internalType: "uint8",
                  name: "givenPermission",
                  type: "uint8",
                },
              ],
              name: "MissingPluginPermission",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
                {
                  internalType: "uint64",
                  name: "listedAt",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "flaggedAt",
                  type: "uint64",
                },
                {
                  internalType: "uint8",
                  name: "moduleType",
                  type: "uint8",
                },
              ],
              name: "ModuleNotPermitted",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
              ],
              name: "PluginAlreadyEnabled",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
              ],
              name: "PluginNotEnabled",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
                {
                  internalType: "uint8",
                  name: "requiredPermissions",
                  type: "uint8",
                },
                {
                  internalType: "uint8",
                  name: "givenPermissions",
                  type: "uint8",
                },
              ],
              name: "PluginPermissionsMismatch",
              type: "error",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "metadataHash",
                  type: "bytes32",
                },
              ],
              name: "RootAccessActionExecutionFailed",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "selector",
                  type: "bytes4",
                },
                {
                  internalType: "address",
                  name: "functionHandler",
                  type: "address",
                },
              ],
              name: "setFunctionHandler",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newRegistry",
                  type: "address",
                },
              ],
              name: "setRegistry",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "testFunction",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "ZeroPageSizeNotAllowed",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bytes32",
                  name: "metadataHash",
                  type: "bytes32",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "nonce",
                  type: "uint256",
                },
              ],
              name: "ActionsExecuted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "bytes4",
                  name: "selector",
                  type: "bytes4",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "functionHandler",
                  type: "address",
                },
              ],
              name: "FunctionHandlerChanged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "hooksAddress",
                  type: "address",
                },
              ],
              name: "HooksChanged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferStarted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
              ],
              name: "PluginDisabled",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint8",
                  name: "permissions",
                  type: "uint8",
                },
              ],
              name: "PluginEnabled",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "oldRegistry",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newRegistry",
                  type: "address",
                },
              ],
              name: "RegistryChanged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bytes32",
                  name: "metadataHash",
                  type: "bytes32",
                },
              ],
              name: "RootAccessActionExecuted",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "hooks",
                  type: "address",
                },
              ],
              name: "setHooks",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "nonpayable",
              type: "fallback",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "enabledHooks",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "enabledPlugins",
              outputs: [
                {
                  internalType: "uint8",
                  name: "permissions",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "nextPluginPointer",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              name: "functionHandlers",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "getEnabledHooks",
              outputs: [
                {
                  internalType: "address",
                  name: "hooksAddress",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "bytes4",
                  name: "selector",
                  type: "bytes4",
                },
              ],
              name: "getFunctionHandler",
              outputs: [
                {
                  internalType: "address",
                  name: "functionHandler",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
              ],
              name: "getPluginInfo",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint8",
                      name: "permissions",
                      type: "uint8",
                    },
                    {
                      internalType: "address",
                      name: "nextPluginPointer",
                      type: "address",
                    },
                  ],
                  internalType: "struct SafeProtocolManager.PluginAccessInfo",
                  name: "enabled",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "start",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "pageSize",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "getPluginsPaginated",
              outputs: [
                {
                  internalType: "address[]",
                  name: "array",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "next",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
              ],
              name: "isPluginEnabled",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "pendingOwner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "registry",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "tempHooksData",
              outputs: [
                {
                  internalType: "address",
                  name: "hooksAddress",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "preCheckData",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        TestSafeProtocolRegistryUnrestricted: {
          address: "0x7Af598168C5631b3E1816CA1f7957C280e7789c7",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "initialOwner",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "module",
                  type: "address",
                },
                {
                  internalType: "uint8",
                  name: "moduleTypes",
                  type: "uint8",
                },
              ],
              name: "CannotAddModule",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "module",
                  type: "address",
                },
              ],
              name: "CannotFlagModule",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "module",
                  type: "address",
                },
                {
                  internalType: "bytes4",
                  name: "expectedInterfaceId",
                  type: "bytes4",
                },
              ],
              name: "ModuleDoesNotSupportExpectedInterfaceId",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "module",
                  type: "address",
                },
              ],
              name: "ModuleAdded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "module",
                  type: "address",
                },
              ],
              name: "ModuleFlagged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferStarted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "acceptOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "module",
                  type: "address",
                },
                {
                  internalType: "uint8",
                  name: "moduleType",
                  type: "uint8",
                },
              ],
              name: "addModule",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "module",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "data",
                  type: "bytes32",
                },
              ],
              name: "check",
              outputs: [
                {
                  internalType: "uint64",
                  name: "listedAt",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "flaggedAt",
                  type: "uint64",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "module",
                  type: "address",
                },
              ],
              name: "flagModule",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "listedModules",
              outputs: [
                {
                  internalType: "uint64",
                  name: "listedAt",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "flaggedAt",
                  type: "uint64",
                },
                {
                  internalType: "uint8",
                  name: "moduleTypes",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "pendingOwner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        // SafeProtocolRegistry: {
        //   address: "0xb83C63558FDF574101628B49c4610EdC32D038D4",
        //   abi: [
        //     {
        //       inputs: [
        //         {
        //           internalType: "address",
        //           name: "initialOwner",
        //           type: "address",
        //         },
        //       ],
        //       stateMutability: "nonpayable",
        //       type: "constructor",
        //     },
        //     {
        //       inputs: [
        //         {
        //           internalType: "address",
        //           name: "module",
        //           type: "address",
        //         },
        //         {
        //           internalType: "uint8",
        //           name: "moduleTypes",
        //           type: "uint8",
        //         },
        //       ],
        //       name: "CannotAddModule",
        //       type: "error",
        //     },
        //     {
        //       inputs: [
        //         {
        //           internalType: "address",
        //           name: "module",
        //           type: "address",
        //         },
        //       ],
        //       name: "CannotFlagModule",
        //       type: "error",
        //     },
        //     {
        //       inputs: [
        //         {
        //           internalType: "address",
        //           name: "module",
        //           type: "address",
        //         },
        //         {
        //           internalType: "bytes4",
        //           name: "expectedInterfaceId",
        //           type: "bytes4",
        //         },
        //       ],
        //       name: "ModuleDoesNotSupportExpectedInterfaceId",
        //       type: "error",
        //     },
        //     {
        //       anonymous: false,
        //       inputs: [
        //         {
        //           indexed: true,
        //           internalType: "address",
        //           name: "module",
        //           type: "address",
        //         },
        //       ],
        //       name: "ModuleAdded",
        //       type: "event",
        //     },
        //     {
        //       anonymous: false,
        //       inputs: [
        //         {
        //           indexed: true,
        //           internalType: "address",
        //           name: "module",
        //           type: "address",
        //         },
        //       ],
        //       name: "ModuleFlagged",
        //       type: "event",
        //     },
        //     {
        //       anonymous: false,
        //       inputs: [
        //         {
        //           indexed: true,
        //           internalType: "address",
        //           name: "previousOwner",
        //           type: "address",
        //         },
        //         {
        //           indexed: true,
        //           internalType: "address",
        //           name: "newOwner",
        //           type: "address",
        //         },
        //       ],
        //       name: "OwnershipTransferStarted",
        //       type: "event",
        //     },
        //     {
        //       anonymous: false,
        //       inputs: [
        //         {
        //           indexed: true,
        //           internalType: "address",
        //           name: "previousOwner",
        //           type: "address",
        //         },
        //         {
        //           indexed: true,
        //           internalType: "address",
        //           name: "newOwner",
        //           type: "address",
        //         },
        //       ],
        //       name: "OwnershipTransferred",
        //       type: "event",
        //     },
        //     {
        //       inputs: [],
        //       name: "acceptOwnership",
        //       outputs: [],
        //       stateMutability: "nonpayable",
        //       type: "function",
        //     },
        //     {
        //       inputs: [
        //         {
        //           internalType: "address",
        //           name: "module",
        //           type: "address",
        //         },
        //         {
        //           internalType: "uint8",
        //           name: "moduleTypes",
        //           type: "uint8",
        //         },
        //       ],
        //       name: "addModule",
        //       outputs: [],
        //       stateMutability: "nonpayable",
        //       type: "function",
        //     },
        //     {
        //       inputs: [
        //         {
        //           internalType: "address",
        //           name: "module",
        //           type: "address",
        //         },
        //         {
        //           internalType: "bytes32",
        //           name: "data",
        //           type: "bytes32",
        //         },
        //       ],
        //       name: "check",
        //       outputs: [
        //         {
        //           internalType: "uint64",
        //           name: "listedAt",
        //           type: "uint64",
        //         },
        //         {
        //           internalType: "uint64",
        //           name: "flaggedAt",
        //           type: "uint64",
        //         },
        //       ],
        //       stateMutability: "view",
        //       type: "function",
        //     },
        //     {
        //       inputs: [
        //         {
        //           internalType: "address",
        //           name: "module",
        //           type: "address",
        //         },
        //       ],
        //       name: "flagModule",
        //       outputs: [],
        //       stateMutability: "nonpayable",
        //       type: "function",
        //     },
        //     {
        //       inputs: [
        //         {
        //           internalType: "address",
        //           name: "",
        //           type: "address",
        //         },
        //       ],
        //       name: "listedModules",
        //       outputs: [
        //         {
        //           internalType: "uint64",
        //           name: "listedAt",
        //           type: "uint64",
        //         },
        //         {
        //           internalType: "uint64",
        //           name: "flaggedAt",
        //           type: "uint64",
        //         },
        //         {
        //           internalType: "uint8",
        //           name: "moduleTypes",
        //           type: "uint8",
        //         },
        //       ],
        //       stateMutability: "view",
        //       type: "function",
        //     },
        //     {
        //       inputs: [],
        //       name: "owner",
        //       outputs: [
        //         {
        //           internalType: "address",
        //           name: "",
        //           type: "address",
        //         },
        //       ],
        //       stateMutability: "view",
        //       type: "function",
        //     },
        //     {
        //       inputs: [],
        //       name: "pendingOwner",
        //       outputs: [
        //         {
        //           internalType: "address",
        //           name: "",
        //           type: "address",
        //         },
        //       ],
        //       stateMutability: "view",
        //       type: "function",
        //     },
        //     {
        //       inputs: [],
        //       name: "renounceOwnership",
        //       outputs: [],
        //       stateMutability: "nonpayable",
        //       type: "function",
        //     },
        //     {
        //       inputs: [
        //         {
        //           internalType: "bytes4",
        //           name: "interfaceId",
        //           type: "bytes4",
        //         },
        //       ],
        //       name: "supportsInterface",
        //       outputs: [
        //         {
        //           internalType: "bool",
        //           name: "",
        //           type: "bool",
        //         },
        //       ],
        //       stateMutability: "view",
        //       type: "function",
        //     },
        //     {
        //       inputs: [
        //         {
        //           internalType: "address",
        //           name: "newOwner",
        //           type: "address",
        //         },
        //       ],
        //       name: "transferOwnership",
        //       outputs: [],
        //       stateMutability: "nonpayable",
        //       type: "function",
        //     },
        //   ],
        // },
        // SafeProtocolManager: {
        //   address: "0x2926dd0F729C0ac112BE7dde5f806D8d4E609529",
        //   abi: [
        //     {
        //       inputs: [
        //         {
        //           internalType: "address",
        //           name: "initialOwner",
        //           type: "address",
        //         },
        //         {
        //           internalType: "address",
        //           name: "_registry",
        //           type: "address",
        //         },
        //       ],
        //       stateMutability: "nonpayable",
        //       type: "constructor",
        //     },
        //     {
        //       inputs: [
        //         {
        //           internalType: "address",
        //           name: "account",
        //           type: "address",
        //         },
        //         {
        //           internalType: "bytes32",
        //           name: "metadataHash",
        //           type: "bytes32",
        //         },
        //         {
        //           internalType: "uint256",
        //           name: "index",
        //           type: "uint256",
        //         },
        //       ],
        //       name: "ActionExecutionFailed",
        //       type: "error",
        //     },
        //     {
        //       inputs: [
        //         {
        //           internalType: "address",
        //           name: "account",
        //           type: "address",
        //         },
        //       ],
        //       name: "ContractDoesNotImplementValidInterfaceId",
        //       type: "error",
        //     },
        //     {
        //       inputs: [
        //         {
        //           internalType: "address",
        //           name: "account",
        //           type: "address",
        //         },
        //         {
        //           internalType: "bytes4",
        //           name: "functionSelector",
        //           type: "bytes4",
        //         },
        //       ],
        //       name: "FunctionHandlerNotSet",
        //       type: "error",
        //     },
        //     {
        //       inputs: [],
        //       name: "InvalidCalldataLength",
        //       type: "error",
        //     },
        //     {
        //       inputs: [
        //         {
        //           internalType: "address",
        //           name: "plugin",
        //           type: "address",
        //         },
        //       ],
        //       name: "InvalidPluginAddress",
        //       type: "error",
        //     },
        //     {
        //       inputs: [
        //         {
        //           internalType: "address",
        //           name: "plugin",
        //           type: "address",
        //         },
        //       ],
        //       name: "InvalidPrevPluginAddress",
        //       type: "error",
        //     },
        //     {
        //       inputs: [
        //         {
        //           internalType: "address",
        //           name: "sender",
        //           type: "address",
        //         },
        //       ],
        //       name: "InvalidSender",
        //       type: "error",
        //     },
        //     {
        //       inputs: [
        //         {
        //           internalType: "address",
        //           name: "account",
        //           type: "address",
        //         },
        //         {
        //           internalType: "bytes32",
        //           name: "metadataHash",
        //           type: "bytes32",
        //         },
        //         {
        //           internalType: "uint256",
        //           name: "index",
        //           type: "uint256",
        //         },
        //       ],
        //       name: "InvalidToFieldInSafeProtocolAction",
        //       type: "error",
        //     },
        //     {
        //       inputs: [
        //         {
        //           internalType: "address",
        //           name: "plugin",
        //           type: "address",
        //         },
        //         {
        //           internalType: "uint8",
        //           name: "pluginRequires",
        //           type: "uint8",
        //         },
        //         {
        //           internalType: "uint8",
        //           name: "requiredPermission",
        //           type: "uint8",
        //         },
        //         {
        //           internalType: "uint8",
        //           name: "givenPermission",
        //           type: "uint8",
        //         },
        //       ],
        //       name: "MissingPluginPermission",
        //       type: "error",
        //     },
        //     {
        //       inputs: [
        //         {
        //           internalType: "address",
        //           name: "plugin",
        //           type: "address",
        //         },
        //         {
        //           internalType: "uint64",
        //           name: "listedAt",
        //           type: "uint64",
        //         },
        //         {
        //           internalType: "uint64",
        //           name: "flaggedAt",
        //           type: "uint64",
        //         },
        //         {
        //           internalType: "uint8",
        //           name: "moduleType",
        //           type: "uint8",
        //         },
        //       ],
        //       name: "ModuleNotPermitted",
        //       type: "error",
        //     },
        //     {
        //       inputs: [
        //         {
        //           internalType: "address",
        //           name: "account",
        //           type: "address",
        //         },
        //         {
        //           internalType: "address",
        //           name: "plugin",
        //           type: "address",
        //         },
        //       ],
        //       name: "PluginAlreadyEnabled",
        //       type: "error",
        //     },
        //     {
        //       inputs: [
        //         {
        //           internalType: "address",
        //           name: "plugin",
        //           type: "address",
        //         },
        //       ],
        //       name: "PluginNotEnabled",
        //       type: "error",
        //     },
        //     {
        //       inputs: [
        //         {
        //           internalType: "address",
        //           name: "plugin",
        //           type: "address",
        //         },
        //         {
        //           internalType: "uint8",
        //           name: "requiredPermissions",
        //           type: "uint8",
        //         },
        //         {
        //           internalType: "uint8",
        //           name: "givenPermissions",
        //           type: "uint8",
        //         },
        //       ],
        //       name: "PluginPermissionsMismatch",
        //       type: "error",
        //     },
        //     {
        //       inputs: [
        //         {
        //           internalType: "address",
        //           name: "account",
        //           type: "address",
        //         },
        //         {
        //           internalType: "bytes32",
        //           name: "metadataHash",
        //           type: "bytes32",
        //         },
        //       ],
        //       name: "RootAccessActionExecutionFailed",
        //       type: "error",
        //     },
        //     {
        //       inputs: [],
        //       name: "ZeroPageSizeNotAllowed",
        //       type: "error",
        //     },
        //     {
        //       anonymous: false,
        //       inputs: [
        //         {
        //           indexed: true,
        //           internalType: "address",
        //           name: "account",
        //           type: "address",
        //         },
        //         {
        //           indexed: false,
        //           internalType: "bytes32",
        //           name: "metadataHash",
        //           type: "bytes32",
        //         },
        //         {
        //           indexed: false,
        //           internalType: "uint256",
        //           name: "nonce",
        //           type: "uint256",
        //         },
        //       ],
        //       name: "ActionsExecuted",
        //       type: "event",
        //     },
        //     {
        //       anonymous: false,
        //       inputs: [
        //         {
        //           indexed: true,
        //           internalType: "address",
        //           name: "account",
        //           type: "address",
        //         },
        //         {
        //           indexed: true,
        //           internalType: "bytes4",
        //           name: "selector",
        //           type: "bytes4",
        //         },
        //         {
        //           indexed: true,
        //           internalType: "address",
        //           name: "functionHandler",
        //           type: "address",
        //         },
        //       ],
        //       name: "FunctionHandlerChanged",
        //       type: "event",
        //     },
        //     {
        //       anonymous: false,
        //       inputs: [
        //         {
        //           indexed: true,
        //           internalType: "address",
        //           name: "account",
        //           type: "address",
        //         },
        //         {
        //           indexed: true,
        //           internalType: "address",
        //           name: "hooksAddress",
        //           type: "address",
        //         },
        //       ],
        //       name: "HooksChanged",
        //       type: "event",
        //     },
        //     {
        //       anonymous: false,
        //       inputs: [
        //         {
        //           indexed: true,
        //           internalType: "address",
        //           name: "previousOwner",
        //           type: "address",
        //         },
        //         {
        //           indexed: true,
        //           internalType: "address",
        //           name: "newOwner",
        //           type: "address",
        //         },
        //       ],
        //       name: "OwnershipTransferStarted",
        //       type: "event",
        //     },
        //     {
        //       anonymous: false,
        //       inputs: [
        //         {
        //           indexed: true,
        //           internalType: "address",
        //           name: "previousOwner",
        //           type: "address",
        //         },
        //         {
        //           indexed: true,
        //           internalType: "address",
        //           name: "newOwner",
        //           type: "address",
        //         },
        //       ],
        //       name: "OwnershipTransferred",
        //       type: "event",
        //     },
        //     {
        //       anonymous: false,
        //       inputs: [
        //         {
        //           indexed: true,
        //           internalType: "address",
        //           name: "account",
        //           type: "address",
        //         },
        //         {
        //           indexed: true,
        //           internalType: "address",
        //           name: "plugin",
        //           type: "address",
        //         },
        //       ],
        //       name: "PluginDisabled",
        //       type: "event",
        //     },
        //     {
        //       anonymous: false,
        //       inputs: [
        //         {
        //           indexed: true,
        //           internalType: "address",
        //           name: "account",
        //           type: "address",
        //         },
        //         {
        //           indexed: true,
        //           internalType: "address",
        //           name: "plugin",
        //           type: "address",
        //         },
        //         {
        //           indexed: false,
        //           internalType: "uint8",
        //           name: "permissions",
        //           type: "uint8",
        //         },
        //       ],
        //       name: "PluginEnabled",
        //       type: "event",
        //     },
        //     {
        //       anonymous: false,
        //       inputs: [
        //         {
        //           indexed: true,
        //           internalType: "address",
        //           name: "oldRegistry",
        //           type: "address",
        //         },
        //         {
        //           indexed: true,
        //           internalType: "address",
        //           name: "newRegistry",
        //           type: "address",
        //         },
        //       ],
        //       name: "RegistryChanged",
        //       type: "event",
        //     },
        //     {
        //       anonymous: false,
        //       inputs: [
        //         {
        //           indexed: true,
        //           internalType: "address",
        //           name: "account",
        //           type: "address",
        //         },
        //         {
        //           indexed: false,
        //           internalType: "bytes32",
        //           name: "metadataHash",
        //           type: "bytes32",
        //         },
        //       ],
        //       name: "RootAccessActionExecuted",
        //       type: "event",
        //     },
        //     {
        //       stateMutability: "nonpayable",
        //       type: "fallback",
        //     },
        //     {
        //       inputs: [],
        //       name: "acceptOwnership",
        //       outputs: [],
        //       stateMutability: "nonpayable",
        //       type: "function",
        //     },
        //     {
        //       inputs: [
        //         {
        //           internalType: "bytes32",
        //           name: "",
        //           type: "bytes32",
        //         },
        //         {
        //           internalType: "bool",
        //           name: "success",
        //           type: "bool",
        //         },
        //       ],
        //       name: "checkAfterExecution",
        //       outputs: [],
        //       stateMutability: "nonpayable",
        //       type: "function",
        //     },
        //     {
        //       inputs: [
        //         {
        //           internalType: "address",
        //           name: "to",
        //           type: "address",
        //         },
        //         {
        //           internalType: "uint256",
        //           name: "value",
        //           type: "uint256",
        //         },
        //         {
        //           internalType: "bytes",
        //           name: "data",
        //           type: "bytes",
        //         },
        //         {
        //           internalType: "enum Enum.Operation",
        //           name: "operation",
        //           type: "uint8",
        //         },
        //         {
        //           internalType: "address",
        //           name: "module",
        //           type: "address",
        //         },
        //       ],
        //       name: "checkModuleTransaction",
        //       outputs: [
        //         {
        //           internalType: "bytes32",
        //           name: "moduleTxHash",
        //           type: "bytes32",
        //         },
        //       ],
        //       stateMutability: "nonpayable",
        //       type: "function",
        //     },
        //     {
        //       inputs: [
        //         {
        //           internalType: "address",
        //           name: "to",
        //           type: "address",
        //         },
        //         {
        //           internalType: "uint256",
        //           name: "value",
        //           type: "uint256",
        //         },
        //         {
        //           internalType: "bytes",
        //           name: "data",
        //           type: "bytes",
        //         },
        //         {
        //           internalType: "enum Enum.Operation",
        //           name: "operation",
        //           type: "uint8",
        //         },
        //         {
        //           internalType: "uint256",
        //           name: "safeTxGas",
        //           type: "uint256",
        //         },
        //         {
        //           internalType: "uint256",
        //           name: "baseGas",
        //           type: "uint256",
        //         },
        //         {
        //           internalType: "uint256",
        //           name: "gasPrice",
        //           type: "uint256",
        //         },
        //         {
        //           internalType: "address",
        //           name: "gasToken",
        //           type: "address",
        //         },
        //         {
        //           internalType: "address payable",
        //           name: "refundReceiver",
        //           type: "address",
        //         },
        //         {
        //           internalType: "bytes",
        //           name: "signatures",
        //           type: "bytes",
        //         },
        //         {
        //           internalType: "address",
        //           name: "msgSender",
        //           type: "address",
        //         },
        //       ],
        //       name: "checkTransaction",
        //       outputs: [],
        //       stateMutability: "nonpayable",
        //       type: "function",
        //     },
        //     {
        //       inputs: [
        //         {
        //           internalType: "address",
        //           name: "prevPlugin",
        //           type: "address",
        //         },
        //         {
        //           internalType: "address",
        //           name: "plugin",
        //           type: "address",
        //         },
        //       ],
        //       name: "disablePlugin",
        //       outputs: [],
        //       stateMutability: "nonpayable",
        //       type: "function",
        //     },
        //     {
        //       inputs: [
        //         {
        //           internalType: "address",
        //           name: "plugin",
        //           type: "address",
        //         },
        //         {
        //           internalType: "uint8",
        //           name: "permissions",
        //           type: "uint8",
        //         },
        //       ],
        //       name: "enablePlugin",
        //       outputs: [],
        //       stateMutability: "nonpayable",
        //       type: "function",
        //     },
        //     {
        //       inputs: [
        //         {
        //           internalType: "address",
        //           name: "",
        //           type: "address",
        //         },
        //       ],
        //       name: "enabledHooks",
        //       outputs: [
        //         {
        //           internalType: "address",
        //           name: "",
        //           type: "address",
        //         },
        //       ],
        //       stateMutability: "view",
        //       type: "function",
        //     },
        //     {
        //       inputs: [
        //         {
        //           internalType: "address",
        //           name: "",
        //           type: "address",
        //         },
        //         {
        //           internalType: "address",
        //           name: "",
        //           type: "address",
        //         },
        //       ],
        //       name: "enabledPlugins",
        //       outputs: [
        //         {
        //           internalType: "uint8",
        //           name: "permissions",
        //           type: "uint8",
        //         },
        //         {
        //           internalType: "address",
        //           name: "nextPluginPointer",
        //           type: "address",
        //         },
        //       ],
        //       stateMutability: "view",
        //       type: "function",
        //     },
        //     {
        //       inputs: [
        //         {
        //           internalType: "address",
        //           name: "account",
        //           type: "address",
        //         },
        //         {
        //           components: [
        //             {
        //               components: [
        //                 {
        //                   internalType: "address payable",
        //                   name: "to",
        //                   type: "address",
        //                 },
        //                 {
        //                   internalType: "uint256",
        //                   name: "value",
        //                   type: "uint256",
        //                 },
        //                 {
        //                   internalType: "bytes",
        //                   name: "data",
        //                   type: "bytes",
        //                 },
        //               ],
        //               internalType: "struct SafeProtocolAction",
        //               name: "action",
        //               type: "tuple",
        //             },
        //             {
        //               internalType: "uint256",
        //               name: "nonce",
        //               type: "uint256",
        //             },
        //             {
        //               internalType: "bytes32",
        //               name: "metadataHash",
        //               type: "bytes32",
        //             },
        //           ],
        //           internalType: "struct SafeRootAccess",
        //           name: "rootAccess",
        //           type: "tuple",
        //         },
        //       ],
        //       name: "executeRootAccess",
        //       outputs: [
        //         {
        //           internalType: "bytes",
        //           name: "data",
        //           type: "bytes",
        //         },
        //       ],
        //       stateMutability: "nonpayable",
        //       type: "function",
        //     },
        //     {
        //       inputs: [
        //         {
        //           internalType: "address",
        //           name: "account",
        //           type: "address",
        //         },
        //         {
        //           components: [
        //             {
        //               components: [
        //                 {
        //                   internalType: "address payable",
        //                   name: "to",
        //                   type: "address",
        //                 },
        //                 {
        //                   internalType: "uint256",
        //                   name: "value",
        //                   type: "uint256",
        //                 },
        //                 {
        //                   internalType: "bytes",
        //                   name: "data",
        //                   type: "bytes",
        //                 },
        //               ],
        //               internalType: "struct SafeProtocolAction[]",
        //               name: "actions",
        //               type: "tuple[]",
        //             },
        //             {
        //               internalType: "uint256",
        //               name: "nonce",
        //               type: "uint256",
        //             },
        //             {
        //               internalType: "bytes32",
        //               name: "metadataHash",
        //               type: "bytes32",
        //             },
        //           ],
        //           internalType: "struct SafeTransaction",
        //           name: "transaction",
        //           type: "tuple",
        //         },
        //       ],
        //       name: "executeTransaction",
        //       outputs: [
        //         {
        //           internalType: "bytes[]",
        //           name: "data",
        //           type: "bytes[]",
        //         },
        //       ],
        //       stateMutability: "nonpayable",
        //       type: "function",
        //     },
        //     {
        //       inputs: [
        //         {
        //           internalType: "address",
        //           name: "",
        //           type: "address",
        //         },
        //         {
        //           internalType: "bytes4",
        //           name: "",
        //           type: "bytes4",
        //         },
        //       ],
        //       name: "functionHandlers",
        //       outputs: [
        //         {
        //           internalType: "address",
        //           name: "",
        //           type: "address",
        //         },
        //       ],
        //       stateMutability: "view",
        //       type: "function",
        //     },
        //     {
        //       inputs: [
        //         {
        //           internalType: "address",
        //           name: "account",
        //           type: "address",
        //         },
        //       ],
        //       name: "getEnabledHooks",
        //       outputs: [
        //         {
        //           internalType: "address",
        //           name: "hooksAddress",
        //           type: "address",
        //         },
        //       ],
        //       stateMutability: "view",
        //       type: "function",
        //     },
        //     {
        //       inputs: [
        //         {
        //           internalType: "address",
        //           name: "account",
        //           type: "address",
        //         },
        //         {
        //           internalType: "bytes4",
        //           name: "selector",
        //           type: "bytes4",
        //         },
        //       ],
        //       name: "getFunctionHandler",
        //       outputs: [
        //         {
        //           internalType: "address",
        //           name: "functionHandler",
        //           type: "address",
        //         },
        //       ],
        //       stateMutability: "view",
        //       type: "function",
        //     },
        //     {
        //       inputs: [
        //         {
        //           internalType: "address",
        //           name: "account",
        //           type: "address",
        //         },
        //         {
        //           internalType: "address",
        //           name: "plugin",
        //           type: "address",
        //         },
        //       ],
        //       name: "getPluginInfo",
        //       outputs: [
        //         {
        //           components: [
        //             {
        //               internalType: "uint8",
        //               name: "permissions",
        //               type: "uint8",
        //             },
        //             {
        //               internalType: "address",
        //               name: "nextPluginPointer",
        //               type: "address",
        //             },
        //           ],
        //           internalType: "struct SafeProtocolManager.PluginAccessInfo",
        //           name: "enabled",
        //           type: "tuple",
        //         },
        //       ],
        //       stateMutability: "view",
        //       type: "function",
        //     },
        //     {
        //       inputs: [
        //         {
        //           internalType: "address",
        //           name: "start",
        //           type: "address",
        //         },
        //         {
        //           internalType: "uint256",
        //           name: "pageSize",
        //           type: "uint256",
        //         },
        //         {
        //           internalType: "address",
        //           name: "account",
        //           type: "address",
        //         },
        //       ],
        //       name: "getPluginsPaginated",
        //       outputs: [
        //         {
        //           internalType: "address[]",
        //           name: "array",
        //           type: "address[]",
        //         },
        //         {
        //           internalType: "address",
        //           name: "next",
        //           type: "address",
        //         },
        //       ],
        //       stateMutability: "view",
        //       type: "function",
        //     },
        //     {
        //       inputs: [
        //         {
        //           internalType: "address",
        //           name: "account",
        //           type: "address",
        //         },
        //         {
        //           internalType: "address",
        //           name: "plugin",
        //           type: "address",
        //         },
        //       ],
        //       name: "isPluginEnabled",
        //       outputs: [
        //         {
        //           internalType: "bool",
        //           name: "",
        //           type: "bool",
        //         },
        //       ],
        //       stateMutability: "view",
        //       type: "function",
        //     },
        //     {
        //       inputs: [],
        //       name: "owner",
        //       outputs: [
        //         {
        //           internalType: "address",
        //           name: "",
        //           type: "address",
        //         },
        //       ],
        //       stateMutability: "view",
        //       type: "function",
        //     },
        //     {
        //       inputs: [],
        //       name: "pendingOwner",
        //       outputs: [
        //         {
        //           internalType: "address",
        //           name: "",
        //           type: "address",
        //         },
        //       ],
        //       stateMutability: "view",
        //       type: "function",
        //     },
        //     {
        //       inputs: [],
        //       name: "registry",
        //       outputs: [
        //         {
        //           internalType: "address",
        //           name: "",
        //           type: "address",
        //         },
        //       ],
        //       stateMutability: "view",
        //       type: "function",
        //     },
        //     {
        //       inputs: [],
        //       name: "renounceOwnership",
        //       outputs: [],
        //       stateMutability: "nonpayable",
        //       type: "function",
        //     },
        //     {
        //       inputs: [
        //         {
        //           internalType: "bytes4",
        //           name: "selector",
        //           type: "bytes4",
        //         },
        //         {
        //           internalType: "address",
        //           name: "functionHandler",
        //           type: "address",
        //         },
        //       ],
        //       name: "setFunctionHandler",
        //       outputs: [],
        //       stateMutability: "nonpayable",
        //       type: "function",
        //     },
        //     {
        //       inputs: [
        //         {
        //           internalType: "address",
        //           name: "hooks",
        //           type: "address",
        //         },
        //       ],
        //       name: "setHooks",
        //       outputs: [],
        //       stateMutability: "nonpayable",
        //       type: "function",
        //     },
        //     {
        //       inputs: [
        //         {
        //           internalType: "address",
        //           name: "newRegistry",
        //           type: "address",
        //         },
        //       ],
        //       name: "setRegistry",
        //       outputs: [],
        //       stateMutability: "nonpayable",
        //       type: "function",
        //     },
        //     {
        //       inputs: [
        //         {
        //           internalType: "bytes4",
        //           name: "interfaceId",
        //           type: "bytes4",
        //         },
        //       ],
        //       name: "supportsInterface",
        //       outputs: [
        //         {
        //           internalType: "bool",
        //           name: "",
        //           type: "bool",
        //         },
        //       ],
        //       stateMutability: "view",
        //       type: "function",
        //     },
        //     {
        //       inputs: [
        //         {
        //           internalType: "address",
        //           name: "",
        //           type: "address",
        //         },
        //       ],
        //       name: "tempHooksData",
        //       outputs: [
        //         {
        //           internalType: "address",
        //           name: "hooksAddress",
        //           type: "address",
        //         },
        //         {
        //           internalType: "bytes",
        //           name: "preCheckData",
        //           type: "bytes",
        //         },
        //       ],
        //       stateMutability: "view",
        //       type: "function",
        //     },
        //     {
        //       inputs: [
        //         {
        //           internalType: "address",
        //           name: "newOwner",
        //           type: "address",
        //         },
        //       ],
        //       name: "transferOwnership",
        //       outputs: [],
        //       stateMutability: "nonpayable",
        //       type: "function",
        //     },
        //   ],
        // },
      },
    },
  ],
};
