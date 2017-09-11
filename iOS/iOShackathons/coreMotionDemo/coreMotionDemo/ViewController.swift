//
//  ViewController.swift
//  coreMotionDemo
//
//  Created by Vinney Le on 9/8/17.
//  Copyright © 2017 Vinney Le. All rights reserved.
//

import UIKit
import CoreMotion

class ViewController: UIViewController {
    var motionManager: CMMotionManager?

    override func viewDidLoad() {
        super.viewDidLoad()
        motionManager = CMMotionManager()
        if let manager = motionManager {
            print("We have a motion manager \(manager)")    // we know we have a motion manager!
            if manager.isDeviceMotionAvailable {
                print("Device motion is available")
                let myQueue = OperationQueue()
                manager.deviceMotionUpdateInterval = 1
                manager.startDeviceMotionUpdates(to: myQueue) {
                    (data: CMDeviceMotion?, error: Error?) in
                    if let myData = data {
                        print("myData", myData)
                        // isolating
                        let attitude = myData.attitude
                        print("pitch ", attitude.pitch)     // convert from radians to degrees
                    }
                    if let myErrors = error {
                        print("myErrors", myErrors)
                    }
                }
            } else {
                print("Device motion is NOT available")
                let myQueue = OperationQueue()
                manager.startDeviceMotionUpdates(to: myQueue) {
                    (data: CMDeviceMotion?, error: Error?) in
                    if let myData = data {
                        print("myData", myData)
                    }
                    if let myErrors = error {
                        print("myErrors", myErrors)
                    }
                }
            }
        } else {
            print("No manager")
        }
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

