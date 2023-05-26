export function FilterData(restaurants, searchInput) {
    const filterData = restaurants.filter((restaurant) => {
       return restaurant?.data?.name?.toLowerCase().includes(searchInput.toLowerCase());
     });
     
     console.log("filteredData", filterData);
     return filterData;
};
