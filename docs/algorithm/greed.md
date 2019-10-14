###  贪心算法解决背包问题

``` js
//http://blog.qingjiuzhubei.com/seo/1486.html
    var items = ['A', 'B', 'C', 'D']
    var values = [50, 220, 60, 60]
    var weights = [5, 20, 10, 12]
    var capacity = 32 //背包容积
    function greedy (values, weights, capacity) {
        var returnValue = 0
        var remainCapacity = capacity
        var sortArray = []
        values.map((cur, index) => {
            sortArray.push({
                'value': values[index],
                'weight': weights[index],
                'ratio': values[index] / weights[index],
            })
        })
        sortArray.sort(function (a, b) {
            return b.ratio - a.ratio
        })
        sortArray.map((cur, index) => {
            // var num = parseInt(remainCapacity/cur.weight)
            var num = 1
            remainCapacity -= num * cur.weight
            returnValue += num * cur.value
        })
        return returnValue
    }



```