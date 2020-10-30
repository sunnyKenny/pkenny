// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//modify time 10.29 16:11


chrome.contextMenus.onClicked.addListener(function (info, tab) {
    chrome.tabs.sendMessage(tab.id, { text: 'report_back' }, function (res) {
        chrome.storage.local.set({ iframe: info.selectionText });
         console.log(ifram);
    });
});
var Check_copy = chrome.contextMenus.create({
    id: 'Check_copy',
    contexts: ['selection'],
    "title": "Check copy",
});

// Create a rule that will show the page action when the conditions are met.
const kMatchRule = {
    // Declare the rule conditions.
    conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: { hostEquals: 'developer.chrome.com' },
    })],
    // Shows the page action when the condition is met.
    actions: [new chrome.declarativeContent.ShowPageAction()]
}

// Register the runtime.onInstalled event listener.
chrome.runtime.onInstalled.addListener(function () {
    // Overrride the rules to replace them with kMatchRule.
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([kMatchRule]);
    });
});