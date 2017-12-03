<template>
  <div id="app" style="height:100%">
    <div id="pano"></div>
    <div
      id="sketch-map-btn"
      data-tip="机柜总览"
      :class="showSketchMap?'active':''"
      @click="showSketchMap=!showSketchMap"
    ></div>
    <el-dialog :visible.sync="showBugBox" @open="openBugInfo">
      <template slot="title">
        <span
          v-if="multipleBug"
          v-show="showBugDesc"
          id="show-list-back"
          class="el-icon-arrow-left"
          @click="showBugDesc=false"></span>
        <span style="font-size: 1.5rem;line-height: 16px">{{ current_cabinet.devicename }}</span>
      </template>
      <ul v-if="multipleBug" class="show-list" v-show="!showBugDesc">
        <li :class="item.status === '5'?'item item-success':'item'"
            @click="showBugDesc=true;current_bug=item"
            v-for="item in list_data">
          <div class="item-header">{{ item.categoryname }}</div>
          <div class="item-body">
            <div>
              <div class="item-desc">{{ item.memo }}</div>
              <div class="item-remark">
                {{ item.createdstamp }} | {{ item.username }} |
                图片({{ item.pictures.length}}) | 语音({{ item.voicelist.length }})
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="show-desc" v-show="showBugDesc">
        <div class="bug-title">{{ current_bug.categoryname }}</div>
        <div class="bug-desc">{{ current_bug.memo }}</div>
        <el-carousel
          v-if="current_bug.pictures && current_bug.pictures.length > 0"
          style="margin-bottom: 20px"
          height="450px" indicator-position="none" arrow="always">
          <el-carousel-item
            v-for="item in current_bug.pictures"
            :key="item"
            style="display: flex;justify-content: center;height: 100%;border-radius: 2px;">
            <img :src="item">
          </el-carousel-item>
        </el-carousel>
        <audio controls="controls" v-for="item in current_bug.voicelist">
          <source :src="item" type="audio/mp3"/>
          <embed :src="item"></embed>
        </audio>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import _ from 'lodash';
  import VR from '../assets/vr';
  import R from '../assets/remote';
  import O from '../assets/offline';

  export default {
    name: 'app',
    data() {
      return {
        // 是否离线模式
        offline: true,
        // 缺陷数据
        bug_info: {},
        // 机柜缺陷关联
        cabinet_bug: {},
        // 机柜信息
        cabinet_info: {},
        // 机柜状态
        cabinet_status: {},
        // 缺陷查询间隔时间
        interval: 60,
        // 当前机柜
        current_cabinet: {},
        // 当前缺陷
        current_bug: {},
        list_data: [],

        // 是否多个缺陷
        multipleBug: false,
        // 是否显示缺陷详情
        showBugDesc: false,
        // 是否显示总览示意图
        showSketchMap: false,
        // 是否显示缺陷信息框
        showBugBox: false,
      }
    },
    mounted() {
      this.station = VR.STATIONS['s4'];
      this.scene = {name: 'scene_west1'};
      // 设置标题
      document.title = this.station.name;
      this.initVR();
    },
    methods: {
      // 初始化全景
      initVR() {
        // 初始化krpano
        embedpano({
          xml: '/static/xml/' + this.station.id + '.xml',
          swf: '/static/krpano.swf',
          target: 'pano',
          html5: 'auto',
          mobilescale: 1.0,
          passQueryParameters: true,
          onready: krpano => {
            krpano.call("loadscene('" + this.scene.name + "', null, MERGE)");
            console.log(11);
            if (this.scene.lookat) {
              let arr = _.split(this.scene.lookat, ',');
              krpano.call("lookat('" + arr[0] + "','" + arr[1] + "','" + arr[2] + "')");
            }
            krpano.hooks = {
              // 显示信息
              showData: id => {
                this.showBugBox = true;
                this.current_cabinet = this.cabinet_info[id];
              },
              // 是否显示热点
              showHotspot: id => _.has(this.cabinet_bug, id) ? 'true' : 'false',
              // 热点状态
              showSpotStatus: id => this.cabinet_status[id]
            };
            this.krpano = krpano;
          }
        });
        // 初始化机柜和缺陷数据
        if (!this.offline) {
          R.queryCabinetInfo(this.station.fd_id, data => {
            this.cabinet_info = _.keyBy(data, 'fdidto');
          });
          R.queryBugInfo(this.station.fd_id, this.handleBugInfo);
          // 获取实时缺陷
          setInterval(() => {
            this.queryBugInfo(this.station.fd_id, this.handleBugInfo);
          }, this.interval * 1000);
        } else {
          // 离线模式
          this.cabinet_info = _.keyBy(O.CABINETS, 'fdidto');
          this.handleBugInfo(O.BUGS);
        }
      },
      // 处理缺陷信息
      handleBugInfo(data) {
        this.bug_info = {};
        _.forEach(data, v => {
          this.bug_info[v.bugid] = v;
          if (_.has(this.cabinet_bug, v.refequipmentid))
            this.cabinet_bug[v.refequipmentid].push(v.bugid);
          else
            this.cabinet_bug[v.refequipmentid] = [v.bugid];
        });
        // 显示机柜状态
        _.each(this.cabinet_bug, (v, k) => {
          let sum = _.sumBy(v, o => this.bug_info[o].status === '5' ? 1 : 0);
          if (sum === v.length)
            this.cabinet_status[k] = 'success';
          else if (sum === 0)
            this.cabinet_status[k] = 'danger';
          else
            this.cabinet_status[k] = 'warning';
        });
      },
      // 开启缺陷信息框
      openBugInfo() {
        let bugs = this.cabinet_bug[this.current_cabinet.fdid];
        if (bugs.length === 1) { // 单个缺陷
          this.multipleBug = false;
          this.showBugDesc = true;
          this.current_bug = this.bug_info[bugs[0]];
        } else if (bugs.length > 1) { // 多个缺陷
          this.multipleBug = true;
          this.showBugDesc = false;
          this.list_data = _.map(bugs, k => this.bug_info[k]);
        }
      },
      // 加载场景和视角
      loadscene(uuid) {
        let scene = VR.SCENES[uuid],
          arr = _.split(scene.lookat, ',');
        this.krpano.call("loadscene('" + scene.name + "', null, MERGE)");
        this.krpano.call("lookat('" + arr[0] + "','" + arr[1] + "','" + arr[2] + "')");
        this.showSketchMap = false;
      }
    }
  }
