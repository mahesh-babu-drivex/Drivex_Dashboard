export default {
	fetchData(){
		const inputd=Query3.data
 const names = inputd.map(item => item.name);
    const values1 = inputd.map(item => item.value1);
    const value = inputd.map(item => item.value);
    const costs = inputd.map(item => item.cost);

    return {
        names: names,
        values1: values1,
        values: value,
        costs: costs
    };
	},
	
	option :{
  title: {
    text: 'Procurement',
    subtext: 'Procurement Leads Marketing Cost analysis'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
  formatter: function (params) {
      var tar = params[1];
  return tar.value; // Access the value directly from the data point

    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    splitLine: { show: false },
    data: this.fetchData().names
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Placeholder',
      type: 'bar',
      stack: 'Total',
      itemStyle: {
        borderColor: 'transparent',
        color: 'transparent'
      },
      emphasis: {
        itemStyle: {
          borderColor: 'transparent',
          color: 'transparent'
        }
      },
      data: [0, 1700, 1400, 1200, 300, 0]
    },
    {
      name: 'Cost',
      type: 'bar',
      stack: 'Total',
      label: {
        show: true,
        position: 'inside'
      },
      data: this.fetchData().values1
    }
  ]
}
}