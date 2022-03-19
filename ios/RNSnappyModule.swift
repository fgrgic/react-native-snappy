//
//  RNSnappyModule.swift
//  RNSnappyModule
//
//  Copyright © 2022 Fran Grgic. All rights reserved.
//

import Foundation

@objc(RNSnappyModule)
class RNSnappyModule: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
