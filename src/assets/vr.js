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
    s2: {name: '10kV中通开关站', index: 'scene_entrance', uuid: 'b1bf18d79476445987e04ccf903986a2'},
    s3: {name: '10kV桐城府壹号开关站', index: 'scene_entrance', uuid: '045253c418fe41f78fd0dc9bb37ec6a0'},
    s4: {name: '110kV枫塘变电站', index: 'scene_overview'},
    s4r1: {name: '10kV#1、2电容室', index: 'scene_gp1'},
    s4r2: {name: '10kV#3、4电容室', index: 'scene_gp1'},
    s4r3: {name: '10kV开关室', index: 'scene_c2'},
    s4r4: {name: '110kvGIS室', index: 'scene_view1'},
    s4r5: {name: '主控室', index: 'scene_c1'}
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
    }
  },

  // 场景初始化视角, uuid=uuid.uuid4()
  SCENES: {
    '3bb843126ac75316b65b786b0269d747': {
      name: 'scene_center1',
      lookat: '3.602,-2.786,120',
      station: 's1'
    },
    'b056e5a475af5866aa149ecd3b95b9c2': {
      name: 'scene_center2',
      lookat: '-12.911,1.815,120',
      station: 's1'
    },
    '87145031a216549481c736af138c9c79': {
      name: 'scene_center3',
      lookat: '175.864,2.449,120',
      station: 's1'
    },
    'fe8805fe2d6e53aaad9654dce30046c8': {
      name: 'scene_center3',
      lookat: '714.497,2.521,120',
      station: 's1'
    },
    'a8862c2a94995dff811790eb7676fa20': {
      name: 'scene_center2',
      lookat: '526.093,4.164,120',
      station: 's1'
    },
    '130030df05865191992f0fb3ee334ad2': {
      name: 'scene_center1',
      lookat: '182.467,3.004,120',
      station: 's1'
    },
    'd22e997fa1204644bc3f338b43c41761': {
      name: 'scene_center1',
      lookat: '160.921,-11.681,97.304',
      station: 's2'
    },
    'f5c3248fafef4eda8470f11304264ca8': {
      name: 'scene_center2',
      lookat: '150.477,0.368,104.170',
      station: 's2'
    },
    '9147056d457c44eea4b1cc416bbe917c': {
      name: 'scene_center3',
      lookat: '151.055,0.201,99.125',
      station: 's2'
    },
    'e6887e308d8e4f27bb5a47cc34d00791': {
      name: 'scene_center4',
      lookat: '-125.161,-4.311,96.133',
      station: 's2'
    },
    '6a219709268b4c97ba819d0af6cb33ce': {
      name: 'scene_center3',
      lookat: '-38.134,1.014,99.125',
      station: 's2'
    },
    'fdcd7fc337714d84ad973786bda9a6a6': {
      name: 'scene_center2',
      lookat: '-36.089,0.025,104.170',
      station: 's2'
    },
    '70b0459c1cb8431fa99c460d52727eca': {
      name: 'scene_center1',
      lookat: '2.729,-4.316,97.304',
      station: 's2'
    },
    '2e07580478c642b4a2b902434a17f3b0': {
      name: 'scene_center1',
      lookat: '153.821,-1.872,54.678',
      station: 's3'
    },
    '9a7719f3d5e4454ebbe2370cf86725b5': {
      name: 'scene_center2',
      lookat: '-180.481,-0.735,46.576',
      station: 's3'
    },
    '535d98d2ce4848e0bf323eb0735a4002': {
      name: 'scene_center3',
      lookat: '-20.161,-1.943,44.336',
      station: 's3'
    },
    '17c08db894e84a38be22ca228e7644f7': {
      name: 'scene_center3',
      lookat: '140.240,-3.871,84.724',
      station: 's3'
    },
    '20ca0caa1c03445a871ed673dc628d7f': {
      name: 'scene_center2',
      lookat: '-0.806,0.214,92.236',
      station: 's3'
    },
    'c37293b5e3274e3a9eb95c9896ae5dc7': {
      name: 'scene_center1',
      lookat: '319.249,-5.176,83.080',
      station: 's3'
    }
  },

  // 机柜导航图
  LAYOUTS: {
    s4r3: [
      // 第一排
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
      // 第二排
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
    s1: [
      [
        {name: 'GP 1', scene: 'scene_center1', lookat: '3.602,-2.786,120'},
        {name: 'GP 2', scene: 'scene_center1', lookat: '3.602,-2.786,120'},
        {name: 'GP 3', scene: 'scene_center1', lookat: '3.602,-2.786,120'},
        {name: 'GP 4', scene: 'scene_center2', lookat: '-12.911,1.815,120'},
        {name: 'GP 5', scene: 'scene_center2', lookat: '-12.911,1.815,120'},
        {name: 'GP 6', scene: 'scene_center2', lookat: '-12.911,1.815,120'},
        {name: 'GP 7', scene: 'scene_center3', lookat: '175.864,2.449,120'},
        {name: 'GP 8', scene: 'scene_center3', lookat: '175.864,2.449,120'},
        {name: 'GP 9', scene: 'scene_center3', lookat: '175.864,2.449,120'}
      ],
      [
        {name: 'GP 18', scene: 'scene_center1', lookat: '182.467,3.004,120'},
        {name: 'GP 17', scene: 'scene_center1', lookat: '182.467,3.004,120'},
        {name: 'GP 16', scene: 'scene_center1', lookat: '182.467,3.004,120'},
        {name: 'GP 15', scene: 'scene_center2', lookat: '526.093,4.164,120'},
        {name: 'GP 14', scene: 'scene_center2', lookat: '526.093,4.164,120'},
        {name: 'GP 13', scene: 'scene_center2', lookat: '526.093,4.164,120'},
        {name: 'GP 12', scene: 'scene_center3', lookat: '714.497,2.521,120'},
        {name: 'GP 11', scene: 'scene_center3', lookat: '714.497,2.521,120'},
        {name: 'GP 10', scene: 'scene_center3', lookat: '714.497,2.521,120'}
      ]
    ]
  }
}
