import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Box, ButtonGroup, Card, CardBody, Flex, Spacer } from "@chakra-ui/react";
import { FTable } from "./components/table";
import { GainModal } from "./components/gain-modal";
import { SpendModal } from "./components/spent-modal";
import { GainCard } from "./components/cards";
import { LineChart } from "./components/charts";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [plannedGains, setPlannedGains] = useState([])
  const [plannedSpends, setPlannedSpends] = useState([])
  const [actualGains, setActualGains] = useState([])
  const [actualSpends, setActualSpends] = useState([])
  return (
    <>
      <Head>
        <title>Finanseed</title>
        <meta name="description" content="Your personal finance manager" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Box>
          <Flex minWidth='max-content' alignItems='center' gap='2' m='2' >
            <GainCard title="Ganhos" value={2300}></GainCard>
            <Spacer/>
            <GainCard title="Gastos" value={2300}></GainCard>
            <Spacer/>
            <GainCard title="Investidos" value={2300}></GainCard>
          </Flex>

          <Card p={2}>
            <CardBody>
              <Flex>
                <ButtonGroup isAttached variant="outline">
                  <SpendModal></SpendModal>
                  <GainModal></GainModal>
                </ButtonGroup>
              </Flex>
              <Flex>
                <FTable items={plannedGains} color="lightGreen"></FTable>
                <FTable items={plannedSpends} color="lightRed"></FTable>
                <FTable items={actualGains} color="green"></FTable>
                <FTable items={actualSpends} color="red"></FTable>
              </Flex>
            </CardBody>
          </Card>
        </Box>
      </main>
    </>
  );
}
