const _api = {
  get4nInfo: function ({ type, width, height, x, y }) {
    const max = width > height ? width : height;
    const size = Math.ceil(max / 4) * 4 + 4;
    return {
      size,
      x: x - (size - width) / 2,
      y: y - (size - height) / 2
    };
  },
  getNodeIndex: function (node: SceneNode) {
    const children = node.parent.children;
    for (let i = 0, len = children.length; i < len; i++) {
      const item = children[i];
      if (item.id === node.id) {
        return i;
      }
    }
    return 0;
  },
  groupNodes: function (nodes: any[] | readonly BaseNode[]) {
    const len = nodes.length;
    const firstNode = nodes[0];
    const fristNodeIndex = this.getNodeIndex(firstNode);
    let box: FrameNode;
    if (len === 1) {
      box = firstNode.type === 'GROUP' ? firstNode : figma.group([firstNode], firstNode.parent);
    } else {
      box = figma.group(nodes, firstNode.parent);
    }
    box.parent.insertChild(fristNodeIndex, box);
    return box;
  },
  create4nSlice: function (group: FrameNode) {
    const info = this.get4nInfo(group);
    const slice = figma.createSlice();
    slice.name = 'i_' + info.size + '_';
    slice.x = info.x;
    slice.y = info.y;
    slice.resizeWithoutConstraints(info.size, info.size);
    group.appendChild(slice);
    return slice;
  },
  getTextWidthEmoji: function (msg: string) {
    const emojis = ['😁', '👏', '😘', '🥳', '🤪', '😜', '😎', '🤒', '👻'];
    const randIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randIndex] + ' ' + msg;
  },
  start: function () {
    const selections = figma.currentPage.selection;
    const selectLength = selections.length;
    if (!selectLength) {
      return this.getTextWidthEmoji('Please select something');
    }
    const newGroup = this.groupNodes(selections);
    const slice: SliceNode = this.create4nSlice(newGroup);
    slice.exportSettings = [{
      format: "SVG"
    }];
    figma.currentPage.selection = [slice];
    figma.viewport.scrollAndZoomIntoView([slice]);
    return this.getTextWidthEmoji('Now you can export your icon on the right side');
  }
};

const msg = _api.start();
figma.closePlugin(msg);