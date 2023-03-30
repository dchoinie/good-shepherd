export default {
    name: 'lectionary',
    title: 'Lectionary',
    type: 'document',
    fields: [
        {
            name: 'date',
            title: 'Date',
            type: 'date',
        },
        {
            name: 'sundayName',
            title: 'Sunday Name',
            type: 'string',
        },
        {
            name: 'oldTestamentReading',
            title: 'Old Testament Reading',
            type: 'string',
        },
        {
            name: 'oldTestamentLink',
            title: 'Old Testament Link',
            type: 'string',
        },
        {
            name: 'epistle',
            title: 'Epistle',
            type: 'string',
        },
        {
            name: 'epistleLink',
            title: 'Epistle Link',
            type: 'string',
        },
        {
            name: 'holyGospel',
            title: 'Holy Gospel',
            type: 'string',
        },
        {
            name: 'holyGospelLink',
            title: 'Holy Gospel Link',
            type: 'string',
        },
        {
            name: 'liturgicalColor',
            title: 'Liturgical Color',
            type: 'string',
        },
    ],
}