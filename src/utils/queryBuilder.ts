export const queryBuilder = (params: any) => {

    const query = new URLSearchParams({ apikey: "495a0602", ...params }).toString()
    return query
    
    
}