##   二分查找法常见的使用方式

###  递归二分查找

```js
  // 时间复杂度和空间复杂度都是  log 2 n
    var arr = [1, 2, 3, 5, 6, 7, 8, 9]
    let target = 5
    let target2 = 4
    function binarySearch (arr, low, high, target) {
        let mid = (low + high) / 2
        if(low>= high){
            return -1
        }else if(arr[mid]>target){
            return binarySearch(arr,low,mid-1,target)
        }else  if(arr[mid]<target){
        }else {
            return mid
        }
        return -1
    }
    console.log(binarySearch(arr, target))
    console.log(binarySearch(arr, target2))

``` 

###  非递归二分查找


``` js
      // 时间复杂度和空间复杂度都是  log 2 n
    var arr = [1,2,3,5,6,7,8,9]
    let target = 5
    let target2 = 4
    function binarySearch (arr,target) {
        let low = 0
        let high = arr.length-1
        while (low <= high){
            let Index = Math.floor((low+high)/2)
            if(arr[Index]>target){
                high = Index+1 // 这里如果不加1  容易出现死循环 没有终止条件
            }else if (arr[Index]<target){
                low = Index-1
            }else if(arr[Index]= target) {
                return Index
            }
        }
        return -1
    }
    console.log(binarySearch(arr, target))
    console.log(binarySearch(arr, target2))

```