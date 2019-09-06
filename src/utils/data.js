module.exports = [
    {
        "name": "Valuation Sale",
        "full-name": "Valuation Sale",
        "description": "For a full UK postcode and a range of required parameters relating to a particular UK property, returns an estimated sale value (with +/- margin of error) for that property. The only available AVM in the UK that uses market £/sqft data as part of the valuation.",
        "icon": "dollar-sign",
        "api": "/valuation-sale",
        "available": {
            "England": true,
            "Wales": true,
            "Scotland": true,
            "N. Ireland": true
        }
    },
    {
        "name": "Prices",
        "full-name": "Prices",
        "description": "For a given UK postcode (full, district or sector) and optional filters, returns statistical average and confidence intervals of live property asking prices, from the smallest radius at which there is reasonable data.",
        "icon": "dollar-sign",
        "api": "/prices",
        "available": {
            "England": true,
            "Wales": true,
            "Scotland": true,
            "N. Ireland": true
        }
    },
    {
        "name": "Prices Per Sqf",
        "full-name": "Prices Per Square Feet",
        "description": "For a given UK postcode (full, district or sector), returns statistical average and confidence intervals of live property asking prices per square foot, from the smallest radius at which there is reasonable data. Read more about our price per square foot data here.",
        "icon": "dollar-sign",
        "api": "/prices-per-sqf",
        "available": {
            "England": true,
            "Wales": true,
            "Scotland": true,
            "N. Ireland": true
        }
    },
    {
        "name": "Sold Prices",
        "full-name": "Sold Prices",
        "description": "For a given UK postcode (full, district or sector) and optional filters, returns statistical averages and confidence intervals of property sold prices.",
        "icon": "dollar-sign",
        "api": "/sold-prices",
        "available": {
            "England": true,
            "Wales": true,
            "Scotland": false,
            "N. Ireland": false
        }
    },
    {
        "name": "Sold Prices Per Sqf",
        "full-name": "Sold Prices Per Square Feet",
        "description": "For a given UK postcode (full, district or sector) and optional filters, returns statistical averages and confidence intervals of property sold prices per square foot. ",
        "icon": "dollar-sign",
        "api": "/sold-prices-per-sqf",
        "available": {
            "England": true,
            "Wales": true,
            "Scotland": false,
            "N. Ireland": false
        }
    },
    {
        "name": "Valuation Rent",
        "full-name": "Valuation Rent",
        "description": "For a full UK postcode and a range of required parameters relating to a particular UK property, returns an estimated rental valuation (with +/- margin of error) for that property. The only available AVM in the UK that uses market £/sqft data as part of the valuation.",
        "icon": "dollar-sign",
        "api": "/valuation-rent",
        "available": {
            "England": true,
            "Wales": true,
            "Scotland": true,
            "N. Ireland": true
        }
    },
    {
        "name": "Rents",
        "full-name": "Rents",
        "description": "For a given UK postcode (full, district or sector) and optional filters, returns statistical average and confidence intervals of live property asking rents (long-let), from the smallest radius at which there is reasonable data. All rents are expressed as per week (for monthly values, multiply by 4.333).",
        "icon": "dollar-sign",
        "api": "/rents",
        "available": {
            "England": true,
            "Wales": true,
            "Scotland": true,
            "N. Ireland": true
        }
    },
    {
        "name": "Rents Hmo",
        "full-name": "Rents Hmo",
        "description": "For a given UK postcode (full, district or sector), returns statistical averages and confidence intervals of the room rental market, segmented by double / single rooms and ensuite / shared bathroom.",
        "icon": "dollar-sign",
        "api": "/rents-hmo",
        "available": {
            "England": true,
            "Wales": true,
            "Scotland": true,
            "N. Ireland": true
        }
    },
    {
        "name": "Yields",
        "full-name": "Yields",
        "description": "For a given UK postcode (full, district or sector) and optional filters, returns average property yields from the smallest radius at which there is reasonable data.",
        "icon": "dollar-sign",
        "api": "/yields",
        "available": {
            "England": true,
            "Wales": true,
            "Scotland": true,
            "N. Ireland": true
        }
    },
    {
        "name": "Growth",
        "full-name": "Growth",
        "description": "For a given UK postcode (full, district or sector) and optional filters, returns average property yields from the smallest radius at which there is reasonable data.",
        "icon": "dollar-sign",
        "api": "/growth",
        "available": {
            "England": true,
            "Wales": true,
            "Scotland": true,
            "N. Ireland": true
        }
    },
    {
        "name": "Demand",
        "full-name": "Demand",
        "description": "For a given UK postcode (full, district or sector), returns local property demand analytics.",
        "icon": "dollar-sign",
        "api": "/demand",
        "available": {
            "England": true,
            "Wales": true,
            "Scotland": false,
            "N. Ireland": false
        }
    },
    {
        "name": "Planning",
        "full-name": "Planning",
        "description": "For a given UK postcode (full, district or sector) returns up to 10 nearby planning applications.",
        "icon": "dollar-sign",
        "api": "/planning",
        "available": {
            "England": true,
            "Wales": true,
            "Scotland": true,
            "N. Ireland": true
        }
    },
    {
        "name": "Land Titles",
        "full-name": "Land Titles",
        "description": "For a given full UK postcode returns up to 15 nearby freehold land title numbers. You can then use the /title-info method to look up further information (e.g. address) for each title, if desired.",
        "icon": "dollar-sign",
        "api": "/land-titles",
        "available": {
            "England": true,
            "Wales": true,
            "Scotland": false,
            "N. Ireland": false
        }
    },
    {
        "name": "Title Info",
        "full-name": "Title Info",
        "description": "For a given title number (freehold or leasehold) returns address, type, ownership information, number of polygons and approximate centre lat/lng.",
        "icon": "dollar-sign",
        "api": "/title-info",
        "available": {
            "England": true,
            "Wales": true,
            "Scotland": false,
            "N. Ireland": false
        }
    },
    {
        "name": "Crime",
        "full-name": "Crime",
        "description": "For a given UK postcode (full, district or sector), returns analytics on local crime.",
        "icon": "dollar-sign",
        "api": "/crime",
        "available": {
            "England": true,
            "Wales": true,
            "Scotland": false,
            "N. Ireland": false
        }
    },
    {
        "name": "Demographics",
        "full-name": "Demographics",
        "description": "For a given UK postcode (full, district or sector) returns population demographic data from the smallest radius at which there is reasonable data.",
        "icon": "dollar-sign",
        "api": "/demographics",
        "available": {
            "England": true,
            "Wales": true,
            "Scotland": false,
            "N. Ireland": false
        }
    },
    {
        "name": "Schools",
        "full-name": "Schools",
        "description": "For a given UK postcode (full, district or sector) returns data about nearby state and independent schools.",
        "icon": "dollar-sign",
        "api": "/schools",
        "available": {
            "England": true,
            "Wales": false,
            "Scotland": false,
            "N. Ireland": false
        }
    },
    {
        "name": "Stamp Duty",
        "full-name": "Stamp Duty",
        "description": "For a given transaction value, calculates the SDLT payable. Value returned depends on UK country and whether additional rate SDLT is payable.",
        "icon": "dollar-sign",
        "api": "/stamp-duty",
        "available": {
            "England": true,
            "Wales": true,
            "Scotland": true,
            "N. Ireland": true
        }
    },
    {
        "name": "Green Belt",
        "full-name": "Green Belt",
        "description": "For a full UK postcode, returns whether the property is within the green belt (and if applicable the green belt name).",
        "icon": "dollar-sign",
        "api": "/green-belt",
        "available": {
            "England": true,
            "Wales": true,
            "Scotland": false,
            "N. Ireland": false
        }
    },
    {
        "name": "National Park",
        "full-name": "National Park",
        "description": "For a full UK postcode, returns whether the property is within a national park (and if applicable the national park name).",
        "icon": "dollar-sign",
        "api": "/national-park",
        "available": {
            "England": true,
            "Wales": true,
            "Scotland": true,
            "N. Ireland": true
        }
    },
    {
        "name": "Aonb",
        "full-name": "Area of Outstanding National Beauty",
        "description": "For a full UK postcode, returns whether the property is within an Area of Outstanding National Beauty (AONB) (and if applicable the AONB name).",
        "icon": "dollar-sign",
        "api": "/aonb",
        "available": {
            "England": true,
            "Wales": true,
            "Scotland": false,
            "N. Ireland": false
        }
    },
    {
        "name": "Flood Risk",
        "full-name": "Flood Risk",
        "description": "For a full postcode in England, returns the risk of flooding from rivers and sea. Possible flood risk values are:",
        "icon": "dollar-sign",
        "api": "/flood-risk",
        "available": {
            "England": true,
            "Wales": false,
            "Scotland": false,
            "N. Ireland": false
        }
    },
    {
        "name": "Internet Speed",
        "full-name": "Internet Speed",
        "description": "For a full postcode UK postcode, returns analytics on the internet speeds available.",
        "icon": "dollar-sign",
        "api": "/internet-speed",
        "available": {
            "England": true,
            "Wales": true,
            "Scotland": true,
            "N. Ireland": true
        }
    },
    {
        "name": "Build Cost",
        "full-name": "Build Cost",
        "description": "For a full UK postcode, building type, internal area (in square feet) and finish quality returns the estimated building cost (both total and per square foot).",
        "icon": "dollar-sign",
        "api": "/build-cost",
        "available": {
            "England": true,
            "Wales": true,
            "Scotland": true,
            "N. Ireland": true
        }
    },
    {
        "name": "PTAL",
        "full-name": "Public Transport Accessibility Levels",
        "description": "For a full UK postcode within Greater London, returns the PTAL score. Possible PTAL scores are 0 (worst); 1a; 1b; 2; 3; 4; 5; 6a; 6b (best).",
        "icon": "dollar-sign",
        "api": "/ptal",
        "available": {
            "England": false,
            "Wales": false,
            "Scotland": false,
            "N. Ireland": false
        }
    },
    {
        "name": "Council Tax",
        "full-name": "Council Tax",
        "description": "For a full UK postcode, returns analytics on average council tax by property band in the council area. Figures returned are average council tax for properties of that band in the council area, including adult social care precept but excluding parish precepts. Our rating provides context on how well this council is performing on keeping tax low.",
        "icon": "dollar-sign",
        "api": "/council-tax",
        "available": {
            "England": true,
            "Wales": true,
            "Scotland": false,
            "N. Ireland": false
        }
    },
    {
        "name": "Floor Areas",
        "full-name": "Floor Areas",
        "description": "For a full UK postcode, returns known floor areas of properties in that postcode.",
        "icon": "dollar-sign",
        "api": "/floor-areas",
        "available": {
            "England": true,
            "Wales": true,
            "Scotland": false,
            "N. Ireland": false
        }
    },
    {
        "name": "Property List",
        "full-name": "Property List",
        "description": "Returns up to 2,500 properties currently on any one of our specialist situation property sourcing lists. Using the 'region' parameter is highly recommended to ensure relevant results.",
        "icon": "dollar-sign",
        "api": "/property-list",
        "available": {
            "England": false,
            "Wales": false,
            "Scotland": false,
            "N. Ireland": false
        }
    },
    {
        "name": "Restaurants",
        "full-name": "Restaurants",
        "description": "For a given full UK postcode returns data about nearby restaurants.",
        "icon": "dollar-sign",
        "api": "/restaurants ",
        "available": {
            "England": true,
            "Wales": true,
            "Scotland": false,
            "N. Ireland": true
        }
    }
]