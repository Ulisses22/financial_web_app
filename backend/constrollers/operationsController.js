
const operationsController = {
    selectTransactions: async () => {
        const res = await fetch('http://localhost:3000/api/transactions');
        if (res.ok) {
            const data = await res.json();
            return data;
        }        
    },
    deleteTransactions: async (_id,res) => {
        console.log(_id);
        await fetch('http://localhost:3000/api/transaction', {
            method: 'DELETE',
            body: JSON.stringify({
                _id_: req.paramn._id
            }),
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            }
        }).then(function (res) {
            if(res.ok){
                console.log(res.json());
                return res.json();
            }
            return Promise.reject(res);
        }).catch(function (error) {
            console.warn('Something went wrong.', error);
        });
    }
}

module.exports = operationsController;

