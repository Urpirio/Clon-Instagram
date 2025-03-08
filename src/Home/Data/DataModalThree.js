// import { options } from "less";
// import { build } from "vite";

const DataModalThree = [
    {
        Report: [
            {
                options: [
                    {
                        Option: "I just don't like it"
                    },
                    {
                        Option: 'Bullying or unwanted contact'
                    },
                    {
                        Option: "Suicide, self-injury or eating disorders"
                    },
                    {
                        Option: "Violence, hate or exploitation"
                    },
                    {
                        Option: "Selling or promoting restricted items"
                    },
                    {
                        Option: "Nudity or sexual activity"
                    },
                    {
                        Option: "Scam, fraud or Spam"
                    },
                    {
                        Option: "False informacion"
                    }
                ],

                Results:[
                    {
                        bullying: [
                            {
                                TypeBullying: 'Threatening to share or sharing nude images'
                            },
                            {
                                TypeBullying: 'Bullying or harassment'
                            },
                            {
                                TypeBullying: 'Spam'
                            }
                        ],
                        SuicideP: [
                            {
                                TypeSuicide: 'Suicide or self-injury',
                            },
                            {
                                TypeSuicide: 'Eating disorder',
                            }
                        ],

                        Violence: [
                            {
                                TypeViolence: 'Credible threat to safety'
                            },
                            {
                                TypeViolence: 'Seem like terrorism or organized crime'
                            },
                            {
                                TypeViolence: 'Seems like exploitation'
                            },
                            {
                                TypeViolence: 'Hate speech or symbols'
                            },
                            {
                                TypeViolence: 'Calling for violence'
                            },
                            {
                                TypeViolence: 'Showing violence, death or severe injury'
                            },
                            {
                                TypeViolence: 'Animal Abuse'
                            },
                            
                        ],
                        Promoted: [
                            {
                                TypePromoted: 'Drugs'
                            },
                            {
                                TypePromoted: 'Weapons'
                            },
                            {
                                TypePromoted: 'Animals'
                            },
                        ],
                        Nudity: [
                            {
                                TypeNudity: 'Threatening to share o sharing nude images'
                            },
                            {
                                TypeNudity: 'Seems like prostitution'
                            },
                            {
                                TypeNudity: 'Seems like sexual exploitation'
                            },
                            {
                                TypeNudity: 'Nudity or sexual activity'
                            },
                        ],
                        Spam: [
                            {
                                TypeSpam: 'Fraud or scam'
                            },
                            {
                                TypeSpam: 'Spam'
                            },
                        ],
                        FalseInformation: [
                            {
                                TypeInformation: 'Health'
                            },
                            {
                                TypeInformation: 'Politics'
                            },
                            {
                                TypeInformation: 'Social issues'
                            },
                            {
                                TypeInformation: 'Digitally created or altered'
                            },
                        ]
                    }
                ],


            }
        ],
        ShareTo: [
            {
                TypeShareTo: 'Share to Threads',
                Icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-threads" viewBox="0 0 16 16"><path d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948s.928 1.509 1.005 2.644q.492.207.905.484c1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.2 6.2 0 0 0-1.528-.161"/></svg>',
                link: 'https://www.threads.net/login?hl=es-la',
            },
            {
                TypeShareTo: 'Share to Facebook',
                Icon: `<i class='bx bxl-facebook' ></i>`,
                link: 'https://web.facebook.com/?_rdc=1&_rdr#',
            },
            {
                TypeShareTo: 'Share to Messenger',
                Icon: `<i class='bx bxl-messenger' ></i>`,
                link: 'https://web.facebook.com/?_rdc=1&_rdr#',
            },
            {
                TypeShareTo: 'Share to Twitter',
                Icon: `<i class='bx bxl-twitter' ></i>`,
                link: 'https://x.com/?lang=es',
            },
            {
                TypeShareTo: 'Share via Email',
                Icon: `<i class='bx bx-envelope' ></i>`,
                link: 'mailto:',
            },
            {
                TypeShareTo: 'QR code',
                Icon: `<i class='bx bx-qr-scan' ></i>`,
                link: '',
            },
            {
                TypeShareTo: 'Copy link',
                Icon: `<i class='bx bx-link-alt' ></i>`,
                link: '',
            },
        ]
    }
]
export default DataModalThree;