import {rD, rA, rB, OE, Rc} from './instruction';

const pseudocode = `
rD ← ¬(rA) + (rB) + 1
`;

export default {
  "mnemonic": "subfc",
  "fullName": "Subtract from Carrying",
  "baseHex": "7C000010",
  "opcode": "011111",
  "parameters": [

    rD,
    rA,
    rB
  ],
  "modifiers": [
    OE,
    Rc
  ],
  pseudocode,
  "extension": {
    value: 8,
    bits: [
      22,
      30
    ]
  },
  "reserved": null,
  "description": "The sum ¬ (rA) + (rB) + 1 is placed into rD. (equivlent to (rB)--(rA))",
  "simple": [{
    name: "subc",
    isSimple(value: number[]) { return true },
    "equivalent": "subfc rD, rB, rA",
    parameters: [ rD, rA, rB ]
  }]
}