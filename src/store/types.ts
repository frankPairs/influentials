import { CampaignState } from './campaigns';
import { BrandState } from './brands';
import { ChannelState } from './channels';

interface AppState {
  campaigns: CampaignState;
  brands: BrandState;
  channels: ChannelState;
}

export { AppState };
