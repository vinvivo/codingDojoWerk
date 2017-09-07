//
//  ViewController.swift
//  coldCall
//
//  Created by Vinney Le on 9/6/17.
//  Copyright © 2017 Vinney Le. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet weak var nameLabel: UILabel!
    @IBOutlet weak var coldCallButton: UIButton!
    @IBOutlet weak var oneLabel: UILabel!
    @IBOutlet weak var twoLabel: UILabel!
    @IBOutlet weak var threeLabel: UILabel!
    @IBOutlet weak var fourLabel: UILabel!
    @IBOutlet weak var fiveLabel: UILabel!
    

    let nameBank = ["What's in a name?", "Félix", "Dorina", "Jonathan", "Geanina", "Ann-Julie", "Zoe", "Mona", "Philip", "Leopoldina", "Laura", "Joe", "Maia", "Sandra", "Esim", "Nicolai", "Sara", "Catrina", "Elvira", "Vanyi", "Lorin", "Zlatica", "Marta", "Paul", "Harley", "Ieremia", "Jayden"]
    
    var currentName = 0
    var showNumber = 0
    
    @IBAction func coldCallButtonPressed(_ sender: UIButton) {
        print("Cold Call button pressed!")
        currentName = Int(arc4random_uniform(UInt32(nameBank.count)) + 1)
        showNumber = Int(arc4random_uniform(6) + 1)
        updateUI()
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        oneLabel.isHidden   = true
        twoLabel.isHidden   = true
        threeLabel.isHidden = true
        fourLabel.isHidden  = true
        fiveLabel.isHidden  = true
        nameLabel.text = nameBank[0]
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
        updateUI()
    }
    
    func updateUI() {
        nameLabel.text = nameBank[currentName]
        if showNumber == 1 {
            oneLabel.isHidden = false
            twoLabel.isHidden   = true
            threeLabel.isHidden = true
            fourLabel.isHidden  = true
            fiveLabel.isHidden  = true
        } else if showNumber == 2 {
            oneLabel.isHidden   = true
            twoLabel.isHidden   = false
            threeLabel.isHidden = true
            fourLabel.isHidden  = true
            fiveLabel.isHidden  = true
        } else if showNumber == 3 {
            oneLabel.isHidden   = true
            twoLabel.isHidden   = true
            threeLabel.isHidden = false
            fourLabel.isHidden  = true
            fiveLabel.isHidden  = true
        } else if showNumber == 4 {
            oneLabel.isHidden   = true
            twoLabel.isHidden   = true
            threeLabel.isHidden = true
            fourLabel.isHidden  = false
            fiveLabel.isHidden  = true
        } else if showNumber == 5 {
            oneLabel.isHidden   = true
            twoLabel.isHidden   = true
            threeLabel.isHidden = true
            fourLabel.isHidden  = true
            fiveLabel.isHidden  = false
        }
    }


}

