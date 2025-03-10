'use strict';(function(){var cmpFile='noModule'in HTMLScriptElement.prototype?'cmp2.js':'cmp2-polyfilled.js';(function(){var cmpScriptElement=document.createElement('script');var firstScript=document.getElementsByTagName('script')[0];cmpScriptElement.async=true;cmpScriptElement.type='text/javascript';var cmpUrl;var tagUrl=document.currentScript.src;cmpUrl='https://cmp.inmobi.com/tcfv2/CMP_FILE?referer=www.tradera.com'.replace('CMP_FILE',cmpFile);cmpScriptElement.src=cmpUrl;firstScript.parentNode.insertBefore(cmpScriptElement,firstScript);})();(function(){var css=""
+" .qc-cmp-button { "
+"   background-color: #003B29 !important; "
+"   border-color: #003B29 !important; "
+" } "
+" .qc-cmp-button:hover { "
+"   border-color: #003B29 !important; "
+" } "
+" .qc-cmp-alt-action, "
+" .qc-cmp-link { "
+"   color: #003B29 !important; "
+" } "
+" .qc-cmp-button.qc-cmp-secondary-button:hover { "
+"   background-color: #003B29 !important; "
+"   border-color: #003B29 !important; "
+" } "
+" .qc-cmp-button.qc-cmp-secondary-button:hover { "
+"   color: #ffffff !important; "
+" } "
+" .qc-cmp-button.qc-cmp-secondary-button { "
+"   color: #003B29 !important; "
+" } "
+" .qc-cmp-button.qc-cmp-secondary-button { "
+"   background-color: #eee !important; "
+"   border-color: transparent !important; "
+" } "
+" .qc-cmp-ui, "
+" .qc-cmp-ui .qc-cmp-title, "
+" .qc-cmp-ui .qc-cmp-table, "
+" .qc-cmp-ui .qc-cmp-messaging, "
+" .qc-cmp-ui .qc-cmp-sub-title, "
+" .qc-cmp-ui .qc-cmp-vendor-list, "
+" .qc-cmp-ui .qc-cmp-purpose-info, "
+" .qc-cmp-ui .qc-cmp-table-header, "
+" .qc-cmp-ui .qc-cmp-beta-messaging, "
+" .qc-cmp-ui .qc-cmp-main-messaging, "
+" .qc-cmp-ui .qc-cmp-vendor-list-title{ "
+"   color: #000000 !important; "
+" } "
+" .qc-cmp-ui a, "
+" .qc-cmp-ui .qc-cmp-alt-action { "
+"   color: #006e9e !important; "
+" } "
+" .qc-cmp-small-toggle.qc-cmp-toggle-on, "
+" .qc-cmp-toggle.qc-cmp-toggle-on { "
+"   background-color: #004833!important; "
+"   border-color: #004833!important; "
+" } "
+"#qc-cmp2-ui { pointer-events: visible;}"
+""
+"";var stylesElement=document.createElement('style');var re=new RegExp('&quote;','g');css=css.replace(re,'"');stylesElement.type='text/css';if(stylesElement.styleSheet){stylesElement.styleSheet.cssText=css;}else{stylesElement.appendChild(document.createTextNode(css));}
var head=document.head||document.getElementsByTagName('head')[0];head.appendChild(stylesElement);})();var autoDetectedLanguage='en';var gvlVersion=3;function splitLang(lang){return lang.length>2?lang.split('-')[0]:lang;};function isSupported(lang){var langs=['en','fr','de','it','es','da','nl','el','hu','pt','pt-br','pt-pt','ro','fi','pl','sk','sv','no','ru','bg','ca','cs','et','hr','lt','lv','mt','sl','tr','zh'];return langs.indexOf(lang)===-1?false:true;};if(gvlVersion===2&&isSupported(splitLang(document.documentElement.lang))){autoDetectedLanguage=splitLang(document.documentElement.lang);}else if(gvlVersion===3&&isSupported(document.documentElement.lang)){autoDetectedLanguage=document.documentElement.lang;}else if(isSupported(splitLang(navigator.language))){autoDetectedLanguage=splitLang(navigator.language);};var choiceMilliSeconds=(new Date).getTime();window.__tcfapi('init',2,function(){},{"coreConfig":{"inmobiAccountId":"faq-5Ptt6RJte","privacyMode":["GDPR"],"hashCode":"Zv3gOJAa+jEPv3arRY+9Ew","publisherCountryCode":"SE","publisherName":"Tradera","vendorPurposeIds":[1,2,7,8,10,11,3,5,4,9,6],"vendorFeaturesIds":[1,2,3],"vendorPurposeLegitimateInterestIds":[7,8,9,2,10,11],"vendorSpecialFeaturesIds":[2,1],"vendorSpecialPurposesIds":[1,2],"googleEnabled":true,"consentScope":"service","thirdPartyStorageType":"iframe","consentOnSafari":false,"displayUi":"always","defaultToggleValue":"off","initScreenRejectButtonShowing":false,"initScreenCloseButtonShowing":false,"softOptInEnabled":false,"showSummaryView":true,"persistentConsentLinkLocation":1,"displayPersistentConsentLink":false,"uiLayout":"banner","publisherLogo":"https://www.tradera.com/static/images/logos/tradera-logo-2021.svg?qc-size=1993,353","vendorListUpdateFreq":30,"publisherPurposeIds":[],"initScreenBodyTextOption":1,"publisherConsentRestrictionIds":[],"publisherLIRestrictionIds":[],"publisherPurposeLegitimateInterestIds":[],"publisherSpecialPurposesIds":[],"publisherFeaturesIds":[],"publisherSpecialFeaturesIds":[],"stacks":[1,42],"lang_":autoDetectedLanguage,"gvlVersion":3,"totalVendors":69},"premiumUiLabels":{"initScreenCustomLinks":[{"label":"Tradera cookie policy ","link":"https://info.tradera.com/cookies-webb-beacons-och-liknande-teknik/"}]},"premiumProperties":{"vendorBlacklist":[1111,92,217,58,876,740,628,174,272,1038,806,1271,318,1187,1252,40,1098,231,788,1256,331,147,649,1205,953,738,377,539,1019,196,1203,44,790,553,556,1149,39,14,1033,93,447,1273,47,149,1289,1281,1094,22,511,889,612,1210,855,799,902,834,1072,224,1212,613,430,941,615,6,66,205,999,507,1199,779,1200,410,211,326,827,1163,199,195,27,1071,798,1287,822,1022,900,1280,697,959,746,259,1279,1141,1218,782,1176,1169,501,598,925,1154,1254,922,1258,1195,891,780,1097,1116,1182,155,733,354,728,1283,1223,879,498,1173,1193,495,685,215,1067,409,1058,797,1237,119,717,160,742,944,783,561,748,1230,496,956,907,647,610,124,461,1120,1020,771,801,1255,156,1069,1275,618,946,666,920,1106,724,715,736,1134,1272,128,185,625,450,658,94,815,620,684,1105,1294,374,1151,163,1155,1181,741,422,1129,869,934,329,848,235,676,986,1081,2,954,1087,729,840,315,890,1217,572,963,734,1080,1146,1139,1222,767,1257,319,1293,958,973,996,1206,285,416,378,77,56,1164,143,138,591,630,656,248,1140,683,1104,85,1026,298,875,570,1274,573,1225,1284,713,1244,938,1229,440,209,397,1029,707,122,885,1226,665,936,133,343,778,833,754,1075,1215,262,674,584,110,796,168,929,825,1202,402,1243,854,1228,213,141,1248,1261,853,849,24,45,244,1295,814,1213,29,413,773,957,1062,444,1084,1224,1027,997,877,1,1002,347,795,756,781,1207,100,1240,1178,766,471,1221,323,1190,970,1204,1250,1107,1016,888,1267,1198,1055,316,644,455,731,328,1251,87,845,892,758,1017,768,536,967,975,690,580,274,749,657,765,1232,1231,61,550,995,1031,787,865,1247,881,626,1177,1112,431,1050,206,178,699,1201,864,978,131,721,606,10,479,1136,730,871,935,333,535,452,150,910,596,677,436,438,811,991,896,930,1068,1156,872,252,49,838,294,62,745,569,820,1214,972,528,314,1278,1245,751,325,955,794,1165,424,702,1110,810,994,1175,804,254,884,497,1159,148,919,587,1046,1188,109,508,63,998,1132,228,75,1147,486,55,153,202,317,270,943,614,770,776,1291,671,791,1122,142,987,769,184,193,858,1196,1209,358,216,703,867,101,279,687,311,581,1003,898,663,807,1211,737,151,1018,1290,681,20,72,1133,263,878,1246,709,530,34,982,48,521,37,519,502,1286,568,1060,1233,130,965,36,23,1085,816,624,646,1119,784,882,388,832,1113,31,304,716,509,708,1269,1006,241,617,719,883,602,1061,255,1049,280,1263,1135,488,227,915,1266,1064,385,1148,137,559,466,976,732,1227,139,361,856,516,1101,412,727,127,903,140,490,1070,961,297,1249,803,874,1079,1037,1185,1032,952,427,418,725,1277,860,1260,850,842,81,808,835,990,880,993,1059,1048,1235,554,682,60,57,1220,290,1025,1157,1264,631,1242,1100,1167,1121,192,800,659,1162,1045,1189,819,203,759,375,194,108,454,1021,308,232,1238,1282,302,351,350,1051,1015,1285,1103,1184,1090,371,157,775,84,1083,491,621,33,80,337,111,276,1241,59,927,435,53,1172,652,46,1030,82,161,115,531,969,246,134,534,639,1076,966,937,381,964,1005,857,1153,1039,104,662,13,1028,844,951,918,655,1236,293,1041,1183,238,1216,950,1160,851,1057,136,473,114,1276,517,1174,712,275,962,475,448,786,132,1089,336,90,1124,345,1024,686,1265,750,524,382,894,893,1044,549,931,423,249,387,861,28,239,648,862,1288,673,985,242,1292,828,1043,1078,1108,159,1144,1040,831,459,212,1270,368,1013,26,1137,512,237,1036,1138,744,190,1219,380,571,1208,83,821,1047,1009,1259,1168,706,1004,1014,774,1082,601,870,1130,284,282,968,1001,281,256,1262,1127,718,1142,1253,70,251,173,154,726,1170,210,301,321,1234],"googleWhitelist":[1097,2072,2074,2822,2577,2213,1423,196,3126,70,2677,3331,89]},"coreUiLabels":{},"theme":{"uxPrimaryButtonColor":"#003B29","uxSecondaryButtonTextColor":"#003B29","uxToogleActiveColor":"#004833","uxLinkColor":"#006e9e","uxFontColor":"#000000"},"nonIabVendorsInfo":{}});})();