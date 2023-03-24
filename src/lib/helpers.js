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


const getHighestNodeIds = (checkedInputs, allInputs) => {
    const allAuthorizedIds = checkedInputs.map(c => c.id);
    const checkedCountries = checkedInputs.filter(input => input.model_code === "COUNTRY");

    const countries = allInputs.filter(input => input.model_code === 'COUNTRY');
    const authorizedCountriesIds = countries.filter(c => allAuthorizedIds.includes(c.id)).map(c => c.id);
    const notAuthorizedCountries = countries.filter(c => !allAuthorizedIds.includes(c.id));
    const notAuthorizedCountriesChildrenIds = notAuthorizedCountries.map(c => c.children).flat().map(area => area.id);

    const areas = allInputs.filter(input => input.model_code === 'AREA');
    const authorizedAreasIds = areas.filter(a => notAuthorizedCountriesChildrenIds.includes(a.id)).map(a => a.id).filter(id => allAuthorizedIds.includes(id));
    const notAuthorizedAreas = areas.filter(a => !allAuthorizedIds.includes(a.id));
    const notAuthorizedAreasChildrenIds = notAuthorizedAreas.map(c => c.children).flat().map(area => area.id);

    const sectors = allInputs.filter(input => input.model_code === 'SECTOR');
    const authorizedSectorsIds = checkedCountries.length > 0 ? [] : sectors.filter(s => notAuthorizedAreasChildrenIds.includes(s.id)).map(s => s.id).filter(id => allAuthorizedIds.includes(id));
    const notAuthorizedSectors = sectors.filter(s => !allAuthorizedIds.includes(s.id));
    const notAuthorizedSectorsChildrenIds = notAuthorizedSectors.map(c => c.children).flat().map(area => area.id);

    const shops = allInputs.filter(input => input.model_code === 'SHOP');
    const authorizedShopsIds = checkedCountries.length > 0 ? [] : shops.filter(s => notAuthorizedSectorsChildrenIds.includes(s.id)).map(s => s.id).filter(id => allAuthorizedIds.includes(id));
    const authorizedChildrenIds = [authorizedCountriesIds, authorizedAreasIds, authorizedSectorsIds, authorizedShopsIds].flat();

    return authorizedChildrenIds;
};

export { getFullFamilyLineIds, getHighestNodeIds };