const Dev = require('./../models/Dev');

module.exports = {
    
    async store(request, resposta){

        const { user } = request.headers;
        const { devId } = request.params;
        
        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if(!targetDev){
            return resposta.status(400).json({devId: devId ,erro: 'Dev não existe'});
        }

        return resposta.json({ echo: 'oiiii'});
    }

};