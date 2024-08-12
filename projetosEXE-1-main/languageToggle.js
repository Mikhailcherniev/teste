let currentLanguage = 'en';

function toggleLanguage() {
    if (currentLanguage === 'en') {
        Escolher('pt');
        document.getElementById('txtLanguage').innerText = 'Português';
        document.getElementById('iconLanguage').src = './assets/icons/iconPT.png';
        currentLanguage = 'pt';
    } else {
        Escolher('en');
        document.getElementById('txtLanguage').innerText = 'English';
        document.getElementById('iconLanguage').src = './assets/icons/iconEN.png';
        currentLanguage = 'en';
    }
}

function Escolher(idioma) {
    fetch(`txt_${idioma}.json`)
        .then(resposta => resposta.json())
        .then(texto => {
            // Primeiro, você pode definir o texto do título principal, exceto a parte que está no <span>
            let landingPageTitle = texto.landingPageTitle.split("{span}")[0]; // Texto antes do <span>
            let landingPageTitleAfterSpan = texto.landingPageTitle.split("{span}")[1]; // Texto depois do <span>
            
            document.getElementById('landingPageTitle').childNodes[0].nodeValue = landingPageTitle; // Define o texto antes do <span>
            document.getElementById('DlandingPageTitle').innerText = texto.DlandingPageTitle; // Define o texto dentro do <span>
            document.getElementById('landingPageTitle').childNodes[2].nodeValue = landingPageTitleAfterSpan; // Define o texto depois do <span>



            let aboutUsTitle = texto.aboutUsTitle.split("{span}")[0];
            // Atualiza o texto do elemento <h2> antes do <span>
            document.getElementById('aboutUsTitle').childNodes[0].nodeValue = aboutUsTitle;
            // Atualiza o texto dentro do <span>
            document.getElementById('DaboutUsTitle').innerText = texto.DaboutUsTitle;

            let ourArtTitle = texto.ourArtTitle.split("{span}")[0];
            document.getElementById('ourArtTitle').childNodes[0].nodeValue = ourArtTitle;
            document.getElementById('DourArtTitle').innerText = texto.DourArtTitle;

            let ourCoursesTitle = texto.ourCoursesTitle.split("{span}")[0];
            document.getElementById('ourCoursesTitle').childNodes[0].nodeValue = ourCoursesTitle;
            document.getElementById('DourCoursesTitle').innerText = texto.DourCoursesTitle;

            let nextEventsTitle = texto.nextEventsTitle.split("{span}")[0];
            document.getElementById('nextEventsTitle').childNodes[0].nodeValue = nextEventsTitle;
            document.getElementById('DnextEventsTitle').innerText = texto.DnextEventsTitle;

            let ourLocationTitle = texto.ourLocationTitle.split("{span}")[0];
            document.getElementById('ourLocationTitle').childNodes[0].nodeValue = ourLocationTitle;
            document.getElementById('DourLocationTitle').innerText = texto.DourLocationTitle;

            let seeMoreTitle = texto.seeMoreTitle.split("{span}")[0];
            document.getElementById('seeMoreTitle').childNodes[0].nodeValue = seeMoreTitle;
            document.getElementById('DseeMoreTitle').innerText = texto.DseeMoreTitle;

            let workWUTitle = texto.workWUTitle.split("{span}")[0];
            document.getElementById('workWUTitle').childNodes[0].nodeValue = workWUTitle;
            document.getElementById('DworkWUTitle').innerText = texto.DworkWUTitle;


            let footerTitle = texto.footerTitle.split("{span}")[0]; 
            let footerTitleAfterSpan = texto.footerTitle.split("{span}")[1]; 
            
            document.getElementById('footerTitle').childNodes[0].nodeValue = footerTitle; 
            document.getElementById('DfooterTitle').innerText = texto.DfooterTitle; 
            document.getElementById('footerTitle').childNodes[2].nodeValue = footerTitleAfterSpan; 
        })
        .catch(error => console.error('Erro ao carregar o arquivo de idioma:', error));
}