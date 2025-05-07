const config = {
    property: {
        streetAddress: "11 Glen Abbey Tr",
        city: "Vaughan",
        cityStateZip: "Vaughan, ON L4H 4K4",
        heroSubtitle: "Epitome of Luxury and Grandeur. Register today to receive the exclusive Property Compendium including floor plans, comps, media, and more...",
        backgroundImageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
        listingPrice: "$3,148,800",
        beds: "4+2 Beds",
        baths: "6",
        homeType: "Freehold",
        benefitOne: "Completely finished Luxurious turn-key home including Finished Basement with kitchen and 2 extra bedrooms and Full Landscaping with pool and cabana with outdoor bathroom",
        benefitTwo: "New high-end finishes including Full Kitchen, Herringbone flooring, Appliances (SubZero 72\"  Side-by-side Fridge/Freezer, Wolf 48 Stove, Bosh DW), Quartz countertop, 2 new furnaces and Air Conditioner, and Full Interlock driveway",
        benefitThree: "3-Car garage, 10 foot ceilings on main, and 9 foot ceilings in basement and 2nd floor",
        keySellingFeature: "Epitome of Luxury and Grandeur",
        neighbourhood: "Exclusive Kleinburg Area home surrounded by Luxury homes, schools, parks, and nature.",
        brandedMedia: "https://istreetrealty.ca/",
        propertyListing: "https://app.realmmlp.ca/s?active=TREB-N11969605&is_map_search=true&ne_lat=43.83479654795312&ne_lng=-79.6384699174286&offset=1&q=treb%2Favailability%3AA%257Cclass%3AFREE%257CsaleOrRent%3ASALE%257CgeoAnd%3AY&sw_lat=43.82978137717714&sw_lng=-79.64690278257142&z=17",
        floorPlan: "https://www.realtor.ca/l/bQDuo/ka",
        virtualTour: "https://www.realtor.ca/l/bQDuo/ka",
        onMarketComps: [
            "https://www.realtor.ca/real-estate/27976844/71-nave-street-vaughan-kleinburg-kleinburg",
            "https://www.realtor.ca/real-estate/28231738/49-appleyard-avenue-vaughan-kleinburg-kleinburg",
            "https://www.realtor.ca/real-estate/27785830/52-rolling-green-court-vaughan-kleinburg-kleinburg",
            "https://app.realmmlp.ca/s?%24orderby=price&active=TREB-N11889978&is_map_search=true&ne_lat=43.83801356606088&ne_lng=-79.63496530607858&offset=1&q=treb%2Favailability%3AU%257Cclass%3AFREE%257CsaleOrRent%3ASALE%257CgeoAnd%3AY%257Cstatus%3ASLD%257CsaleDate%3A%253E%253D11%252F01%252F2024&sw_lat=43.82798334378021&sw_lng=-79.65183103636423&z=16",
            "https://app.realmmlp.ca/s?%24orderby=price&active=TREB-N11245503&is_map_search=true&ne_lat=43.83801356606088&ne_lng=-79.63496530607858&offset=1&q=treb%2Favailability%3AU%257Cclass%3AFREE%257CsaleOrRent%3ASALE%257CgeoAnd%3AY%257Cstatus%3ASLD%257CsaleDate%3A%253E%253D11%252F01%252F2024&sw_lat=43.82798334378021&sw_lng=-79.65183103636423&z=16",
            "https://app.realmmlp.ca/s?%24orderby=price&active=TREB-N9387032&is_map_search=true&ne_lat=43.83801356606088&ne_lng=-79.63496530607858&offset=1&q=treb%2Favailability%3AU%257Cclass%3AFREE%257CsaleOrRent%3ASALE%257CgeoAnd%3AY%257Cstatus%3ASLD%257CsaleDate%3A%253E%253D11%252F01%252F2024&sw_lat=43.82798334378021&sw_lng=-79.65183103636423&z=16"
        ],
        openHouseDate: "2025-05-10"
    },
    realtor: {
        fullName: "iStreet Realty Group",
        firstName: "iStreet Realty Group",
        title: "Broker",
        phone: "416-410-2880",
        email: "rick@istreetrealty.ca",
        bio: "At iStreet Realty Group we are built on integrity, insight, and innovation. We combine decades of real estate expertise with cutting-edge technology to deliver unmatched support, transparency, and results for our clients. With over 40 years of hands-on real estate experience and extensive corporate backgrounds, our managing partners provide a balanced and strategic approach to Residential, Commercial, and Investment properties. We prioritize clear communication and use the latest market insights to guide every client toward success—whether buying, selling, or investing. At iStreet Realty Inc., we’re more than real estate experts—we’re your trusted partner in building your future.",
        photoUrl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/8e0c10a0-da43-409c-b191-91135b7161ff/c68f7f74-a1cf-4af6-a787-cf6c973b557f/headshot.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIKHLLF2%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T182435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYi0O%2BuX8JVdyT6hQb%2Bhq%2Bm0O9SwyUhmeQObvML7aLfgIgb4LdxD0DmyMAmZLaAtWDQ%2BLPXH6a1D5zgeIX0N2wNwwq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDDlidr6XSOYhu53G0ircA166b2BXYepQRsAaIrAJVwpe5I4VV9iBeQFHJWOxXyrsBH3dGB6QleIrhMhbStqppWleMf6AZSZvkWQRckcn17JVwhxlG89ZznBwOWIZliGlXhoEdJhyYzq%2BN0IfRv%2FsHsOrXWE%2Bsmg48QoaljYIzeMf%2BD1R1U5Ju7SEhXDUgZXXzXqGjwn6XDiekzNIYTNRwKD%2FKaNqvt8Bv0pk%2FC2LwLHpVYvyEhQEMySwoGyUDCF%2B%2Bs%2FPaaktjXt5%2BZNYOCOj1sFBugmaBd1uhLvdkni%2Bgf%2Bck%2FGGGg5%2Fkr2gu%2BJVK0RjsBU%2BK5%2Fj0696cXU4RXAJ9qgBx84h6jqZuODn1Gt4LAp6lbtaxJtoHzb%2FG8hYcCnbZzt3Fwkp1fcL2UWwMOS9r9GQNY8mHcP2ENAtQGflL2YCI%2BVsgUVNtZz23STLyP3k8EovPP02RqnxOUuWo%2BTIKoI6HWPu7oKYn2tv4rr58PYz70wFtSJPok%2FSqT91AhxqdNPFqcoQorpX0HobrHyBJNKIFHsNHnhePbHWAABkXDmnwkLrHFI4PTGD1Li%2Bmw0iYt%2FQMxKEKXXYMcOXP7R6WuDhGnnpDqtBpJulaw42%2B4Aqt9kRwgrILJIC53vTIGfIK3nprRB%2BUKSOlKOHMKu57sAGOqUByL1lItpa6Xygzvff7N7zTlAnx%2Bk0barSIJm3u4jRkP5DV8eZbp0Xe5QGQeFZce3tGhcv5%2F7khMnIGtQrQGjPE9YG7FvtraWjBmWeRsG66WBp5OE4iccb1Q%2FRcVkWxtLb0Gyy7eSXDXBwr2s8DZYh4%2BT%2BnXec5EIljlJfqwwVLYlcx2hleETsd8EDzw2KSVDe5BTc6CT2Y1N%2BDeOCHTiQlbvMrT5A&X-Amz-Signature=109304ee74570ab45cedf6432c4453a6b83211887b3155a4adf8ab8f463a92cb&X-Amz-SignedHeaders=host&x-id=GetObject",
        social: {
            facebook: "https://www.facebook.com/iStreetRealty",
            instagram: "https://www.instagram.com/istreetrealtygroup",
            website: "https://istreetrealty.ca/"
        }
    },
    brokerage: {
        name: "HomeLife Partners",
        logoUrl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/8e0c10a0-da43-409c-b191-91135b7161ff/2ad1f3a4-7cea-45f4-bef2-b56767bf550e/brokeragelogo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIKHLLF2%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T182435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYi0O%2BuX8JVdyT6hQb%2Bhq%2Bm0O9SwyUhmeQObvML7aLfgIgb4LdxD0DmyMAmZLaAtWDQ%2BLPXH6a1D5zgeIX0N2wNwwq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDDlidr6XSOYhu53G0ircA166b2BXYepQRsAaIrAJVwpe5I4VV9iBeQFHJWOxXyrsBH3dGB6QleIrhMhbStqppWleMf6AZSZvkWQRckcn17JVwhxlG89ZznBwOWIZliGlXhoEdJhyYzq%2BN0IfRv%2FsHsOrXWE%2Bsmg48QoaljYIzeMf%2BD1R1U5Ju7SEhXDUgZXXzXqGjwn6XDiekzNIYTNRwKD%2FKaNqvt8Bv0pk%2FC2LwLHpVYvyEhQEMySwoGyUDCF%2B%2Bs%2FPaaktjXt5%2BZNYOCOj1sFBugmaBd1uhLvdkni%2Bgf%2Bck%2FGGGg5%2Fkr2gu%2BJVK0RjsBU%2BK5%2Fj0696cXU4RXAJ9qgBx84h6jqZuODn1Gt4LAp6lbtaxJtoHzb%2FG8hYcCnbZzt3Fwkp1fcL2UWwMOS9r9GQNY8mHcP2ENAtQGflL2YCI%2BVsgUVNtZz23STLyP3k8EovPP02RqnxOUuWo%2BTIKoI6HWPu7oKYn2tv4rr58PYz70wFtSJPok%2FSqT91AhxqdNPFqcoQorpX0HobrHyBJNKIFHsNHnhePbHWAABkXDmnwkLrHFI4PTGD1Li%2Bmw0iYt%2FQMxKEKXXYMcOXP7R6WuDhGnnpDqtBpJulaw42%2B4Aqt9kRwgrILJIC53vTIGfIK3nprRB%2BUKSOlKOHMKu57sAGOqUByL1lItpa6Xygzvff7N7zTlAnx%2Bk0barSIJm3u4jRkP5DV8eZbp0Xe5QGQeFZce3tGhcv5%2F7khMnIGtQrQGjPE9YG7FvtraWjBmWeRsG66WBp5OE4iccb1Q%2FRcVkWxtLb0Gyy7eSXDXBwr2s8DZYh4%2BT%2BnXec5EIljlJfqwwVLYlcx2hleETsd8EDzw2KSVDe5BTc6CT2Y1N%2BDeOCHTiQlbvMrT5A&X-Amz-Signature=bb0974ce23027776ed4a40f2f549922335fb5a8d1a47cc4ffc4317a3b9d18715&X-Amz-SignedHeaders=host&x-id=GetObject",
        address: "3850 Steeles Avenue W. Unit 6, Woodbridge, Ontario"
    },
    openHouse: {
        bundleItems: [
            { icon: "fas fa-ruler-combined", text: "Detailed Architectural Floor Plans", link: "https://www.realtor.ca/l/bQDuo/ka" },
            { icon: "fas fa-star", text: "List of High-End Finishes & Appliances" },
            { icon: "fas fa-camera-retro", text: "Private High-Resolution Photo Album", link: "https://istreetrealty.ca/" },
            { icon: "fas fa-film", text: "Exclusive Cinematic Property Tour Video", link: "https://www.realtor.ca/l/bQDuo/ka" },
            { icon: "fas fa-map-location-dot", text: "On-Market Comparables & Neighborhood Sales", link: "https://www.realtor.ca/real-estate/27976844/71-nave-street-vaughan-kleinburg-kleinburg" },
            { icon: "fas fa-file-invoice-dollar", text: "Property Listing & Details", link: "https://app.realmmlp.ca/s?active=TREB-N11969605&is_map_search=true&ne_lat=43.83479654795312&ne_lng=-79.6384699174286&offset=1&q=treb%2Favailability%3AA%257Cclass%3AFREE%257CsaleOrRent%3ASALE%257CgeoAnd%3AY&sw_lat=43.82978137717714&sw_lng=-79.64690278257142&z=17" },
            { icon: "fas fa-key", text: "Early Access Notification for Similar Estates" }
        ]
    },
    meta: {
        pageTitlePrefix: "🏡 iStreet Realty Open House",
        navBrandLogoText: "iStreet Realty",
        privacyPolicyLink: "https://istreetrealty.ca/privacy-policy/",
        termsLink: "#terms"
    },
    settings: {
        webhookUrl: "https://n8n.salesgenius.co/webhook/openhouse",
        confettiColors: ['#003366', '#24597E', '#F6C522', '#ffffff', '#212121']
    },
    modalQuestions: [
        {
            id: "agent_status",
            questionText: "Are you currently exploring homes with a real estate agent?",
            options: [
                { value: "committed", text: "Yes, I'm committed to an agent." },
                { value: "not_committed", text: "No, I'm not committed to an agent." },
                { value: "gathering_info", text: "Just gathering information at this stage." }
            ]
        }
    ]
};