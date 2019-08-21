
function exportThem(selections, format){
  selections.map((selection)=>{
    const result= selection.exportAsync({format});
    result.then(res => {
      figma.ui.postMessage({
        name:selection.name,
        data:res
      });
    }).catch(err => console.error(err));
  })
}


figma.showUI(__html__);
figma.ui.onmessage = msg => {
  if (msg.type === 'export-selection') {
    let currentPage = figma.currentPage;
    let selections = currentPage.selection;
    if(selections.length>0){
      const slices=selections.filter(node => {
        return node.name.indexOf('i/')===0;
      });
      exportThem(slices, msg.format);
    }else{
      const slices = currentPage.findAll(node => {
        return node.name.indexOf('i/')===0;
      });
      exportThem(slices, msg.format);
    }
  }
};