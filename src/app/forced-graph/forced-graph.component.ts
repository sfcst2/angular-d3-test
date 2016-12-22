import { Component, NgModule, OnInit, ElementRef, AfterViewChecked, AfterViewInit } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { NG2D3Module } from 'ng2d3';
//import { data, links } from '../fd-data.ts';
import {GraphService} from '../graph.service';
import {GraphNodeModel} from '../models/graphnode.model';
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'app-forced-graph',
  templateUrl: './forced-graph.component.html',
  styleUrls: ['./forced-graph.component.css']
})
export class ForcedGraphComponent implements AfterViewInit,OnInit {

  data: GraphNodeModel[] = [];
  links: any[] = [];
  element: ElementRef;    

  view: any[] = [700, 400];

  // options  


  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  ngOnInit(){
    console.log("Making call in ngOninit");
    // Make the inital call to get the nodes. Since we pass in null, null,
    // this means we are getting the root node with the deafult depth (which
    // is currently 3.
    let graphNodes = this.graphService.getNodes(null,null).subscribe(
      nodes => {      
         console.log("!!!!!!!!!!!!!! in nodes");
         this.data = nodes;
       },
       error =>{
         console.log(error);
       },       
       () =>{
         console.log("Completed!");
       }       
    );
  }

  constructor(myElement: ElementRef, private graphService: GraphService) {
    //Object.assign(this, { data, links })    
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


