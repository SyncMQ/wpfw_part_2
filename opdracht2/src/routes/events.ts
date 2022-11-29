export type Card = {
    image: string,
    date: string,
    title: string,
    description: string,
    tags: string[],
    price: number
}
export type Event = {
    label: string;
    date: string;
    price: number;
};

export const cards: Card[] = [{
	image: 'https://www.walibi.nl/sites/default/files/widget/text_image/2022-08/Header_KV_Website_5000x3536px_LR.jpg',
	date: 'October 2022',
	title: 'Spookhuis',
	description: 'Aanstaande vrijdag kom Halloween vieren samen in ons pretpark!',
	tags: ['Spannend', 'Seizoen'],
	price: 15
},
{
	image: 'https://www.walibi.nl/sites/default/files/styles/1280x711/public/content/editorial/2020-02/fastlane_0.jpg?itok=BrMeK8Ek',
	date: 'October 2022',
	title: 'Snelste Actbaan in Nederland',
	description: 'Beschikbaar tot 31 october. kom langs en probeer on nieuwe achtbaan!',
	tags: ['Snel', 'Achtbaan', 'Super leuk'],
	price: 10
},
{
	image: 'https://cdn-cms.bookingexperts.nl/media/851/31/preprocessed.jpg',
	date: 'October 2022',
	title: 'Halloween eten',
	description: 'Deze maand heeft ons pretpartk een speciale menu om je smaakpapillen te afschrikken!',
	tags: ['Special Menu', 'Eten'],
	price:5
}
];

export const events :Event[] = cards.map((card) => { return { label: card.title, date: card.date,price: card.price }; });