import axios from 'axios';
import getToken from '../resolvers/getToken';
import constantes from '../const';

export default (data) => {

    let {id,rate} = data;
    let newRate = `{rate:${rate}}`

    return axios({
        url:constantes.url+'graphql',
        method:'post',
        data:{
            query:`
                mutation{
                    addRate(id:"${id}",data:${newRate}){
                        _id,
                        name,
                        rate
                    }
                }
            `
        },headers:{'Authorization':'JWT '+getToken()}
    });
}