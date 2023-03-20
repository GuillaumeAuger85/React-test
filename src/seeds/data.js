import Sectorisation from '../seeds/Sectorisation.json';

export const data = Sectorisation.data.roots;
export const countries = data.map(d => d);
export const areas = data.map(d => d.children)[0];
export const sectors = areas.map(a => a.children);
export const shops = sectors.flat().map(s => s.children);

export const openedCountries = countries.map(c => [c.id, true]).map(([id, opened]) => ({ id, opened }));
export const openedAreas = data.map(d => d.children.map(c => [c.id, false])).map(aid => aid.map(([id, opened]) => ({ id, opened })))[0];
export const openedSectors = sectors.map(s => s.map(s => [s.id, false])).map(a => a.map(([id, opened]) => ({ id, opened }))).flat();
export const openedAll = openedCountries.concat(openedAreas).concat(openedSectors);

export const checkedCountries = countries.map(c => [c.model_code, c.id, c.children, false, false]).map(([model_code, id, children, checkedRead, checkedWrite]) => ({ model_code, id, children, checkedRead, checkedWrite }));
export const checkedAreas = data.map(d => d.children.map(c => [c.model_code, c.id, c.children, false, false])).map(aid => aid.map(([model_code, id, children, checkedRead, checkedWrite]) => ({ model_code, id, children, checkedRead, checkedWrite })))[0];
export const checkedSectors = sectors.map(s => s.map(s => [s.model_code, s.id, s.children, false, false])).map(a => a.map(([model_code, id, children, checkedRead, checkedWrite]) => ({ model_code, id, children, checkedRead, checkedWrite }))).flat();
export const checkedShops = shops.flat().map(s => [s.model_code, s.id, s.children, false, false]).map(([model_code, id, children, checkedRead, checkedWrite]) => ({ model_code, id, children, checkedRead, checkedWrite }));
export const checkedInputsAll = [checkedCountries, checkedAreas, checkedSectors, checkedShops].flat();