const SSO_PORTAL_URL = 'awsapps.com';
const AWS_PORTAL_URL = 'console.aws.amazon.com';
const PORTAL_ELEMENT_TAG_NAME = 'portal-application';

const from_json = {
    accounts: [
        {
            accountId: '014413428939',
            displayName: 'DFE Prod',
            color: '#f2ada0',
        },
        {
            accountId: '935793292298',
            displayName: 'DFE Test',
            color: '#FFFF00',
        },
        {
            accountId: '968588151748',
            displayName: 'DFE Dev',
            color: '#a5d099',
        },
    ],
}

if (window.location.host.includes(SSO_PORTAL_URL)) {
    if(document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', afterDOMLoaded);
    } else {
        afterDOMLoaded();
    }

    function afterDOMLoaded(){
        const portal_element = document.getElementsByTagName(PORTAL_ELEMENT_TAG_NAME)
        console.log(portal_element.item(0))
    }
}else {
    const accountId = document.querySelector('[data-testid="account-detail-menu"]').querySelectorAll('span')[1].innerText.replaceAll('-','');
    const account = from_json.accounts.filter((x) => x.accountId === accountId)[0]
    if (account) {
        let item = document.querySelector(
            '[data-testid="awsc-nav-account-menu-button"]'
        ).children[0]
        let button = document.getElementById('nav-usernameMenu');
        button.style = `background-color:${account.color}; border-radius:100px !important; height: 26px;`
        item.style = 'color: black;'
        item.innerHTML = account.displayName
    }
    
}


