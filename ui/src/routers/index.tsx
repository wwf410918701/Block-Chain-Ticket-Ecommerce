import { Route } from 'react-router-dom';

import { HomePage } from '../pages/home-page/home-page';
import { IndividualSellerPage } from '../pages/individual-seller-page/individual-seller-page';
import { IndividualTicketSellPage } from '../pages/individual-ticket-sell-page/individual-ticket-sell-page';
import { MyTicketPage } from '../pages/my-ticket-page/my-ticket-page';
import { ReleaseTicketPage } from '../pages/release-ticket-page/release-ticket-page';
import { TicketPage } from '../pages/ticket-page/ticket-page';

type RouteStore = {[routeName: string]: JSX.Element}

export const rootUrl = '/';

export const main_components_routes: RouteStore = {
  HomePage: <Route path={rootUrl} element={<HomePage />}/>,
  TicketPage: <Route path={rootUrl + 'ticketDetail/:ticketID'} element={<TicketPage />}/>,
  MyTicketPage: <Route path={rootUrl + 'myTickets/'} element={<MyTicketPage />}/>,
  IndividualTicketSellPage: <Route path={rootUrl + 'individualSellTicket/:ticketID'} element={<IndividualTicketSellPage/>}/>,
  IndividualSellerPage: <Route path={rootUrl + 'individualSeller/:sellerID'} element={<IndividualSellerPage/>}/>,
  ReleaseTicketPage: <Route path={rootUrl + 'releaseTicket/:releaserID'} element={<ReleaseTicketPage/>}/>
};