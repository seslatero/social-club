/**
 * @generated SignedSource<<bb1856c593398f6b6f006862b53099b4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from "relay-runtime";
export type appTotalQuery$variables = {};
export type appTotalQuery$data = {
  readonly items_aggregate: {
    readonly aggregate: {
      readonly sum: {
        readonly amount: number | null;
      } | null;
    } | null;
  };
};
export type appTotalQuery = {
  response: appTotalQuery$data;
  variables: appTotalQuery$variables;
};

const node: ConcreteRequest = (function () {
  var v0 = [
    {
      alias: null,
      args: null,
      concreteType: "items_aggregate",
      kind: "LinkedField",
      name: "items_aggregate",
      plural: false,
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "items_aggregate_fields",
          kind: "LinkedField",
          name: "aggregate",
          plural: false,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "items_sum_fields",
              kind: "LinkedField",
              name: "sum",
              plural: false,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "amount",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      storageKey: null,
    },
  ];
  return {
    fragment: {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "appTotalQuery",
      selections: v0 /*: any*/,
      type: "query_root",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: [],
      kind: "Operation",
      name: "appTotalQuery",
      selections: v0 /*: any*/,
    },
    params: {
      cacheID: "128e67fb4f8823e0330140cc1261401e",
      id: null,
      metadata: {},
      name: "appTotalQuery",
      operationKind: "query",
      text: "query appTotalQuery {\n  items_aggregate {\n    aggregate {\n      sum {\n        amount\n      }\n    }\n  }\n}\n",
    },
  };
})();

(node as any).hash = "ebe5bffd11e288958ae8a7791afbf562";

export default node;
