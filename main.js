/****************************************************************
    To add one more bubble
/****************************************************************/
let nBubble = 0

/****************************************************************
    Constant settings
/****************************************************************/
const settings = {
  borderRadiusUp: '100%', //defines the circular shape of the div
  startBoxShadowUp: 'inset 0 0 40px #fff', //the spherical effect of the bubble
  stopBoxShadowUp: 'inset 0 0 0px #fff', //the bubble disappear effect
  startUpCx: 1300, //the x maximum limit where bubbles start on the screen
  stopUpCx: 1300, //the x maximum limit where bubbles stop on the screen
  startUpCy: '600px', //the y maximum limit where bubbles start on the screen
  stopUpCy: '50px', //the y maximum limit where bubbles stop on the screen
  bubbleRayUp: '100px', //the radius of the bubble
  transitionDurationUp: 3000, //the transition time from bottom to top of page

  pinHeadX: 7.5, //the x position of the head of the first pin
  pinHeadY: 0, //the y position of the head of the first pin
  pinHeadWidth: 10, //the width of the head of the first pin
  pinHeadHeight: 3, //the height of the head of the first pin

  pinBodyX: 2.5, //the x position of the body of the first pin
  pinBodyY: 0, //the y position of the body of the first pin
  pinBodyWidth: 5, //the width of the body of the first pin
  pinBodyHeight: 30, //the height of the body of the first pin

  pinTipCx: 5, //the x position of the tip of the first pin
  pinTipCy: 28, //the y position of the tip of the first pin
  pinTipRx: 1.8, //the radius of the tip of the first pin
  pinTipRy: 22, //the radius of the base of the tip of the first pin

  pinColor: 'grey', //pin color
  pinWidthStop: 1400, //the x maximum limit where stop on the screen
  pinGap: 15 //space between pins
}

/****************************************************************
    Generates random integers
/****************************************************************/
function randInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/****************************************************************
    Create an array of divs and assign each element an id which will be accessed to make the divs into bubbles.
/****************************************************************/
function newsBubbles(nBubble) {
  let bubblesList = new Array()
  bubblesList[nBubble] = document.createElement('div')
  bubblesList[nBubble].id = 'bubble' + nBubble
  document.body.appendChild(bubblesList[nBubble])
  return bubblesList
}

/****************************************************************
    Transforms array of divs - newsBubbles() -, by id, into bubbles that rise from the bottom of the page towards the top of the page.
/****************************************************************/
let bubbles = {
  bubbleUp(nBubble) {
    let positionChange = 'absolute'

    //To prevent bubble divs from becoming consecutive and change the text color
    if (nBubble % 2 == 0) {
      positionChange: 'relative'
      d3.select('#MouseOver').style('color', 'red')
    } else {
      d3.select('#MouseOver').style('color', 'blue')
    }

    d3.select('#' + newsBubbles(nBubble)[nBubble].id)
      .style('margin-left', randInt(0, settings.startUpCx).toString() + 'px')
      .style('margin-top', settings.startUpCy)
      .style('width', settings.bubbleRayUp)
      .style('height', settings.bubbleRayUp)
      .style('border-radius', settings.borderRadiusUp)
      .style('box-shadow', settings.startBoxShadowUp)
      .style('position', positionChange)
      .transition()
      .duration(settings.transitionDurationUp)
      .style('margin-left', randInt(0, settings.stopUpCx).toString() + 'px')
      .style('margin-top', settings.stopUpCy)
      .style('box-shadow', settings.stopBoxShadowUp)
      .style('position', positionChange)
      .remove()
  }
}

/****************************************************************
    Creates a border of pins at the top of the page 
/****************************************************************/
function pinsTopBorder() {
  let pin = d3.select('.svgPin').append('g')
  let pinBody = (x, y, width, height, fill) => {
    pin
      .append('rect')
      .attr('x', x)
      .attr('y', y)
      .attr('width', width)
      .attr('height', height)
      .style('fill', fill)
  }
  let pinTip = (cx, cy, rx, ry, fill) => {
    pin
      .append('ellipse')
      .attr('cx', cx)
      .attr('cy', cy)
      .attr('rx', rx)
      .attr('ry', ry)
      .style('fill', fill)
  }
  for (
    let pinCount = settings.pinHeadX;
    pinCount < settings.pinWidthStop;
    pinCount += settings.pinGap
  ) {
    pinBody(
      pinCount,
      settings.pinHeadY,
      settings.pinHeadWidth,
      settings.pinHeadHeight,
      settings.pinColor
    )
    pinBody(
      pinCount + settings.pinBodyX,
      settings.pinBodyY,
      settings.pinBodyWidth,
      settings.pinBodyHeight,
      settings.pinColor
    )
    pinTip(
      pinCount + settings.pinTipCx,
      settings.pinTipCy,
      settings.pinTipRx,
      settings.pinTipRy,
      settings.pinColor
    )
  }
}
pinsTopBorder()
