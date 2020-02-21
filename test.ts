interface Beer {
    alcoholContent: number
    bitternessUnits: number
    style: BeerStyle
    type: 'Beer'
}

interface MaltBeverage {
    alcoholContent: number
    style: MaltBeverageStyle
    type: 'MaltBeverage'
}



interface Spirit {
}

interface Juice {
}

interface Garnish {
}

type Mixer = Juice | Soda

interface Soda {
}


interface Cocktail {
    type: 'Cocktail'
    spirit : [Spirit]
    mixer? : [Mixer]
    garnish? : [Garnish]
    rocks: boolean
}

type MaltBeverageStyle = 'Seltzer' | 'Barley' | 'AlcoPop'

type AlcoholicDrink = Beer | MaltBeverage

type BeerStyle = 'Pilsner' | 'Ale' | 'Stout';


const willCboyer17Drink = (drink:AlcoholicDrink) : boolean => {
    switch (drink.type) {
        case 'Beer' : return drink.bitternessUnits <= 15 && drink.style === 'Ale';
        case 'MaltBeverage' : return drink.style === 'Seltzer';
    }
}

const m43 : Beer = { type: 'Beer', alcoholContent : .068, bitternessUnits: 65, style : 'Ale' }
const rubaeus : Beer = { type: 'Beer', alcoholContent : .057, bitternessUnits: 15, style : 'Ale' }
const oldEnglish800 : MaltBeverage = {type : 'MaltBeverage', alcoholContent : .077, style : 'Barley'}


describe('things cboyer17 will drink', () => {
    test
    ('will cboyer17 drink m43?', () => {
        expect(willCboyer17Drink(m43)).toEqual(false);
    });

    test
    ('will cboyer17 drink rubaeus?', () => {
        expect(willCboyer17Drink(rubaeus)).toEqual(true);
    });

    test
    ('will cboyer17 drink old english?', () => {
        expect(willCboyer17Drink(oldEnglish800)).toEqual(false);
    });
});
