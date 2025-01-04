export default function() {
    const list = [
        {
            id: 'Facebook_cube', 
            href: 'https://www.facebook.com/'
        },
        {
            id: 'Messeneger_cube', 
            href: 'https://www.messenger.com/'
        },
        {
            id: 'Twitter_cube', 
            href: 'https://twitter.com/home'
        },
        {
            id: 'Pixiv_cube', 
            href: 'https://www.pixiv.net/'
        },
        {
            id: 'elearn', 
            href: 'https://elearn.nthu.edu.tw/?'
        },
        {
            id: 'eeclass', 
            href: 'https://eeclass.nthu.edu.tw/dashboard'
        },
        {
            id: 'ccxp', 
            href: 'https://www.ccxp.nthu.edu.tw/ccxp/INQUIRE/'
        },
        {
            id: 'Facebook', 
            href: 'https://zh-tw.facebook.com/'
        },
        {
            id: 'Messenger', 
            href: 'https://www.messenger.com/'
        },
        {
            id: 'Discord', 
            href: 'https://discord.com/channels/@me'
        },
        {
            id: 'Twitter', 
            href: 'https://twitter.com/home'
        },
        {
            id: 'Pixiv', 
            href: 'https://www.pixiv.net/'
        },
        {
            id: 'YouTube', 
            href: 'https://www.youtube.com/'
        },
        {
            id: 'Gmail', 
            href: 'https://mail.google.com/mail/u/0/#inbox'
        },
        {
            id: 'GGroup', 
            href: 'https://groups.google.com/u/1/g/nmsl-all/c/AsGZhi2lT5s'
        },
        {
            id: 'NMSL', 
            href: 'https://nmsl.cs.nthu.edu.tw/cs5262-schedule-2024/'
        },
        {
            id: 'JP Space', 
            href: 'https://hackmd.io/@tropical08842/B1_YN_-kp/https%3A%2F%2Fhackmd.io%2F%40tropical08842%2FHJEHlK-kT%2F%252Fp7Ti7wARSoq9GKGdiLh0xg'
        },
        {
            id: 'GitHub', 
            href: 'https://github.com/'
        },
        {
            id: 'HackMD', 
            href: 'https://hackmd.io/?nav=overview'
        },
        {
            id: 'Past Exam', 
            href: 'https://drive.google.com/drive/folders/0B9qFeq29tGaLVndza2FqSmttNjQ?resourcekey=0-ktN_SgGqiMEhH009dMuc3g&fbclid=IwAR3n0MchvVMuW2L00QnRu0C_9ot9UmdvFwHbQUsJ1UrEglTLwfTbEZnsupg'
        },
        {
            id: 'Colab', 
            href: 'https://colab.research.google.com/drive/1c56LHV9HmUk_IMPTMROKPGCe-vUsvOGQ'
        },
        {
            id: 'Font Awesome', 
            href: 'https://fontawesome.com/icons'
        },
        {
            id: 'G-Font', 
            href: 'https://fonts.google.com/'
        },
        {
            id: 'Stylish', 
            href: 'https://userstyles.org/'
        },
        {
            id: 'G-Calendar', 
            href: 'https://calendar.google.com/calendar/u/1/r'
        },
        {
            id: 'G-Slide', 
            href: 'https://docs.google.com/presentation/u/0/'
        },
        {
            id: 'G-Sheet', 
            href: 'https://docs.google.com/spreadsheets/u/1/'
        },
        {
            id: 'Flowchart', 
            href: 'https://app.diagrams.net/'
        },
        {
            id: 'Train', 
            href: 'https://tip.railway.gov.tw/tra-tip-web/tip/tip001/tip112/gobytime'
        },
        {
            id: 'Hololive', 
            href: 'https://hololive.hololivepro.com/en/talents'
        },
        {
            id: 'Anigamer', 
            href: 'https://ani.gamer.com.tw/'
        },
        {
            id: 'Pinterest', 
            href: 'https://www.pinterest.com/'
        },
        {
            id: 'Utaten', 
            href: 'https://utaten.com/search'
        },
        {
            id: 'Dam', 
            href: 'https://www.clubdam.com/'
        },
        {
            id: 'maimai', 
            href: 'https://maimaidx-eng.com/maimai-mobile/home/'
        },
        {
            id: 'PCRD PvP', 
            href: 'https://pcrdfans.com/battle'
        },
        {
            id: 'PCRD Pickup', 
            href: 'https://forum.gamer.com.tw/C.php?bsn=30861&snA=27653'
        },
        {
            id: 'Algo Ans', 
            href: 'https://walkccc.me/CLRS/'
        },
        {
            id: 'Unix', 
            href: 'https://hackmd.io/@Koios/ryGcbe3R2/%2F%40Koios%2F3YUbrErzRt-xYy--2Pd_Hg'
        },
        {
            id: 'G-Doc', 
            href: 'https://docs.google.com/document/u/1/'
        },
        {
            id: 'Famiport',
            href: 'https://www.famiport.com.tw/Web_Famiport/page/cloudprint.aspx'
        },
        {
            id: 'G-Translate',
            href: 'https://translate.google.com/'
        },
        {
            id: 'ChatGPT',
            href: 'https://chat.openai.com/'
        },
        {
            id: 'AQI TW',
            href: 'https://airtw.moenv.gov.tw/'
        },
        {
            id: 'Overleaf',
            href: 'https://www.overleaf.com/project'
        },
        {
            id: 'TUCaN',
            href: 'https://www.tucan.tu-darmstadt.de/scripts/mgrqispi.dll?APPNAME=CampusNet&PRGNAME=ACTION&ARGUMENTS=-A6-VkjuH-iRdxtcbUbsSwYyOYZhdqMJDQOCdoK1J-iuohpKVkbk4j6SVfVmPt6fAJu43JVC19q10MMNNT8aOL6-3RWt~L4wVJFuXwGJWSs1kEU6ibMllhU1rWF2sWLrm8XoUsylSK1Mvzv5Z2IPE1U7W6mT90jfDTFoBroshCATeT562F-9B27YdtR27UBEhDGh-GOXqGeeU7PHU_'
        },
        {
            id: 'LeetCode',
            href: 'https://leetcode.com/problemset/'
        },
        {
            id: 'refern.',
            href: 'https://my.refern.app/'
        },
        {
            id: 'Quickposes',
            href: 'https://quickposes.com/en/gestures/timed'
        },
        {
            id: 'Tetr.io',
            href: 'tetr.io'
        },
        {
            id: 'Expatrio',
            href: 'https://www.expatrio.com/xp/?utm_campaign=TXN%20CN%20Simplified&utm_medium=email&_hsenc=p2ANqtz-99Eu_URxi74qOvo4YBjK-gUGWWkcIQasPBDZzR9gD9Tjrlg8EB8weZ4JmCEieO12pWo7zbHXc5os3y9CkQmRMTP_QCjg&_hsmi=265426476&utm_content=265426476&utm_source=hs_automation#/login?redirect_url=https%3A%2F%2Fwww.expatrio.com%2Fxp%2F%3Futm_campaign%3DTXN%2520CN%2520Simplified%26utm_medium%3Demail%26_hsenc%3Dp2ANqtz-99Eu_URxi74qOvo4YBjK-gUGWWkcIQasPBDZzR9gD9Tjrlg8EB8weZ4JmCEieO12pWo7zbHXc5os3y9CkQmRMTP_QCjg%26_hsmi%3D265426476%26utm_content%3D265426476%26utm_source%3Dhs_automation%23%2Flogin'
        },
        {
            id: 'G-Drive',
            href: 'https://drive.google.com/drive/u/0/home'
        },
        {
            id: 'Line of Action',
            href: 'https://line-of-action.com/'
        }
    ]

    list.forEach(el => {
        let findEl = document.getElementById(el.id);
        if (findEl)
            findEl.href = el.href; 
    });
}