
<template>
  <div class="navigation"></div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    const arr1 = [
      { name: "Facebook", age: 24 },
      { name: "Github", age: 18 },
      { name: "OpenAI", age: 18 },
    ];
    const arr2 = [
      { name: "Google", age: 24 },
      { name: "Copilot", age: 20 },
      { name: "John", age: 24 },
    ];
    const ar3 = (arr1 = [], arr2 = []) => {
      const newArr = arr1.concat(arr2);
      const map = {};
      const res = [];
      newArr.forEach((el) => {
        if (!map[el["name"]]) {
          res.push(el);
          map[el["name"]] = 1;
        }
      });
      return res;
    };
    const arr = ar3(arr1, arr2);
    let ar4 = arr.filter(
      (item, index) =>
        arr.findIndex((i) => i.age === item.age && i.name === item.name) ===
        index
    );
    const c = [];
    const d = {};
    ar4.forEach((item) => {
      if (d[item.age] === undefined) {
        d[item.age] = c.length;
        c.push([item]);
      } else {
        c[d[item.age]].push(item);
      }
    });
    console.log(c, "ffffaaaa");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