</script>

<style lang="scss">
  html {
    height: 100%;
  }

  body {
    position: relative;
    height: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
    font-family: "Microsoft YaHei", Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: #444;
  }

  #pano {
    width: 100%;
    height: 100%;
    z-index: 0 !important;
  }

  /* =====缺陷列表===== */

  #show-list-back {
    color: #bfcbd9;
    cursor: pointer;
    font-size: 16px;
    margin-right: 20px;
    float: left;
    &:hover {
      color: #20a0ff;
    }
  }

  .show-list {
    list-style: none;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    overflow-y: auto;
    .item {
      position: relative;
      margin-bottom: 20px;
      border: 1px solid #b0b0b0;
      border-radius: 2px;
      cursor: pointer;
      .item-header {
        padding: 12px 15px;
        border-bottom: 1px solid #e0e0e0;
      }
      .item-body {
        padding: 12px 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .item-desc, .item-remark {
        font-size: 0.8rem;
        color: #999;
      }
      &:last-child {
        margin-bottom: 0;
      }
      &.item-success {
        border-color: #83c44e;
        .item-header {
          background-color: lighten(#83c44e, 40%);
          border-color: lighten(#83c44e, 20%);
        }
      }
    }
  }

  .show-desc {
    .bug-title {
      font-size: 1.5rem;
      margin: 20px 0;
    }
    .bug-desc {
      color: #666;
      margin-bottom: 20px;
    }
  }

  /* =====俯视图===== */
  #sketch-map-btn {
    position: fixed;
    bottom: 20px;
    left: 10px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    cursor: pointer;
    background: rgba(255, 255, 255, .6) url(../assets/img/tools_btn.png) no-repeat -47px -47px;
    &:after {
      content: attr(data-tip);
      position: absolute;
      text-align: center;
      text-shadow: 0 0 2px #000;
      color: #fff;
      font-weight: 700;
      top: 100%;
    }
    &.avtive {
      background: rgba(255, 102, 0, .6) url(../assets/img/tools_btn.png) no-repeat 3px -47px;
    }
  }

  .sketch-map {
    position: fixed;
    top: 0;
    left: 50%;
    margin-left: -20vw;
    width: 40vw;
    border-radius: 0 0 5px 5px;
    background-color: rgba(255, 255, 255, .6);
    @media (max-width: 767px) {
      width: 90vw;
      margin-left: -45vw;
    }
    .cabinet-warpper {
      display: flex;
      justify-content: center;
      margin: 20px;
    }
    .cabinet {
      position: relative;
      text-align: center;
      background: #242833;
      color: #fff;
      width: 40px;
      margin: 0 2px;
      padding: 5px;
      cursor: pointer;
      &.success:after {
        content: '';
        border-top: 5px solid #55ab2f;
        position: absolute;
        top: -5px;
        left: 0;
        width: 100%;
      }
      &.warning:after {
        content: '';
        border-top: 5px solid #dedb0c;
        position: absolute;
        top: -5px;
        left: 0;
        width: 100%;
      }
      &.danger:after {
        content: '';
        border-top: 5px solid #b62309;
        position: absolute;
        top: -5px;
        left: 0;
        width: 100%;
      }
    }
  }
</style>
