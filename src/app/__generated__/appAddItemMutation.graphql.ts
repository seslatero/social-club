/**
 * @generated SignedSource<<88e3b223ce7d283aeec69df660272e30>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from "relay-runtime";
export type appAddItemMutation$variables = {
  cost: number;
};
export type appAddItemMutation$data = {
  readonly insert_items_one: {
    readonly __typename: "items";
  } | null;
};
export type appAddItemMutation = {
  response: appAddItemMutation$data;
  variables: appAddItemMutation$variables;
};

const node: ConcreteRequest = (function () {
  var v0 = [
      {
        defaultValue: null,
        kind: "LocalArgument",
        name: "cost",
      },
    ],
    v1 = [
      {
        alias: null,
        args: [
          {
            fields: [
              {
                kind: "Variable",
                name: "amount",
                variableName: "cost",
              },
              {
                kind: "Literal",
                name: "created_by",
                value: "Bld42",
              },
            ],
            kind: "ObjectValue",
            name: "object",
          },
        ],
        concreteType: "items",
        kind: "LinkedField",
        name: "insert_items_one",
        plural: false,
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null,
          },
        ],
        storageKey: null,
      },
    ];
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: "Fragment",
      metadata: null,
      name: "appAddItemMutation",
      selections: v1 /*: any*/,
      type: "mutation_root",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: "Operation",
      name: "appAddItemMutation",
      selections: v1 /*: any*/,
    },
    params: {
      cacheID: "8a57246ae1ca4f6a41541b74347e2e39",
      id: null,
      metadata: {},
      name: "appAddItemMutation",
      operationKind: "mutation",
      text: 'mutation appAddItemMutation(\n  $cost: Int!\n) {\n  insert_items_one(object: {amount: $cost, created_by: "Bld42"}) {\n    __typename\n  }\n}\n',
    },
  };
})();

(node as any).hash = "3de0b2dfc9c722598d27eabe9a8a33dc";

export default node;
