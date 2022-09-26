import { supabase } from './supabase_auth.js'

export const getTrainerInfo = async () => {
    let { data: ptTable, error } = await supabase
        .from('ptTable')
        .select(
            'id,ptName,specialties,description,rates,testimonials,test2,test3,img'
        )
    return ptTable
}
