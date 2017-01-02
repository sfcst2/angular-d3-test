/**
 * A link ties together two nodes.  A link contains a source and target
 * as well as any sort of metadata.
 *   
 */
export class Link{
    
    constructor(public id:number, public source:string, public target:string){

    }
}