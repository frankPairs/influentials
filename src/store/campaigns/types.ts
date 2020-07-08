import { Brand } from '../brands';
import { ChannelCampaign, Channel } from '../channels';

/* State */
interface CampaignState {
  data: { [campaignId: number]: CampaignNormalized } | null;
  loading: boolean;
  error: string | null;
}

/* Actions */
enum CampaignsActionTypes {
  SET_CAMPAIGN_DATA = 'setCampaignData',
  SET_CAMPAIGN_LOADING = 'setCampaignLoading',
  SET_CAMPAIGN_ERROR = 'setCampaignError',
}

interface SetCampaignDataAction {
  type: CampaignsActionTypes.SET_CAMPAIGN_DATA;
  payload: { [campaignId: number]: CampaignNormalized };
}

interface SetCampaignLoadingAction {
  type: CampaignsActionTypes.SET_CAMPAIGN_LOADING;
}

interface SetCampaignErrorAction {
  type: CampaignsActionTypes.SET_CAMPAIGN_ERROR;
  payload: string;
}

type CampaignActions = SetCampaignDataAction | SetCampaignLoadingAction | SetCampaignErrorAction;

/* Models */
interface CampaignNormalized {
  id: number;
  title: string;
  image: string;
  reward: string;
  brand: number;
  channels: number[];
}

interface Campaign {
  id: number;
  title: string;
  image: string;
  networkType: string;
  brand: Brand;
  reward: string;
  channels: ChannelCampaign[];
  countries: Country[];
  categories: Category[];
  assignments: AssignmentCampaign[];
  application: Application;
  network: string | null;
}

interface Country {
  id: number;
  name: string;
}

interface Category {
  id: number;
  name: string;
}

interface Assignment {
  id: number;
  name: string;
  actionType: string;
  channel: Channel;
}

interface AssignmentCampaign {
  id: number;
  date: string;
  description: string;
  assignment: Assignment;
}

interface Application {
  isClosed: boolean;
  isApplied: boolean;
  allowedFailReason: string | null;
  status: string | null;
  displayStatus: string | null;
}

interface Pagination {
  maxPerPage: number;
  nextPage: number;
  numberOfResults: number;
  page: number;
  previousPage: number;
  totalPages: number;
}

/* Normalizr responses */
interface GetCampaignsEntities {
  brands: Brand[];
  channels: ChannelCampaign[];
  campaigns: CampaignNormalized[];
}

/* HTTP Models */
interface GetCampaignResponse {
  data: {
    campaigns: Campaign[];
    _paging: Pagination;
  };
  status: string;
}

export {
  CampaignState,
  Campaign,
  CampaignActions,
  CampaignsActionTypes,
  CampaignNormalized,
  SetCampaignDataAction,
  SetCampaignLoadingAction,
  SetCampaignErrorAction,
  GetCampaignResponse,
  GetCampaignsEntities,
};
