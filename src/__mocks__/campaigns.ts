import { CampaignNormalized, GetCampaignResponse } from '../store/campaigns';

const mockCampaingsNormalized: { [channelId: number]: CampaignNormalized } = {
  1: {
    id: 1,
    title: 'campaign 1',
    image: 'campaign1.jpg',
    reward: 'reward 1',
    brand: 1,
    channels: [1, 2, 3, 4],
  },
  2: {
    id: 2,
    title: 'campaign 2',
    image: 'campaign2.jpg',
    reward: 'reward 2',
    brand: 4,
    channels: [1, 2, 3, 4],
  },
  3: {
    id: 3,
    title: 'campaign 3',
    image: 'campaign3.jpg',
    reward: 'reward 3',
    brand: 3,
    channels: [1, 2, 3, 4],
  },
  4: {
    id: 4,
    title: 'campaign 4',
    image: 'campaign4.jpg',
    reward: 'reward 4',
    brand: 2,
    channels: [1, 2, 3, 4],
  },
};

const mockCampaignResponse: GetCampaignResponse = {
  status: 'success',
  data: {
    _paging: {
      previousPage: 1,
      page: 1,
      nextPage: 1,
      maxPerPage: 25,
      numberOfResults: 2,
      totalPages: 1,
    },
    campaigns: [
      {
        id: 1076,
        title: 'UGG handschoenen - kerstactie Van den Assem',
        image:
          'https://influentials-prod.s3.eu-central-1.amazonaws.com/campaign_photos/8851514ecddd7f4245762a9746c695ae.png',
        networkType: 'public',
        brand: {
          id: 1300,
          name: 'Van den Assem',
          image:
            'https://influentials-prod.s3.eu-central-1.amazonaws.com/brand_photos/695b4318d45d9fbd1e8fd8abb8999509.png',
        },
        reward:
          'Een paar UGG handschoenen (t.w.v €149,95) en een kerstbal van Vondels, speciaal gemaakt voor Van den Assem.',
        channels: [
          {
            id: 3691,
            reach: '10000_20000',
            channel: {
              id: 2,
              name: 'Instagram',
              slug: 'instagram',
            },
          },
        ],
        countries: [
          {
            id: 153,
            name: 'Netherlands',
          },
        ],
        categories: [
          {
            id: 1,
            name: 'Lifestyle',
          },
          {
            id: 4,
            name: 'Fashion',
          },
          {
            id: 9,
            name: 'Mommy',
          },
        ],
        assignments: [
          {
            id: 1223,
            date: '2018-12-09',
            description:
              '- Post 1 draait vooral om het product. Deze graag goed in beeld brengen. De boodschap van de post moet gericht zijn op het feit dat je bij Van den Assem goed kan slagen voor leuke kerstcadeaus, waaronder deze handschoenen. \n- We willen daarnaast dat je @vandenassem tagt in zowel  de foto als het bijschrift en de volgende hashtags gebruikt: #assemfamily #assemchristmas #cozywinter',
            assignment: {
              id: 3,
              name: 'Post an Instagram photo',
              actionType: 'instagram-photo-selector',
              channel: {
                id: 2,
                name: 'Instagram',
                slug: 'instagram',
              },
            },
          },
          {
            id: 1224,
            date: '2018-12-23',
            description:
              '- Op de tweede post zien we graag de kerstbal in beeld. Breng deze op zo’n manier in beeld dat deze opvalt voor de kijker. Denk bijvoorbeeld aan een foto waarop je de kerstboom optuigt o.i.d. Het cozy winter gevoel staat hierbij centraal. \n- We willen daarnaast dat je @vandenassem tagt in zowel  de foto als het bijschrift en de volgende hashtags gebruikt: #assemfamily #assemchristmas #cozywinter',
            assignment: {
              id: 3,
              name: 'Post an Instagram photo',
              actionType: 'instagram-photo-selector',
              channel: {
                id: 2,
                name: 'Instagram',
                slug: 'instagram',
              },
            },
          },
        ],
        application: {
          isClosed: false,
          isApplied: false,
          allowedFailReason: null,
          status: null,
          displayStatus: null,
        },
        network: null,
      },
      {
        id: 1077,
        title: 'In-store blogger event in Antwerpen',
        image:
          'https://influentials-prod.s3.eu-central-1.amazonaws.com/campaign_photos/5d65775d07b44b33090e8c444e2c1d93.png',
        networkType: 'public',
        brand: {
          id: 639,
          name: 'The Body Shop',
          image:
            'https://influentials-prod.s3.eu-central-1.amazonaws.com/brand_photos/096581dc4fd9aa14a4de8acfc9620cd0.png',
        },
        reward: 'Je ontvangt een leuke goodie bag na afloop van het event',
        channels: [
          {
            id: 3704,
            reach: '5000_10000',
            channel: {
              id: 5,
              name: 'Google Analytics (Blog)',
              slug: 'google-analytics',
            },
          },
        ],
        countries: [
          {
            id: 20,
            name: 'Belgium',
          },
        ],
        categories: [
          {
            id: 3,
            name: 'Beauty',
          },
        ],
        assignments: [
          {
            id: 1226,
            date: '2018-12-02',
            description:
              '- 1 blog over de kerstcollectie met daarin verschillende cadeaus uitgelicht\n- #enchantedbynature (voor social media posts)',
            assignment: {
              id: 8,
              name: 'Post on your website',
              actionType: 'google-analytics-page-selector',
              channel: {
                id: 5,
                name: 'Google Analytics (Blog)',
                slug: 'google-analytics',
              },
            },
          },
        ],
        application: {
          isClosed: false,
          isApplied: false,
          allowedFailReason:
            "your country of origin (Netherlands) is not matching with the target country. This is why you're not able to apply for this campaign.",
          status: null,
          displayStatus: null,
        },
        network: null,
      },
    ],
  },
};

export { mockCampaingsNormalized, mockCampaignResponse };
