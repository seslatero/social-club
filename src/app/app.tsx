import "@shoelace-style/shoelace/dist/themes/dark.css";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path";
setBasePath(
  "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.4.0/dist/"
); // or copy stuff into public/ with a build task
import { SlButton, SlCard } from "@shoelace-style/shoelace/dist/react";

import { useLazyLoadQuery, useMutation } from "react-relay";
import { FetchPolicy, graphql } from "relay-runtime";

import { appTotalQuery } from "./__generated__/appTotalQuery.graphql";
import { appAddItemMutation } from "./__generated__/appAddItemMutation.graphql";

import styles from "./app.module.scss";
import { useCallback, useEffect, useState } from "react";

type RefreshedQueryOptions =
  | {
      fetchKey?: number | undefined;
      fetchPolicy?: FetchPolicy | undefined;
    }
  | undefined;

interface MenuItem {
  type: "default" | "primary" | "success" | "neutral" | "warning" | "danger";
  name: string;
  cost: number;
}

const MENU: MenuItem[] = [
  { type: "primary", name: "Grind Coffee", cost: 50 },
  { type: "primary", name: "Pod Coffee", cost: 100 },
  { type: "success", name: "Milk Week", cost: 100 },
  { type: "success", name: "Milk Shot", cost: 20 },
  { type: "neutral", name: "Chocolate", cost: 150 },
  { type: "neutral", name: "Can", cost: 100 },
  { type: "warning", name: "Add Debt", cost: 10000 },
  { type: "warning", name: "Add Debt", cost: 1000 },
  { type: "warning", name: "Add Debt", cost: 100 },
  { type: "danger", name: "Pay Back", cost: -10000 },
  { type: "danger", name: "Pay Back", cost: -1000 },
  { type: "danger", name: "Pay Back", cost: -100 },
];

function currency(value: number) {
  return (
    "$" + (value / 100).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
  );
}

const TotalQuery = graphql`
  query appTotalQuery {
    items_aggregate {
      aggregate {
        sum {
          amount
        }
      }
    }
  }
`;

const AddItemMutation = graphql`
  mutation appAddItemMutation($cost: Int!) {
    insert_items_one(object: { amount: $cost, created_by: "Bld42" }) {
      __typename
    }
  }
`;

function AddItemButton(props: { item: MenuItem }) {
  const [commitMutation, isMutationInFlight] =
    useMutation<appAddItemMutation>(AddItemMutation);

  function onClick(item: MenuItem) {
    commitMutation({ variables: { cost: item.cost } });
  }

  return (
    <SlButton
      outline
      variant={props.item.type}
      onClick={() => onClick(props.item)}
      disabled={isMutationInFlight}
    >
      {props.item.name} - {currency(props.item.cost)}
    </SlButton>
  );
}

const App = (): JSX.Element => {
  const [refreshedQueryOptions, setRefreshedQueryOptions] =
    useState<RefreshedQueryOptions>(undefined);

  const data = useLazyLoadQuery<appTotalQuery>(
    TotalQuery,
    {},
    refreshedQueryOptions
  );
  const total = data.items_aggregate?.aggregate?.sum?.amount || 0;

  const refresh = useCallback(() => {
    setRefreshedQueryOptions((prev: RefreshedQueryOptions) => ({
      fetchKey: (prev?.fetchKey ?? 0) + 1,
      fetchPolicy: "network-only",
    }));
  }, []);

  useEffect(() => {
    const timer = setInterval(refresh, 500);
    return () => clearInterval(timer);
  }, [refresh]);

  return (
    <main className={styles.main + " sl-theme-dark"}>
      <header className={styles.header}>
        <h3 className={styles.headerTopTitle}>Social Club</h3>
        <h1 className={styles.headerTitle}>Bld42</h1>
      </header>
      <section className={styles.buttons}>
        {MENU.map((item, i) => (
          <AddItemButton key={i} item={item}></AddItemButton>
        ))}
      </section>
      <section className={styles.total + " sl-theme-dark"}>
        <SlCard>
          <div slot="header">Total</div>
          {currency(total)}
        </SlCard>
      </section>
      <footer className={styles.footer}>Made for the Box Team</footer>
    </main>
  );
};

export default App;
