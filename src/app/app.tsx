import "@shoelace-style/shoelace/dist/themes/dark.css";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path";
setBasePath(
  "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.4.0/dist/"
); // or copy stuff into public/ with a build task
import { SlButton, SlCard } from "@shoelace-style/shoelace/dist/react";

import { useLazyLoadQuery, useMutation, useSubscription } from "react-relay";
import { graphql } from "relay-runtime";

import { appTotalQuery } from "./__generated__/appTotalQuery.graphql";
import { appAddItemMutation } from "./__generated__/appAddItemMutation.graphql";

import styles from "./app.module.scss";

interface MenuItem {
  name: string;
  cost: number;
}

const MENU: MenuItem[] = [
  { name: "Grind Coffee", cost: 50 },
  { name: "Pod Coffee", cost: 100 },
  { name: "Milk Week", cost: 100 },
  { name: "Milk Shot", cost: 20 },
  { name: "Chocolate", cost: 150 },
  { name: "Can", cost: 100 },
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

const TotalSubscription = graphql`
  subscription appTotalSubscription {
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
    <SlButton onClick={() => onClick(props.item)} disabled={isMutationInFlight}>
      {props.item.name} - {currency(props.item.cost)}
    </SlButton>
  );
}

const App = (): JSX.Element => {
  // todo: subscription
  const data = useLazyLoadQuery<appTotalQuery>(TotalQuery, {});
  const total = data.items_aggregate?.aggregate?.sum?.amount || 0;

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

/*

query GetTotal {
  items_aggregate {
    aggregate {
      sum {
        amount
      }
    }
  }
}

*/
