const axios = require('axios');
const Dev = require('./../models/Dev');

module.exports = {
    
    async store(request, resposta){

        const { username } = request.body;

        const userExists = await Dev.findOne({ user:username });

        if(userExists){
            return resposta.json(userExists);
        }

        const axios_response = await axios.get(`https://api.github.com/users/${username}`);
        
        const { name, bio, avatar_url: avatar } = axios_response.data;

        const dev = await Dev.create({
            name, 
            user:username,
            bio,
            avatar,
         })

        return resposta.json(dev)

    }

}