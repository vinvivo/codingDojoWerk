//
//  ViewController.swift
//  Permanent Data Storage
//
//  Created by Vinney Le on 9/19/17.
//  Copyright © 2017 Vinney Le. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        
        // UserDefaults stores in permanent data storage (doesn't need Core Data?)
        
        UserDefaults.standard.set("Vinney", forKey: "name")
        
        let nameObject = UserDefaults.standard.object(forKey: "name")
        
        if let name = nameObject as? String {
            
            print(name)
            
        }
        
        let arr = [1, 2, 3, 4]
        
        UserDefaults.standard.set(arr, forKey: "array")
        
        let arrayObject = UserDefaults.standard.object(forKey: "array")
        
        if let array = arrayObject as? NSArray {
            
            print(array)
            
        }
        
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

