// 定义扑克花色
type Suit = 'Heart' | 'Diamond' | 'Spade' | 'Club'

// 定义扑克卡牌成员
type CourtCard = 'Jack' | 'Queue' | 'King'
type NumeralCard = 'Ace' | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
type JokerCard = 'Red' | 'Black'
type PorkerCard = CourtCard | NumeralCard | JokerCard

// 定义单张扑克的结构
interface Porker {
  suit: Suit,
	card: PorkerCard
}

const heartAce: Porker = {
  suit: 'Hearta', // TypeError: Hearta not
	card: 'Ace'
}
