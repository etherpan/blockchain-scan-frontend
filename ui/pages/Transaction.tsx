import { Flex, Link, Icon } from '@chakra-ui/react';
import React from 'react';

import type { RoutedTab } from 'ui/shared/RoutedTabs/types';

import leftArrowIcon from 'icons/arrows/left.svg';
import useLink from 'lib/link/useLink';
import ExternalLink from 'ui/shared/ExternalLink';
import Page from 'ui/shared/Page';
import PageHeader from 'ui/shared/PageHeader';
import RoutedTabs from 'ui/shared/RoutedTabs/RoutedTabs';
import TxDetails from 'ui/tx/TxDetails';
import TxInternals from 'ui/tx/TxInternals';
import TxLogs from 'ui/tx/TxLogs';
import TxRawTrace from 'ui/tx/TxRawTrace';
import TxState from 'ui/tx/TxState';

const TABS: Array<RoutedTab> = [
  { routeName: 'tx_index', title: 'Details', component: <TxDetails/> },
  { routeName: 'tx_internal', title: 'Internal txn', component: <TxInternals/> },
  { routeName: 'tx_logs', title: 'Logs', component: <TxLogs/> },
  { routeName: 'tx_state', title: 'State', component: <TxState/> },
  { routeName: 'tx_raw_trace', title: 'Raw trace', component: <TxRawTrace/> },
];

export interface Props {
  tab: RoutedTab['routeName'];
}

const TransactionPageContent = ({ tab }: Props) => {
  const link = useLink();

  return (
    <Page>
      <Link mb={ 6 } display="inline-flex" href={ link('txs') }>
        <Icon as={ leftArrowIcon } boxSize={ 6 } mr={ 2 }/>
        Transactions
      </Link>
      <PageHeader text="Transaction details"/>
      <Flex marginLeft="auto" alignItems="center" flexWrap="wrap" columnGap={ 6 } rowGap={ 3 } mb={ 6 }>
        <ExternalLink title="Open in Tenderly" href="#"/>
        <ExternalLink title="Open in Blockchair" href="#"/>
        <ExternalLink title="Open in Etherscan" href="#"/>
      </Flex>
      <RoutedTabs
        tabs={ TABS }
        defaultActiveTab={ tab }
      />
    </Page>
  );
};

export default TransactionPageContent;
