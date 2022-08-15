// Filter Products By Filters

export default (productList, filters) => {
    let filteredList = [...productList];

    for (const key in filters) {
        if (key !== "salary") {
            if (
                filters[key] === "featured" ||
                filters[key] === "trending" ||
                filters[key] === "lowToHigh" ||
                filters[key] === "highToLow"
            ) {
                if (filters[key] === "lowToHigh") {
                    filteredList = [
                        ...filteredList.sort((a, b) => {
                            if (a.salary < b.salary) return -1;
                            if (a.salary > b.salary) return 1;
                        }),
                    ];
                } else {
                    if (filters[key] === "highToLow") {
                        console.log("hi");
                        filteredList = [
                            ...filteredList.sort((a, b) => {
                                if (b.salary < a.salary) return -1;
                                if (b.salary > a.salary) return 1;
                            }),
                        ];
                    } else {
                        console.log("hi1");
                        filteredList = filteredList.filter(
                            (item) => item[filters[key]]
                        );
                    }
                }
            } else {
                filteredList = filterByKey(filteredList, filters[key], key);
            }
        } else {
            filteredList = filterBysalary(filteredList, filters[key], key);
        }
    }
    return filteredList;
};

// Filter Product By salary

function filterBysalary(filteredList, salary, key) {
    let list = [];

    for (let index = 0; index < filteredList.length; index++) {
        const product = filteredList[index];
        const productsalary = product[key];

        if (productsalary >= salary.min && productsalary <= salary.max) {
            list.push(product);
        }
    }

    return (filteredList = list);
}

// Filter Product by key size/category/brand etc

function filterByKey(filteredList, size, key) {
    let list = [];
    if (!size || size.length === 0) return filteredList;
    for (let index = 0; index < filteredList.length; index++) {
        const product = filteredList[index];

        if (size.indexOf != undefined) {
            const isOk = size && size.indexOf(product[key]);
            if (isOk !== -1) {
                list.push(product);
            }
        }
    }

    return (filteredList = list);
}
