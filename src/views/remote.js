/**
 * 非离线模式下使用，第三方缺陷数据服务接口
 **/
const URL = 'http://47.93.119.201:8080/eps/',
  LOGIN = 'VR',
  PWD = 'E5196BF0F3BC6724708B6D485DF92B2B';
let tenant_id, token;

export default {
  login(callback) {
    this.$http.post(
      URL + 'user/logginForVR?v=1.0',
      JSON.stringify({login_name: LOGIN, current_pwd: PWD}),
      {headers: {'Content-Type': 'application/json'}}
    ).then(res => {
      if (res.body.code === '0000') {
        tenant_id = res.body.data[0].tenantid;
        token = res.body.data[0].token;
      }
      callback && callback();
    });
  },
  // 查询缺陷信息
  queryBugInfo(fd_id, callback) {
    this.$http.post(
      URL + 'buginfo/findList?v=1.0',
      JSON.stringify({tenantid: tenant_id, fdidfrom: fd_id, pagesize: -1}),
      {headers: {token: token, 'Content-Type': 'application/json'}}
    ).then(res => {
      if (res.body.code === '0000') {
        callback && callback(res.body.data);
      } else {
        this.login(() => {
          this.queryBugInfo(fd_id, callback);
        });
      }
    });
  },
  // 查询机柜信息
  queryCabinetInfo(fd_id, callback) {
    this.$http.post(
      URL + 'equipment/findRelation?v=1.0',
      JSON.stringify({fd_id_from: fd_id, pagesize: -1}),
      {headers: {token: this.token, 'Content-Type': 'application/json'}}
    ).then(res => {
      if (res.body.code === '0000') {
        callback && callback(res.body.data[0]['dataList']);
      } else {
        this.login(() => {
          this.queryCabinetInfo(fd_id, callback);
        });
      }
    });
  },
}
