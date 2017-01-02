import {Node} from './node.model';
import {Link} from './link.model';

/**
 * This class represents a Graph model.  A graph contains
 * many links and nodes.
 */
export class Graph{
    constructor(public links:Link[], public nodes:Node[]){
    }
}