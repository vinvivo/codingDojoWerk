//
//  ViewController.swift
//  ticTacToe
//
//  Created by Vinney Le on 9/7/17.
//  Copyright © 2017 Vinney Le. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
                    // Using playerLabel to display messages to player.
    @IBOutlet weak var playerLabel: UILabel!
    
                    // All tic tac toe buttons are contained in tttButtons outlet collection.
    @IBOutlet var tttButtons: [UIButton]!
    
                    // buttonsPressed is an array of UIButton objects that will contain the buttons that have been pressed. Using this to prevent multiple changes in button color.
    var buttonsPressed: [UIButton] = [UIButton]()
                    // To keep score, this score dictionary keeps track of which UIButtons are assigned to a particular color/ player
    var score: [ String: [UIButton] ] = [ "playerOne" : [], "playerTwo" : [] ]
    
    var whoseTurn: String = ""
    
    func resetGame() {
        playerLabel.text = "YOUR TURN, PLAYER ONE"
        buttonsPressed = []
        score = [ "playerOne": [], "playerTwo": [] ]
        whoseTurn = "PLAYER ONE"
        for button in tttButtons {
            button.backgroundColor = UIColor.init(red: 0.9, green: 0.9, blue: 0.9, alpha: 1.0) // does not take RGB values 0-255
        }
    }
    
    @IBAction func tttButtonPressed(_ sender: UIButton) {
                    // Checks if button is in buttonsPressed array (i.e., if a button has already been pressed). Returns a boolean.
        let buttonHasBeenPressed = buttonsPressed.contains(sender)
        
                    // If button has NOT been pressed, run code.
        if !buttonHasBeenPressed {
            if whoseTurn == "PLAYER ONE" {
                sender.backgroundColor = UIColor.init(red: 1.0, green: 0.541, blue: 0.847, alpha: 0.5)
                buttonsPressed.append(sender)
                whoseTurn = "PLAYER TWO"
                playerLabel.text = "YOUR TURN, \(whoseTurn)"
                score["playerOne"]?.append(sender)
            } else if whoseTurn == "PLAYER TWO" {
                sender.backgroundColor = UIColor.init(red: 0.999, green: 0.986, blue: 0.0, alpha: 0.5)
                buttonsPressed.append(sender)
                whoseTurn = "PLAYER ONE"
                playerLabel.text = "YOUR TURN, \(whoseTurn)"
                score["playerTwo"]?.append(sender)
            }
        }
        print(score)
        print(tttButtons[0])
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        resetGame()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    @IBAction func resetButtonPressed(_ sender: UIButton) {
        resetGame()
    }
    
    func printInfo(_ value: Any) {
        let type = type(of: value)
        print("'\(value)' of type '\(type)'")
    }
    
    func checkWinner() {
        if score["playerOne"]!.contains(tttButtons[0]) && score["playerOne"]!.contains(tttButtons[1]) && score["playerOne"]!.contains(tttButtons[2])
        ||
            score["playerOne"]!.contains(tttButtons[3]) && score["playerOne"]!.contains(tttButtons[4]) && score["playerOne"]!.contains(tttButtons[5])
        ||
            score["playerOne"]!.contains(tttButtons[6]) && score["playerOne"]!.contains(tttButtons[7]) && score["playerOne"]!.contains(tttButtons[8])
        ||
            score["playerOne"]!.contains(tttButtons[0]) && score["playerOne"]!.contains(tttButtons[3]) && score["playerOne"]!.contains(tttButtons[6])
        ||
            score["playerOne"]!.contains(tttButtons[1]) && score["playerOne"]!.contains(tttButtons[4]) && score["playerOne"]!.contains(tttButtons[7])
        ||
            score["playerOne"]!.contains(tttButtons[2]) && score["playerOne"]!.contains(tttButtons[5]) && score["playerOne"]!.contains(tttButtons[8])
        ||
            score["playerOne"]!.contains(tttButtons[0]) && score["playerOne"]!.contains(tttButtons[4]) && score["playerOne"]!.contains(tttButtons[8])
        ||
            score["playerOne"]!.contains(tttButtons[2]) && score["playerOne"]!.contains(tttButtons[4]) && score["playerOne"]!.contains(tttButtons[6])
        {
            playerLabel.text = "PLAYER ONE WINS!"
        }
    }
    

}

