var respecConfig = {
    //voor specStatus mogelijkheden zie https://github.com/Logius-standaarden/respec/wiki/specStatus
	// WV = Werkversie
    specStatus: "WV",
    //voor specType mogelijkheden zie https://github.com/Logius-standaarden/respec/wiki/specType
	// HR = Handreiking
    specType: "HR",
    pubDomain: "ep",
    shortName: "ohnl-factuur-akkoord",
    publishDate: "2022-11-28",
    // Pas aanpassen als we een eerste te publiceren versie hebben.
    publishVersion: "0.0.1",
    title: "OHNL Factuur Akkoord",
    // previousPublishVersion: "(none)",
    // previousPublishDate: "(none)",
    // previousMaturity: "WV",
    editors:
        [
			{
                name: "Victor den Toom",
                company: "Logius",
                companyURL: "https://www.logius.nl",
            },
            {
                name: "Maarten van Bree",
                company: "Logius",
                companyURL: "https://www.logius.nl",
            },
        ],
    authors:
        [
            {
                name: "Logius Standaarden - Team e-procurement",
                company: "Logius",
                companyURL: "https://logius.nl/diensten/e-procurement",
            }
        ],
    github: "https://github.com/Logius-standaarden/ep-ohnl-factuur-akkoord",


    // Controls if linked "§" section markers are added to a document
    addSectionLinks: true,

    // this parameter will add the tag_name of the latest release to the document Title
    // only set this parameter when a release has been set
    nl_addReleaseTagTitle: false,

    // if nl_markdownEmbedImageInFigure is set to true images in markdown generated content will be surrounded with <figures> element
    // so that figures can be linked are be a part of table of figures
    nl_markdownEmbedImageInFigure: true,

    // Create PDF and link to file in header:
    // alternateFormats: [
    //     {
    //         label: "pdf",
    //         uri: "rename-me.pdf",
    //     },
    // ],
};