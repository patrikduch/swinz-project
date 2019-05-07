import moment from 'moment';


export const DateFormat = (unformattedDate: Date) => {

    return moment(unformattedDate).lang("cs").format('MMMM Do YYYY, h:mm:ss');
}
