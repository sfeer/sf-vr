/**
 * VR全景初始化数据，TODO 后期存储到数据库数据
 */
export default {
  // 全景初始化数据
  PANOS: {
    s1: {
      name: '10kV花园总部开关站',
      index: 'scene_entrance',
      uuid: '7acbe2c8fb9640319e1a924a45aaf0fa'
    },
    s2: {
      name: '10kV中通开关站',
      index: 'scene_entrance',
      uuid: 'b1bf18d79476445987e04ccf903986a2'
    },
    s3: {
      name: '10kV桐城府壹号开关站',
      index: 'scene_entrance',
      uuid: '045253c418fe41f78fd0dc9bb37ec6a0'
    },

    s4: {name: '110kV枫塘变电站', index: 'scene_overview'},
    s4r1: {name: '10kV#1、2电容室', index: 'scene_gp1'},
    s4r2: {name: '10kV#3、4电容室', index: 'scene_gp1'},
    s4r3: {name: '10kV开关室', index: 'scene_c2'},
    s4r4: {name: '110kvGIS室', index: 'scene_view1'},
    s4r5: {name: '主控室', index: 'scene_c1'},

    s5: {name: '110kV天英变电站', index: 'scene_entrance'},
    s5r1: {name: '10kV#1、2电容室', index: 'scene_1'},
    s5r2: {name: '10kV#3、4电容室', index: 'scene_3'},
    s5r3: {name: '10kV开关室', index: 'scene_c12'},
    s5r4: {name: '110kvGIS室', index: 'scene_c1'},
    s5r5: {name: '主控室', index: 'scene_c1'},
  },

  // 根据showid查询加载图片
  IMAGES: {
    s4: {
      b1_top1: ['/static/panos/s4/box/b1_top11.jpg', '/static/panos/s4/box/b1_top12.jpg'],
      b1_top2: ['/static/panos/s4/box/b1_top21.jpg', '/static/panos/s4/box/b1_top22.jpg', '/static/panos/s4/box/b1_top23.jpg'],
      b1_top3: ['/static/panos/s4/box/b1_top31.jpg', '/static/panos/s4/box/b1_top32.jpg'],
      b1_top4: ['/static/panos/s4/box/b1_top41.jpg', '/static/panos/s4/box/b1_top42.jpg', '/static/panos/s4/box/b1_top43.jpg'],
      b1_top5: ['/static/panos/s4/box/b1_top51.jpg', '/static/panos/s4/box/b1_top52.jpg', '/static/panos/s4/box/b1_top53.jpg'],
      b1_right1: ['/static/panos/s4/box/b1_right1.jpg'],
      b1_front1: ['/static/panos/s4/box/b1_front11.jpg', '/static/panos/s4/box/b1_front12.jpg', '/static/panos/s4/box/b1_front13.jpg', '/static/panos/s4/box/b1_front14.jpg'],
      b1_back1: ['/static/panos/s4/box/b1_back11.jpg', '/static/panos/s4/box/b1_back12.jpg', '/static/panos/s4/box/b1_back13.jpg'],
      b2_top1: ['/static/panos/s4/box/b2_top11.jpg', '/static/panos/s4/box/b2_top12.jpg'],
      b2_top2: ['/static/panos/s4/box/b2_top21.jpg', '/static/panos/s4/box/b2_top22.jpg', '/static/panos/s4/box/b2_top23.jpg'],
      b2_top3: ['/static/panos/s4/box/b2_top3.jpg'],
      b2_top4: ['/static/panos/s4/box/b2_top41.jpg', '/static/panos/s4/box/b2_top42.jpg'],
      b2_top5: ['/static/panos/s4/box/b2_top51.jpg', '/static/panos/s4/box/b2_top52.jpg'],
      b2_left1: ['/static/panos/s4/box/b2_left1.jpg'],
      b2_right1: ['/static/panos/s4/box/b2_right1.jpg'],
      b2_front1: ['/static/panos/s4/box/b2_front11.jpg', '/static/panos/s4/box/b2_front12.jpg', '/static/panos/s4/box/b2_front13.jpg', '/static/panos/s4/box/b2_front14.jpg'],
      b2_back1: ['/static/panos/s4/box/b2_back11.jpg', '/static/panos/s4/box/b2_back12.jpg', '/static/panos/s4/box/b2_back13.jpg']
    },
    s4r1: {
      gp1: ['/static/panos/s4r1/box/gp11.jpg', '/static/panos/s4r1/box/gp12.jpg', '/static/panos/s4r1/box/gp13.jpg'],
      gp2: ['/static/panos/s4r1/box/gp2.jpg'],
      gp3: ['/static/panos/s4r1/box/gp3.jpg'],
      gp4: ['/static/panos/s4r1/box/gp4.jpg'],
      gp5: ['/static/panos/s4r1/box/gp5.jpg'],
      gp6: ['/static/panos/s4r1/box/gp6.jpg'],
      gp7: ['/static/panos/s4r1/box/gp7.jpg'],
      gp8: ['/static/panos/s4r1/box/gp8.jpg']
    },
    s4r2: {
      gp1: ['/static/panos/s4r2/box/gp11.jpg', '/static/panos/s4r2/box/gp12.jpg'],
      gp2: ['/static/panos/s4r2/box/gp2.jpg'],
      gp3: ['/static/panos/s4r2/box/gp3.jpg'],
      gp4: ['/static/panos/s4r2/box/gp4.jpg'],
      gp5: ['/static/panos/s4r2/box/gp5.jpg'],
      gp6: ['/static/panos/s4r2/box/gp6.jpg'],
      gp7: ['/static/panos/s4r2/box/gp7.jpg'],
      gp8: ['/static/panos/s4r2/box/gp8.jpg']
    },
    s4r3: {
      r1: ['/static/panos/s4r3/box/ru14.jpg', '/static/panos/s4r3/box/ru12.jpg', '/static/panos/s4r3/box/ru13.jpg',
        '/static/panos/s4r3/box/rm11.jpg', '/static/panos/s4r3/box/rm13.jpg'],
      r2: ['/static/panos/s4r3/box/ru24.jpg', '/static/panos/s4r3/box/ru22.jpg', '/static/panos/s4r3/box/ru23.jpg',
        '/static/panos/s4r3/box/rm21.jpg', '/static/panos/s4r3/box/rm23.jpg'],
      l2: ['/static/panos/s4r3/box/lu23.jpg', '/static/panos/s4r3/box/lu22.jpg', '/static/panos/s4r3/box/lm21.jpg',
        '/static/panos/s4r3/box/lm23.jpg'],
      r3: ['/static/panos/s4r3/box/ru34.jpg', '/static/panos/s4r3/box/ru32.jpg', '/static/panos/s4r3/box/ru33.jpg',
        '/static/panos/s4r3/box/rm31.jpg', '/static/panos/s4r3/box/rm33.jpg'],
      l3: ['/static/panos/s4r3/box/lu34.jpg', '/static/panos/s4r3/box/lu32.jpg', '/static/panos/s4r3/box/lu33.jpg',
        '/static/panos/s4r3/box/lm31.jpg', '/static/panos/s4r3/box/lm33.jpg'],

      r4: ['/static/panos/s4r3/box/ru42.jpg', '/static/panos/s4r3/box/rm41.jpg', '/static/panos/s4r3/box/rm43.jpg'],
      r5: ['/static/panos/s4r3/box/ru52.jpg', '/static/panos/s4r3/box/rm51.jpg', '/static/panos/s4r3/box/rm53.jpg'],
      r6: ['/static/panos/s4r3/box/ru62.jpg', '/static/panos/s4r3/box/rm61.jpg', '/static/panos/s4r3/box/rm63.jpg'],
      l4: ['/static/panos/s4r3/box/lu42.jpg', '/static/panos/s4r3/box/lm41.jpg', '/static/panos/s4r3/box/lm43.jpg'],
      l5: ['/static/panos/s4r3/box/lu52.jpg', '/static/panos/s4r3/box/lu53.jpg', '/static/panos/s4r3/box/lm51.jpg',
        '/static/panos/s4r3/box/lm53.jpg', '/static/panos/s4r3/box/ld52.jpg'],
      l6: ['/static/panos/s4r3/box/lu62.jpg', '/static/panos/s4r3/box/lu63.jpg', '/static/panos/s4r3/box/lm61.jpg',
        '/static/panos/s4r3/box/lm63.jpg'],

      r7: ['/static/panos/s4r3/box/ru72.jpg', '/static/panos/s4r3/box/rm71.jpg', '/static/panos/s4r3/box/rm73.jpg'],
      r8: ['/static/panos/s4r3/box/ru82.jpg', '/static/panos/s4r3/box/rm81.jpg', '/static/panos/s4r3/box/rm83.jpg'],
      r9: ['/static/panos/s4r3/box/ru92.jpg', '/static/panos/s4r3/box/rm91.jpg', '/static/panos/s4r3/box/rm93.jpg'],
      l7: ['/static/panos/s4r3/box/lu72.jpg', '/static/panos/s4r3/box/lu73.jpg', '/static/panos/s4r3/box/lm71.jpg',
        '/static/panos/s4r3/box/lm73.jpg'],
      l8: ['/static/panos/s4r3/box/lu82.jpg', '/static/panos/s4r3/box/lm81.jpg', '/static/panos/s4r3/box/lm83.jpg'],
      l9: ['/static/panos/s4r3/box/lu92.jpg', '/static/panos/s4r3/box/lu93.jpg', '/static/panos/s4r3/box/lm91.jpg',
        '/static/panos/s4r3/box/lm93.jpg'],

      r10: ['/static/panos/s4r3/box/ru102.jpg', '/static/panos/s4r3/box/rm101.jpg', '/static/panos/s4r3/box/rm103.jpg'],
      r11: ['/static/panos/s4r3/box/ru112.jpg', '/static/panos/s4r3/box/rm111.jpg', '/static/panos/s4r3/box/rm113.jpg'],
      r12: ['/static/panos/s4r3/box/ru122.jpg', '/static/panos/s4r3/box/rm121.jpg', '/static/panos/s4r3/box/rm123.jpg'],
      l10: ['/static/panos/s4r3/box/lu102.jpg', '/static/panos/s4r3/box/lm101.jpg', '/static/panos/s4r3/box/lm103.jpg'],
      l11: ['/static/panos/s4r3/box/lu112.jpg', '/static/panos/s4r3/box/lm111.jpg', '/static/panos/s4r3/box/lm113.jpg'],
      l12: ['/static/panos/s4r3/box/lu122.jpg', '/static/panos/s4r3/box/lm121.jpg', '/static/panos/s4r3/box/lm123.jpg'],

      r13: ['/static/panos/s4r3/box/ru132.jpg', '/static/panos/s4r3/box/rm131.jpg', '/static/panos/s4r3/box/rm133.jpg'],
      r14: ['/static/panos/s4r3/box/ru142.jpg', '/static/panos/s4r3/box/rm141.jpg', '/static/panos/s4r3/box/rm143.jpg'],
      l13: ['/static/panos/s4r3/box/lu132.jpg', '/static/panos/s4r3/box/lm131.jpg', '/static/panos/s4r3/box/lm133.jpg'],
      l14: ['/static/panos/s4r3/box/lu142.jpg', '/static/panos/s4r3/box/lu143.jpg', '/static/panos/s4r3/box/lm141.jpg',
        '/static/panos/s4r3/box/lm143.jpg'],
      l15: ['/static/panos/s4r3/box/lu152.jpg', '/static/panos/s4r3/box/lu153.jpg', '/static/panos/s4r3/box/lm151.jpg',
        '/static/panos/s4r3/box/lm153.jpg'],

      l16: ['/static/panos/s4r3/box/lu162.jpg', '/static/panos/s4r3/box/lu163.jpg', '/static/panos/s4r3/box/lm161.jpg',
        '/static/panos/s4r3/box/lm163.jpg'],
      l17: ['/static/panos/s4r3/box/lu172.jpg', '/static/panos/s4r3/box/lm171.jpg', '/static/panos/s4r3/box/lm173.jpg'],
      l18: ['/static/panos/s4r3/box/lu182.jpg', '/static/panos/s4r3/box/lu183.jpg', '/static/panos/s4r3/box/lm181.jpg',
        '/static/panos/s4r3/box/lm183.jpg'],

      l19: ['/static/panos/s4r3/box/lu192.jpg', '/static/panos/s4r3/box/lu193.jpg', '/static/panos/s4r3/box/lm191.jpg',
        '/static/panos/s4r3/box/lm193.jpg'],
      l20: ['/static/panos/s4r3/box/lu202.jpg', '/static/panos/s4r3/box/lm201.jpg', '/static/panos/s4r3/box/lm203.jpg'],
      l21: ['/static/panos/s4r3/box/lu212.jpg', '/static/panos/s4r3/box/lm211.jpg', '/static/panos/s4r3/box/lm213.jpg'],

      l22: ['/static/panos/s4r3/box/lu222.jpg', '/static/panos/s4r3/box/lm221.jpg', '/static/panos/s4r3/box/lm223.jpg'],
      l23: ['/static/panos/s4r3/box/lu232.jpg', '/static/panos/s4r3/box/lm231.jpg', '/static/panos/s4r3/box/lm233.jpg'],
      l24: ['/static/panos/s4r3/box/lu242.jpg', '/static/panos/s4r3/box/lm241.jpg', '/static/panos/s4r3/box/lm243.jpg'],

      l25: ['/static/panos/s4r3/box/lu252.jpg', '/static/panos/s4r3/box/lm251.jpg', '/static/panos/s4r3/box/lm253.jpg'],
      l26: ['/static/panos/s4r3/box/lu262.jpg', '/static/panos/s4r3/box/lm261.jpg', '/static/panos/s4r3/box/lm263.jpg'],
      l27: ['/static/panos/s4r3/box/lu272.jpg', '/static/panos/s4r3/box/lm271.jpg', '/static/panos/s4r3/box/lm273.jpg'],

      r28: [
        '/static/panos/s4r3/box/r281.jpg', '/static/panos/s4r3/box/r283.jpg', '/static/panos/s4r3/box/r28a.jpg',
        '/static/panos/s4r3/box/r284.jpg', '/static/panos/s4r3/box/r285.jpg', '/static/panos/s4r3/box/r286.jpg',
        '/static/panos/s4r3/box/r287.jpg', '/static/panos/s4r3/box/r288.jpg', '/static/panos/s4r3/box/r289.jpg',
        '/static/panos/s4r3/box/r28b.jpg'
      ],
      l28: [
        '/static/panos/s4r3/box/l282.jpg', '/static/panos/s4r3/box/l283.jpg', '/static/panos/s4r3/box/l28b.jpg',
        '/static/panos/s4r3/box/l284.jpg', '/static/panos/s4r3/box/l285.jpg', '/static/panos/s4r3/box/l286.jpg',
        '/static/panos/s4r3/box/l287.jpg', '/static/panos/s4r3/box/l288.jpg', '/static/panos/s4r3/box/l289.jpg',
        '/static/panos/s4r3/box/l28a.jpg'
      ],
      bl2: [],
      bl3: ['/static/panos/s4r3/box/bl32.jpg'],
      bl4: ['/static/panos/s4r3/box/bl42.jpg'],
      bl5: ['/static/panos/s4r3/box/bl52.jpg'],
      bl6: [],
      bl7: ['/static/panos/s4r3/box/bl72.jpg'],
      bl8: ['/static/panos/s4r3/box/bl82.jpg'],
      bl9: ['/static/panos/s4r3/box/bl92.jpg'],
      bl10: ['/static/panos/s4r3/box/bl102.jpg'],
      bl11: ['/static/panos/s4r3/box/bl112.jpg'],
      bl12: ['/static/panos/s4r3/box/bl122.jpg'],
      bl13: ['/static/panos/s4r3/box/bl132.jpg'],
      bl14: ['/static/panos/s4r3/box/bl142.jpg'],
      bl15: ['/static/panos/s4r3/box/bl152.jpg'],
      bl16: ['/static/panos/s4r3/box/bl162.jpg'],
      bl17: [],
      bl18: ['/static/panos/s4r3/box/bl182.jpg'],
      bl19: ['/static/panos/s4r3/box/bl192.jpg'],
      bl20: ['/static/panos/s4r3/box/bl202.jpg'],
      bl21: ['/static/panos/s4r3/box/bl212.jpg'],
      bl22: ['/static/panos/s4r3/box/bl222.jpg'],
      bl23: ['/static/panos/s4r3/box/bl232.jpg'],
      bl24: ['/static/panos/s4r3/box/bl242.jpg'],
      bl25: ['/static/panos/s4r3/box/bl252.jpg'],
      bl26: ['/static/panos/s4r3/box/bl262.jpg'],
      bl27: ['/static/panos/s4r3/box/bl272.jpg'],
    },
    s4r4: {
      gp1: ['/static/panos/s4r4/box/gp11.jpg', '/static/panos/s4r4/box/gp12.jpg', '/static/panos/s4r4/box/gp14.jpg'],
      gp2: ['/static/panos/s4r4/box/gp21.jpg', '/static/panos/s4r4/box/gp22.jpg', '/static/panos/s4r4/box/gp24.jpg'],
      gp3: ['/static/panos/s4r4/box/gp31.jpg', '/static/panos/s4r4/box/gp32.jpg', '/static/panos/s4r4/box/gp34.jpg'],
      gp4: ['/static/panos/s4r4/box/gp41.jpg', '/static/panos/s4r4/box/gp42.jpg', '/static/panos/s4r4/box/gp44.jpg'],
      gp5: ['/static/panos/s4r4/box/gp51.jpg', '/static/panos/s4r4/box/gp52.jpg', '/static/panos/s4r4/box/gp54.jpg'],
      gp6: ['/static/panos/s4r4/box/gp61.jpg', '/static/panos/s4r4/box/gp62.jpg', '/static/panos/s4r4/box/gp64.jpg'],
      gp7: ['/static/panos/s4r4/box/gp71.jpg', '/static/panos/s4r4/box/gp72.jpg', '/static/panos/s4r4/box/gp74.jpg'],
      v21: ['/static/panos/s4r4/box/v21.jpg', '/static/panos/s4r4/box/v22.jpg'],
      v22: ['/static/panos/s4r4/box/v23.jpg'],
      v23: ['/static/panos/s4r4/box/v24.jpg'],
      v24: ['/static/panos/s4r4/box/v25.jpg'],
      v25: ['/static/panos/s4r4/box/v26.jpg'],
      v26: ['/static/panos/s4r4/box/v27.jpg'],
      v31: ['/static/panos/s4r4/box/v31.jpg', '/static/panos/s4r4/box/v32.jpg'],
      v32: ['/static/panos/s4r4/box/v33.jpg'],
      v33: ['/static/panos/s4r4/box/v34.jpg', '/static/panos/s4r4/box/v35.jpg'],
      v41: ['/static/panos/s4r4/box/v41.jpg', '/static/panos/s4r4/box/v42.jpg'],
      v42: ['/static/panos/s4r4/box/v43.jpg'],
      v43: ['/static/panos/s4r4/box/v44.jpg'],
      v44: ['/static/panos/s4r4/box/v45.jpg'],
      v45: ['/static/panos/s4r4/box/v46.jpg'],
      v46: ['/static/panos/s4r4/box/v47.jpg'],
      v51: ['/static/panos/s4r4/box/v51.jpg'],
      v52: ['/static/panos/s4r4/box/v52.jpg'],
      v53: ['/static/panos/s4r4/box/v53.jpg', '/static/panos/s4r4/box/v54.jpg'],
      v54: ['/static/panos/s4r4/box/v55.jpg'],
      v61: ['/static/panos/s4r4/box/v61.jpg'],
      v62: ['/static/panos/s4r4/box/v62.jpg'],
      v63: ['/static/panos/s4r4/box/v63.jpg'],
      v64: ['/static/panos/s4r4/box/v64.jpg'],
      v65: ['/static/panos/s4r4/box/v65.jpg'],
      v71: ['/static/panos/s4r4/box/v71.jpg'],
      v72: ['/static/panos/s4r4/box/v72.jpg', '/static/panos/s4r4/box/v73.jpg'],
      v73: ['/static/panos/s4r4/box/v74.jpg'],
      v74: ['/static/panos/s4r4/box/v75.jpg'],
      v75: ['/static/panos/s4r4/box/v76.jpg'],
      v91: ['/static/panos/s4r4/box/v91.jpg'],
      v92: ['/static/panos/s4r4/box/v92.jpg'],
      v93: ['/static/panos/s4r4/box/v93.jpg'],
      v94: ['/static/panos/s4r4/box/v94.jpg'],
      v95: ['/static/panos/s4r4/box/v95.jpg'],
      v101: ['/static/panos/s4r4/box/v101.jpg'],
      v102: ['/static/panos/s4r4/box/v102.jpg'],
      v103: ['/static/panos/s4r4/box/v103.jpg'],
      v104: ['/static/panos/s4r4/box/v104.jpg'],
      v105: ['/static/panos/s4r4/box/v105.jpg']
    },
    s4r5: {
      a: ['/static/panos/s4r5/box/a1.jpg', '/static/panos/s4r5/box/a2.jpg', '/static/panos/s4r5/box/a3.jpg'],
      ab: ['/static/panos/s4r5/box/ab1.jpg', '/static/panos/s4r5/box/ab2.jpg', '/static/panos/s4r5/box/ab3.jpg'],
      b: [
        '/static/panos/s4r5/box/b1.jpg', '/static/panos/s4r5/box/b2.jpg', '/static/panos/s4r5/box/b3.jpg', '/static/panos/s4r5/box/b4.jpg',
        '/static/panos/s4r5/box/b5.jpg', '/static/panos/s4r5/box/b6.jpg', '/static/panos/s4r5/box/b7.jpg', '/static/panos/s4r5/box/b8.jpg'
      ],
      bb: [
        '/static/panos/s4r5/box/bb1.jpg', '/static/panos/s4r5/box/bb2.jpg', '/static/panos/s4r5/box/bb3.jpg', '/static/panos/s4r5/box/bb4.jpg',
        '/static/panos/s4r5/box/bb5.jpg', '/static/panos/s4r5/box/bb6.jpg'
      ],
      c: [
        '/static/panos/s4r5/box/c1.jpg', '/static/panos/s4r5/box/c2.jpg', '/static/panos/s4r5/box/c3.jpg', '/static/panos/s4r5/box/c4.jpg',
        '/static/panos/s4r5/box/c5.jpg'
      ],
      cb: ['/static/panos/s4r5/box/cb1.jpg', '/static/panos/s4r5/box/cb2.jpg', '/static/panos/s4r5/box/cb3.jpg'],
      d: [
        '/static/panos/s4r5/box/d1.jpg', '/static/panos/s4r5/box/d2.jpg', '/static/panos/s4r5/box/d3.jpg', '/static/panos/s4r5/box/d4.jpg',
        '/static/panos/s4r5/box/d5.jpg'
      ],
      db: ['/static/panos/s4r5/box/db1.jpg', '/static/panos/s4r5/box/db2.jpg', '/static/panos/s4r5/box/db3.jpg', '/static/panos/s4r5/box/db4.jpg'],
      e: ['/static/panos/s4r5/box/e1.jpg', '/static/panos/s4r5/box/e2.jpg', '/static/panos/s4r5/box/e3.jpg'],
      eb: ['/static/panos/s4r5/box/eb1.jpg', '/static/panos/s4r5/box/eb2.jpg', '/static/panos/s4r5/box/eb3.jpg'],
      f: [
        '/static/panos/s4r5/box/f1.jpg', '/static/panos/s4r5/box/f2.jpg', '/static/panos/s4r5/box/f3.jpg', '/static/panos/s4r5/box/f4.jpg',
        '/static/panos/s4r5/box/f5.jpg', '/static/panos/s4r5/box/f6.jpg', '/static/panos/s4r5/box/f7.jpg', '/static/panos/s4r5/box/f8.jpg'
      ],
      fb: [
        '/static/panos/s4r5/box/fb1.jpg', '/static/panos/s4r5/box/fb2.jpg', '/static/panos/s4r5/box/fb3.jpg', '/static/panos/s4r5/box/fb4.jpg',
        '/static/panos/s4r5/box/fb5.jpg', '/static/panos/s4r5/box/fb6.jpg'
      ],
      g: ['/static/panos/s4r5/box/g1.jpg', '/static/panos/s4r5/box/g2.jpg', '/static/panos/s4r5/box/g3.jpg', '/static/panos/s4r5/box/g4.jpg'],
      gb: ['/static/panos/s4r5/box/gb1.jpg', '/static/panos/s4r5/box/gb2.jpg'],
      h: [
        '/static/panos/s4r5/box/h1.jpg', '/static/panos/s4r5/box/h2.jpg', '/static/panos/s4r5/box/h3.jpg', '/static/panos/s4r5/box/h4.jpg',
        '/static/panos/s4r5/box/h5.jpg', '/static/panos/s4r5/box/h6.jpg', '/static/panos/s4r5/box/h7.jpg', '/static/panos/s4r5/box/h8.jpg',
        '/static/panos/s4r5/box/h9.jpg', '/static/panos/s4r5/box/h10.jpg', '/static/panos/s4r5/box/h11.jpg'
      ],
      hb: [
        '/static/panos/s4r5/box/hb1.jpg', '/static/panos/s4r5/box/hb2.jpg', '/static/panos/s4r5/box/hb3.jpg', '/static/panos/s4r5/box/hb4.jpg',
        '/static/panos/s4r5/box/hb5.jpg'
      ],
      i: [
        '/static/panos/s4r5/box/i1.jpg', '/static/panos/s4r5/box/i2.jpg', '/static/panos/s4r5/box/i3.jpg', '/static/panos/s4r5/box/i4.jpg',
        '/static/panos/s4r5/box/i5.jpg', '/static/panos/s4r5/box/i6.jpg', '/static/panos/s4r5/box/i7.jpg', '/static/panos/s4r5/box/i8.jpg',
        '/static/panos/s4r5/box/i9.jpg'
      ],
      ib: ['/static/panos/s4r5/box/ib1.jpg', '/static/panos/s4r5/box/ib2.jpg', '/static/panos/s4r5/box/ib3.jpg', '/static/panos/s4r5/box/ib4.jpg'],
      j: [
        '/static/panos/s4r5/box/j1.jpg', '/static/panos/s4r5/box/j2.jpg', '/static/panos/s4r5/box/j3.jpg', '/static/panos/s4r5/box/j4.jpg',
        '/static/panos/s4r5/box/j5.jpg', '/static/panos/s4r5/box/j6.jpg', '/static/panos/s4r5/box/j7.jpg', '/static/panos/s4r5/box/j8.jpg',
        '/static/panos/s4r5/box/j9.jpg', '/static/panos/s4r5/box/j10.jpg'
      ],
      jb: ['/static/panos/s4r5/box/jb1.jpg', '/static/panos/s4r5/box/jb2.jpg', '/static/panos/s4r5/box/jb3.jpg', '/static/panos/s4r5/box/jb4.jpg'],
      k: [
        '/static/panos/s4r5/box/k1.jpg', '/static/panos/s4r5/box/k2.jpg', '/static/panos/s4r5/box/k3.jpg', '/static/panos/s4r5/box/k4.jpg',
        '/static/panos/s4r5/box/k5.jpg', '/static/panos/s4r5/box/k6.jpg', '/static/panos/s4r5/box/k7.jpg', '/static/panos/s4r5/box/k8.jpg'
      ],
      kb: [
        '/static/panos/s4r5/box/kb1.jpg', '/static/panos/s4r5/box/kb2.jpg', '/static/panos/s4r5/box/kb3.jpg', '/static/panos/s4r5/box/kb4.jpg',
        '/static/panos/s4r5/box/kb5.jpg'
      ],
      l: ['/static/panos/s4r5/box/l1.jpg', '/static/panos/s4r5/box/l2.jpg', '/static/panos/s4r5/box/l3.jpg', '/static/panos/s4r5/box/l4.jpg'],
      lb: [
        '/static/panos/s4r5/box/lb1.jpg', '/static/panos/s4r5/box/lb2.jpg', '/static/panos/s4r5/box/lb3.jpg', '/static/panos/s4r5/box/lb4.jpg',
        '/static/panos/s4r5/box/lb5.jpg'
      ],
      m: [
        '/static/panos/s4r5/box/m1.jpg', '/static/panos/s4r5/box/m2.jpg', '/static/panos/s4r5/box/m3.jpg', '/static/panos/s4r5/box/m4.jpg',
        '/static/panos/s4r5/box/m5.jpg', '/static/panos/s4r5/box/m6.jpg', '/static/panos/s4r5/box/m7.jpg', '/static/panos/s4r5/box/m8.jpg'
      ],
      n: ['/static/panos/s4r5/box/n1.jpg', '/static/panos/s4r5/box/n2.jpg', '/static/panos/s4r5/box/n3.jpg'],
      o: ['/static/panos/s4r5/box/o1.jpg'],
      ob: ['/static/panos/s4r5/box/ob1.jpg', '/static/panos/s4r5/box/ob2.jpg'],
      p: [
        '/static/panos/s4r5/box/p1.jpg', '/static/panos/s4r5/box/p2.jpg', '/static/panos/s4r5/box/p3.jpg', '/static/panos/s4r5/box/p4.jpg',
        '/static/panos/s4r5/box/p5.jpg'
      ],
      q: [
        '/static/panos/s4r5/box/q1.jpg', '/static/panos/s4r5/box/q2.jpg', '/static/panos/s4r5/box/q3.jpg', '/static/panos/s4r5/box/q4.jpg',
        '/static/panos/s4r5/box/q5.jpg'
      ],
      r: [
        '/static/panos/s4r5/box/r1.jpg', '/static/panos/s4r5/box/r2.jpg', '/static/panos/s4r5/box/r3.jpg', '/static/panos/s4r5/box/r4.jpg',
        '/static/panos/s4r5/box/r5.jpg', '/static/panos/s4r5/box/r6.jpg', '/static/panos/s4r5/box/r7.jpg', '/static/panos/s4r5/box/r8.jpg',
        '/static/panos/s4r5/box/r9.jpg'
      ],
      rb: [
        '/static/panos/s4r5/box/rb1.jpg', '/static/panos/s4r5/box/rb2.jpg', '/static/panos/s4r5/box/rb3.jpg', '/static/panos/s4r5/box/rb4.jpg',
        '/static/panos/s4r5/box/rb5.jpg'
      ],
      s: [
        '/static/panos/s4r5/box/s1.jpg', '/static/panos/s4r5/box/s2.jpg', '/static/panos/s4r5/box/s3.jpg', '/static/panos/s4r5/box/s4.jpg',
        '/static/panos/s4r5/box/s5.jpg', '/static/panos/s4r5/box/s6.jpg', '/static/panos/s4r5/box/s7.jpg', '/static/panos/s4r5/box/s8.jpg',
        '/static/panos/s4r5/box/s9.jpg', '/static/panos/s4r5/box/s10.jpg', '/static/panos/s4r5/box/s11.jpg'
      ],
      sb: [
        '/static/panos/s4r5/box/sb1.jpg', '/static/panos/s4r5/box/sb2.jpg', '/static/panos/s4r5/box/sb3.jpg', '/static/panos/s4r5/box/sb4.jpg',
        '/static/panos/s4r5/box/sb5.jpg', '/static/panos/s4r5/box/sb6.jpg'
      ],
      t: [
        '/static/panos/s4r5/box/t1.jpg', '/static/panos/s4r5/box/t2.jpg', '/static/panos/s4r5/box/t3.jpg', '/static/panos/s4r5/box/t4.jpg',
        '/static/panos/s4r5/box/t5.jpg', '/static/panos/s4r5/box/t6.jpg', '/static/panos/s4r5/box/t7.jpg', '/static/panos/s4r5/box/t8.jpg'
      ],
      tb: [
        '/static/panos/s4r5/box/tb1.jpg', '/static/panos/s4r5/box/tb2.jpg', '/static/panos/s4r5/box/tb3.jpg', '/static/panos/s4r5/box/tb4.jpg',
        '/static/panos/s4r5/box/tb5.jpg'
      ],
      u: [
        '/static/panos/s4r5/box/u1.jpg', '/static/panos/s4r5/box/u2.jpg', '/static/panos/s4r5/box/u3.jpg', '/static/panos/s4r5/box/u4.jpg',
        '/static/panos/s4r5/box/u5.jpg', '/static/panos/s4r5/box/u6.jpg', '/static/panos/s4r5/box/u7.jpg'
      ],
      ub: [
        '/static/panos/s4r5/box/ub1.jpg', '/static/panos/s4r5/box/ub2.jpg', '/static/panos/s4r5/box/ub3.jpg', '/static/panos/s4r5/box/ub4.jpg',
        '/static/panos/s4r5/box/ub5.jpg', '/static/panos/s4r5/box/ub6.jpg', '/static/panos/s4r5/box/ub7.jpg', '/static/panos/s4r5/box/ub8.jpg'
      ],
      v: [
        '/static/panos/s4r5/box/v1.jpg', '/static/panos/s4r5/box/v2.jpg', '/static/panos/s4r5/box/v3.jpg', '/static/panos/s4r5/box/v4.jpg',
        '/static/panos/s4r5/box/v5.jpg', '/static/panos/s4r5/box/v6.jpg', '/static/panos/s4r5/box/v7.jpg'
      ],
      vb: [
        '/static/panos/s4r5/box/vb1.jpg', '/static/panos/s4r5/box/vb2.jpg', '/static/panos/s4r5/box/vb3.jpg', '/static/panos/s4r5/box/vb4.jpg',
        '/static/panos/s4r5/box/vb5.jpg', '/static/panos/s4r5/box/vb6.jpg'
      ],
      w: [
        '/static/panos/s4r5/box/w1.jpg', '/static/panos/s4r5/box/w2.jpg', '/static/panos/s4r5/box/w3.jpg', '/static/panos/s4r5/box/w4.jpg',
        '/static/panos/s4r5/box/w5.jpg', '/static/panos/s4r5/box/w6.jpg', '/static/panos/s4r5/box/w7.jpg'
      ],
      x: [],
      xb: [
        '/static/panos/s4r5/box/xb1.jpg', '/static/panos/s4r5/box/xb2.jpg', '/static/panos/s4r5/box/xb3.jpg', '/static/panos/s4r5/box/xb4.jpg',
        '/static/panos/s4r5/box/xb5.jpg', '/static/panos/s4r5/box/xb6.jpg', '/static/panos/s4r5/box/xb7.jpg', '/static/panos/s4r5/box/xb8.jpg',
        '/static/panos/s4r5/box/xb9.jpg', '/static/panos/s4r5/box/xb10.jpg'
      ]
    },
    s5r5: {
      t: [
        '/static/panos/s5r5/box/t1.jpg',
        '/static/panos/s5r5/box/t2.jpg',
        '/static/panos/s5r5/box/t3.jpg',
        '/static/panos/s5r5/box/t4.jpg'
      ],
      tb: [
        '/static/panos/s5r5/box/tb1.jpg',
        '/static/panos/s5r5/box/tb2.jpg',
        '/static/panos/s5r5/box/tb3.jpg',
        '/static/panos/s5r5/box/tb4.jpg',
        '/static/panos/s5r5/box/tb5.jpg'
      ],
      u: [
        '/static/panos/s5r5/box/u1.jpg',
        '/static/panos/s5r5/box/u2.jpg',
        '/static/panos/s5r5/box/u3.jpg',
        '/static/panos/s5r5/box/u4.jpg',
        '/static/panos/s5r5/box/u5.jpg',
        '/static/panos/s5r5/box/u6.jpg',
        '/static/panos/s5r5/box/u7.jpg'
      ],
      ub: [
        '/static/panos/s5r5/box/ub1.jpg',
        '/static/panos/s5r5/box/ub2.jpg',
        '/static/panos/s5r5/box/ub3.jpg',
        '/static/panos/s5r5/box/ub4.jpg',
        '/static/panos/s5r5/box/ub5.jpg',
        '/static/panos/s5r5/box/ub6.jpg',
        '/static/panos/s5r5/box/ub7.jpg'
      ],
      v: [
        '/static/panos/s5r5/box/v1.jpg',
        '/static/panos/s5r5/box/v2.jpg',
        '/static/panos/s5r5/box/v3.jpg',
        '/static/panos/s5r5/box/v4.jpg',
        '/static/panos/s5r5/box/v5.jpg',
        '/static/panos/s5r5/box/v6.jpg'
      ],
      vb: [
        '/static/panos/s5r5/box/vb1.jpg',
        '/static/panos/s5r5/box/vb2.jpg',
        '/static/panos/s5r5/box/vb3.jpg',
        '/static/panos/s5r5/box/vb4.jpg'
      ],
      w: [
        '/static/panos/s5r5/box/w1.jpg',
        '/static/panos/s5r5/box/w2.jpg',
        '/static/panos/s5r5/box/w3.jpg',
        '/static/panos/s5r5/box/w4.jpg',
        '/static/panos/s5r5/box/w5.jpg'
      ],
      wb: [
        '/static/panos/s5r5/box/wb1.jpg',
        '/static/panos/s5r5/box/wb2.jpg',
        '/static/panos/s5r5/box/wb3.jpg',
        '/static/panos/s5r5/box/wb4.jpg'
      ],
      x: ['/static/panos/s5r5/box/x1.jpg'],
      xb: [
        '/static/panos/s5r5/box/xb1.jpg',
        '/static/panos/s5r5/box/xb2.jpg',
        '/static/panos/s5r5/box/xb3.jpg',
        '/static/panos/s5r5/box/xb4.jpg',
        '/static/panos/s5r5/box/xb5.jpg',
        '/static/panos/s5r5/box/xb6.jpg'
      ],
      yb: [
        '/static/panos/s5r5/box/yb1.jpg',
        '/static/panos/s5r5/box/yb2.jpg',
        '/static/panos/s5r5/box/yb3.jpg',
        '/static/panos/s5r5/box/yb4.jpg',
        '/static/panos/s5r5/box/yb5.jpg'
      ],
      zb: [
        '/static/panos/s5r5/box/zb1.jpg',
        '/static/panos/s5r5/box/zb2.jpg',
        '/static/panos/s5r5/box/zb3.jpg',
        '/static/panos/s5r5/box/zb4.jpg',
        '/static/panos/s5r5/box/zb5.jpg'
      ]
    }
  },

  // 机柜导航图
  LAYOUTS: {
    s4r3: [
      [
        {},
        {name: '2', scene: 'scene_c2', lookat: ''},
        {name: '3', scene: 'scene_c2', lookat: ''},
        {name: '4', scene: 'scene_c5', lookat: ''},
        {name: '5', scene: 'scene_c5', lookat: ''},
        {name: '6', scene: 'scene_c5', lookat: ''},
        {name: '7', scene: 'scene_c8', lookat: ''},
        {name: '8', scene: 'scene_c8', lookat: ''},
        {name: '9', scene: 'scene_c8', lookat: ''},
        {name: '10', scene: 'scene_c11', lookat: ''},
        {name: '11', scene: 'scene_c11', lookat: ''},
        {name: '12', scene: 'scene_c11', lookat: ''},
        {name: '13', scene: 'scene_c14', lookat: ''},
        {name: '14', scene: 'scene_c14', lookat: ''},
        {name: '15', scene: 'scene_c14', lookat: ''},
        {name: '16', scene: 'scene_c17', lookat: ''},
        {name: '17', scene: 'scene_c17', lookat: ''},
        {name: '18', scene: 'scene_c17', lookat: ''},
        {name: '19', scene: 'scene_c20', lookat: ''},
        {name: '20', scene: 'scene_c20', lookat: ''},
        {name: '21', scene: 'scene_c20', lookat: ''},
        {name: '22', scene: 'scene_c23', lookat: ''},
        {name: '23', scene: 'scene_c23', lookat: ''},
        {name: '24', scene: 'scene_c23', lookat: ''},
        {name: '25', scene: 'scene_c26', lookat: ''},
        {name: '26', scene: 'scene_c26', lookat: ''},
        {name: '27', scene: 'scene_c26', lookat: ''},
        {},
        {},
        {name: '28', scene: 'scene_c29', lookat: ''},
        {name: '29', scene: 'scene_c29', lookat: ''},
        {name: '30', scene: 'scene_c29', lookat: ''}
      ],
      [
        {name: '1', scene: 'scene_c2', lookat: ''},
        {name: '2', scene: 'scene_c2', lookat: ''},
        {name: '3', scene: 'scene_c2', lookat: ''},
        {name: '4', scene: 'scene_c5', lookat: ''},
        {name: '5', scene: 'scene_c5', lookat: ''},
        {name: '6', scene: 'scene_c5', lookat: ''},
        {name: '7', scene: 'scene_c8', lookat: ''},
        {name: '8', scene: 'scene_c8', lookat: ''},
        {name: '9', scene: 'scene_c8', lookat: ''},
        {name: '10', scene: 'scene_c11', lookat: ''},
        {name: '11', scene: 'scene_c11', lookat: ''},
        {name: '12', scene: 'scene_c11', lookat: ''},
        {name: '13', scene: 'scene_c14', lookat: ''},
        {name: '14', scene: 'scene_c14', lookat: ''},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {name: '28', scene: 'scene_c29', lookat: ''},
        {name: '29', scene: 'scene_c29', lookat: ''},
        {name: '30', scene: 'scene_c29', lookat: ''}
      ]
    ],
    s4r5: [
      [
        {name: 'r', scene: 'scene_c20', lookat: ''},
        {name: 's', scene: 'scene_c20', lookat: ''},
        {name: 't', scene: 'scene_c21', lookat: ''},
        {name: 'u', scene: 'scene_c21', lookat: ''},
        {name: 'v', scene: 'scene_c22', lookat: ''},
        {name: 'w', scene: 'scene_c22', lookat: ''},
        {name: 'x', scene: 'scene_c22', lookat: ''},
      ],
      [
        {},
        {},
        {name: 'q', scene: 'scene_c12', lookat: ''},
        {name: 'p', scene: 'scene_c13', lookat: ''},
        {name: 'o', scene: 'scene_c13', lookat: ''},
        {name: 'n', scene: 'scene_c14', lookat: ''},
        {}
      ],
      [
        {},
        {name: 'h', scene: 'scene_c12', lookat: ''},
        {name: 'i', scene: 'scene_c12', lookat: ''},
        {name: 'j', scene: 'scene_c13', lookat: ''},
        {name: 'k', scene: 'scene_c13', lookat: ''},
        {name: 'l', scene: 'scene_c14', lookat: ''},
        {name: 'm', scene: 'scene_c14', lookat: ''},
      ],
      [
        {name: 'a', scene: 'scene_c1', lookat: ''},
        {name: 'b', scene: 'scene_c1', lookat: ''},
        {name: 'c', scene: 'scene_c2', lookat: ''},
        {name: 'd', scene: 'scene_c2', lookat: ''},
        {name: 'e', scene: 'scene_c3', lookat: ''},
        {name: 'f', scene: 'scene_c3', lookat: ''},
        {name: 'g', scene: 'scene_c3', lookat: ''},
      ]
    ],
    s1: [
      [
        {name: 'GP 1', scene: 'scene_center1', lookat: '3.602,-2.786,120', uuid: '6233f7dc1d8b4174b98a6c60594de6e7'},
        {name: 'GP 2', scene: 'scene_center1', lookat: '3.602,-2.786,120', uuid: '9910e477b49346058615eec3de355608'},
        {name: 'GP 3', scene: 'scene_center1', lookat: '3.602,-2.786,120', uuid: '7b1964a2d69a4fb7a573dc8dbdd40a0f'},
        {name: 'GP 4', scene: 'scene_center2', lookat: '-12.911,1.815,120', uuid: 'c32221f6fc1c4fbea27d5983945f4a95'},
        {name: 'GP 5', scene: 'scene_center2', lookat: '-12.911,1.815,120', uuid: '66dd5f9947c144bf99ab1867ef25c6c0'},
        {name: 'GP 6', scene: 'scene_center2', lookat: '-12.911,1.815,120', uuid: 'd5fba9b2fc7547a19b4c50c5dabd1a98'},
        {name: 'GP 7', scene: 'scene_center3', lookat: '175.864,2.449,120', uuid: '9d8229ecf6354f58893774c5b543b81a'},
        {name: 'GP 8', scene: 'scene_center3', lookat: '175.864,2.449,120', uuid: 'c504763b600d4f59803b9d91e2a2cbbb'},
        {name: 'GP 9', scene: 'scene_center3', lookat: '175.864,2.449,120', uuid: '931bed72e1c342ec9f306949860bb213'}
      ],
      [
        {name: 'GP 18', scene: 'scene_center1', lookat: '182.467,3.004,120', uuid: '5c3be6bf378541078a79321aac7455aa'},
        {name: 'GP 17', scene: 'scene_center1', lookat: '182.467,3.004,120', uuid: '9fef3c8c13de4f9db62ed8f7cd7391d1'},
        {name: 'GP 16', scene: 'scene_center1', lookat: '182.467,3.004,120', uuid: '782bb2f070d9404c8fa81f522d88bed2'},
        {name: 'GP 15', scene: 'scene_center2', lookat: '526.093,4.164,120', uuid: 'c2962a420565460ea2bc73371d051d64'},
        {name: 'GP 14', scene: 'scene_center2', lookat: '526.093,4.164,120', uuid: '88a030424f104bf5837c6ef3bc5615e7'},
        {name: 'GP 13', scene: 'scene_center2', lookat: '526.093,4.164,120', uuid: 'a94e9faf23a447dba59f48d43903206c'},
        {name: 'GP 12', scene: 'scene_center3', lookat: '714.497,2.521,120', uuid: '446be62621904d1a982d73b6f26c8a92'},
        {name: 'GP 11', scene: 'scene_center3', lookat: '714.497,2.521,120', uuid: '2e038b1fb4a44af1a4846f1c5128117b'},
        {name: 'GP 10', scene: 'scene_center3', lookat: '714.497,2.521,120', uuid: 'f26cfcbc9ee94988b63abe444c12f63b'}
      ]
    ],
    s2: [
      [
        {
          name: 'GP 1',
          scene: 'scene_center1',
          lookat: '160.921,-11.681,97.304',
          uuid: '91c7133c3e4948758f97bc431383b60a'
        },
        {
          name: 'GP 2',
          scene: 'scene_center1',
          lookat: '160.921,-11.681,97.304',
          uuid: 'df19f97cbed141d9b81e30f30f61ff84'
        },
        {
          name: 'GP 3',
          scene: 'scene_center1',
          lookat: '160.921,-11.681,97.304',
          uuid: '5b0339c6e0ff44019735e834bff39028'
        },
        {
          name: 'GP 4',
          scene: 'scene_center2',
          lookat: '150.477,0.368,104.170',
          uuid: '35b1c869877a4978a01b5833d2fb6702'
        },
        {
          name: 'GP 5',
          scene: 'scene_center2',
          lookat: '150.477,0.368,104.170',
          uuid: 'd452583b761648c3a26a0b1e67511898'
        },
        {
          name: 'GP 6',
          scene: 'scene_center2',
          lookat: '150.477,0.368,104.170',
          uuid: '4909c5e19a0a42c6bee19147bfbffb9b'
        },
        {
          name: 'GP 7',
          scene: 'scene_center3',
          lookat: '151.055,0.201,99.125',
          uuid: 'aa165e48b7ea4e66bb6c0bd5e016f731'
        },
        {
          name: 'GP 8',
          scene: 'scene_center3',
          lookat: '151.055,0.201,99.125',
          uuid: '08af3ae18fad42388be2747bd88d7350'
        },
        {
          name: 'GP 9',
          scene: 'scene_center3',
          lookat: '151.055,0.201,99.125',
          uuid: '85d55fb9146643148f5245b093530b5c'
        },
        {
          name: 'GP 10',
          scene: 'scene_center4',
          lookat: '-125.161,-4.311,96.133',
          uuid: '7167fa11c37c4d8d9103544a233905c7'
        }
      ],
      [
        {
          name: 'GP 19',
          scene: 'scene_center1',
          lookat: '2.729,-4.316,97.304',
          uuid: '82bc3052d6c9431c86102e3184b60110'
        },
        {
          name: 'GP 18',
          scene: 'scene_center1',
          lookat: '2.729,-4.316,97.304',
          uuid: '77b300d60585440bae13869bd7409021'
        },
        {
          name: 'GP 17',
          scene: 'scene_center1',
          lookat: '2.729,-4.316,97.304',
          uuid: 'c92fb68c5b504847842c7c45e81eccbb'
        },
        {
          name: 'GP 16',
          scene: 'scene_center2',
          lookat: '-36.089,0.025,104.170',
          uuid: '7938f71f79a9442baebb7ec8dd2b2be3'
        },
        {
          name: 'GP 15',
          scene: 'scene_center2',
          lookat: '-36.089,0.025,104.170',
          uuid: '7a87c27886044d1f8d9fd0b1d005a80c'
        },
        {
          name: 'GP 14',
          scene: 'scene_center2',
          lookat: '-36.089,0.025,104.170',
          uuid: '2c628874794a4c46bb7d40d194b99099'
        },
        {
          name: 'GP 13',
          scene: 'scene_center3',
          lookat: '-38.134,1.014,99.125',
          uuid: 'ed26e7be030b4bcba656e40c6a879ad0'
        },
        {
          name: 'GP 12',
          scene: 'scene_center3',
          lookat: '-38.134,1.014,99.125',
          uuid: '4aebdf62ae4843faa1857ba0e2640ac2'
        },
        {
          name: 'GP 11',
          scene: 'scene_center3',
          lookat: '-38.134,1.014,99.125',
          uuid: '774231cdbe32413b982ee75de60d8acd'
        },
        {}
      ]
    ],
    s3: [
      [
        {
          name: 'GP 1',
          scene: 'scene_center1',
          lookat: '153.821,-1.872,54.678',
          uuid: '54b32021cc894d83b02df0c19f1aa48b'
        },
        {
          name: 'GP 2',
          scene: 'scene_center1',
          lookat: '153.821,-1.872,54.678',
          uuid: '36fbb561d9f042c3b6f21710b64d7dc3'
        },
        {
          name: 'GP 3',
          scene: 'scene_center1',
          lookat: '153.821,-1.872,54.678',
          uuid: '68dfb8089f304a2ba2a800017dc4ed30'
        },
        {
          name: 'GP 4',
          scene: 'scene_center2',
          lookat: '-180.481,-0.735,46.576',
          uuid: 'defa115399044d82b48d2d1dbf584089'
        },
        {
          name: 'GP 5',
          scene: 'scene_center2',
          lookat: '-180.481,-0.735,46.576',
          uuid: 'bed5f397caca458e9f869935a3c59a35'
        },
        {
          name: 'GP 6',
          scene: 'scene_center2',
          lookat: '-180.481,-0.735,46.576',
          uuid: '65c20ec514914902aac4b7e63ccbbc94'
        },
        {
          name: 'GP 7',
          scene: 'scene_center3',
          lookat: '-20.161,-1.943,44.336',
          uuid: '9ae1aa879b28449ab85915fc50937feb'
        },
        {
          name: 'GP 8',
          scene: 'scene_center3',
          lookat: '-20.161,-1.943,44.336',
          uuid: 'f1eb4756e7f14308835d5bcfe8fcaf0d'
        },
      ],
      [
        {
          name: 'GP 16',
          scene: 'scene_center3',
          lookat: '140.240,-3.871,84.724',
          uuid: '145017604bba4feda4901c84edabbbb7'
        },
        {
          name: 'GP 15',
          scene: 'scene_center3',
          lookat: '140.240,-3.871,84.724',
          uuid: '798e9cde58894e3b904373b1e04104bf'
        },
        {
          name: 'GP 14',
          scene: 'scene_center2',
          lookat: '-0.806,0.214,92.236',
          uuid: '0f729790d6a244eb8ae293c3ea4e8238'
        },
        {
          name: 'GP 13',
          scene: 'scene_center2',
          lookat: '-0.806,0.214,92.236',
          uuid: '02c71d2659834a58ab9a0e4c771e26f6'
        },
        {
          name: 'GP 12',
          scene: 'scene_center2',
          lookat: '-0.806,0.214,92.236',
          uuid: '7e02f38e42cf4f058a4f1281b715b456'
        },
        {
          name: 'GP 11',
          scene: 'scene_center1',
          lookat: '319.249,-5.176,83.080',
          uuid: '7e2c6b00ec674984be5116f5d6a1e3f5'
        },
        {
          name: 'GP 10',
          scene: 'scene_center1',
          lookat: '319.249,-5.176,83.080',
          uuid: '1a91d3db185d489ea1ebc50630f923e6'
        },
        {
          name: 'GP 9',
          scene: 'scene_center1',
          lookat: '319.249,-5.176,83.080',
          uuid: '8cd6f4c2bde1438e89a18ea07fb1c045'
        }
      ]
    ]
  },

  // 导航
  GUIDE: {
    s4: [
      {
        name: '室外',
        panos: [
          {name: '1#主变', code: 's4', scene: 'scene_b1_front'},
          {name: '2#主变', code: 's4', scene: 'scene_b2_front'}
        ]
      },
      {
        name: '一楼',
        panos: [
          {name: '#1、2电容室', code: 's4r1'},
          {name: '#3、4电容室', code: 's4r2'},
          {name: '开关室', code: 's4r3'}
        ]
      },
      {
        name: '二楼',
        panos: [
          {name: '主控室', code: 's4r5'},
          {name: 'GIS室', code: 's4r4'}
        ]
      }
    ],

    s5: [
      {
        name: '室外',
        panos: [
          {name: '1#主变', code: 's5', scene: 'scene_b1_front'},
          {name: '2#主变', code: 's5', scene: 'scene_b2_front'}
        ]
      },
      {
        name: '一楼',
        panos: [
          {name: '#1、2电容室', code: 's5r1'},
          {name: '#3、4电容室', code: 's5r2'},
          {name: '开关室', code: 's5r3'}
        ]
      },
      {
        name: '二楼',
        panos: [
          {name: '主控室', code: 's5r5'},
          {name: 'GIS室', code: 's5r4'}
        ]
      }
    ]
  }
}
