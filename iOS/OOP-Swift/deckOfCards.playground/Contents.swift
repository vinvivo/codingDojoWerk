//: Playground - noun: a place where people can play

import UIKit

// Create a struct called "card"
struct Card {
    var color: String
    var roll: UInt32
}

// Create a class called "deck"
class Deck {
    var cards: [Card] = []
    
    init() {
        var blueCards = 0, redCards = 0, greenCards = 0
        while blueCards < 10 {
            let randomNum: UInt32 = arc4random_uniform(2) + 1
            cards.append(Card(color: "Blue", roll: randomNum))
            blueCards += 1
        }
        while redCards < 10 {
            let randomNum: UInt32 = arc4random_uniform(2) + 3
            cards.append(Card(color: "Red", roll: randomNum))
            redCards += 1
        }
        while greenCards < 10 {
            let randomNum: UInt32 = arc4random_uniform(2) + 5
            cards.append(Card(color: "Green", roll: randomNum))
            greenCards += 1
        }
    }
    
    func deal() -> Card {
        let topMostCard: Card? = cards.removeLast()
        if let lastCard = topMostCard {
            return lastCard
        } else {
            return Card(color: "", roll: 0)
        }
    }
    
    func isEmpty() -> Bool {
        return cards.count == 0
    }
    
    func shuffle() -> [Card] {
        for _ in 1...100 {
            let randomNum1: UInt32 = arc4random_uniform(UInt32(cards.count))
            let randomNum2: UInt32 = arc4random_uniform(UInt32(cards.count))
            if randomNum1 != randomNum2 {
                swap(&cards[Int(randomNum1)], &cards[Int(randomNum2)])
            }
        }
        return cards
    }
}

var myDeck = Deck()
print(myDeck.cards.count)
print(myDeck.cards)
print(myDeck.shuffle())
print(myDeck.deal())
print(myDeck.cards.count)

// Create a class called "Player"
class Player {
    var name: String
    var hand: [Card]
    init(name: String) {
        self.name = name
        self.hand = [Card]()
    }
    func drawFromDeck(deck: Deck) -> Card {
        let cardDrawn = deck.deal()
        self.hand.append(cardDrawn)
        return cardDrawn
    }
    func rollDice() -> UInt32 {
        return arc4random_uniform(6) + UInt32(1)
    }
    func matchingCards(color: String, roll: UInt32) -> UInt32 {
        var matchCount: UInt32 = 0
        for card in self.hand {
            if card.color == color && card.roll == roll {
                matchCount += 1
            }
        }
        return matchCount
    }
}
var myPlayer = Player(name: "Vinney")
myPlayer.drawFromDeck(deck: myDeck)
print(myPlayer.hand)
myPlayer.drawFromDeck(deck: myDeck)
print(myPlayer.hand)
