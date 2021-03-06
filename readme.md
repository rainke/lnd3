> 基于v5版本

1. d3中`histogram`是对数据进行分区处理,[文档](https://github.com/d3/d3-array/blob/master/README.md#histogram)
```js
const h = d3.histogram() // 构建生成器
    .domain([0, 10]) // 指定范围
    .thresholds(5) //指定区块数，这相当于将范围分为5块，每一块的范围分别是[0, 2) [2, 4) ... [8, 10]，也可以自己指明所有范围
    
 /*返回区块，将每一个值进行比较，如果在某个区块范围，就将该值放入，比如3，在区块[2,4）中,那么就放入这个区块。*/
h([3, 4, 5, 4, 3]); // [[],[3, 3],[4, 5, 4],[],[]]
//如果在调用h之前指定了value，那么比较的时候就使用value的返回值比较。比如
h.value(x => x + 3);

// 那么第一个值就是6在作比较，结果在[6, 8)之间，则将3放入该区块。如果value传入一个常数，那每次比较就是用该常数比较
h([3, 4, 5]) // [[],[],[],[3, 4],[5]]
```