<template>
  <div class="row">
      <div class="col">{{currentDate}}</div>
      <div class="col">${{currentPrice}}</div>
  </div>
</template>

<script>
import axios from 'axios';
const fetchCurrentBTCPrice = () => axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');

export default {
    name: 'CurrentPrice',
    data(){
        return {
            currentDate: null,
            currentPrice: null,
        };
    },
    methods: {
        updateDateAndPrice(){
            fetchCurrentBTCPrice().then(result => {
                this.currentPrice = Number(Number((result.data.bpi.USD.rate).replace(',','')).toFixed(2))
                this.$store.state.medianPrice = this.currentPrice;
            });
            this.currentDate = new Date().toLocaleDateString();
        },
    },
    mounted() {
        this.updateDateAndPrice();
        setInterval(this.updateDateAndPrice, 5000);
    },
    beforeDestroy() {
        clearInterval(this.updateDateAndPrice);
    }
}
</script>

<style>

</style>