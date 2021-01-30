<template>
  <div>
    <CurrentPrice />
    <hr />
    <div class="row" v-for="(cut, i) in PositiveGoldenCuts" :key="`positive-cut-${i}`">
      <div class="col">&Phi;<sup>{{PositiveGoldenCuts.length - i}}</sup></div>
      <div class="col">{{$store.state.medianPrice*(cut+1)}}</div>
    </div>
    <hr />
    <div class="row" v-for="(cut, i) in PositiveGoldenCuts" :key="`negative-cut-${i}`">
      <div class="col">&Phi;<sup>-{{i + 1}}</sup></div>
      <div class="col">{{
        $store.state.medianPrice -
        ($store.state.medianPrice * PositiveGoldenCuts[(PositiveGoldenCuts.length-1)-i])
      }}</div>
    </div>
  </div>
</template>

<script>
import PositiveGoldenCuts from '@/static/PositiveGoldenCuts';
import CurrentPrice from '@/components/CurrentPrice';

export default {
  name: 'HelloWord',
  components: {
    CurrentPrice,
  },
  data() {
    return {
      PositiveGoldenCuts,
    };
  },
}
</script>

<style>

</style>