const getFullFamilyLineIds = (ascendant, node) => {
    const getAscendantsId = () => {
        if (node.model_code === 'COUNTRY') {
            const nodeGreatGrandChildrenIds = node.children.map(n => n.children.map(child => child.children.map(ch => ch.id))).flat().flat();
            const descendantsId = nodeGreatGrandChildrenIds;
            return descendantsId
        } else if (node.model_code === 'AREA') {
            const nodeAscendants = (ascendant.map(a => a.children.map(child => child.id === node.id && { id: a.id }))).flat();
            const ascendantsId = nodeAscendants.filter(a => typeof a === 'object').map(a => a.id);
            return ascendantsId
        } else if (node.model_code === 'SECTOR') {
            const nodeAscendants = (ascendant.map(a => a.children.map(child => child.children.map(c => c.id === node.id && { parentId: child.id, grandParentId: a.id })))).flat().flat();
            const ascendantsId = nodeAscendants.filter(a => typeof a === 'object').map(a => [a.parentId, a.grandParentId]).flat();
            return ascendantsId
        } else if (node.model_code === 'SHOP') {
            const nodeAscendants = (ascendant.map(a => a.children.map(ch => ch.children.map(child => child.children.map(c => c.id === node.id && { parentId: child.id, grandParentId: ch.id, greatGrandParentId: a.id }))))).flat().flat().flat();
            const ascendantsId = nodeAscendants.filter(a => typeof a === 'object').map(a => [a.parentId, a.grandParentId, a.greatGrandParentId]).flat();
            return ascendantsId
        }
    }
    const ancestorsIds = getAscendantsId();
    const nodeChildrenIds = node.children.length > 0 && node.children.map(c => c.id);
    const nodeGrandChildrenIds = node.children.map(n => n.children.map(child => child.id)).flat();
    const nodeIdAndDescendantsIds = [node.id].concat(nodeChildrenIds).concat(nodeGrandChildrenIds);
    const descendantAndAcsendantIds = new Set(nodeIdAndDescendantsIds.concat(ancestorsIds));
    return descendantAndAcsendantIds
};


const getHighestNodeIds = (array) => {
    const arrayIds = array.map(a => a.id);
    const getAllDescendantIds = (node) => {
        const nodeChildrenIds = node.children.filter(child => !!child).map(c => c.id);
        const nodeChildren = node.children.length > 0 && node.children.map(c => c.children).flat();
        if (node.model_code === 'COUNTRY') {
            const nodeGreatGrandChildrenIds = nodeChildren.map(n => n.children.map(child => child.id)).flat();
            const nodeGrandChildrenIds = nodeChildren.map(n => n.id);
            const nodeIdAndDescendantsIds = [node.id].concat(nodeChildrenIds.concat(nodeGrandChildrenIds).concat(nodeGreatGrandChildrenIds));
            return nodeIdAndDescendantsIds
        } else if (node.model_code === 'AREA') {
            const nodeGrandChildrenIds = nodeChildren.map(n => n.id);
            const nodeIdAndDescendantsIds = [node.id].concat(nodeChildrenIds.concat(nodeGrandChildrenIds));
            return nodeIdAndDescendantsIds
        } else if (node.model_code === 'SECTOR') {
            const nodeIdAndDescendantsIds = [node.id].concat(nodeChildrenIds);
            return nodeIdAndDescendantsIds
        } 
    }
    const countries = array.filter(a => a.model_code === 'COUNTRY');
    const areas = array.filter(a => a.model_code === "AREA");
    const sectors = array.filter(a => a.model_code === "SECTOR");
    const shopsIds = array.filter(i => i.model_code === "SHOP").map(shop => shop.id);


    const countriesChildrenToSubstract = countries.map(child => getAllDescendantIds(child)).flat();
    const areaChildrenToSubstract = areas.map(child => getAllDescendantIds(child)).flat();
    const sectorChildrenToSubstract = sectors.map(child => getAllDescendantIds(child)).flat();
    const getAllToSubstract = () => {
        if ((countriesChildrenToSubstract.length < 1) && (areaChildrenToSubstract.length < 1) && (sectorChildrenToSubstract.length < 1)) {
            return shopsIds;
        } else if ((countriesChildrenToSubstract.length) < (1 && areaChildrenToSubstract.length < 1)) {
            return sectorChildrenToSubstract.filter(id => !shopsIds.includes(id));
        } else if (countriesChildrenToSubstract.length < 1) {
            return areaChildrenToSubstract.filter(id => !sectorChildrenToSubstract.includes(id));
        } else if (countriesChildrenToSubstract.length > 0) {
            return countriesChildrenToSubstract.filter(id => !areaChildrenToSubstract.includes(id)).filter(id => !sectorChildrenToSubstract.includes(id));
        }
    };
    const allToSubstract = new Set(getAllToSubstract());
    const highestnodeIds = arrayIds.filter(id => allToSubstract.has(id));
    return highestnodeIds;
};

export { getFullFamilyLineIds, getHighestNodeIds };