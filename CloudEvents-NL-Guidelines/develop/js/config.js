var respecConfig = {
    //voor specStatus mogelijkheden zie https://github.com/Logius-standaarden/respec/wiki/specStatus
    specStatus: "WV",
    //voor specType mogelijkheden zie https://github.com/Logius-standaarden/respec/wiki/specType

    specType: "HR",
    pubDomain: "notificatieservices",
    shortname: "guidelines",
    publishDate: "2022-06-24",
    publishVersion: "0.3",
    title: "Guidelines for NL-GOV profile CloudEvents",
    // previousPublishVersion: "(none)",
    //  previousPublishDate: "(none)",
    //  previousMaturity: "WV",
    editors: [
      {
        name: "Gershon Jansen",
        company: "VNG Realisatie",
        companyURL: "https://www.vngrealisatie.nl/",
      },
      {
        name: "Ad Gerrits",
        company: "VNG Realisatie",
        companyURL: "https://www.vngrealisatie.nl/",
      },
      {
        name: "Edwin Wisse",
        url: "https://logius.nl/standaarden",
        company: "Logius",
      },
    ],
    authors: [
      {
        name: "Werkgroep Berichtenstandaard",
        company: "Project Notificatieservices",
      }
    ],

    subtitle: "Project Notificatieservices",

    github: "https://github.com/Logius-standaarden/CloudEvents-NL-Guidelines",


    // Controls if linked "§" section markers are added to a document
    addSectionLinks: true,

    // this parameter will add the tag_name of the latest release to the document Title
    // only set this parameter when a release has been set
    nl_addReleaseTagTitle: true,

    // if nl_markdownEmbedImageInFigure is set to true images in markdown generated content will be surrounded with <figures> element
    // so that figures can be linked are be a part of table of figures
    nl_markdownEmbedImageInFigure: true,
	
	// Create PDF and link to file in header:
    alternateFormats: [
        {
            label: "pdf",
            uri: "CloudEvents-NL-Guidelines.pdf",
        },
    ],
}
