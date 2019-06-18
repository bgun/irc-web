module.exports = {
	languageDictionary: {
		en: "en-US",
		ar: "ar-001",
		fa: "fa-AF",
	},
	
	"refugee.info": {
		theme: "irc",
		accessToken: "0cd5c6bfefa4f7f33a98c487012e6f34c2031aee1ff2f6858b11be592ab349d9",
		space: "ktglofo8nf88",
		languages: [["en", "English"], ["ar", "العربيـة"], ["ur", "اردو"], ["fa", "فارسی"], ["fr", "Français"]],
		logo: "/ri-logo-<%= language %>.png",
		logoblack: "logo-black.png",
		title: "Refugee Info",
		questionLink: "https://m.me/refugee.info",
		customQuestionLink:[["italy","https://www.facebook.com/Refugee.Info.Italy/"]],
		favicon: "/favicon.ico",
		gaTracker: "UA-68574649-6",
		appId: "708254579325899",
		thumbnail: "/images/logos/ri-thumbnail.png",
		cookieBanner: true,
		showDepartments: false,
		showLinkToAdministration: false,
		hideCountries: ["bosnia"],
		hideLangsPerCountry: [{
			country: 'italy',
			langs: ['ar', 'ur', 'fa', 'fr'],
		}, {
			country: 'bulgaria',
			langs: ['fr'],
		}, {
			country: 'serbia',
			langs: ['fr'],
		}],
	},
	"staging.refugee.info": {
		theme: "irc",
		accessToken: "7597f6916d5773b57d016a39d7c06ea5c5cf4b213fe60f79893cd7487c29a215",
		host: "preview.contentful.com",
		space: "ktglofo8nf88",
		languages: [["en", "English"], ["ar", "العربيـة"], ["ur", "اردو"], ["fa", "فارسی"], ["fr", "Français"]],
		logo: "/ri-logo-<%= language %>.png",
		logoBlack: "logo-black.png",
		title: "Refugee Info",
		questionLink: "https://m.me/refugee.info",	
		customQuestionLink:[["italy","https://www.facebook.com/Refugee.Info.Italy/"]],
		favicon: "/favicon.ico",
		gaTracker: "UA-68574649-6",
		appId: "708254579325899",
		thumbnail: "/images/logos/ri-thumbnail.png",
		cookieBanner: true,
		backendUrl: 'https://admin-staging.refugee.info/e/production/v2',
		showDepartments: false,
		showLinkToAdministration: false,
		hideCountries: ["bosnia"],
		hideLangsPerCountry: [{
			country: 'italy',
			langs: ['ar', 'ur', 'fa', 'fr'],
		}, {
			country: 'bulgaria',
			langs: ['fr'],
		}, {
			country: 'serbia',
			langs: ['fr'],
		}],
	},
	"qa.refugee.info": {
		theme: "irc",
		accessToken: "7597f6916d5773b57d016a39d7c06ea5c5cf4b213fe60f79893cd7487c29a215",
		host: "preview.contentful.com",
		space: "ktglofo8nf88",
		languages: [["en", "English"], ["ar", "العربيـة"], ["ur", "اردو"], ["fa", "فارسی"], ["fr", "Français"]],
		logo: "/ri-logo-<%= language %>.png",
		logoBlack: "logo-black.png",
		title: "Refugee Info",
		questionLink: "https://m.me/refugee.info",	
		customQuestionLink:[["italy","https://www.facebook.com/Refugee.Info.Italy/"]],
		favicon: "/favicon.ico",
		gaTracker: "UA-68574649-6",
		appId: "708254579325899",
		thumbnail: "/images/logos/ri-thumbnail.png",
		cookieBanner: true,
		backendUrl: 'https://admin-qa.refugee.info/e/production/v2',
		showDepartments: false,
		showLinkToAdministration: false,
		hideCountries: ["bosnia"],
		hideLangsPerCountry: [{
			country: 'italy',
			langs: ['ar', 'ur', 'fa', 'fr'],
		}, {
			country: 'bulgaria',
			langs: ['fr'],
		}, {
			country: 'serbia',
			langs: ['fr'],
		}],
	},
	"khabrona.info": {
		theme: "mc",
		accessToken: "55bea7f7ed5d0e812aa1d48e378dd9a2edb8f9f78c17bd9d2ffa6a014ea3ee2b",
		space: "l4oa58axtceh",
		languages: [["en", "English"], ["ar", "العربيـة"]],
		logo: "/ki-logo.png",
		logoBlack: "logo-black.png",
		title: "Khabrona.Info",
		disableCountrySelector: true,
		questionLink: "mailto:jo-khabrona-info@mercycorps.org",
		hideServiceMap: true,
		favicon: "/ki-favicon.png",
		gaTracker: "UA-68574649-7",
		appId: "154471931830995",
		thumbnail: "/images/logos/ki-thumbnail.png",
		cookieBanner: false,
		showDepartments: false,
		showLinkToAdministration: false,
		hideLangsPerCountry: [],
	},	
	"qa.khabrona.info": {
		theme: "mc",
		accessToken: "55bea7f7ed5d0e812aa1d48e378dd9a2edb8f9f78c17bd9d2ffa6a014ea3ee2b",
		space: "l4oa58axtceh",
		languages: [["en", "English"], ["ar", "العربيـة"]],
		logo: "/ki-logo.png",
		logoBlack: "logo-black.png",
		title: "Khabrona.Info",
		disableCountrySelector: true,
		questionLink: "mailto:jo-khabrona-info@mercycorps.org",
		hideServiceMap: true,
		favicon: "/ki-favicon.png",
		gaTracker: "UA-68574649-7",
		appId: "154471931830995",
		thumbnail: "/images/logos/ki-thumbnail.png",
		cookieBanner: false,
		showDepartments: false,
		backendUrl: 'https://admin-qa.refugee.info/e/production/v2',
		showLinkToAdministration: false,
		hideLangsPerCountry: [],
	},	
	"staging.khabrona.info": {
		theme: "mc",
		accessToken: "55bea7f7ed5d0e812aa1d48e378dd9a2edb8f9f78c17bd9d2ffa6a014ea3ee2b",
		space: "l4oa58axtceh",
		languages: [["en", "English"], ["ar", "العربيـة"]],
		logo: "/ki-logo.png",
		logoBlack: "logo-black.png",
		title: "Khabrona.Info",
		disableCountrySelector: true,
		questionLink: "mailto:jo-khabrona-info@mercycorps.org",
		hideServiceMap: true,
		favicon: "/ki-favicon.png",
		gaTracker: "UA-68574649-7",
		appId: "154471931830995",
		thumbnail: "/images/logos/ki-thumbnail.png",
		cookieBanner: false,
		showDepartments: false,
		backendUrl: 'https://admin-staging.refugee.info/e/production/v2',
		showLinkToAdministration: false,
		hideLangsPerCountry: [],
	},	
	"cuentanos.org": {
		theme: "generic",
		accessToken: "98cd6321d5578bab8cb4c9bafe022f2bd73db5ffce296420d934008f9800fb80",
		space: "e17qk44d7f2w",
		languages: [["es", "Español"]],
		logo: "/images/cn.tb.png",
		logoBlack: "logo-black.png",
		title: "Bienvenidos a CuentaNos",
		disableCountrySelector: true,
		disableLanguageSelector: true,
		questionLink: "mailto: cuentanos.sv@rescue.org",
		favicon: "/cn-favicon-blk.png",
		gaTracker: "UA-68574649-8",
		appId: "209295296327422",
		thumbnail: "/images/logos/cn-thumbnail.png",
		cookieBanner: false,
		backendUrl: 'https://admin.cuentanos.org/e/production/v2',
		customQuestionLink:[["italy","https://www.facebook.com/Refugee.Info.Italy/"]],
		showDepartments: true,
		showLinkToAdministration: true,
		hideLangsPerCountry: [],
	},
	"staging.cuentanos.org": {
		theme: "generic",
		accessToken: "98cd6321d5578bab8cb4c9bafe022f2bd73db5ffce296420d934008f9800fb80",
		space: "e17qk44d7f2w",
		languages: [["es", "Español"]],
		logo: "/images/cn.tb.png",
		logoBlack: "logo-black.png",
		title: "Bienvenidos a CuentaNos",
		disableCountrySelector: true,
		disableLanguageSelector: true,
		questionLink: "mailto: cuentanos.sv@rescue.org",
		favicon: "/cn-favicon-blk.png",
		gaTracker: "UA-68574649-8",
		appId: "209295296327422",
		thumbnail: "/images/logos/cn-thumbnail.png",
		cookieBanner: false,		
		backendUrl: 'https://admin-staging.cuentanos.org/e/production/v2',
		showDepartments: true,
		showLinkToAdministration: false,
		customQuestionLink:[["italy","https://www.facebook.com/Refugee.Info.Italy/"]],
		hideLangsPerCountry: [],
	},
	"qa.cuentanos.org": {
		theme: "generic",
		accessToken: "98cd6321d5578bab8cb4c9bafe022f2bd73db5ffce296420d934008f9800fb80",
		space: "e17qk44d7f2w",
		languages: [["es", "Español"]],
		logo: "/images/cn.tb.png",
		logoBlack: "/images/cn-logo-black.png",
		title: "Bienvenidos a CuentaNos",
		disableCountrySelector: true,
		disableLanguageSelector: true,
		questionLink: "mailto: cuentanos.sv@rescue.org",
		favicon: "/cn-favicon-blk.png",
		gaTracker: "UA-68574649-8",
		appId: "209295296327422",
		thumbnail: "/images/logos/cn-thumbnail.png",
		cookieBanner: false,		
		backendUrl: 'https://admin-qa.cuentanos.org/e/production/v2',
		showDepartments: true,
		showLinkToAdministration: false,
		customQuestionLink:[["italy","https://www.facebook.com/Refugee.Info.Italy/"]],
		hideLangsPerCountry: [],
	},
	"localhost": {
		theme: "irc",
		accessToken: "7597f6916d5773b57d016a39d7c06ea5c5cf4b213fe60f79893cd7487c29a215",
		host: "preview.contentful.com",
		space: "ktglofo8nf88",
		languages: [["en", "English"], ["ar", "العربيـة"], ["ur", "اردو"], ["fa", "فارسی"], ["fr", "Français"]],
		logo: "/ri-logo-<%= language %>.png",
		logoBlack: "/logo-black.png",
		title: "Refugee Info",
		questionLink: "https://m.me/refugee.info",	
		customQuestionLink:[["italy","https://www.facebook.com/Refugee.Info.Italy/"]],
		favicon: "/favicon.ico",
		gaTracker: "UA-68574649-6",
		appId: "708254579325899",
		thumbnail: "/images/logos/ri-thumbnail.png",
		cookieBanner: true,
		backendUrl: 'https://admin-qa.refugee.info/e/production/v2',
		showDepartments: false,
		showLinkToAdministration: false,
		hideCountries: ["bosnia"],
		hideLangsPerCountry: [{
			country: 'italy',
			langs: ['ar', 'ur', 'fa', 'fr'],
		}, {
			country: 'bulgaria',
			langs: ['fr'],
		}, {
			country: 'serbia',
			langs: ['fr'],
		}],
	},
	"theirc-refugee-info-frontend-design.azurewebsites.net": {
		theme: "generic",
		accessToken: "98cd6321d5578bab8cb4c9bafe022f2bd73db5ffce296420d934008f9800fb80",
		space: "e17qk44d7f2w",
		languages: [["es", "Español"]],
		logo: "/images/cn.tb.png",
		logoBlack: "cn-logo-black.png",
		title: "Bienvenidos a CuentaNos",
		disableCountrySelector: true,
		disableLanguageSelector: true,
		questionLink: "mailto: cuentanos.sv@rescue.org",
		favicon: "/cn-favicon-blk.png",
		gaTracker: "UA-68574649-8",
		appId: "209295296327422",
		thumbnail: "/images/logos/cn-thumbnail.png",
		cookieBanner: false,		
		backendUrl: 'https://admin-staging.cuentanos.org/e/production/v2',
		showDepartments: true,
		showLinkToAdministration: false,
		customQuestionLink:[["italy","https://www.facebook.com/Refugee.Info.Italy/"]],
		hideLangsPerCountry: [],
	},
};