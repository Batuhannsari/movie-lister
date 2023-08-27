export const queryBuilder = (params: any) => {

    const query = new URLSearchParams({ apikey: "8e2b0a83", ...params }).toString()
    return query
    
    
}