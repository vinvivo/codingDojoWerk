//
//  ViewController.swift
//  beastList
//
//  Created by Vinney Le on 9/11/17.
//  Copyright © 2017 Vinney Le. All rights reserved.
//

import UIKit

class ViewController: UIViewController, UITableViewDataSource {

    var tasks = ["Something cool", "Something very cool", "Something extremely cool"]
    
    @IBOutlet weak var taskTextField: UITextField!
    @IBOutlet weak var tableView: UITableView!
    @IBAction func beastButtonPressed(_ sender: UIButton) {
        if let textInput = taskTextField.text {
        tasks.append(textInput)
        }
        tableView.reloadData()
    }
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
//--Set our UITableView dataSource to self
        tableView.dataSource = self
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return tasks.count
    }
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "myCell", for: indexPath)
        cell.textLabel?.text = "\(tasks[indexPath.row])"
        return cell
    }


}

