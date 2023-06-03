/**
 * @generated SignedSource<<1c0630436610943e6548bed95b595228>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, GraphQLSubscription } from "relay-runtime";
export type appTotalSubscription$variables = {};
export type appTotalSubscription$data = {
  readonly items_aggregate: {
    readonly aggregate: {
      readonly sum: {
        readonly amount: number | null;
      } | null;
    } | null;
  };
};
export type appTotalSubscription = {
  response: appTotalSubscription$data;
  variables: appTotalSubscription$variables;
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
      name: "appTotalSubscription",
      selections: v0 /*: any*/,
      type: "subscription_root",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: [],
      kind: "Operation",
      name: "appTotalSubscription",
      selections: v0 /*: any*/,
    },
    params: {
      cacheID: "c50f35bbdfa1eecce21886ffc7367425",
      id: null,
      metadata: {},
      name: "appTotalSubscription",
      operationKind: "subscription",
      text: "subscription appTotalSubscription {\n  items_aggregate {\n    aggregate {\n      sum {\n        amount\n      }\n    }\n  }\n}\n",
    },
  };
})();

(node as any).hash = "697cec9392b7bb95726e09050f210bb2";

export default node;
