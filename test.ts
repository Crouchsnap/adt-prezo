type AlcoholicDrink = Beer | MaltBeverage | Cocktail

interface Beer {
    alcoholContent: number
    bitternessUnits: number
    style: BeerStyle
    type: "Beer"
}

type BeerStyle = "Pilsner" | "Ale" | "Stout";

const m43: Beer = {type: "Beer", alcoholContent: .068, bitternessUnits: 65, style: "Ale"}
const rubaeus: Beer = {type: "Beer", alcoholContent: .057, bitternessUnits: 15, style: "Ale"}

interface MaltBeverage {
    alcoholContent: number
    style: MaltBeverageStyle
    type: "MaltBeverage"
}

type MaltBeverageStyle = "Seltzer" | "Barley" | "AlcoPop"

const oldEnglish800: MaltBeverage = {type: "MaltBeverage", alcoholContent: .077, style: "Barley"}
const whiteClaw: MaltBeverage = {type: "MaltBeverage", alcoholContent: .055, style: "Seltzer"}

interface Cocktail {
    type: "Cocktail"
    spirit: Array<Spirit>
    mixer: Array<Mixer>
    garnish: Array<Garnish>
    rocks: boolean
}

type Spirit = "Vodka" | "Gin"

type Mixer = Juice | Syrup

interface Juice {
    type : "Juice"
    style: JuiceStyle
}

type JuiceStyle = "Lime" | "Cranberry"

interface Syrup {
    type: "Syrup"
    style: SyrupStyle
}

type SyrupStyle = "Simple"

type Garnish = Fruit | Vegetable

type Fruit = "Lime" | "Cherry" | "Orange"

type Vegetable = "Onion" | "Celery"

const vodkaCranberry: Cocktail = {
    type: "Cocktail",
    spirit: ["Vodka"],
    mixer: [{type:"Juice", style: "Cranberry"}],
    garnish: ["Lime"],
    rocks: true
}
const gimlet: Cocktail = {
    type: "Cocktail",
    spirit: ["Gin"],
    mixer: [{type:"Juice", style: "Lime"}, {type: "Syrup", style: "Simple"}],
    garnish: [],
    rocks: false
}

const willCboyer17Drink = (drink: AlcoholicDrink): boolean => {
    switch (drink.type) {
        case "Beer" :
            return drink.bitternessUnits <= 15 && drink.style === "Ale";
        case "MaltBeverage" :
            return drink.style === "Seltzer";
        case "Cocktail":
            return drink.spirit.includes("Vodka") && drink.mixer.some(mixer => mixer.type === "Juice" && mixer.style === "Cranberry")
    }
}


describe("things cboyer17 will drink", () => {
    test("will cboyer17 drink m43?", () => {
        expect(willCboyer17Drink(m43)).toEqual(false);
    });

    test("will cboyer17 drink rubaeus?", () => {
        expect(willCboyer17Drink(rubaeus)).toEqual(true);
    });

    test("will cboyer17 drink old english?", () => {
        expect(willCboyer17Drink(oldEnglish800)).toEqual(false);
    });

    test("will cboyer17 drink white claw?", () => {
        expect(willCboyer17Drink(whiteClaw)).toEqual(true);
    });
    test("will cboyer17 drink a vodka cran?", () => {
        expect(willCboyer17Drink(vodkaCranberry)).toEqual(true);
    });
    test("will cboyer17 drink a gimlet?", () => {
        expect(willCboyer17Drink(gimlet)).toEqual(false);
    })
});
