
const _api={
    getSquareInfo:function({width,height,x,y}){
      const max=width>height?width:height;
      const size=Math.ceil(max/4)*4;
      const newX= x-(size-width)/2;
      const newY= y-(size-height)/2;
      return {
        size:size,
        x:newX,
        y:newY
      };
    }
};


function start(){
  const selections = figma.currentPage.selection;
  if(!selections.length){
    return 'please select something👈'
  }
  const firstSelection = selections[0];
  const firstParent = firstSelection.parent;
  if(firstParent.name.indexOf('i/')===0){
    return 'it start width i/';
  }
  const node = figma.group(selections,firstParent);
  const info = _api.getSquareInfo(node);
  const frame= figma.createFrame();
  node.parent.appendChild(frame);
  frame.resizeWithoutConstraints(info.size,info.size);
  frame.x=info.x;
  frame.y=info.y;
  frame.name='i/'+info.size+'/'+firstSelection.name;
  frame.appendChild(node);
  frame.backgrounds=[];
  node.x=(info.size-node.width)/2;
  node.y=(info.size-node.height)/2;
  const flattenNode=figma.flatten([node],frame);
  console.log(flattenNode);
  return 'success 👏';
};

const msg = start();

figma.closePlugin(msg);