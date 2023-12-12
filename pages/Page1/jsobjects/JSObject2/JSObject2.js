export default {
async fetchData() {
const inuptdata =Query1.data
return inuptdata

},
option :{
  title: {
    text: 'procuremddent'
  },

  tooltip: {
    trigger: 'item',
  formatter: '{b}: {c}%'

  },
  toolbox: {
    feature: {
      dataView: { readOnly: false },
      restore: {},
      saveAsImage: {}
    }
  },
 
  series: [
    {
      name: 'Funnel',
      type: 'funnel',
      left: '8%',
      top: 60,
      bottom: 30,
      width: '80%',
      min: 0,
      max: 100,
      minSize: '0%',
      maxSize: '100%',
      sort: 'descending',
      gap: 2,
     label: {
          show: true,
          position: 'inside',
          formatter: '{b}: {c}%'
         },
      labelLine: {
        length: 10,
        lineStyle: {
          width: 1,
          type: 'solid'
        }
      },
      itemStyle: {
        borderColor: '#fff',
        borderWidth: 1
      },
      emphasis: {
        label: {
          fontSize: 20
        }
      },
      data:this.fetchData()
    }
  ]
}
}