import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
   articles = [
    
        {
          source: {
            id: "cnn",
            name: "CNN",
          },
          author: "Sugam Pokharel",
          title:
            "Nepal bans TikTok because of ‘disruption’ to social harmony - CNN",
          description:
            "Nepal has decided to ban TikTok because the popular short video app was disrupting social structures in the South Asian nation, government officials say.",
          url: "https://www.cnn.com/2023/11/14/tech/nepal-tiktok-ban-hnk-intl/index.html",
          urlToImage:
            "https://media.cnn.com/api/v1/images/stellar/prod/231114114721-tiktok-logo-mobile.jpg?c=16x9&q=w_800,c_fill",
          publishedAt: "2023-11-14T12:19:00Z",
          content:
            "Nepal has decided to ban TikTok because the popular short video app was disrupting social structures in the South Asian nation, government officials say.\r\nAnumber of countries have placed restriction… [+2106 chars]",
        },
        {
          source: {
            id: "reuters",
            name: "Reuters",
          },
          author: "Nidal Al-Mughrabi, Dan Williams",
          title:
            "Mass grave inside Israeli-encircled Gaza hospital, no plan to rescue babies - Reuters",
          description:
            'Palestinians trapped inside Gaza\'s biggest hospital were <a href="/world/middle-east/people-trapped-inside-gazas-al-shifa-planning-bury-dead-bodies-2023-11-14/">digging a mass grave</a> on Tuesday to bury patients who died under Israeli encirclement, and said…',
          url: "https://www.reuters.com/world/middle-east/biden-says-gaza-hospitals-must-be-protected-2023-11-14/",
          urlToImage:
            "https://www.reuters.com/resizer/i9X8KoilLEDErkFNyIwABvhYySI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/II42QXWQRVOW7L45PM5NQVJSXE.jpg",
          publishedAt: "2023-11-14T12:14:59Z",
          content:
            "GAZA/JERUSALEM, Nov 14 (Reuters) - Palestinians trapped inside Gaza's biggest hospital were digging a mass grave on Tuesday to bury patients who died under Israeli encirclement, and said no plan was … [+6193 chars]",
        },
        {
          source: {
            id: null,
            name: "BBC News",
          },
          author: "Michael Marshall",
          title: "The invisible dangers of travelling through time - BBC.com",
          description:
            "The mishaps caused by time travellers exploring the past are a staple of science fiction. But what does physics think?",
          url: "https://www.bbc.com/future/article/20231113-the-invisible-dangers-of-travelling-through-time",
          urlToImage:
            "https://ychef.files.bbci.co.uk/live/624x351/p0gsh29l.jpg",
          publishedAt: "2023-11-14T11:42:54Z",
          content:
            "Quantum mechanics offers one way that parallel universes could exist. A tiny subatomic particle can exist in a state called superposition, which means it is not in one specific place. Instead it exis… [+2811 chars]",
        },
        {
          source: {
            id: null,
            name: "NBCSports.com",
          },
          author: "Mike Florio",
          title:
            'Trevon Diggs on his brother Stefon after latest Bills loss: "14 gotta get up out of there" - NBC Sports',
          description:
            "Before last night's game, Bills receiver Stefon Diggs was smiling.",
          url: "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/trevon-diggs-on-his-brother-stefon-after-latest-bills-loss-14-gotta-get-up-out-of-there",
          urlToImage:
            "https://nbcsports.brightspotcdn.com/dims4/default/7d3dc37/2147483647/strip/true/crop/5739x3228+0+299/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2F56%2Fe4%2F176efa214ed195a4e891e687f5e3%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F1792372879",
          publishedAt: "2023-11-14T11:42:26Z",
          content:
            "Before last nights game, Bills receiver Stefon Diggs was smiling. After the game, there was nothing to smile about.\r\nDiggs had three catches for 34 yards on five targets in the 24-22 loss at home to … [+1311 chars]",
        },
        {
          source: {
            id: "cnn",
            name: "CNN",
          },
          author: "",
          title:
            "'The boss is not going to leave': See what ex-Trump attorney told prosecutors - CNN",
          description:
            "ABC News has obtained videos of former Trump campaign lawyers Jenna Ellis and Sidney Powell being questioned as part of the Georgia 2020 election subversion case. Both Ellis and Powell have pleaded guilty.",
          url: "https://www.cnn.com/videos/politics/2023/11/14/abc-exclusive-trump-2020-election-ebof-vpx.cnn",
          urlToImage:
            "https://media.cnn.com/api/v1/images/stellar/prod/231114064914-video-jenna-ellis-dan-scavino-split.jpg?c=16x9&q=w_800,c_fill",
          publishedAt: "2023-11-14T11:15:56Z",
          content: null,
        },
        {
          source: {
            id: null,
            name: "CNBC",
          },
          author: "Melissa Repko",
          title:
            "Home Depot earnings beat, but retailer offers a tepid outlook as sales slide - CNBC",
          description:
            "Home Depot narrowed its earnings and revenue outlook for the year after it beat expectations on both metrics in the third quarter.",
          url: "https://www.cnbc.com/2023/11/14/home-depot-hd-q3-2023.html",
          urlToImage:
            "https://image.cnbcfm.com/api/v1/image/107061783-1699966676078-107061783-1652723820550-GettyImages-1240707133.jpg?v=1699966687&w=1920&h=1080",
          publishedAt: "2023-11-14T11:01:38Z",
          content:
            "Home Depot's quarterly sales declined 3% from the year-ago period, but topped Wall Street's expectations as customers chipped away at more modest projects and home repairs.\r\nThe retailer indicated ca… [+3645 chars]",
        },
        {
          source: {
            id: null,
            name: "Yahoo Entertainment",
          },
          author: "Thomas Biesheuvel and Jacob Lorinc",
          title:
            "Glencore Wins Teck Coal Business, Paving Way for Its Own Split - Yahoo Finance",
          description:
            "(Bloomberg) -- Glencore Plc will buy a majority stake in Teck Resources Ltd.’s coal business, ending a months-long saga that transfixed the mining industry...",
          url: "https://finance.yahoo.com/news/glencore-buy-77-teck-coal-072626600.html",
          urlToImage:
            "https://s.yimg.com/ny/api/res/1.2/WNrIkcMGjRqpaUBBAJnE2A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03OTg-/https://media.zenfs.com/en/bloomberg_markets_842/95f38db9b36766cbce8562b20bffe866",
          publishedAt: "2023-11-14T10:39:04Z",
          content:
            "(Bloomberg) -- Glencore Plc will buy a majority stake in Teck Resources Ltd.s coal business, ending a months-long saga that transfixed the mining industry and setting the stage for the commodity gian… [+4682 chars]",
        },
        {
          source: {
            id: "abc-news",
            name: "ABC News",
          },
          author: "Beatrice Peterson",
          title:
            "Tens of thousands expected in DC for pro-Israel rally, with National Guard assisting police - ABC News",
          description:
            "A second major demonstration is planned for immigrants near the White House.",
          url: "https://abcnews.go.com/Politics/tens-thousands-expected-dc-pro-israel-rally-national/story?id=104861127",
          urlToImage:
            "https://i.abcnewsfe.com/a/12f8dfc9-5c18-4d45-9f99-1f23fb10f895/israel-gty-er-231113_1699918892056_hpMain_16x9.jpg?w=992",
          publishedAt: "2023-11-14T10:08:16Z",
          content:
            "The National Guard will be assisting local police on Tuesday as tens of thousands of people are expected to attend two large-scale demonstrations in the nation's capital, according to officials.\r\nThe… [+3010 chars]",
        },
        {
          source: {
            id: null,
            name: "Yahoo Entertainment",
          },
          author: "Sujata Rao and Tassia Sipahutar",
          title:
            "Stocks Edge Up as Traders Bet on Slowing Inflation: Markets Wrap - Yahoo Finance",
          description:
            "(Bloomberg) -- Global stocks and bonds edged higher ahead on speculation that a crucial US inflation report will show that price pressures slowed last month,...",
          url: "https://finance.yahoo.com/news/asia-stocks-set-gain-cpi-223451371.html",
          urlToImage:
            "https://s.yimg.com/ny/api/res/1.2/YmlCbYb6nPL3d.xbrMR46A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03MDc-/https://media.zenfs.com/en/bloomberg_markets_842/bf1809e2194a23fa26e2c2653866cb23",
          publishedAt: "2023-11-14T10:02:29Z",
          content:
            "(Bloomberg) -- Global stocks and bonds edged higher ahead on speculation that a crucial US inflation report will show that price pressures slowed last month, cementing the view that interest rates ha… [+5070 chars]",
        },
        {
          source: {
            id: null,
            name: "NPR",
          },
          author: "Alejandra Borunda",
          title: "How climate change affects life in the U.S. - NPR",
          description:
            "Climate change costs tens of billions of dollars each year, hurts Americans' health and disrupts everyday life, including how we work, eat, play and mourn, according to a major new assessment.",
          url: "https://www.npr.org/2023/11/14/1206506962/climate-change-affects-your-life-in-3-big-ways-a-new-report-warns",
          urlToImage:
            "https://media.npr.org/assets/img/2023/11/13/ap20216281153675_wide-95e5477d3e8ffba84924e53974e61e82005f392d-s1400-c100.jpg",
          publishedAt: "2023-11-14T10:00:46Z",
          content:
            "Climate change is expensive, deadly and preventable, according to the new National Climate Assessment, the most sweeping, sophisticated federal analysis of climate change compiled to date.\r\nReleased … [+11036 chars]",
        },
        {
          source: {
            id: null,
            name: "Yahoo Entertainment",
          },
          author: "Lauryn Overhultz",
          title:
            "Taylor Swift, Travis Kelce's PDA signals NFL player is 'endgame' for pop star: expert - Yahoo Entertainment",
          description:
            'Taylor Swift and Travis Kelce took their relationship public during the "Karma" singer\'s "Eras Tour" with new lyrics and a kiss. Experts explain the change...',
          url: "https://www.yahoo.com/entertainment/taylor-swift-travis-kelces-pda-100044257.html",
          urlToImage:
            "https://s.yimg.com/ny/api/res/1.2/fB7Bn_6aZDpY0HfXqJjv0w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/fox_news_text_979/cf0346935eb40c88d2f9fd638cc855a1",
          publishedAt: "2023-11-14T10:00:44Z",
          content:
            "Taylor Swift continues to surprise fans with her very public relationship with Kansas City Chiefs star Travis Kelce.\r\nKelce, 34, traveled to Argentina to watch Swift, 33, begin her international leg … [+8149 chars]",
        },
        {
          source: {
            id: "politico",
            name: "Politico",
          },
          author: null,
          title:
            "White House weighed polling urging a 'Bidenomics' reboot - POLITICO",
          description:
            "Top White House aides reviewed private polling showing Biden's economic message falling flat and suggesting paths toward a turnaround.",
          url: "https://www.politico.com/news/2023/11/14/white-house-bidenomics-polling-00126982",
          urlToImage:
            "https://static.politico.com/33/39/6eee59b64acfa2b9c6ae97a41274/biden-40161.jpg",
          publishedAt: "2023-11-14T10:00:00Z",
          content:
            "Just 35 percent of Americans trusted Democrats more on economic issues, according to weeks of private polling presented to the White House in mid-September and recently obtained by POLITICO. The data… [+8423 chars]",
        },
        {
          source: {
            id: "abc-news",
            name: "ABC News",
          },
          author: "MARÍA VERZA Associated Press",
          title:
            "A missing sailor's last message from Hurricane Otis was to ask his family to pray for him - ABC News",
          description:
            "When Hurricane Otis roared into Acapulco Bay on Oct 25 with 165 mph winds, sailor Ruben Torres recorded a 10-second audio message from a yacht called the Sereno",
          url: "https://abcnews.go.com/International/wireStory/missing-sailors-message-hurricane-otis-family-pray-104868663",
          urlToImage:
            "https://i.abcnewsfe.com/a/b103ded7-d78d-4720-8e17-e96eedc3e961/wirestory_9d804784735d916e5926271c9cde9565_16x9.jpg?w=992",
          publishedAt: "2023-11-14T05:38:32Z",
          content:
            "ACAPULCO, Mexico -- During the first minutes of Oct. 25 when Hurricane Otis roared into Acapulco Bay with 165 mph winds, sailor Ruben Torres recorded a 10-second audio message from a yacht called the… [+6980 chars]",
        },
        {
          source: {
            id: null,
            name: "ScienceAlert",
          },
          author: "Mike McRae",
          title:
            "Sitting Down Is So Bad For You, Even Sleeping Is Better - ScienceAlert",
          description: "We've got some unfortunate news for you.",
          url: "https://www.sciencealert.com/sitting-down-is-so-bad-for-you-even-sleeping-is-better",
          urlToImage:
            "https://www.sciencealert.com/images/2023/11/man_sleeping_mouth_open.jpg",
          publishedAt: "2023-11-14T05:32:31Z",
          content:
            "We've got some unfortunate news for you. Are you sitting down? Perhaps you shouldn't be \r\nA new cross-sectional meta-study by an international team of researchers has ranked the movements and positio… [+3827 chars]",
        },
        {
          source: {
            id: "bloomberg",
            name: "Bloomberg",
          },
          author: "Matthew Boesler",
          title:
            "US CPI Report: Inflation Data to Show Fed May Not Be Done With Rate Hikes - Bloomberg",
          description:
            "A monthly US government report on consumer prices due Tuesday is set to show slower progress toward the Federal Reserve’s 2% inflation target, keeping the central bank biased toward more tightening, according to Bloomberg Economics.",
          url: "https://www.bloomberg.com/news/articles/2023-11-14/us-cpi-report-inflation-data-to-show-fed-may-not-be-done-with-rate-hikes",
          urlToImage:
            "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iHSfdIL4pJ_E/v0/1200x800.jpg",
          publishedAt: "2023-11-14T05:14:17Z",
          content:
            "A monthly US government report on consumer prices due Tuesday is set to show slower progress toward the Federal Reserves 2% inflation target, keeping the central bank biased toward more tightening, a… [+318 chars]",
        },
        {
          source: {
            id: "cbs-news",
            name: "CBS News",
          },
          author: "Caitlin Yilek, Ellis Kim",
          title:
            "House to consider stopgap funding measure Tuesday to avert government shutdown - CBS News",
          description:
            "Congress faces a Friday deadline to fund the government and avert a shutdown.",
          url: "https://www.cbsnews.com/news/government-shutdown-2023-mike-johnson-stopgap-funding-bill/",
          urlToImage:
            "https://assets2.cbsnewsstatic.com/hub/i/r/2023/11/13/4c4ac1df-9d02-4f65-84cc-3cd6d2c411e0/thumbnail/1200x630/af71b18558f23cdf895588642adb9042/ap23308041107655.jpg?v=8afad5e29ac9a704fff9d98ba34d3649",
          publishedAt: "2023-11-14T04:52:00Z",
          content:
            "Washington — House Speaker Mike Johnson's plan to prevent a government shutdown will be considered by the House Tuesday, according to a notice sent to lawmakers late Monday night.\r\nThe stopgap measur… [+5491 chars]",
        },
        {
          source: {
            id: null,
            name: "Forbes",
          },
          author: "John Koetsier",
          title: "Bill Gates And Humane’s AI Pin: AI Is The Interface - Forbes",
          description:
            '“If you’re wearing both the Humane AI pin and the Meta Raybans and touch both at the same time, a screenshot of your life is taken and uploaded to the cloud."',
          url: "https://www.forbes.com/sites/johnkoetsier/2023/11/13/bill-gates-and-humanes-ai-pin-ai-is-the-interface/",
          urlToImage:
            "https://imageio.forbes.com/specials-images/imageserve/654e80a60871b0a27f20b319/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
          publishedAt: "2023-11-14T04:41:40Z",
          content:
            "Screenshot of Humane's AI Pin, a $700 AI assistant.\r\nJohn Koetsier\r\nLast week Humane unveiled an AI Pin you wear on your chest, buy a monthly mobile subscription for, and summon when needed. At $700,… [+6286 chars]",
        },
        {
          source: {
            id: "cbs-news",
            name: "CBS News",
          },
          author: null,
          title:
            'Paul Pelosi testifies in federal trial of David DePape, accused in hammer attack; "I recognized I was in serious danger" - CBS San Francisco',
          description:
            "Paul Pelosi on Monday described on the witness stand the shocking intrusion at his and his wife Nancy Pelosi's San Francisco mansion a year ago that culminated in a brutal hammer attack that fractured his skull.",
          url: "https://www.cbsnews.com/sanfrancisco/news/paul-pelosi-david-depape-san-francisco-hammer-attack-nancy-pelosi-house-speaker/",
          urlToImage:
            "https://assets2.cbsnewsstatic.com/hub/i/r/2023/11/13/4da4bda9-d198-4a88-8787-0be1edee691d/thumbnail/1200x630/c1309466656d56d12eabe06f0f446ab9/paul-pelosi-on-the-stand.jpg?v=8afad5e29ac9a704fff9d98ba34d3649",
          publishedAt: "2023-11-14T03:27:00Z",
          content:
            "Paul Pelosi on Monday described on the witness stand the shocking intrusion at his and his wife Nancy Pelosi's San Francisco mansion last year that culminated in a brutal hammer attack that fractured… [+7605 chars]",
        },
       
      ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h1>Hot News Headlines</h1>

        <div className="row">
          {this.state.articles.map((element) => {
            return(
                <div className="col-md-4">
              <NewsItem
              key={element.url}
                title={element.title.slice(0,40)}
                description={element.description.slice(0,80)}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default News;
