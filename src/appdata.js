const optionsData = [
    { option: "All of the time", value: 4, isSelected: false },
    { option: "Most of the time", value: 3, isSelected: false },
    { option: "Some of the time", value: 2, isSelected: false },
    { option: "A little of the time", value: 1, isSelected: false },
    { option: "None of the time", value: 0, isSelected: false }
];

const questions = [
    {
        title: "Hello!",
        text: [
            "Your consultant will soon be with you. As an head start, kindly answer the following questions to know how we may help you better.",
            "The following questions ask about how you have been feeling during the past 30 days. For each question, please click the option that best describes how often you had this feeling. The following questions ask about how you have been feeling during the past 30 days. For each question, please click the option that best describes how often you had this feeling."],
        keyword: null,
        options: [{ option: "Begin Assessment", value: null, isSelected: true }]
    },
    {
        title: "Question",
        text: "During the past 30 days, about how often did you feel nervous?",
        keyword: "nervous",
        options: optionsData
    },
    {
        title: "Question",
        text: "During the past 30 days, about how often did you feel hopeless?",
        keyword: "hopeless",
        options: optionsData
    },
    {
        title: "Question",
        text: "During the past 30 days, about how often did you feel restless or fidgety?",
        keyword: "restless or fidgety",
        options: optionsData
    },
    {
        title: "Question",
        text: "During the past 30 days, about how often did you feel so depressed that nothing could cheer you up?",
        keyword: "so depressed that nothing could cheer you up",
        options: optionsData
    },
    {
        title: "Question",
        text: "During the past 30 days, about how often did you feel that everything was an effort?",
        keyword: "that everything was an effort",
        options: optionsData
    },
    {
        title: "Question",
        text: "During the past 30 days, about how often did you feel worthless?",
        keyword: "worthless",
        options: optionsData
    },
    {
        title: "All Done",
        text: ["Thank you for completing the initial screening.", "We'll now link you up with a consultant. Click the finish button to proceed."],
        keyword: null,
        options: [{ option: "Finish", value: null, isSelected: true }]
    }
]

const appData = {
    intro: {
        instructions: [
            "Your consultant will soon be with you. As an head start, kindly answer the following questions to know how we may help you better.",
            "The following questions ask about how you have been feeling during the past 30 days. For each question, please click the option that best describes how often you had this feeling."
        ],
        buttonText: "Begin Assessment"
    },
    questions: questions
}

export default appData;