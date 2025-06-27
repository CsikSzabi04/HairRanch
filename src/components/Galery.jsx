import React, { useEffect, useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Add this

export default function Gallery() {
    const backgroundImages = [
        'https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/476642181_958238803078088_6569819926274068318_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ESQPViOXsygQ7kNvwHgJSPF&_nc_oc=AdmFRtk6sWoTgbyyolngnuKjPqJ3ZwODjb_jLZQO271zgj_gS7PC2TDs2WjyvffC0ZU&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=vP3ukRNKg_R17sldnhy0RA&oh=00_AfM_t5UDkTDpEUHLhVbtYFnzdnzyzvvaFmeVvn4rUXK_cw&oe=68619E1D',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/478550878_958205083081460_8112387189180257591_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=kUwdnw_ZFHAQ7kNvwEMa7YZ&_nc_oc=Adlovk9_n-BlzADzPCpLPBWWz-RxWtfj4crUHlrXiEvjOY3GSWqEvg5yRoizToSqxsc&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=6DLu8JG2aST2FqVYnl5Qzg&oh=00_AfNselMFxM5ksh_vYcHF8W8W-N5S2ebNGPU7I_oLUM-laA&oe=6861B5D5',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/480321193_2363125980717803_2864059631123242665_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=0xcwp32VipMQ7kNvwFNPHl8&_nc_oc=AdkB9PMM3AAlhKXDPa7zc4CqetVFEawOkKiRl13uH9mVZ6ePrizYSnJEARRQi7WH7N4&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=iWpl5MdJRWKyzmbDmdVRNw&oh=00_AfMDWBMF7UjZbd1CS8W0T-6GUNkh7-YPdyLEQ9wBtqXD4g&oe=6861A79E',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/477395311_2360248127672255_3509067091662637486_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=gzAdg6R724MQ7kNvwHFnTnU&_nc_oc=Adnq_W8C_E4LpIyJHwFk26RLl-1pVxw_0i_-UpFry4Gmm3vby8nLvH5c5bmoUPJpMH8&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=iWpl5MdJRWKyzmbDmdVRNw&oh=00_AfP1XMAGntbn0g5vVysno77d6BVUlt-PSHd8adsW2V83XQ&oe=6861C60D',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/475767775_2350735575290177_6061738883889821402_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=UqKRuk-8I-UQ7kNvwH9kqMJ&_nc_oc=Adk2BMjH8pkvgtkBDf_e7muiCDlxUokFE_6U3MpL8uCTBqRVkeXsYsAvNDK2ZOEzm7E&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=NDrQttm4PvDoCT1WfCdgcA&oh=00_AfP-10MzoF1ZkbhhcQBwitp-VcSfx1P0LqaAd8d1PfXO_A&oe=6861BB74',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/100904476_1135584990138581_1461073863222755328_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=1bB41HPx658Q7kNvwHmIawv&_nc_oc=AdmiZ013ATJ7_a5FIhoTYrcM1NCLB-n9a8B2t9E6fdi0PCLr5-uGZBwxGOmRfHk6lbU&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=ryU91CqwTuPq0Y9ufYW-Ng&oh=00_AfO10sTEyYy3ZznmHWaHY5IjQtbePoS5oWom6p9oSnyD8A&oe=68835B1E',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/120756420_1238474816516264_8235871733155360716_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=O4ASvX_mFlsQ7kNvwH61X-N&_nc_oc=AdmblX8H0Mugbk5ulXMVXGCqwZGK1VyXzSnPIIGSeieXQvNpw112rLL0AnuY5bNq48E&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=SHXCJzgsJv2a0cURuHCGvA&oh=00_AfOmZf_gq0tKbXmdD6RlvkYCW0HQFUv6L2fTEc2SunDPhA&oe=6883682F',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/476642181_958238803078088_6569819926274068318_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ESQPViOXsygQ7kNvwHgJSPF&_nc_oc=AdmFRtk6sWoTgbyyolngnuKjPqJ3ZwODjb_jLZQO271zgj_gS7PC2TDs2WjyvffC0ZU&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=vP3ukRNKg_R17sldnhy0RA&oh=00_AfM_t5UDkTDpEUHLhVbtYFnzdnzyzvvaFmeVvn4rUXK_cw&oe=68619E1D',
    ];

    const backgroundImages2 = [
        'https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/477451073_957516319817003_3201065443375624444_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ovtD4-jQmPkQ7kNvwHT3nz6&_nc_oc=Adk-4cNMM8oTSO70V9_yHq8XfTwh-G5Y5pWN8ruUx-dhYMA3cyMDXNJQ88dgu8XSKNA&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=4lTVO9UgJ6SZlCm7k6pbGg&oh=00_AfOTKzmVV50UQlCJvSeMT4YPFwhcnFmSNFkmuhqrodaE5A&oe=6861A55F',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/493571836_2430668880630179_122634646463612576_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=g7ze7jg93I4Q7kNvwF7CtJG&_nc_oc=Adl3kCkbdUUGV4w_iECaDuK0c0OAnNBkcIPtbXy0QZlgNzOyyecWWvyY-9h4uD_XVa4&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=Mq4QMOICF58YWxNB0BGiqw&oh=00_AfNqBZifDhIqkxkEpENvNwJSn7ceizCT9PKySQrXWNkYxg&oe=6861C67D',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/484242950_979632764272025_8084441688912964990_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_V75gj7-zgYQ7kNvwHulHKP&_nc_oc=AdksxEv4BtQmGw0Peps_fs7Oj8iucAlQwXzneF6MEIjip3e0m953VpDsJTwm1wyx_M0&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=bdZnn0oHFaNIYYm2fv-WMA&oh=00_AfOgLn3G3lCv3xi_ckCyFM1pNmvIBhVWn0l_oG6HdOCSDA&oe=6861D6AB',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/481028885_2367045640325837_615872305798432831_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Zfwwh5wEWb8Q7kNvwH-QFsV&_nc_oc=AdlRhZtukYe6mztfM-1ciuz9tXqyRXdMXFQ4bbeVlrYfrW-RwjEzjlAJn8aHPgsPLGA&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=GrAqa2v-CQJsUEgfVGwzZQ&oh=00_AfOR9mKdO9u5VQfLP7ZpHjPPEs5ayxqr4QN4cxDWrQdnVQ&oe=6861A689',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/61122217_850862341944182_5128798105180831744_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KAK0LGPKkrwQ7kNvwG7N36s&_nc_oc=AdmkOIjN8kOD7Ejehv64iADviB2lxnfnghUrJDypUfwWZyR-zazfYH9Yie99Df4o_kM&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=bunyFUqBwkJICVBi05QduA&oh=00_AfPKMtQBeKO4izFQrjanDVO1R0x3yhJSE_EkGMrzu54IUQ&oe=68836781',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/494194964_2431933623837038_9083499561617621604_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_ohc=BpZsuCrh-G8Q7kNvwG8sLDl&_nc_oc=AdkukzYxv7f0XfreMvq-epaFlrgsh5O5VuWdun4uQkojTOmapjQ05ZGEcs11ejw7ACU&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=mpYluOHWszrCYN_fbd6fiw&oh=00_AfOcN_PXHY_-7qqLyGcq3o2dl8vfv8PnkdokAPKIIY4flw&oe=6861CA50',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/75418942_973008169729598_6639313484431491072_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_ty6u2y7fQwQ7kNvwHLhoEC&_nc_oc=Admh1F7cRMnlRUIBiJIsgLIX7d88yXgsxPj-6z2VBqF5Q5kPBEMkdTz5seSiAxnJbes&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=k0SDhxzT3hEoWtvK2BDM4w&oh=00_AfNVy9_2gATPHedohjfrkoaoyB7_Yi-xjg5VzSZj0UZegA&oe=68834A07',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/480394172_2363926800637721_2061905936273122524_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=laaLxFpGJR0Q7kNvwHqTMV4&_nc_oc=AdnyPsfgPGiurV0NIdSquUm4nNkUdOdPnkjNEef1x-picv7rQLS1bmyxhwxOKH8zq0I&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=zToh06KA7W9FvMiMQlNK4w&oh=00_AfOzIirtvj5Yr7Mvd2Mc11jcriwxMgCKgfnPP2n_PDuZOw&oe=6861D0E7',
    ];

    const backgroundImages3 = [
        'https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/492406323_1011189204449714_6168157562791126775_n.jpg?stp=c258.0.1532.1532a_dst-jpg_s206x206_tt6&_nc_cat=101&ccb=1-7&_nc_sid=50ad20&_nc_ohc=66SeY1LBXaUQ7kNvwESLlJp&_nc_oc=AdnCPN8d0Y690x7F-QhWfl6Lf0I-CTvvZDwruP5Z1J6A2-k9eJWTwiEUs423oHdTShk&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=nAKiU2EvWCU27SxDsfMwhQ&oh=00_AfNki8YiJUNlHxEgC_y4_EFQNJDPkPr9nnf3vvxKw73Vlw&oe=68647A25',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/477461548_2360250141005387_4521809655529170794_n.jpg?stp=c341.0.1366.1366a_dst-jpg_s206x206_tt6&_nc_cat=103&ccb=1-7&_nc_sid=50ad20&_nc_ohc=kIweaue8JcYQ7kNvwELke7I&_nc_oc=AdlHFUJ_mUEiNwXwefyraxQE37eb09pDfUAONJDA5ERr6iubIwqmXftNlp4JSc3Bc0E&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=6qMVlhhnVwpVdTAyMIx3kg&oh=00_AfOqbQs1jo1C3xkIFVi6SrHrf79EcZ6Dv-ZXxQLSh7kFtg&oe=68646729',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/477230735_2360262461004155_8325254489929382247_n.jpg?stp=c448.0.1152.1152a_dst-jpg_s206x206_tt6&_nc_cat=100&ccb=1-7&_nc_sid=50ad20&_nc_ohc=8JicMu10t2gQ7kNvwF77tv4&_nc_oc=Adlg9LMgnIggouim8b3HuLpoy6X2c2_IO1eTQiQUKr4G27z6Ed3M0M84DKgI4xMgDaw&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=6qMVlhhnVwpVdTAyMIx3kg&oh=00_AfPphHy5zWzay-SRDYv5FFecUkB9UW9oJ0IpkcfqcsEuGw&oe=68648092',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/477823681_957605896474712_2224385576472374459_n.jpg?stp=c342.0.1364.1364a_dst-jpg_s206x206_tt6&_nc_cat=100&ccb=1-7&_nc_sid=50ad20&_nc_ohc=nLVH7JRlALkQ7kNvwHjB-FH&_nc_oc=AdmY3C9qbvqws-7_AM8GahlSoR1hgr1ppCFu6eE01YkFy910uJg2Yn5Pnd3woGYz-SI&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=3DDW8DG1_cxlx0Nv020XOg&oh=00_AfPX5NtPKBDI1JbwP9Ej1CU1tSv4AnEEJC_8BhPhiXiJ8A&oe=68648725',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/475769277_2350735645290170_1205486013648955899_n.jpg?stp=c341.0.1366.1366a_dst-jpg_s206x206_tt6&_nc_cat=108&ccb=1-7&_nc_sid=50ad20&_nc_ohc=m8K2hSDAJfsQ7kNvwEplXOk&_nc_oc=AdnIRgRenKD40hjEVlLqPpsI_Ae9-PZuAJSqma1X1KU3Dr83CdMOPCMaDrgXd2mA6m4&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=9a6QURPmJUrTTo8fSppO-A&oh=00_AfMo5uxOMgm582xu2AvuVDQCG60YgwLi96zaNIrUuzTWig&oe=68645B17',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/185647816_1401486163548461_5874739644739549828_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=102&ccb=1-7&_nc_sid=50ad20&_nc_ohc=q7qkclCFMW0Q7kNvwHUsiT2&_nc_oc=AdlHa4LJZX3KjR3FP8Zhp1o1FaesB7Iq3Nfn8M0-uVB8b_Eqecr0lwLD2rl196k8f7M&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=fTJKPs0HLgOLJ6wkprHXWA&oh=00_AfOWDxswdxgj1vk6_Zapwr-wFcTCkr-gWhVWb3rszQ9dsA&oe=68860ADD',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/126053913_1279563509074061_1539076123027102192_n.jpg?stp=c210.0.540.540a_dst-jpg_s206x206_tt6&_nc_cat=102&ccb=1-7&_nc_sid=50ad20&_nc_ohc=0DN4hPkkNFIQ7kNvwF1Gv8T&_nc_oc=Admt2gK5wFlU-v9vnAfnVUtXpnlTmK1Rjz9ay_OzgL69X6xZCXzPqRQ_7FP8_TyIVE8&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=drxXDCm_yt0EQpbhRYCNQw&oh=00_AfOBfs-mHD8gHo6mHFOhl1W7SRr5zZgc5ZecT2NjRRkocg&oe=6886252D',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/100084226_1131096990587381_9138518536946188288_n.jpg?stp=c240.0.960.960a_dst-jpg_s206x206_tt6&_nc_cat=100&ccb=1-7&_nc_sid=50ad20&_nc_ohc=kuNl3IZAY3kQ7kNvwHW6yDK&_nc_oc=AdlLq3-c9grPIHe6LoRwyd34ZYDqvdP7Z_X6tgPtT1Xg8K2JQVs9pkgwKxG7fb8fvA0&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=luh9VRgGGhKTy5fTl-5z-Q&oh=00_AfPYXCz-GGfwveEK5h0qJq7h2F0UHY1ZfIeJ_Gg64sfSWw&oe=6886270C',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/71709458_926900871006995_1842489005174685696_n.jpg?stp=c320.0.640.640a_dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=50ad20&_nc_ohc=lhaMn4qB-zsQ7kNvwGgfj_o&_nc_oc=Adlj64U8tuUOcklSzA19nR8cMcDKsaN2x2rY5aLSl0kgVED3ISGz8XzrSG812vXyN1E&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=Bk9kcAEgp-fiv3kl8sMHhg&oh=00_AfN62Zeo3vjCn6qMiu7DgH5LzagCpAvu0uhjFmVsmqu1tA&oe=68861C68',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/60416912_842676732762743_60857758144004096_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=110&ccb=1-7&_nc_sid=50ad20&_nc_ohc=bupP1DZcV5cQ7kNvwEmQ2se&_nc_oc=AdlA4QNz1BJF28phT2_og3u0-paUEZLADUpYetXN5M6-hRzZ7-pw-Wjh19HesfpY9RI&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=3TIk1Gn2j9Mkw42TBsfjkg&oh=00_AfPbj2FzpHW2Ohs4E5yafmBh5TGjrIdcDUCNPRSgxEQxBQ&oe=6885FEE6',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/40062080_691039507926467_2639498273747894272_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=108&ccb=1-7&_nc_sid=92e838&_nc_ohc=f0FJPYSo29EQ7kNvwHITtYB&_nc_oc=AdlaJBcGje1OJ4zWExELcewH-Ec24xcKdbgjyXR9HAX9Sk6w4HbgYRZ34vzh9U3w__o&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=H51vzOjabeC6HsuDj3doGA&oh=00_AfNXiF6VGm4DlMx_JeGmAlMMiay2kz4SuiOcWPZhPTgmkw&oe=68862BC2',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/38217136_665368860493532_8525249609973366784_n.jpg?stp=c180.0.1080.1080a_dst-jpg_s206x206_tt6&_nc_cat=101&ccb=1-7&_nc_sid=92e838&_nc_ohc=7hnNcBsT5kwQ7kNvwFW35Tw&_nc_oc=AdlJRQAZEDLe9rs1OL2xqLch5SstOKiXa7Fv5VM4DC5rTg5d22QxqfV5yVbs6yslGuE&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=H51vzOjabeC6HsuDj3doGA&oh=00_AfM292t_YocrbLeQ8c6eCSHhXdLEXeXAkq-oPFhiZo2wQQ&oe=68861976',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/494013104_2430543163976084_7652187232274452021_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=100&ccb=1-7&_nc_sid=92e838&_nc_ohc=OR7Q4G3-zhoQ7kNvwERVRlm&_nc_oc=Admm76_-Oxr4b-PazgcSYWlZ77GG-lUucsre92wdvrKOA-VS1fbGxf9zJ8XLu_zc-jI&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=F1CkTWgNAl8Q7EKi5XcWmQ&oh=00_AfN7aRVP5sBazqTsxEMfjeKK8i7caicUfJGHMTAxR582rw&oe=68646D83',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/491944729_2425234084506992_269839470991460831_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=110&ccb=1-7&_nc_sid=969c58&_nc_ohc=enm-BeJVdVcQ7kNvwG7mKiT&_nc_oc=AdkJkf4-7-K6Rjfl5Tg6iiLAAAmIst3S2VE18FUDkxOOVujKuCt4H0NwxXAmcHd4W0g&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=zJ4IF-KLoK6i957bt-Kgow&oh=00_AfPzIYFk4A-WY84PGcrP4kjB5TeVsmc3Vs-Ab_2zFxSGQw&oe=68648D16',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/492059179_2425234101173657_8695628408833037324_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=106&ccb=1-7&_nc_sid=969c58&_nc_ohc=4S3hBIACfCwQ7kNvwHWdI_F&_nc_oc=AdnDo2TrrB0MxlRhZD5jsM1OghZIOXr5VaZ_HAePyKxxmwsL2-700EVApOShba0rUnI&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=RBHGr5fZ1g2WmhGpAaPmaw&oh=00_AfM_2KI5soqxeo94Bc1VWvIgUZAL1xInOFaKPbBLFl-oWg&oe=68647830',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/492439017_2425234024506998_1803988495072764045_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=103&ccb=1-7&_nc_sid=969c58&_nc_ohc=W7WgWn7vSLMQ7kNvwH1Wdia&_nc_oc=Adk4t2t-KQgGX2A8PBHurIKUKhPKxLeYnYQYq6JLUvIqOD4OxSwZBOFjReGes-FAmK0&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=RBHGr5fZ1g2WmhGpAaPmaw&oh=00_AfN0ej9Q7Wuf9j1A7iNjwwgitkDONxVoHE_21NsOZETnfA&oe=6864853E',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/492001206_2425234091173658_403172714333078031_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=110&ccb=1-7&_nc_sid=969c58&_nc_ohc=vRzFxOkKWFQQ7kNvwGTEiXW&_nc_oc=AdkUGyoyYScwmc1rFcZtW8mUX5QIKvHAa9b7WdNxjYQanf5_82NVtr1BmT2hco7C-sg&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=zJ4IF-KLoK6i957bt-Kgow&oh=00_AfOGEqTWAewDJ_F47EPK5K10qdO5peVP4xo75Mhng5lH-w&oe=68648606',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/494013584_2430666557297078_3382724266494662373_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=109&ccb=1-7&_nc_sid=92e838&_nc_ohc=whs0PF4rQAoQ7kNvwHxuXDP&_nc_oc=Adlo_YU_vXiCgUHRxrs9vTEhPRuI0gVR79BmrPIb8jqZ22-1ViEzKWSHd751FsCtzVg&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=F1CkTWgNAl8Q7EKi5XcWmQ&oh=00_AfMku-ogR6dcXUwtP-kb7WSj9ouovVszPjiDx76slALdVg&oe=686470E4',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/494194964_2431933623837038_9083499561617621604_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=110&ccb=1-7&_nc_sid=92e838&_nc_ohc=BpZsuCrh-G8Q7kNvwG8sLDl&_nc_oc=AdkukzYxv7f0XfreMvq-epaFlrgsh5O5VuWdun4uQkojTOmapjQ05ZGEcs11ejw7ACU&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=aS7VSIhr40wVmjE8Y6BpOw&oh=00_AfOgjI9mYDyrsMXurVTqkV0O_AFpMrzHZHZJmGRNJzWEVg&oe=68646D50',
    ]

    const [currentBg, setCurrentBg] = useState(0);
    const scrollContainerRef = useRef(null);
    const scrollContainerRef2 = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const [isDragging2, setIsDragging2] = useState(false);
    const [startX2, setStartX2] = useState(0);
    const [scrollLeft2, setScrollLeft2] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    // Drag handlers...
    const handleMouseDown = (e, refSetter) => {
        refSetter(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
    };

    const handleMouseUp = () => setIsDragging(false);
    const handleMouseLeave = () => setIsDragging(false);
    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        scrollContainerRef.current.scrollLeft = scrollLeft - (x - startX) * 2;
    };

    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
        scrollContainerRef.current.scrollLeft = scrollLeft - (x - startX) * 2;
    };

    // Second group handlers...
    const handleMouseDown2 = (e) => {
        setIsDragging2(true);
        setStartX2(e.pageX - scrollContainerRef2.current.offsetLeft);
        setScrollLeft2(scrollContainerRef2.current.scrollLeft);
    };

    const handleMouseUp2 = () => setIsDragging2(false);
    const handleMouseLeave2 = () => setIsDragging2(false);
    const handleMouseMove2 = (e) => {
        if (!isDragging2) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef2.current.offsetLeft;
        scrollContainerRef2.current.scrollLeft = scrollLeft2 - (x - startX2) * 2;
    };

    const handleTouchStart2 = (e) => {
        setIsDragging2(true);
        setStartX2(e.touches[0].pageX - scrollContainerRef2.current.offsetLeft);
        setScrollLeft2(scrollContainerRef2.current.scrollLeft);
    };

    const handleTouchMove2 = (e) => {
        if (!isDragging2) return;
        const x = e.touches[0].pageX - scrollContainerRef2.current.offsetLeft;
        scrollContainerRef2.current.scrollLeft = scrollLeft2 - (x - startX2) * 2;
    };

    // Arrow click handlers
    const scrollGallery = (ref, direction) => {
        if (ref.current) {
            ref.current.scrollBy({
                left: direction * 680, // 2 * 340px
                behavior: "smooth",
            });
        }
    };

    const scrollGallery2 = (ref, direction) => {
        if (ref.current) {
            ref.current.scrollBy({
                left: direction * 680, // 2 * 340px
                behavior: "smooth",
            });
        }
    };

    const ArrowButtons = ({ onLeftClick, onRightClick }) => (
        <div className="flex gap-2 z-10">
            <button
                onClick={onLeftClick}
                style={{ padding: "15px", marginLeft: "10px", marginRight: "1%", color: "white", opacity: "0.8" }}
                className="bg-[#2a2118] hover:bg-[#3b2f22] border border-[#c2a470] text-white p-5 rounded-full shadow"
            >
                <FaChevronLeft />
            </button>
            <button
                onClick={onRightClick}
                style={{ padding: "15px", color: "white", opacity: "0.8" }}
                className="bg-[#2a2118] hover:bg-[#3b2f22] border border-[#c2a470] text-white p-5 rounded-full shadow"
            >
                <FaChevronRight />
            </button>
        </div>
    );

    return (
        <div className="overflow-hidden font-['Rye']">
            <section
                className="min-h-screen bg-cover bg-center bg-fixed bg-blend-overlay bg-[#1e1a14]/80 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 pt-10 space-y-10 text-white transition-all duration-1000"
                style={{ backgroundImage: `url(${backgroundImages[currentBg]})` }}
            >
                <div className="w-[80%] flex justify-center mt-[4%]">
                    <div className="bg-[#2a2118] border-4 border-[#c2a470] shadow-xl px-6 py-4 transform rotate-2 w-full sm:w-4/5 md:w-3/5 text-center" style={{ backgroundImage: 'url("/asd.jpg")', backgroundRepeat: "no-repeat", backgroundSize: "cover", marginTop: "2%", marginBottom: "2%" }} >
                        <h2 className="text-2xl sm:text-3xl md:text-5xl text-[#fef8ee] font-bold tracking-wider mb-2 font-serif">
                            Galéria
                        </h2>
                        <p className="text-[#e6d3b3] italic text-sm md:text-lg font-light">
                            Nem mindig a harsány a feltűnő. <br />
                            A legnagyobb változás néha csendben történik, csak hagyni kell, hogy a fény elvégezze a dolgát.
                        </p>
                    </div>
                </div>

                {/* Second Gallery */}
                <div className="relative w-[90%] mb-10" style={{ marginBottom: "10px", marginTop: "1%" }}>
                    <div
                        ref={scrollContainerRef2}
                        style={{ marginBottom: "10px", marginTop: "2%" }}
                        className="overflow-x-auto whitespace-nowrap scrollbar-hide cursor-grab active:cursor-grabbing"
                        onMouseDown={handleMouseDown2}
                        onMouseLeave={handleMouseLeave2}
                        onMouseUp={handleMouseUp2}
                        onMouseMove={handleMouseMove2}
                        onTouchStart={handleTouchStart2}
                        onTouchMove={handleTouchMove2}
                        onTouchEnd={handleMouseUp2}
                    >
                        <div className="flex gap-6 justify-center w-max mx-auto px-2">
                            {backgroundImages2.map((img, index) => (
                                <div
                                    key={index}
                                    style={{ marginBottom: "10px", marginLeft: "1%" }}
                                    className="w-[340px] max-w-[400px] max-h-[370px] bg-[#1f1a17] border border-[#c2a470] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex-shrink-0"
                                >
                                    <img
                                        src={img}
                                        alt={`Gallery2 ${index + 1}`}
                                        className="w-full h-full object-cover pointer-events-none"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* First Gallery */}
                <div className="relative w-[90%] mx-auto" style={{ marginBottom: "10px", marginTop: "1%" }}>
                    <div
                        ref={scrollContainerRef}
                        style={{ marginBottom: "10px", marginTop: "2%" }}
                        className="overflow-x-auto whitespace-nowrap scrollbar-hide cursor-grab active:cursor-grabbing"
                       onMouseDown={(e) => handleMouseDown(e, setIsDragging)}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleMouseUp}
                    >
                        <div className="flex gap-6 justify-center w-max mx-auto px-2">
                            {backgroundImages.map((img, index) => (
                                <div
                                    key={index}
                                    style={{ marginBottom: "10px", marginLeft: "1%" }}
                                    className="w-[340px] max-w-[400px] bg-[#1f1a17] border border-[#c2a470] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex-shrink-0"
                                >
                                    <img
                                        src={img}
                                        alt={`Gallery ${index + 1}`}
                                        className="w-full h-full object-cover pointer-events-none"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                {/* Third Gallery */}
                <div className="w-[80%] mx-auto mb-10" style={{ marginTop: "1%" }}>
                    <div >
                        <div className="flex flex-wrap gap-6 justify-start">
                            {backgroundImages3.map((img, index) => (
                                <div
                                    key={index}
                                    className="w-[240px] max-w-[300px] max-h-[270px] bg-[#1f1a17] border border-[#c2a470] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
                                    style={{ marginBottom: "1%", marginLeft: "1%" }}
                                >
                                    <img
                                        src={img}
                                        alt={`Gallery2 ${index + 1}`}
                                        className="w-full h-full object-cover pointer-events-none"

                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
