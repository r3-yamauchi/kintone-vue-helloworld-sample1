import Vue from "vue";
import HelloWorld from "./HelloWorld.vue";
(function () {
  kintone.events.on("app.record.detail.show", (event) => {
    const elm = kintone.app.record.getSpaceElement("space1");
    if (!elm) {
      return event;
    }
    const vm = new Vue({
      el: elm,
      render: h => h(HelloWorld, {
        props: {
          param1: "あいうえお",
          param2: "かきくけこ"
        }
      })
    });
    return event;
  });
})();
