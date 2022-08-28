module.exports = function (RED) {
  function DateTrans(config) {
    // RED.nodes.createNode -> 노드를 생성
    RED.nodes.createNode(this, config);
    var node = this;
    // 노드의 입력에서 전달 받은 값을 처리하는 함수를 등록
    node.on("input", function (msg) {
      var timestamp = msg.payload;
      msg.payload = new Date(timestamp).toString();
      // 변환된 메시지를 전달
      node.send(msg);
    });
  }

  // RED.nodes.registerType("register_name", function name) -> 노드의 기능을 정의한 함수를 등록
  RED.nodes.registerType("timestamp-to-date", DateTrans);
};
