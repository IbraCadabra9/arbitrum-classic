/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type { Bridge, BridgeInterface } from '../Bridge'

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'outbox',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'destAddr',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'BridgeCallTriggered',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'inbox',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'enabled',
        type: 'bool',
      },
    ],
    name: 'InboxToggle',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'messageIndex',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'beforeInboxAcc',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'inbox',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint8',
        name: 'kind',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'messageDataHash',
        type: 'bytes32',
      },
    ],
    name: 'MessageDelivered',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'outbox',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'enabled',
        type: 'bool',
      },
    ],
    name: 'OutboxToggle',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    inputs: [],
    name: 'activeOutbox',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'allowedInboxList',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'inbox',
        type: 'address',
      },
    ],
    name: 'allowedInboxes',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'allowedOutboxList',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'outbox',
        type: 'address',
      },
    ],
    name: 'allowedOutboxes',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint8',
        name: 'kind',
        type: 'uint8',
      },
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: 'messageDataHash',
        type: 'bytes32',
      },
    ],
    name: 'deliverMessageToInbox',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'destAddr',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'executeCall',
    outputs: [
      {
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
      {
        internalType: 'bytes',
        name: 'returnData',
        type: 'bytes',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'inboxAccs',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'messageCount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'inbox',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'enabled',
        type: 'bool',
      },
    ],
    name: 'setInbox',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'outbox',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'enabled',
        type: 'bool',
      },
    ],
    name: 'setOutbox',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b506112de806100206000396000f3fe6080604052600436106100c85760003560e01c8063945e11471161007a578063945e1147146101f75780639e5d4c4914610221578063ab5d894314610336578063c29372de1461034b578063cee3d7281461037e578063d9dd67ab146103b9578063e45b7ce6146103e3578063f2fde38b1461041e576100c8565b806302bbfad1146100cd5780633dbcc8d114610114578063413b35bd14610129578063715018a6146101705780637ee94329146101875780638129fc1c146101cd5780638da5cb5b146101e2575b600080fd5b610102600480360360608110156100e357600080fd5b5060ff813516906001600160a01b036020820135169060400135610451565b60408051918252519081900360200190f35b34801561012057600080fd5b506101026104bf565b34801561013557600080fd5b5061015c6004803603602081101561014c57600080fd5b50356001600160a01b03166104c5565b604080519115158252519081900360200190f35b34801561017c57600080fd5b506101856104e6565b005b34801561019357600080fd5b506101b1600480360360208110156101aa57600080fd5b5035610580565b604080516001600160a01b039092168252519081900360200190f35b3480156101d957600080fd5b506101856105a7565b3480156101ee57600080fd5b506101b1610651565b34801561020357600080fd5b506101b16004803603602081101561021a57600080fd5b5035610660565b34801561022d57600080fd5b506102b36004803603606081101561024457600080fd5b6001600160a01b038235169160208101359181019060608101604082013564010000000081111561027457600080fd5b82018360208201111561028657600080fd5b803590602001918460018302840111640100000000831117156102a857600080fd5b50909250905061066d565b604051808315151515815260200180602001828103825283818151815260200191508051906020019080838360005b838110156102fa5781810151838201526020016102e2565b50505050905090810190601f1680156103275780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b34801561034257600080fd5b506101b1610841565b34801561035757600080fd5b5061015c6004803603602081101561036e57600080fd5b50356001600160a01b0316610850565b34801561038a57600080fd5b50610185600480360360408110156103a157600080fd5b506001600160a01b0381351690602001351515610871565b3480156103c557600080fd5b50610102600480360360208110156103dc57600080fd5b5035610aea565b3480156103ef57600080fd5b506101856004803603604081101561040657600080fd5b506001600160a01b0381351690602001351515610b08565b34801561042a57600080fd5b506101856004803603602081101561044157600080fd5b50356001600160a01b0316610d7f565b3360009081526065602052604081206001015460ff166104a9576040805162461bcd60e51b815260206004820152600e60248201526d09c9ea8be8ca49e9abe929c849eb60931b604482015290519081900360640190fd5b6104b7848443423a87610e70565b949350505050565b606a5490565b6001600160a01b031660009081526066602052604090206001015460ff1690565b6104ee610f33565b6001600160a01b03166104ff610651565b6001600160a01b031614610548576040805162461bcd60e51b81526020600482018190526024820152600080516020611269833981519152604482015290519081900360640190fd5b6033546040516000916001600160a01b031690600080516020611289833981519152908390a3603380546001600160a01b0319169055565b6067818154811061058d57fe5b6000918252602090912001546001600160a01b0316905081565b600054610100900460ff16806105c057506105c0610f37565b806105ce575060005460ff16155b6106095760405162461bcd60e51b815260040180806020018281038252602e81526020018061123b602e913960400191505060405180910390fd5b600054610100900460ff16158015610634576000805460ff1961ff0019909116610100171660011790555b61063c610f48565b801561064e576000805461ff00191690555b50565b6033546001600160a01b031690565b6068818154811061058d57fe5b3360009081526066602052604081206001015460609060ff166106c9576040805162461bcd60e51b815260206004820152600f60248201526e09c9ea8be8ca49e9abe9eaaa8849eb608b1b604482015290519081900360640190fd5b8215610724576106e1866001600160a01b0316610fe5565b610724576040805162461bcd60e51b815260206004820152600f60248201526e1393d7d0d3d11157d05517d11154d5608a1b604482015290519081900360640190fd5b606980546001600160a01b0319811633179091556040516001600160a01b0391821691881690879087908790808383808284376040519201945060009350909150508083038185875af1925050503d806000811461079e576040519150601f19603f3d011682016040523d82523d6000602084013e6107a3565b606091505b50606980546001600160a01b0319166001600160a01b0385811691909117909155604080518a81526020810182815291810189905293965091945089169133917f2d9d115ef3e4a606d698913b1eae831a3cdfe20d9a83d48007b0526749c3d466918a918a918a9160608201848480828437600083820152604051601f909101601f1916909201829003965090945050505050a35094509492505050565b6069546001600160a01b031681565b6001600160a01b031660009081526065602052604090206001015460ff1690565b610879610f33565b6001600160a01b031661088a610651565b6001600160a01b0316146108d3576040805162461bcd60e51b81526020600482018190526024820152600080516020611269833981519152604482015290519081900360640190fd5b6001600160a01b0382166000818152606660209081526040918290206001810154835186151581529351919460ff9091169390927f49477e7356dbcb654ab85d7534b50126772d938130d1350e23e2540370c8dffa92918290030190a280801561093a5750825b8061094c57508015801561094c575082155b15610958575050610ae6565b82156109e757604080518082018252606880548252600160208084018281526001600160a01b038a16600081815260669093529582209451855551938201805460ff1916941515949094179093558154908101825591527fa2153420d844928b4421650203c77babc8b33d7f2e7b450e2966db0c220977530180546001600160a01b0319169091179055610ae3565b6068805460001981019081106109f957fe5b6000918252602090912001548254606880546001600160a01b03909316929091908110610a2257fe5b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b031602179055508160000154606660006068856000015481548110610a6a57fe5b60009182526020808320909101546001600160a01b031683528201929092526040019020556068805480610a9a57fe5b60008281526020808220830160001990810180546001600160a01b03191690559092019092556001600160a01b03861682526066905260408120908155600101805460ff191690555b50505b5050565b606a8181548110610af757fe5b600091825260209091200154905081565b610b10610f33565b6001600160a01b0316610b21610651565b6001600160a01b031614610b6a576040805162461bcd60e51b81526020600482018190526024820152600080516020611269833981519152604482015290519081900360640190fd5b6001600160a01b0382166000818152606560209081526040918290206001810154835186151581529351919460ff9091169390927f6675ce8882cb71637de5903a193d218cc0544be9c0650cb83e0955f6aa2bf52192918290030190a2808015610bd15750825b80610be3575080158015610be3575082155b15610bef575050610ae6565b8215610c7e57604080518082018252606780548252600160208084018281526001600160a01b038a16600081815260659093529582209451855551938201805460ff1916941515949094179093558154908101825591527f9787eeb91fe3101235e4a76063c7023ecb40f923f97916639c598592fa30d6ae0180546001600160a01b0319169091179055610ae3565b606780546000198101908110610c9057fe5b6000918252602090912001548254606780546001600160a01b03909316929091908110610cb957fe5b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b031602179055508160000154606560006067856000015481548110610d0157fe5b60009182526020808320909101546001600160a01b031683528201929092526040019020556067805480610d3157fe5b60008281526020808220830160001990810180546001600160a01b03191690559092019092556001600160a01b03861682526065905260408120908155600101805460ff1916905550505050565b610d87610f33565b6001600160a01b0316610d98610651565b6001600160a01b031614610de1576040805162461bcd60e51b81526020600482018190526024820152600080516020611269833981519152604482015290519081900360640190fd5b6001600160a01b038116610e265760405162461bcd60e51b81526004018080602001828103825260268152602001806112156026913960400191505060405180910390fd5b6033546040516001600160a01b0380841692169060008051602061128983398151915290600090a3603380546001600160a01b0319166001600160a01b0392909216919091179055565b606a5460009081610e8689898989868a8a610feb565b905060008215610eae57606a6001840381548110610ea057fe5b906000526020600020015490505b606a610eba8284611061565b8154600181018355600092835260209283902001556040805133815260ff8d16928101929092526001600160a01b038b16828201526060820187905251829185917f23be8e12e420b5da9fb98d8102572f640fb3c11a0085060472dfc0ed194b3cf79181900360800190a3509098975050505050505050565b3390565b6000610f4230610fe5565b15905090565b600054610100900460ff1680610f615750610f61610f37565b80610f6f575060005460ff16155b610faa5760405162461bcd60e51b815260040180806020018281038252602e81526020018061123b602e913960400191505060405180910390fd5b600054610100900460ff16158015610fd5576000805460ff1961ff0019909116610100171660011790555b610fdd61108d565b61063c61112d565b3b151590565b6040805160f89890981b6001600160f81b0319166020808a019190915260609790971b6bffffffffffffffffffffffff19166021890152603588019590955260558701939093526075860191909152609585015260b5808501919091528151808503909101815260d59093019052815191012090565b604080516020808201949094528082019290925280518083038201815260609092019052805191012090565b600054610100900460ff16806110a657506110a6610f37565b806110b4575060005460ff16155b6110ef5760405162461bcd60e51b815260040180806020018281038252602e81526020018061123b602e913960400191505060405180910390fd5b600054610100900460ff1615801561063c576000805460ff1961ff001990911661010017166001179055801561064e576000805461ff001916905550565b600054610100900460ff16806111465750611146610f37565b80611154575060005460ff16155b61118f5760405162461bcd60e51b815260040180806020018281038252602e81526020018061123b602e913960400191505060405180910390fd5b600054610100900460ff161580156111ba576000805460ff1961ff0019909116610100171660011790555b60006111c4610f33565b603380546001600160a01b0319166001600160a01b03831690811790915560405191925090600090600080516020611289833981519152908290a350801561064e576000805461ff00191690555056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a65644f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65728be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0a2646970667358221220a38aa991fe7cf08f2acb1ab305d2972c008682f02b4d210d0832d8dc66d021ac64736f6c634300060b0033'

export class Bridge__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Bridge> {
    return super.deploy(overrides || {}) as Promise<Bridge>
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): Bridge {
    return super.attach(address) as Bridge
  }
  connect(signer: Signer): Bridge__factory {
    return super.connect(signer) as Bridge__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): BridgeInterface {
    return new utils.Interface(_abi) as BridgeInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Bridge {
    return new Contract(address, _abi, signerOrProvider) as Bridge
  }
}
