/****************************************************************
      This app is a demonstration of using the 3d.js library.
      When hovering over the balloon indicated by 'Mouse Over', bubbles appear
      at the bottom of the page towards the top, where the pin tips pop.
/****************************************************************/

import('./main.js')

function bubbleApp() {
  bubbles.bubbleUp(nBubble)
  if (nBubble >= 0) {
    nBubble++
  }
}
