import produce from "immer";
const baseState = {
    loading: false,
    error: "",
    stocks:[
            {
                c: 317.68,
                h: 319.1,
                l: 315.7501,
                o: 317.83,
                pc: 315.01,
                t: 1589292187,
                ticker: 'AAPL',
                profile: {
                country: 'US',
                currency: 'USD',
                exchange: 'NASDAQ NMS - GLOBAL MARKET',
                finnhubIndustry: 'Technology',
                ipo: '1980-12-12',
                logo: 'https://static.finnhub.io/logo/87cb30d8-80df-11ea-8951-00000000092a.png',
                marketCapitalization: 1344207,
                name: 'Apple Inc',
                phone: '14089961010',
                shareOutstanding: 4334.335,
                ticker: 'AAPL',
                weburl: 'https://www.apple.com/'
                }
            }
        ],
    news:[
            {
              category: 'company',
              datetime: 1589241600,
              headline: 'VeriSilicon VIP9000 and ZSP are Adopted by iCatch Next Generation AI-powered Automotive Image Processing SoC',
              id: 1918412,
              image: 'https://mms.businesswire.com/media/20200511005174/en/410302/21/VS.jpg',
              related: 'DSPG,CSPI,AMCT,NVDA,JRVS,AAPL,ACIA,ANDR',
              source: 'businesswire',
              summary: 'iCatch Technology, Inc. (TPEX: 6695) has selected VeriSilicon VIP9000 NPU and ZSPNano DSP IP.',
              url: 'https://www.businesswire.com/news/home/20200511005174/en/VeriSilicon-VIP9000-ZSP-Adopted-iCatch-Generation-AI-powered'
            },
            {
              category: 'company',
              datetime: 1589241600,
              headline: 'VeriSilicon VIP9000 und ZSP werden von iCatch in dem mit künstlicher Intelligenz ausgestatteten SoC zur Bildverarbeitung in Fahrzeugen eingesetzt',
              id: 1918420,
              image: 'https://mms.businesswire.com/media/20200511005291/de/410302/21/VS.jpg',
              related: 'ACIA,ANDR,DSPG,CSPI,AMCT,AAPL',
              source: 'businesswire',
              summary: 'iCatch Technology, Inc. (TPEX: 6695) has selected VeriSilicon VIP9000 NPU and ZSPNano DSP IP.',
              url: 'https://www.businesswire.com/news/home/20200511005291/de'
            },
            {
              category: 'company',
              datetime: 1589241600,
              headline: '芯鼎科技下一代汽車智慧影像處理SoC採用芯原VIP9000和ZSP',
              id: 1918766,
              image: 'https://mms.businesswire.com/media/20200511005981/zh-HK/410302/21/VS.jpg',
              related: 'AMCT,AAPL',
              source: 'businesswire',
              summary: '(美國商業資訊)--芯原 (VeriSilicon)今天宣布，全球低功耗智慧影像處理SoC解決方案的領導廠商芯鼎科技(iCatch Technology, Inc., TPEX: 6695)已選擇芯原VIP9000神經網路處理器(NPU)和ZSPNano數位訊號處理器(DSP) IP。這兩款IP都將',
              url: 'https://www.businesswire.com/news/home/20200511005981/zh-HK'
            },
            {
              category: 'company',
              datetime: 1589241600,
              headline: 'NASDAQ Winning Streak Reaches Six Days as Tech Keeps Rising',
              id: 1923728,
              image: 'https://i-invdn-com.akamaized.net/redesign/images/seo/v2/investingcom_analysis_og.jpg',
              related: 'JCE,DLPX,QQQX,NFLX,AACS,SSFT,BXMX,SPGI,AAPL,BERY,AMZN,WETF,BEST,BLBX,SPXX,KMB,BBY,MSFT,NDAQ,STK,RAFI,VCLD,DVA',
              source: 'investing',
              summary: 'Stocks Analysis by Zacks Investment Research covering: Microsoft Corporation, General Mills Inc, Kimberly-Clark Corporation, SPDR S&P 500. Read Zacks Investment Research\'s latest article on Investing.com',
              url: 'https://www.investing.com/analysis/nasdaq-winning-streak-reaches-six-days-as-tech-keeps-rising-200524340'
            },
            {
              category: 'company',
              datetime: 1589241600,
              headline: 'Smartphone shipments in China up 17% in April, signalling likely rebound: government data',
              id: 1926735,
              image: 'https://i-invdn-com.akamaized.net/trkd-images/LYNXMPEG4B0D1_M.jpg',
              related: 'AAPL,ITDD,IDND',
              source: 'investing',
              summary: 'Smartphone shipments in China up 17% in April, signalling likely rebound: government data',
              url: 'https://www.investing.com/news/technology-news/smartphone-shipments-in-china-up-17-in-april-signalling-likely-rebound-government-data-2168976'
            },
            {
              category: 'company',
              datetime: 1589241600,
              headline: 'Disney Plans Another Bonds Offering With A Six-Part Deal',
              id: 1926973,
              image: 'https://cdn.benzinga.com/files/imagecache/og_image_social_share_1200x630/images/story/2012/walt.jpeg',
              related: 'PRLE,GGLT,WSFL,DIS,MS,CVCS,TGGI,AAPL,MSD,PYPL,BLBX,ITPC,GFWQZ,CAF,EDD,GS,ISDR,ZIXI,MAT,IIF,DHY,CIK',
              source: 'benzinga',
              summary: 'The Walt Disney Company (NYSE: DIS) is planning a second debt offering this year, according to its filing with the Securities and Exchange Commission.\nWhat Happened\nDisney didn...',
              url: 'https://www.benzinga.com/news/20/05/16007581/disney-plans-another-bonds-offering-with-a-six-part-deal'
            },
            {
              category: 'company',
              datetime: 1589241600,
              headline: 'Garmin® enriches its luxury timepiece collection with the commemorative MARQ® Captain: American Magic Edition',
              id: 1928956,
              image: 'https://mms.businesswire.com/media/20200512005009/en/790200/23/MARQamericanmagic_pressrelease2.jpg',
              related: 'PTVL,AAPL',
              source: 'businesswire',
              summary: 'Garmin International, Inc., a unit of Garmin Ltd. (NASDAQ: GRMN), today announced the MARQ Captain: American Magic Edition, a special-edition commemor',
              url: 'https://www.businesswire.com/news/home/20200512005009/en/Garmin%C2%AE-enriches-luxury-timepiece-collection-commemorative-MARQ%C2%AE'
            },
            {
              category: 'company',
              datetime: 1589241600,
              headline: 'Garmin® enriches its luxury timepiece collection with the commemorative MARQ® Captain: American Magic Edition',
              id: 1929083,
              image: 'https://mms.businesswire.com/media/20200512005009/en/790200/23/MARQamericanmagic_pressrelease2.jpg',
              related: 'PTVL,AAPL',
              source: 'businesswire',
              summary: 'Garmin International, Inc., a unit of Garmin Ltd. (NASDAQ: GRMN), today announced the MARQ Captain: American Magic Edition, a special-edition commemor',
              url: 'https://www.businesswire.com/news/home/20200512005009/en/4755035/Garmin%C2%AE-enriches-luxury-timepiece-collection-commemorative-MARQ%C2%AE'
            },
            {
              category: 'company',
              datetime: 1589241600,
              headline: 'Garmin® enriches its luxury timepiece collection with the commemorative MARQ® Captain: American Magic Edition',
              id: 1929091,
              image: 'https://mms.businesswire.com/media/20200512005009/en/790200/23/MARQamericanmagic_pressrelease2.jpg',
              related: 'PTVL,AAPL',
              source: 'businesswire',
              summary: 'Garmin International, Inc., a unit of Garmin Ltd. (NASDAQ: GRMN), today announced the MARQ Captain: American Magic Edition, a special-edition commemor',
              url: 'https://www.businesswire.com/news/home/20200512005009/en/4755036/Garmin%C2%AE-enriches-luxury-timepiece-collection-commemorative-MARQ%C2%AE'
            },
            {
              category: 'company',
              datetime: 1589241600,
              headline: 'Not Just Fun And Games: How Esports Could Offer Potential Investment Opportunities',
              id: 1929250,
              image: 'https://cdn.benzinga.com/files/imagecache/og_image_social_share_1200x630/images/story/2012/photo-of-person-typing-on-computer-keyboard-735911_0.jpg',
              related: 'AAPL,XLNX,AMZN,QCOM,COKE,KO,MNST,GOOGL,TTWO',
              source: 'benzinga',
              summary: 'Like to play Fortnite or League of Legends? You’re in good company, because esports have become hugely popular. And esports investing and esports stocks have benefited....',
              url: 'https://www.benzinga.com/general/education/20/05/16008509/not-just-fun-and-games-how-esports-could-offer-potential-investment-opportunities'
            },
            {
              category: 'company',
              datetime: 1589241600,
              headline: 'GreenGen Ventures Announces Equity Investment in Wynd Technologies',
              id: 1931037,
              image: 'http://www.businesswire.com/images/bwlogo_square.png',
              related: 'AAPL',
              source: 'businesswire',
              summary: 'GreenGen Ventures today announced it has structured and invested in a new round of financing for Wynd Technologies.',
              url: 'https://www.businesswire.com/news/home/20200512005115/en/GreenGen-Ventures-Announces-Equity-Investment-Wynd-Technologies'
            },
            {
              category: 'company',
              datetime: 1589241600,
              headline: 'Apple Unveils Biggest Update to Logic Since the Launch of Logic Pro X',
              id: 1932082,
              image: 'https://mms.businesswire.com/media/20200512005293/en/791036/23/apple_logic-pro-update_macbookpro-ipadpro_05122020.jpg',
              related: 'AAPL,FRZT,PXPP,RIVX',
              source: 'businesswire',
              summary: 'Apple® today unveiled a major update to Logic Pro® X with a professional version of Live Loops, a completely redesigned sampling workflow, and new bea',
              url: 'https://www.businesswire.com/news/home/20200512005293/en/Apple-Unveils-Biggest-Update-Logic-Launch-Logic'
            },
            {
              category: 'company',
              datetime: 1589241600,
              headline: 'COVID-19 Impact and Recovery Analysis | Graphics Processing Unit (GPU) Market 2020-2024 | Demand for High Memory GPU to Boost Growth | Technavio',
              id: 1932533,
              image: 'https://mms.businesswire.com/media/20200512005497/en/791096/23/IRTNTR41565.jpg',
              related: 'QCOM,AVGO,NVDA,JRVS,INTC,ASNT,AAPL,AMD',
              source: 'businesswire',
              summary: 'The graphics processing unit market size has the potential to grow by USD 38.28 bn during 2020-2024',
              url: 'https://www.businesswire.com/news/home/20200512005497/en/COVID-19-Impact-Recovery-Analysis-Graphics-Processing-Unit'
            },
            {
              category: 'company',
              datetime: 1589241600,
              headline: 'COVID-19 Impact and Recovery Analysis | Graphics Processing Unit (GPU) Market 2020-2024 | Demand for High Memory GPU to Boost Growth | Technavio',
              id: 1932652,
              image: 'https://mms.businesswire.com/media/20200512005497/en/791096/23/IRTNTR41565.jpg',
              related: 'JRVS,AVGO,QCOM,INTC,ASNT,AAPL,AMD,NVDA',
              source: 'businesswire',
              summary: 'The graphics processing unit market size has the potential to grow by USD 38.28 bn during 2020-2024',
              url: 'https://www.businesswire.com/news/home/20200512005497/en/4755195/COVID-19-Impact-Recovery-Analysis-Graphics-Processing-Unit'
            },
            {
              category: 'company',
              datetime: 1589241600,
              headline: 'COVID-19 Impact and Recovery Analysis | Graphics Processing Unit (GPU) Market 2020-2024 | Demand for High Memory GPU to Boost Growth | Technavio',
              id: 1932674,
              image: 'https://mms.businesswire.com/media/20200512005497/en/791096/23/IRTNTR41565.jpg',
              related: 'AMD,AVGO,NVDA,JRVS,AAPL,INTC,ASNT,QCOM',
              source: 'businesswire',
              summary: 'The graphics processing unit market size has the potential to grow by USD 38.28 bn during 2020-2024',
              url: 'https://www.businesswire.com/news/home/20200512005497/en/4755196/COVID-19-Impact-Recovery-Analysis-Graphics-Processing-Unit'
            },
            {
              category: 'company',
              datetime: 1589241600,
              headline: 'Federal Stimulus Funds for Cannabis Businesses Would Save Tens of Thousands of American Jobs, New Survey Finds',
              id: 1933312,
              image: 'https://mms.businesswire.com/media/20200512005214/en/790990/23/COVID-PressRelease-v5-1920x1080%404x_highres.jpg',
              related: 'NCR,AAPL',
              source: 'businesswire',
              summary: 'A new national survey from Leafly and the National Cannabis Roundtable shows that providing cannabis businesses COVID-19 federal relief and stimulus f',
              url: 'https://www.businesswire.com/news/home/20200512005214/en/Federal-Stimulus-Funds-Cannabis-Businesses-Save-Tens'
            },
            {
              category: 'company',
              datetime: 1589241600,
              headline: 'Federal Stimulus Funds for Cannabis Businesses Would Save Tens of Thousands of American Jobs, New Survey Finds',
              id: 1933399,
              image: 'https://mms.businesswire.com/media/20200512005214/en/790990/23/COVID-PressRelease-v5-1920x1080%404x_highres.jpg',
              related: 'AAPL,NCR',
              source: 'businesswire',
              summary: 'A new national survey from Leafly and the National Cannabis Roundtable shows that providing cannabis businesses COVID-19 federal relief and stimulus f',
              url: 'https://www.businesswire.com/news/home/20200512005214/en/4755253/Federal-Stimulus-Funds-Cannabis-Businesses-Save-Tens'
            },
            {
              category: 'company',
              datetime: 1589241600,
              headline: 'Federal Stimulus Funds for Cannabis Businesses Would Save Tens of Thousands of American Jobs, New Survey Finds',
              id: 1933401,
              image: 'https://mms.businesswire.com/media/20200512005214/en/790990/23/COVID-PressRelease-v5-1920x1080%404x_highres.jpg',
              related: 'AAPL,NCR',
              source: 'businesswire',
              summary: 'A new national survey from Leafly and the National Cannabis Roundtable shows that providing cannabis businesses COVID-19 federal relief and stimulus f',
              url: 'https://www.businesswire.com/news/home/20200512005214/en/4755231/Federal-Stimulus-Funds-Cannabis-Businesses-Save-Tens'
            },
            {
              category: 'company',
              datetime: 1589241600,
              headline: 'Federal Stimulus Funds for Cannabis Businesses Would Save Tens of Thousands of American Jobs, New Survey Finds',
              id: 1933415,
              image: 'https://mms.businesswire.com/media/20200512005214/en/790990/23/COVID-PressRelease-v5-1920x1080%404x_highres.jpg',
              related: 'AAPL,NCR',
              source: 'businesswire',
              summary: 'A new national survey from Leafly and the National Cannabis Roundtable shows that providing cannabis businesses COVID-19 federal relief and stimulus f',
              url: 'https://www.businesswire.com/news/home/20200512005214/en/4755252/Federal-Stimulus-Funds-Cannabis-Businesses-Save-Tens'
            },
            {
              category: 'company',
              datetime: 1589241600,
              headline: 'Insights into the Worldwide Natural Language Processing in Healthcare and Life Sciences Industry to 2026 - Key Market Developments and Financials of the Key Players - ResearchAndMarkets.com',
              id: 1937461,
              image: 'https://mms.businesswire.com/media/20200512005642/en/371054/23/ResearchAndMarkets_800px.jpg',
              related: 'GOOGL,ZCOR,SFIN,MDRM,BDX,AVXL,NDRA,RPAY,VCLD,A,HURN,ACHV,ICOA,AAPL,VRNT,CDWD,KZR,DTGI,MSFT,SSFT',
              source: 'businesswire',
              summary: 'The',
              url: 'https://www.businesswire.com/news/home/20200512005642/en/Insights-Worldwide-Natural-Language-Processing-Healthcare-Life'
            },
            {
              category: 'company',
              datetime: 1589241600,
              headline: 'Analyst Polishes Apple Price Target On \'Teflon-Like\' Services, iPhone 12 Outlook',
              id: 1937613,
              image: 'https://cdn.benzinga.com/files/imagecache/og_image_social_share_1200x630/images/story/2012/1600px-aerial_view_of_apple_park_dllu_2.jpg',
              related: 'AAPL',
              source: 'benzinga',
              summary: 'As one of the first U.S. businesses disrupted by the coronavirus, Apple Inc. (NASDAQ: AAPL) seemed to be a model of superior survival techniques. Now, Apple is approaching future...',
              url: 'https://www.benzinga.com/analyst-ratings/analyst-color/20/05/16010047/analyst-polishes-apple-price-target-on-teflon-like-services-iphone-12-outlook'
            }
    ],
    };



const reducer = produce((state, action) => {
    switch(action.type){
        case "LOAD_STOCK":
            state.stocks.push(action.payload[0]);
            state.news.push(action.payload[1]);

            const uniqueStock = state.stocks.map(function (val, index) {
                return val;
            }).filter(function (val, index, arr) {
                console.log(arr.indexOf(val),index)
                return arr.indexOf(val) === index;
            });
            state.stocks = uniqueStock;
            
            const unique = state.news.map(function (val, index) {
                return val;
            }).filter(function (val, index, arr) {
                return arr.indexOf(val) === index;
            });
            state.news = unique
            break;
        case 'ERROR':
            state.error = action.payload;
            break;
        case 'CLEAR_ERRORS':
            state.error = null;
            break;
        case 'START_LOADING':
            state.loading = true;
            break;
        case 'END_LOADING':
            state.loading = false;
            break;
        default:
            break;
    }
}, baseState); 

export default reducer;