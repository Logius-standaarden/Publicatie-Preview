var respecConfig = {
  useLogo: true,
  useLabel: true,
  specStatus: "WV",
  specType: "PR",
  pubDomain: "api",
  shortName: "logboek_juridisch",
  publishDate: "2024-12-13",
  publishVersion: "0.8.3",
  title: "Juridisch Beleidskader - Logboek Dataverwerking",

  edDraftURI: "https://logius-standaarden.github.io/logboek-dataverwerkingen_Juridisch-beleidskader/",

  editors:
    [
      {
        name: "Vedran Bilanovic",
        company: "Ministerie van Binnenlandse Zaken en Koninkrijksrelaties",
        companyURL: "https://www.rijksoverheid.nl/ministeries/ministerie-van-binnenlandse-zaken-en-koninkrijksrelaties",
      },
      {
        name: "Eelco Hotting",
        company: "Ministerie van Binnenlandse Zaken en Koninkrijksrelaties",
        companyURL: "https://www.rijksoverheid.nl/ministeries/ministerie-van-binnenlandse-zaken-en-koninkrijksrelaties",
      },
      {
        name: "Jeroen Mulder",
        company: "Ministerie van Binnenlandse Zaken en Koninkrijksrelaties",
        companyURL: "https://www.rijksoverheid.nl/ministeries/ministerie-van-binnenlandse-zaken-en-koninkrijksrelaties",
      },
      {
        name: "Pieter Teekens",
        company: "Ministerie van Binnelandse Zaken en Koninkrijksrelaties",
        companyURL: "https://www.rijksoverheid.nl/ministeries/ministerie-van-binnenlandse-zaken-en-koninkrijksrelaties",
      },
      {
        name: "Nil Barua",
        company: "Logius",
        companyURL: "https://logius.nl",
      },
      {
        name: "Martin van der Plas",
        company: "Logius",
        companyURL: "https://logius.nl",
      },
      {
        name: "Tim van der Lippe",
        company: "Logius",
        companyURL: "https://logius.nl",
      }
    ],
  authors:
    [
      {
        name: "Wouter Diephuis",
        company: "Ministerie van Binnenlandse Zaken en Koninkrijksrelaties",
        companyURL: "https://www.rijksoverheid.nl/ministeries/ministerie-van-binnenlandse-zaken-en-koninkrijksrelaties",
      },
      {
        name: "Mirian van Ansem",
        company: "Ministerie van Binnenlandse Zaken en Koninkrijksrelaties",
        companyURL: "https://www.rijksoverheid.nl/ministeries/ministerie-van-binnenlandse-zaken-en-koninkrijksrelaties",
      }
    ],
  github: "https://github.com/Logius-standaarden/logboek-dataverwerkingen_Juridisch-beleidskader",


  // Create PDF and link to file in header (optional):
  alternateFormats: [
      {
          label: "pdf",
          uri: "Juridisch_Beleidskader-Logboek_Dataverwerking.pdf",
      },
  ],
  postProcess: [window.respecMermaid.createFigures]
};
