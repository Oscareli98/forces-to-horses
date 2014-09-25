walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	// CraftThatBlock addition: I stole this from cloud-to-butt
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bForces\b/g, "Horses");
	v = v.replace(/\bforces\b/g, "horses");

	v = v.replace(/\bForce\b/g, "Horse");
	v = v.replace(/\bforce\b/g, "horse");
	
	textNode.nodeValue = v;
}


