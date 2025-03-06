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
        ]
    }
]
export default DataModalThree;