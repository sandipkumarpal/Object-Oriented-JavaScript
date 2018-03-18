const makeRequest = function(url, callBack) {
    const data = 10;
    callBack(data);
}

const obj = {
    sameValue: 20,
    loadData: function(data) {
        const sum = this.sameValue + data;
        console.log(data);
        console.log(sum);
    },
    prepareRequest: function() {
        const url = 'https://memberservice.com';
        makeRequest(url, this.loadData.bind(this));
    }
}

obj.prepareRequest();
