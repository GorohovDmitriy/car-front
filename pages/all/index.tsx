import Head from "next/head";
import carStore from "../../store/carStore";
import CarsComponent from "../../components/CarsComponent";
import { IObserverOptions, observer } from "mobx-react-lite";
import { NextPage } from "next";

const UsedAndNew: NextPage = observer<() => JSX.Element, IObserverOptions>(
  () => (
    <>
      <Head>
        <title>New and Used</title>
      </Head>
      <CarsComponent cars={carStore.cars} />
    </>
  )
);

export default UsedAndNew;
