import { schema } from 'normalizr';

import { brandSchema } from '../brands';
import { channelSchema } from '../channels';

const campaignsSchema = new schema.Entity('campaigns', {
  brand: brandSchema,
  channels: [channelSchema],
});

const campaignsListSchema = new schema.Array(campaignsSchema);

export { campaignsListSchema };
