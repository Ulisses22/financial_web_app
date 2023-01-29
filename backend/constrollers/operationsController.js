
const operationsController = {
    selectTrasactions: async () => {
        const res = await fetch('http://localhost:3000/app/api/transactions');
        if (res.ok) {
            const data = await res.json();
            return data;
        }        
    }
}

module.exports = operationsController;

