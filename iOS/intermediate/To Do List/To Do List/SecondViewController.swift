//
//  SecondViewController.swift
//  To Do List
//
//  Created by Vinney Le on 9/19/17.
//  Copyright © 2017 Vinney Le. All rights reserved.
//

import UIKit

class SecondViewController: UIViewController, UITextFieldDelegate {
    
    @IBOutlet weak var itemTextField: UITextField!
    
    @IBAction func addButtonPressed(_ sender: UIButton) {
        
        let itemsObject = UserDefaults.standard.object(forKey: "items")
        
        var items: [String] = []
        
        if let tempItems = itemsObject as? [String] {
            
            items = tempItems
            
            items.append(itemTextField.text!)
            
        } else {
            
            items = [itemTextField.text!]
            
        }
        
        UserDefaults.standard.set(items, forKey: "items")
        
        // reset itemTextField
        itemTextField.text = ""
        
        print(items)
        
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

// Controlling the keyboard
    override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
        
        self.view.endEditing(true)
        
    }
    
    //  This hides the keyboard when the Return key is pressed.
    func textFieldShouldReturn(_ textField: UITextField) -> Bool {
        
        textField.resignFirstResponder()    // using built-in var textField
        
        // Logic for what to do when Return key pressed can go here.
        
        return true
        
    }
// * * * end Controlling the keyboard
    
}

