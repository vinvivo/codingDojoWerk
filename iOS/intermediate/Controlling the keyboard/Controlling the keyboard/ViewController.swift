//
//  ViewController.swift
//  Controlling the keyboard
//
//  Created by Vinney Le on 9/19/17.
//  Copyright © 2017 Vinney Le. All rights reserved.
//

import UIKit

class ViewController: UIViewController, UITextFieldDelegate {   // Add UITextFieldDelegate to enable Return button to hide keyboard

    override func viewDidLoad() {
        super.viewDidLoad()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }

    override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
        
        self.view.endEditing(true)
        
    }
    
//  This hides the keyboard when the Return key is pressed.
    func textFieldShouldReturn(_ textField: UITextField) -> Bool {
        
        textField.resignFirstResponder()    // using built-in var textField
        
        // Logic for what to do when Return key pressed can go here.
        
        return true
        
    }

}

