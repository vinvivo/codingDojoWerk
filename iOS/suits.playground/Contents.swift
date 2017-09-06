//: Suits
//  05 September 2017
//  Vinney Le
//
//  Given the following three variables write a for-in loop that will have the following output in the Assistant Editor.
//
//  Our result should look something like the following:
//
//  ["Clubs": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "Diamonds": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "Hearts": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "Spades": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]]
//
//  Should you expect the suits to print in the exact order you specified?

import UIKit

let suits = ["Clubs", "Diamonds", "Hearts", "Spades"]
let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
var deckOfCards = [String: [Int]]()

for suit in suits {
    deckOfCards[suit] = cards
}

print(deckOfCards)