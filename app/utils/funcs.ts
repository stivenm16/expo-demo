export function removeEmptyFields(obj:any) {
    const filteredObj:any = {};
    
    // Iterate over the object's properties
    for (const [key, value] of Object.entries(obj)) {
        // Check if the value is not empty or undefined
        if (value !== '' && value !== undefined) {
            // Assign non-empty values to the filtered object
            filteredObj[key] = value;
        }
    }
    
    return filteredObj;
}