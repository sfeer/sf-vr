<template>
  <div id="app" style="height:100%">
    <div id="pano"></div>
    <div
      id="sketch-map-btn"
      data-tip="机柜总览"
      :class="showSketchMap?'active':''"
      @click="showSketchMap=!showSketchMap"
    ></div>
    <transition name="el-zoom-in-top">
      <div v-if="station.id === 's1'" v-show="showSketchMap" class="sketch-map">
        <div class="cabinet-warpper">
          <div :class="cabinet_status['6233f7dc1d8b4174b98a6c60594de6e7']" class="cabinet"
               @click="loadscene('3bb843126ac75316b65b786b0269d747')">GP<br>1
          </div>
          <div :class="cabinet_status['9910e477b49346058615eec3de355608']" class="cabinet"
               @click="loadscene('3bb843126ac75316b65b786b0269d747')">GP<br>2
          </div>
          <div :class="cabinet_status['7b1964a2d69a4fb7a573dc8dbdd40a0f']" class="cabinet"
               @click="loadscene('3bb843126ac75316b65b786b0269d747')">GP<br>3
          </div>
          <div :class="cabinet_status['c32221f6fc1c4fbea27d5983945f4a95']" class="cabinet"
               @click="loadscene('b056e5a475af5866aa149ecd3b95b9c2')">GP<br>4
          </div>
          <div :class="cabinet_status['66dd5f9947c144bf99ab1867ef25c6c0']" class="cabinet"
               @click="loadscene('b056e5a475af5866aa149ecd3b95b9c2')">GP<br>5
          </div>
          <div :class="cabinet_status['d5fba9b2fc7547a19b4c50c5dabd1a98']" class="cabinet"
               @click="loadscene('b056e5a475af5866aa149ecd3b95b9c2')">GP<br>6
          </div>
          <div :class="cabinet_status['9d8229ecf6354f58893774c5b543b81a']" class="cabinet"
               @click="loadscene('87145031a216549481c736af138c9c79')">GP<br>7
          </div>
          <div :class="cabinet_status['c504763b600d4f59803b9d91e2a2cbbb']" class="cabinet"
               @click="loadscene('87145031a216549481c736af138c9c79')">GP<br>8
          </div>
          <div :class="cabinet_status['931bed72e1c342ec9f306949860bb213']" class="cabinet"
               @click="loadscene('87145031a216549481c736af138c9c79')">GP<br>9
          </div>
        </div>
        <div class="cabinet-warpper">
          <div :class="cabinet_status['5c3be6bf378541078a79321aac7455aa']" class="cabinet"
               @click="loadscene('130030df05865191992f0fb3ee334ad2')">GP<br>18
          </div>
          <div :class="cabinet_status['9fef3c8c13de4f9db62ed8f7cd7391d1']" class="cabinet"
               @click="loadscene('130030df05865191992f0fb3ee334ad2')">GP<br>17
          </div>
          <div :class="cabinet_status['782bb2f070d9404c8fa81f522d88bed2']" class="cabinet"
               @click="loadscene('130030df05865191992f0fb3ee334ad2')">GP<br>16
          </div>
          <div :class="cabinet_status['c2962a420565460ea2bc73371d051d64']" class="cabinet"
               @click="loadscene('a8862c2a94995dff811790eb7676fa20')">GP<br>15
          </div>
          <div :class="cabinet_status['88a030424f104bf5837c6ef3bc5615e7']" class="cabinet"
               @click="loadscene('a8862c2a94995dff811790eb7676fa20')">GP<br>14
          </div>
          <div :class="cabinet_status['a94e9faf23a447dba59f48d43903206c']" class="cabinet"
               @click="loadscene('a8862c2a94995dff811790eb7676fa20')">GP<br>13
          </div>
          <div :class="cabinet_status['446be62621904d1a982d73b6f26c8a92']" class="cabinet"
               @click="loadscene('fe8805fe2d6e53aaad9654dce30046c8')">GP<br>12
          </div>
          <div :class="cabinet_status['2e038b1fb4a44af1a4846f1c5128117b']" class="cabinet"
               @click="loadscene('fe8805fe2d6e53aaad9654dce30046c8')">GP<br>11
          </div>
          <div :class="cabinet_status['f26cfcbc9ee94988b63abe444c12f63b']" class="cabinet"
               @click="loadscene('fe8805fe2d6e53aaad9654dce30046c8')">GP<br>10
          </div>
        </div>
      </div>
      <div v-else-if="station.id === 's2'" v-show="showSketchMap" class="sketch-map">
        <div class="cabinet-warpper">
          <div :class="cabinet_status['91c7133c3e4948758f97bc431383b60a']" class="cabinet"
               @click="loadscene('d22e997fa1204644bc3f338b43c41761')">GP<br>1
          </div>
          <div :class="cabinet_status['df19f97cbed141d9b81e30f30f61ff84']" class="cabinet"
               @click="loadscene('d22e997fa1204644bc3f338b43c41761')">GP<br>2
          </div>
          <div :class="cabinet_status['5b0339c6e0ff44019735e834bff39028']" class="cabinet"
               @click="loadscene('d22e997fa1204644bc3f338b43c41761')">GP<br>3
          </div>
          <div :class="cabinet_status['35b1c869877a4978a01b5833d2fb6702']" class="cabinet"
               @click="loadscene('f5c3248fafef4eda8470f11304264ca8')">GP<br>4
          </div>
          <div :class="cabinet_status['d452583b761648c3a26a0b1e67511898']" class="cabinet"
               @click="loadscene('f5c3248fafef4eda8470f11304264ca8')">GP<br>5
          </div>
          <div :class="cabinet_status['4909c5e19a0a42c6bee19147bfbffb9b']" class="cabinet"
               @click="loadscene('f5c3248fafef4eda8470f11304264ca8')">GP<br>6
          </div>
          <div :class="cabinet_status['aa165e48b7ea4e66bb6c0bd5e016f731']" class="cabinet"
               @click="loadscene('9147056d457c44eea4b1cc416bbe917c')">GP<br>7
          </div>
          <div :class="cabinet_status['08af3ae18fad42388be2747bd88d7350']" class="cabinet"
               @click="loadscene('9147056d457c44eea4b1cc416bbe917c')">GP<br>8
          </div>
          <div :class="cabinet_status['85d55fb9146643148f5245b093530b5c']" class="cabinet"
               @click="loadscene('9147056d457c44eea4b1cc416bbe917c')">GP<br>9
          </div>
          <div :class="cabinet_status['7167fa11c37c4d8d9103544a233905c7']" class="cabinet"
               @click="loadscene('e6887e308d8e4f27bb5a47cc34d00791')">GP<br>10
          </div>
        </div>
        <div class="cabinet-warpper">
          <div id="82bc3052d6c9431c86102e3184b60110" class="cabinet"
               @click="loadscene('70b0459c1cb8431fa99c460d52727eca')">GP<br>19
          </div>
          <div id="77b300d60585440bae13869bd7409021" class="cabinet"
               @click="loadscene('70b0459c1cb8431fa99c460d52727eca')">GP<br>18
          </div>
          <div id="c92fb68c5b504847842c7c45e81eccbb" class="cabinet"
               @click="loadscene('70b0459c1cb8431fa99c460d52727eca')">GP<br>17
          </div>
          <div id="7938f71f79a9442baebb7ec8dd2b2be3" class="cabinet"
               @click="loadscene('fdcd7fc337714d84ad973786bda9a6a6')">GP<br>16
          </div>
          <div id="7a87c27886044d1f8d9fd0b1d005a80c" class="cabinet"
               @click="loadscene('fdcd7fc337714d84ad973786bda9a6a6')">GP<br>15
          </div>
          <div id="2c628874794a4c46bb7d40d194b99099" class="cabinet"
               @click="loadscene('fdcd7fc337714d84ad973786bda9a6a6')">GP<br>14
          </div>
          <div id="ed26e7be030b4bcba656e40c6a879ad0" class="cabinet"
               @click="loadscene('6a219709268b4c97ba819d0af6cb33ce')">GP<br>13
          </div>
          <div id="4aebdf62ae4843faa1857ba0e2640ac2" class="cabinet"
               @click="loadscene('6a219709268b4c97ba819d0af6cb33ce')">GP<br>12
          </div>
          <div id="774231cdbe32413b982ee75de60d8acd" class="cabinet"
               @click="loadscene('6a219709268b4c97ba819d0af6cb33ce')">GP<br>11
          </div>
        </div>
      </div>
      <div v-else-if="station.id === 's3'" v-show="showSketchMap" class="sketch-map">
        <div class="cabinet-warpper">
          <div id="54b32021cc894d83b02df0c19f1aa48b" class="cabinet"
               @click="loadscene('2e07580478c642b4a2b902434a17f3b0')">GP<br>1
          </div>
          <div id="36fbb561d9f042c3b6f21710b64d7dc3" class="cabinet"
               @click="loadscene('2e07580478c642b4a2b902434a17f3b0')">GP<br>2
          </div>
          <div id="68dfb8089f304a2ba2a800017dc4ed30" class="cabinet"
               @click="loadscene('2e07580478c642b4a2b902434a17f3b0')">GP<br>3
          </div>
          <div id="defa115399044d82b48d2d1dbf584089" class="cabinet"
               @click="loadscene('9a7719f3d5e4454ebbe2370cf86725b5')">GP<br>4
          </div>
          <div id="bed5f397caca458e9f869935a3c59a35" class="cabinet"
               @click="loadscene('9a7719f3d5e4454ebbe2370cf86725b5')">GP<br>5
          </div>
          <div id="65c20ec514914902aac4b7e63ccbbc94" class="cabinet"
               @click="loadscene('9a7719f3d5e4454ebbe2370cf86725b5')">GP<br>6
          </div>
          <div id="9ae1aa879b28449ab85915fc50937feb" class="cabinet"
               @click="loadscene('535d98d2ce4848e0bf323eb0735a4002')">GP<br>7
          </div>
          <div id="f1eb4756e7f14308835d5bcfe8fcaf0d" class="cabinet"
               @click="loadscene('535d98d2ce4848e0bf323eb0735a4002')">GP<br>8
          </div>
        </div>
        <div class="cabinet-warpper">
          <div id="145017604bba4feda4901c84edabbbb7" class="cabinet"
               @click="loadscene('c37293b5e3274e3a9eb95c9896ae5dc7')">GP<br>16
          </div>
          <div id="798e9cde58894e3b904373b1e04104bf" class="cabinet"
               @click="loadscene('c37293b5e3274e3a9eb95c9896ae5dc7')">GP<br>15
          </div>
          <div id="0f729790d6a244eb8ae293c3ea4e8238" class="cabinet"
               @click="loadscene('c37293b5e3274e3a9eb95c9896ae5dc7')">GP<br>14
          </div>
          <div id="02c71d2659834a58ab9a0e4c771e26f6" class="cabinet"
               @click="loadscene('20ca0caa1c03445a871ed673dc628d7f')">GP<br>13
          </div>
          <div id="7e02f38e42cf4f058a4f1281b715b456" class="cabinet"
               @click="loadscene('20ca0caa1c03445a871ed673dc628d7f')">GP<br>12
          </div>
          <div id="7e2c6b00ec674984be5116f5d6a1e3f5" class="cabinet"
               @click="loadscene('20ca0caa1c03445a871ed673dc628d7f')">GP<br>11
          </div>
          <div id="1a91d3db185d489ea1ebc50630f923e6" class="cabinet"
               @click="loadscene('17c08db894e84a38be22ca228e7644f7')">GP<br>10
          </div>
          <div id="8cd6f4c2bde1438e89a18ea07fb1c045" class="cabinet"
               @click="loadscene('17c08db894e84a38be22ca228e7644f7')">GP<br>9
          </div>
        </div>
      </div>
    </transition>
    <el-dialog size="large" :visible.sync="showBugBox" @open="openBugInfo">
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
    created() {
      let pst = this.$route.params.station,
        psc = this.$route.params.scene;
      if (pst && VR.STATIONS[pst]) {
        this.station = VR.STATIONS[pst];
        this.scene = {name: 'scene_entrance'};
      } else if (psc && VR.SCENES[psc]) {
        this.station = VR.STATIONS[VR.SCENES[psc].station];
        this.scene = VR.SCENES[psc];
      }
    },
    mounted() {
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
          onready: krpano => {
            krpano.call("loadscene('" + this.scene.name + "', null, MERGE)");
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
