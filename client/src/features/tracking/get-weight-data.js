import formatWeightData from './format-weight-data'
import supabase from 'features/ui/supabase'

const getWeightData = async dispatch => {
    let { data: weight, error } = await supabase
        .from('weight')
        .select('weight,created_at')
        .eq('user_id', user.id)

    let weightData = formatWeightData(data)
    dispatch({ type: 'SET_WEIGHT_DATA', payload: weightData })
}

export default getWeightData
