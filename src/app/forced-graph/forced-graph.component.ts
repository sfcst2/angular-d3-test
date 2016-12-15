import { Component, NgModule, OnInit, ElementRef, AfterViewChecked, AfterViewInit } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { NG2D3Module } from 'ng2d3';
import d3 from '../../../node_modules/ng2d3/src/d3';
import { data, links } from '../fd-data.ts';

@Component({
  selector: 'app-forced-graph',
  templateUrl: './forced-graph.component.html',
  styleUrls: ['./forced-graph.component.css']
})
export class ForcedGraphComponent implements AfterViewInit {

  data: any[] = [];
  links: any[] = [];
  element: ElementRef;  

  view: any[] = [700, 400];

  // options  


  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(myElement: ElementRef) {
    Object.assign(this, { data, links })
    console.log("In constructor");
    this.element = myElement;
  }

  ngAfterViewInit(){
    console.log("In after view init");
    this.addLabels();
  }

  addLabels() {
    // First we want to get the nodes. The nodes is an array
    // of <g>.  Each <g> under the <g class="nodes" > are groups of the individual nodes.
    // We want to take the value in the tool tip and create a label for it
    // instead
    let nodeEls: NodeListOf<Element> = document.getElementsByClassName("nodes");

    if (nodeEls) {
      // At this point we are looping through all of the groups of
      // the individual nodes 
      let arrLength:number = nodeEls[0].children.length;
      for (let i:number  = 0; i < arrLength; i++) {
        
        let node:Element = nodeEls[0].children[i];
        let tooltipValue:string = node.attributes["ng-reflect-tooltip-title"].nodeValue;       
        console.log("looking at node " + i + " " + tooltipValue);
        var newText = document.createElementNS("http://www.w3.org/2000/svg", "text");        
        newText.setAttributeNS(null,"dx", "10");
      
        var textNode = document.createTextNode(tooltipValue);        
        newText.appendChild(textNode);        

        nodeEls[0].children[i].appendChild(newText);
      }

    }
  }

}


