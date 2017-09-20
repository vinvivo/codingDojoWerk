//
//  ViewController.swift
//  Whats my number
//
//  Created by Vinney Le on 9/19/17.
//  Copyright © 2017 Vinney Le. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet weak var numberField: UITextField!

    @IBAction func saveButtonPressed(_ sender: UIButton) {
        
        UserDefaults.standard.set(numberField.text, forKey: "number")
        
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        let numberObject = UserDefaults.standard.object(forKey: "number")
        
        if let number = numberObject as? String {
            
            numberField.text = number
            
            print(number)
            
        }
        
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }

// How to hide the keyboard when the user touches outside the input field.
    override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
        
        self.view.endEditing(true)
    
    }
    
}

