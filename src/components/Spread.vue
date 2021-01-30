<template>
  <div>
      <div class="row">
          <div class="col">High: {{high.date}}</div>
          <div class="col">${{high.price}}</div>
      </div>
      <div class="row">
          <div class="col">Low: {{low.date}}</div>
          <div class="col">${{low.price}}</div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
const fetchBTCSpread = () => axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=2021-01-22&end=2021-01-29`);
export default {
    name: 'Spread',
    data() {
        return {
            high: {
                date: null,
                price: null,
            },
            low: {
                date: null,
                price: null,
            },
        };
    },
    mounted() {
        fetchBTCSpread().then(result => {
            const spreadValues = Object.values(result.data.bpi);
            const spreadDates = Object.keys(result.data.bpi);
            let lowestValue = Number.POSITIVE_INFINITY;
            let highestValue = Number.NEGATIVE_INFINITY;
            let lowestDate = null;
            let highestDate = null;
            for(let i = 0; i < spreadValues.length; i+=1){
                if(spreadValues[i] > highestValue){
                    highestValue = spreadValues[i];
                    highestDate = spreadDates[i];
                }
                if(spreadValues[i] < lowestValue){
                    lowestValue = spreadValues[i];
                    lowestDate = spreadDates[i];
                }
            }
            this.high.date = highestDate;
            this.high.price = Number((highestValue).toFixed(2));
            this.low.date = lowestDate;
            this.low.price = Number((lowestValue).toFixed(2));
            this.$store.state.medianPrice = ((this.high.price + this.low.price) / 2);
        })
    },
}
</script>

<style>

</style>