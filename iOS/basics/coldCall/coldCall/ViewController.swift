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

    let nameBank = ["What's in a name?", "Félix", "Dorina", "Jonathan", "Geanina", "Ann-Julie", "Zoe", "Mona", "Philip", "Leopoldina", "Laura", "Joe", "Maia", "Sandra", "Esim", "Nicolai", "Sara", "Catrina", "Elvira", "Vanyi", "Lorin", "Zlatica", "Marta", "Paul", "Harley", "Ieremia", "Jayden"]
    
    var currentName = 0
    
    @IBAction func coldCallButtonPressed(_ sender: UIButton) {
        print("Cold Call button pressed!")
        currentName = Int(arc4random_uniform(UInt32(nameBank.count)) + 1)
        updateUI()
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        updateUI()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
        updateUI()
    }
    
    func updateUI() {
        nameLabel.text = nameBank[currentName]
    }


}

