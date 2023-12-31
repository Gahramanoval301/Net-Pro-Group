export const sections = [
    {
        to: "/",
        route: 'Əsas səhifə'
    },
    {
        to: "/haqqımızda",
        route: 'Haqqımızda'
    },
    {
        route: 'Məhsullar',
        subRoutes: [
            {
                to: "/məhsullar/uninterruptible-power-supplies",
                route: 'Uninterruptible Power Supplies',
            },
            {
                to: "/məhsullar/dc-power-systems",
                route: 'DC Power Systems',
            },
            {
                to: "/məhsullar/power-distribution",
                route: 'Power Distribution',
            },
            {
                to: "/məhsullar/industrial-ac-and-dc-systems",
                route: 'Industrial AC and DC Systems',
            },
            {
                to: "/məhsullar/static-transfer-switches",
                route: 'Static Transfer Switches',
            },
            {
                to: "/məhsullar/power-control-and-monitoring",
                route: 'Power Control and Monitoring',
            },
        ]
    },
    {
        route: 'Xidmətlər və Həllər',
        subRoutes: [
            {
                to: "/xidmətlər-və-həllər",
                route: 'Xidmətlər və Həllər',
            },
            {
                to: '/xidmətlər-və-həllər/avadanliqlarin-qurasdirilmasi-və-konfiqurasiyasi',
                route: "Avadanlıqların quraşdırılması və konfiqurasiyası",
            },
            {
                to: '/xidmətlər-və-həllər/daimi-nezaret',
                route: "Daimi nəzarət",
            },
            {
                to: '/xidmətlər-və-həllər/avadanliqlarin-vaxtinda-dəyisdirilməsi',
                route: 'Avadanlıqların vaxtında dəyişdirilməsi',
            },
            {
                to: '/xidmətlər-və-həllər/it-xidmetler',
                route: 'İT xidmətlər',
            },
            {
                to: '/xidmətlər-və-həllər/helpdesk-xidmətləri',
                route: 'Helpdesk xidmətlər',
            },
            {
                to: '/xidmətlər-və-həllər/təhlukəsizlik-xidmətləri',
                route: 'Təhlükəsizlik xidmətləri',
            }
        ]
    },
    {
        route: 'Qalereya və Bloq',
        to:'/qaleriya-bloq',
    },
    {
        to: "/əlaqə",
        route: 'Əlaqə'
    },
]