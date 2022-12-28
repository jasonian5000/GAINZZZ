const formatWeightData = json => {
    const formatDate = created_at => {
        let months = {
            '01': 'Jan',
            '02': 'Feb',
            '03': 'Mar',
            '04': 'Apr',
            '05': 'May',
            '06': 'Jun',
            '07': 'Jul',
            '08': 'Aug',
            '09': 'Sep',
            10: 'Oct',
            11: 'Nov',
            12: 'Dec',
        }
        let year = created_at.substr(2, 2)
        let month = created_at.substr(5, 2)
        return `${months[month]} '${year}`
    }
    json.forEach(entry => {
        entry.created_at = formatDate(entry.created_at)
    })
    return json
}

export default formatWeightData