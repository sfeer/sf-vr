/**
 * VR全景初始化数据，后期TODO是后台数据库数据
 */
export default {
  // 开关站初始化数据
  STATIONS: {
    s1: {id: 's1', name: '10kV花园总部开关站', fd_id: '7acbe2c8fb9640319e1a924a45aaf0fa', index: 'scene_entrance'},
    s2: {id: 's2', name: '10kV中通开关站', fd_id: 'b1bf18d79476445987e04ccf903986a2', index: 'scene_entrance'},
    s3: {id: 's3', name: '10kV桐城府壹号开关站', fd_id: '045253c418fe41f78fd0dc9bb37ec6a0', index: 'scene_entrance'},
    s4: {id: 's4', name: '110kV枫塘变电站', index: 'scene_overview'},
    s5: {id: 's5', name: '10kV#1、2电容室', index: 'scene_gp1'},
    s6: {id: 's6', name: '10kV#3、4电容室', index: 'scene_gp1'},
    s7: {id: 's7', name: '10kV开关室', index: 'scene_c2'},
    s8: {id: 's8', name: '110kvGIS室', index: 'scene_view1'},
    s9: {id: 's9', name: '主控室', index: 'scene_c1'}
  },

  // 根据showid查询加载图片
  IMAGES: {
    s4: {
      b1_top1: ['static/panos/s4/box/b1_top11.jpg', 'static/panos/s4/box/b1_top12.jpg'],
      b1_top2: ['static/panos/s4/box/b1_top21.jpg', 'static/panos/s4/box/b1_top22.jpg', 'static/panos/s4/box/b1_top23.jpg'],
      b1_top3: ['static/panos/s4/box/b1_top31.jpg', 'static/panos/s4/box/b1_top32.jpg'],
      b1_top4: ['static/panos/s4/box/b1_top41.jpg', 'static/panos/s4/box/b1_top42.jpg', 'static/panos/s4/box/b1_top43.jpg'],
      b1_top5: ['static/panos/s4/box/b1_top51.jpg', 'static/panos/s4/box/b1_top52.jpg', 'static/panos/s4/box/b1_top53.jpg'],
      b1_right1: ['static/panos/s4/box/b1_right1.jpg'],
      b1_front1: ['static/panos/s4/box/b1_front11.jpg', 'static/panos/s4/box/b1_front12.jpg', 'static/panos/s4/box/b1_front13.jpg', 'static/panos/s4/box/b1_front14.jpg'],
      b1_back1: ['static/panos/s4/box/b1_back11.jpg', 'static/panos/s4/box/b1_back12.jpg', 'static/panos/s4/box/b1_back13.jpg'],
      b2_top1: ['static/panos/s4/box/b2_top11.jpg', 'static/panos/s4/box/b2_top12.jpg'],
      b2_top2: ['static/panos/s4/box/b2_top21.jpg', 'static/panos/s4/box/b2_top22.jpg', 'static/panos/s4/box/b2_top23.jpg'],
      b2_top3: ['static/panos/s4/box/b2_top3.jpg'],
      b2_top4: ['static/panos/s4/box/b2_top41.jpg', 'static/panos/s4/box/b2_top42.jpg'],
      b2_top5: ['static/panos/s4/box/b2_top51.jpg', 'static/panos/s4/box/b2_top52.jpg'],
      b2_left1: ['static/panos/s4/box/b2_left1.jpg'],
      b2_right1: ['static/panos/s4/box/b2_right1.jpg'],
      b2_front1: ['static/panos/s4/box/b2_front11.jpg', 'static/panos/s4/box/b2_front12.jpg', 'static/panos/s4/box/b2_front13.jpg', 'static/panos/s4/box/b2_front14.jpg'],
      b2_back1: ['static/panos/s4/box/b2_back11.jpg', 'static/panos/s4/box/b2_back12.jpg', 'static/panos/s4/box/b2_back13.jpg']
    },
    s5: {
      gp1: ['static/panos/s5/box/gp11.jpg', 'static/panos/s5/box/gp12.jpg', 'static/panos/s5/box/gp13.jpg'],
      gp2: ['static/panos/s5/box/gp2.jpg'],
      gp3: ['static/panos/s5/box/gp3.jpg'],
      gp4: ['static/panos/s5/box/gp4.jpg'],
      gp5: ['static/panos/s5/box/gp5.jpg'],
      gp6: ['static/panos/s5/box/gp6.jpg'],
      gp7: ['static/panos/s5/box/gp7.jpg'],
      gp8: ['static/panos/s5/box/gp8.jpg']
    },
    s6: {
      gp1: ['static/panos/s6/box/gp11.jpg', 'static/panos/s6/box/gp12.jpg'],
      gp2: ['static/panos/s6/box/gp2.jpg'],
      gp3: ['static/panos/s6/box/gp3.jpg'],
      gp4: ['static/panos/s6/box/gp4.jpg'],
      gp5: ['static/panos/s6/box/gp5.jpg'],
      gp6: ['static/panos/s6/box/gp6.jpg'],
      gp7: ['static/panos/s6/box/gp7.jpg'],
      gp8: ['static/panos/s6/box/gp8.jpg']
    },
    s7: {
      r1: ['static/panos/s7/box/ru14.jpg', 'static/panos/s7/box/ru12.jpg', 'static/panos/s7/box/ru13.jpg',
        'static/panos/s7/box/rm11.jpg', 'static/panos/s7/box/rm13.jpg'],
      r2: ['static/panos/s7/box/ru24.jpg', 'static/panos/s7/box/ru22.jpg', 'static/panos/s7/box/ru23.jpg',
        'static/panos/s7/box/rm21.jpg', 'static/panos/s7/box/rm23.jpg'],
      l2: ['static/panos/s7/box/lu23.jpg', 'static/panos/s7/box/lu22.jpg', 'static/panos/s7/box/lm21.jpg',
        'static/panos/s7/box/lm23.jpg'],
      r3: ['static/panos/s7/box/ru34.jpg', 'static/panos/s7/box/ru32.jpg', 'static/panos/s7/box/ru33.jpg',
        'static/panos/s7/box/rm31.jpg', 'static/panos/s7/box/rm33.jpg'],
      l3: ['static/panos/s7/box/lu34.jpg', 'static/panos/s7/box/lu32.jpg', 'static/panos/s7/box/lu33.jpg',
        'static/panos/s7/box/lm31.jpg', 'static/panos/s7/box/lm33.jpg'],

      r4: ['static/panos/s7/box/ru42.jpg', 'static/panos/s7/box/rm41.jpg', 'static/panos/s7/box/rm43.jpg'],
      r5: ['static/panos/s7/box/ru52.jpg', 'static/panos/s7/box/rm51.jpg', 'static/panos/s7/box/rm53.jpg'],
      r6: ['static/panos/s7/box/ru62.jpg', 'static/panos/s7/box/rm61.jpg', 'static/panos/s7/box/rm63.jpg'],
      l4: ['static/panos/s7/box/lu42.jpg', 'static/panos/s7/box/lm41.jpg', 'static/panos/s7/box/lm43.jpg'],
      l5: ['static/panos/s7/box/lu52.jpg', 'static/panos/s7/box/lu53.jpg', 'static/panos/s7/box/lm51.jpg',
        'static/panos/s7/box/lm53.jpg', 'static/panos/s7/box/ld52.jpg'],
      l6: ['static/panos/s7/box/lu62.jpg', 'static/panos/s7/box/lu63.jpg', 'static/panos/s7/box/lm61.jpg',
        'static/panos/s7/box/lm63.jpg'],

      r7: ['static/panos/s7/box/ru72.jpg', 'static/panos/s7/box/rm71.jpg', 'static/panos/s7/box/rm73.jpg'],
      r8: ['static/panos/s7/box/ru82.jpg', 'static/panos/s7/box/rm81.jpg', 'static/panos/s7/box/rm83.jpg'],
      r9: ['static/panos/s7/box/ru92.jpg', 'static/panos/s7/box/rm91.jpg', 'static/panos/s7/box/rm93.jpg'],
      l7: ['static/panos/s7/box/lu72.jpg', 'static/panos/s7/box/lu73.jpg', 'static/panos/s7/box/lm71.jpg',
        'static/panos/s7/box/lm73.jpg'],
      l8: ['static/panos/s7/box/lu82.jpg', 'static/panos/s7/box/lm81.jpg', 'static/panos/s7/box/lm83.jpg'],
      l9: ['static/panos/s7/box/lu92.jpg', 'static/panos/s7/box/lu93.jpg', 'static/panos/s7/box/lm91.jpg',
        'static/panos/s7/box/lm93.jpg'],

      r10: ['static/panos/s7/box/ru102.jpg', 'static/panos/s7/box/rm101.jpg', 'static/panos/s7/box/rm103.jpg'],
      r11: ['static/panos/s7/box/ru112.jpg', 'static/panos/s7/box/rm111.jpg', 'static/panos/s7/box/rm113.jpg'],
      r12: ['static/panos/s7/box/ru122.jpg', 'static/panos/s7/box/rm121.jpg', 'static/panos/s7/box/rm123.jpg'],
      l10: ['static/panos/s7/box/lu102.jpg', 'static/panos/s7/box/lm101.jpg', 'static/panos/s7/box/lm103.jpg'],
      l11: ['static/panos/s7/box/lu112.jpg', 'static/panos/s7/box/lm111.jpg', 'static/panos/s7/box/lm113.jpg'],
      l12: ['static/panos/s7/box/lu122.jpg', 'static/panos/s7/box/lm121.jpg', 'static/panos/s7/box/lm123.jpg'],

      r13: ['static/panos/s7/box/ru132.jpg', 'static/panos/s7/box/rm131.jpg', 'static/panos/s7/box/rm133.jpg'],
      r14: ['static/panos/s7/box/ru142.jpg', 'static/panos/s7/box/rm141.jpg', 'static/panos/s7/box/rm143.jpg'],
      l13: ['static/panos/s7/box/lu132.jpg', 'static/panos/s7/box/lm131.jpg', 'static/panos/s7/box/lm133.jpg'],
      l14: ['static/panos/s7/box/lu142.jpg', 'static/panos/s7/box/lu143.jpg', 'static/panos/s7/box/lm141.jpg',
        'static/panos/s7/box/lm143.jpg'],
      l15: ['static/panos/s7/box/lu152.jpg', 'static/panos/s7/box/lu153.jpg', 'static/panos/s7/box/lm151.jpg',
        'static/panos/s7/box/lm153.jpg'],

      l16: ['static/panos/s7/box/lu162.jpg', 'static/panos/s7/box/lu163.jpg', 'static/panos/s7/box/lm161.jpg',
        'static/panos/s7/box/lm163.jpg'],
      l17: ['static/panos/s7/box/lu172.jpg', 'static/panos/s7/box/lm171.jpg', 'static/panos/s7/box/lm173.jpg'],
      l18: ['static/panos/s7/box/lu182.jpg', 'static/panos/s7/box/lu183.jpg', 'static/panos/s7/box/lm181.jpg',
        'static/panos/s7/box/lm183.jpg'],

      l19: ['static/panos/s7/box/lu192.jpg', 'static/panos/s7/box/lu193.jpg', 'static/panos/s7/box/lm191.jpg',
        'static/panos/s7/box/lm193.jpg'],
      l20: ['static/panos/s7/box/lu202.jpg', 'static/panos/s7/box/lm201.jpg', 'static/panos/s7/box/lm203.jpg'],
      l21: ['static/panos/s7/box/lu212.jpg', 'static/panos/s7/box/lm211.jpg', 'static/panos/s7/box/lm213.jpg'],

      l22: ['static/panos/s7/box/lu222.jpg', 'static/panos/s7/box/lm221.jpg', 'static/panos/s7/box/lm223.jpg'],
      l23: ['static/panos/s7/box/lu232.jpg', 'static/panos/s7/box/lm231.jpg', 'static/panos/s7/box/lm233.jpg'],
      l24: ['static/panos/s7/box/lu242.jpg', 'static/panos/s7/box/lm241.jpg', 'static/panos/s7/box/lm243.jpg'],

      l25: ['static/panos/s7/box/lu252.jpg', 'static/panos/s7/box/lm251.jpg', 'static/panos/s7/box/lm253.jpg'],
      l26: ['static/panos/s7/box/lu262.jpg', 'static/panos/s7/box/lm261.jpg', 'static/panos/s7/box/lm263.jpg'],
      l27: ['static/panos/s7/box/lu272.jpg', 'static/panos/s7/box/lm271.jpg', 'static/panos/s7/box/lm273.jpg'],

      r28: [
        'static/panos/s7/box/r281.jpg', 'static/panos/s7/box/r283.jpg', 'static/panos/s7/box/r28a.jpg',
        'static/panos/s7/box/r284.jpg', 'static/panos/s7/box/r285.jpg', 'static/panos/s7/box/r286.jpg',
        'static/panos/s7/box/r287.jpg', 'static/panos/s7/box/r288.jpg', 'static/panos/s7/box/r289.jpg',
        'static/panos/s7/box/r28b.jpg'
      ],
      l28: [
        'static/panos/s7/box/l282.jpg', 'static/panos/s7/box/l283.jpg', 'static/panos/s7/box/l28b.jpg',
        'static/panos/s7/box/l284.jpg', 'static/panos/s7/box/l285.jpg', 'static/panos/s7/box/l286.jpg',
        'static/panos/s7/box/l287.jpg', 'static/panos/s7/box/l288.jpg', 'static/panos/s7/box/l289.jpg',
        'static/panos/s7/box/l28a.jpg'
      ],
      bl2: [],
      bl3: ['static/panos/s7/box/bl32.jpg'],
      bl4: ['static/panos/s7/box/bl42.jpg'],
      bl5: ['static/panos/s7/box/bl52.jpg'],
      bl6: [],
      bl7: ['static/panos/s7/box/bl72.jpg'],
      bl8: ['static/panos/s7/box/bl82.jpg'],
      bl9: ['static/panos/s7/box/bl92.jpg'],
      bl10: ['static/panos/s7/box/bl102.jpg'],
      bl11: ['static/panos/s7/box/bl112.jpg'],
      bl12: ['static/panos/s7/box/bl122.jpg'],
      bl13: ['static/panos/s7/box/bl132.jpg'],
      bl14: ['static/panos/s7/box/bl142.jpg'],
      bl15: ['static/panos/s7/box/bl152.jpg'],
      bl16: ['static/panos/s7/box/bl162.jpg'],
      bl17: [],
      bl18: ['static/panos/s7/box/bl182.jpg'],
      bl19: ['static/panos/s7/box/bl192.jpg'],
      bl20: ['static/panos/s7/box/bl202.jpg'],
      bl21: ['static/panos/s7/box/bl212.jpg'],
      bl22: ['static/panos/s7/box/bl222.jpg'],
      bl23: ['static/panos/s7/box/bl232.jpg'],
      bl24: ['static/panos/s7/box/bl242.jpg'],
      bl25: ['static/panos/s7/box/bl252.jpg'],
      bl26: ['static/panos/s7/box/bl262.jpg'],
      bl27: ['static/panos/s7/box/bl272.jpg'],
    },
    s8: {
      gp1: ['static/panos/s8/box/gp11.jpg', 'static/panos/s8/box/gp12.jpg', 'static/panos/s8/box/gp14.jpg'],
      gp2: ['static/panos/s8/box/gp21.jpg', 'static/panos/s8/box/gp22.jpg', 'static/panos/s8/box/gp24.jpg'],
      gp3: ['static/panos/s8/box/gp31.jpg', 'static/panos/s8/box/gp32.jpg', 'static/panos/s8/box/gp34.jpg'],
      gp4: ['static/panos/s8/box/gp41.jpg', 'static/panos/s8/box/gp42.jpg', 'static/panos/s8/box/gp44.jpg'],
      gp5: ['static/panos/s8/box/gp51.jpg', 'static/panos/s8/box/gp52.jpg', 'static/panos/s8/box/gp54.jpg'],
      gp6: ['static/panos/s8/box/gp61.jpg', 'static/panos/s8/box/gp62.jpg', 'static/panos/s8/box/gp64.jpg'],
      gp7: ['static/panos/s8/box/gp71.jpg', 'static/panos/s8/box/gp72.jpg', 'static/panos/s8/box/gp74.jpg'],
      v21: ['static/panos/s8/box/v21.jpg', 'static/panos/s8/box/v22.jpg'],
      v22: ['static/panos/s8/box/v23.jpg'],
      v23: ['static/panos/s8/box/v24.jpg'],
      v24: ['static/panos/s8/box/v25.jpg'],
      v25: ['static/panos/s8/box/v26.jpg'],
      v26: ['static/panos/s8/box/v27.jpg'],
      v31: ['static/panos/s8/box/v31.jpg', 'static/panos/s8/box/v32.jpg'],
      v32: ['static/panos/s8/box/v33.jpg'],
      v33: ['static/panos/s8/box/v34.jpg', 'static/panos/s8/box/v35.jpg'],
      v41: ['static/panos/s8/box/v41.jpg', 'static/panos/s8/box/v42.jpg'],
      v42: ['static/panos/s8/box/v43.jpg'],
      v43: ['static/panos/s8/box/v44.jpg'],
      v44: ['static/panos/s8/box/v45.jpg'],
      v45: ['static/panos/s8/box/v46.jpg'],
      v46: ['static/panos/s8/box/v47.jpg'],
      v51: ['static/panos/s8/box/v51.jpg'],
      v52: ['static/panos/s8/box/v52.jpg'],
      v53: ['static/panos/s8/box/v53.jpg', 'static/panos/s8/box/v54.jpg'],
      v54: ['static/panos/s8/box/v55.jpg'],
      v61: ['static/panos/s8/box/v61.jpg'],
      v62: ['static/panos/s8/box/v62.jpg'],
      v63: ['static/panos/s8/box/v63.jpg'],
      v64: ['static/panos/s8/box/v64.jpg'],
      v65: ['static/panos/s8/box/v65.jpg'],
      v71: ['static/panos/s8/box/v71.jpg'],
      v72: ['static/panos/s8/box/v72.jpg', 'static/panos/s8/box/v73.jpg'],
      v73: ['static/panos/s8/box/v74.jpg'],
      v74: ['static/panos/s8/box/v75.jpg'],
      v75: ['static/panos/s8/box/v76.jpg'],
      v91: ['static/panos/s8/box/v91.jpg'],
      v92: ['static/panos/s8/box/v92.jpg'],
      v93: ['static/panos/s8/box/v93.jpg'],
      v94: ['static/panos/s8/box/v94.jpg'],
      v95: ['static/panos/s8/box/v95.jpg'],
      v101: ['static/panos/s8/box/v101.jpg'],
      v102: ['static/panos/s8/box/v102.jpg'],
      v103: ['static/panos/s8/box/v103.jpg'],
      v104: ['static/panos/s8/box/v104.jpg'],
      v105: ['static/panos/s8/box/v105.jpg']
    },
    s9: {
      a: ['static/panos/s9/box/a1.jpg', 'static/panos/s9/box/a2.jpg', 'static/panos/s9/box/a3.jpg'],
      ab: ['static/panos/s9/box/ab1.jpg', 'static/panos/s9/box/ab2.jpg', 'static/panos/s9/box/ab3.jpg'],
      b: [
        'static/panos/s9/box/b1.jpg', 'static/panos/s9/box/b2.jpg', 'static/panos/s9/box/b3.jpg', 'static/panos/s9/box/b4.jpg',
        'static/panos/s9/box/b5.jpg', 'static/panos/s9/box/b6.jpg', 'static/panos/s9/box/b7.jpg', 'static/panos/s9/box/b8.jpg'
      ],
      bb: [
        'static/panos/s9/box/bb1.jpg', 'static/panos/s9/box/bb2.jpg', 'static/panos/s9/box/bb3.jpg', 'static/panos/s9/box/bb4.jpg',
        'static/panos/s9/box/bb5.jpg', 'static/panos/s9/box/bb6.jpg'
      ],
      c: [
        'static/panos/s9/box/c1.jpg', 'static/panos/s9/box/c2.jpg', 'static/panos/s9/box/c3.jpg', 'static/panos/s9/box/c4.jpg',
        'static/panos/s9/box/c5.jpg'
      ],
      cb: ['static/panos/s9/box/cb1.jpg', 'static/panos/s9/box/cb2.jpg', 'static/panos/s9/box/cb3.jpg'],
      d: [
        'static/panos/s9/box/d1.jpg', 'static/panos/s9/box/d2.jpg', 'static/panos/s9/box/d3.jpg', 'static/panos/s9/box/d4.jpg',
        'static/panos/s9/box/d5.jpg'
      ],
      db: ['static/panos/s9/box/db1.jpg', 'static/panos/s9/box/db2.jpg', 'static/panos/s9/box/db3.jpg', 'static/panos/s9/box/db4.jpg'],
      e: ['static/panos/s9/box/e1.jpg', 'static/panos/s9/box/e2.jpg', 'static/panos/s9/box/e3.jpg'],
      eb: ['static/panos/s9/box/eb1.jpg', 'static/panos/s9/box/eb2.jpg', 'static/panos/s9/box/eb3.jpg'],
      f: [
        'static/panos/s9/box/f1.jpg', 'static/panos/s9/box/f2.jpg', 'static/panos/s9/box/f3.jpg', 'static/panos/s9/box/f4.jpg',
        'static/panos/s9/box/f5.jpg', 'static/panos/s9/box/f6.jpg', 'static/panos/s9/box/f7.jpg', 'static/panos/s9/box/f8.jpg'
      ],
      fb: [
        'static/panos/s9/box/fb1.jpg', 'static/panos/s9/box/fb2.jpg', 'static/panos/s9/box/fb3.jpg', 'static/panos/s9/box/fb4.jpg',
        'static/panos/s9/box/fb5.jpg', 'static/panos/s9/box/fb6.jpg'
      ],
      g: ['static/panos/s9/box/g1.jpg', 'static/panos/s9/box/g2.jpg', 'static/panos/s9/box/g3.jpg', 'static/panos/s9/box/g4.jpg'],
      gb: ['static/panos/s9/box/gb1.jpg', 'static/panos/s9/box/gb2.jpg'],
      h: [
        'static/panos/s9/box/h1.jpg', 'static/panos/s9/box/h2.jpg', 'static/panos/s9/box/h3.jpg', 'static/panos/s9/box/h4.jpg',
        'static/panos/s9/box/h5.jpg', 'static/panos/s9/box/h6.jpg', 'static/panos/s9/box/h7.jpg', 'static/panos/s9/box/h8.jpg',
        'static/panos/s9/box/h9.jpg', 'static/panos/s9/box/h10.jpg', 'static/panos/s9/box/h11.jpg'
      ],
      hb: [
        'static/panos/s9/box/hb1.jpg', 'static/panos/s9/box/hb2.jpg', 'static/panos/s9/box/hb3.jpg', 'static/panos/s9/box/hb4.jpg',
        'static/panos/s9/box/hb5.jpg'
      ],
      i: [
        'static/panos/s9/box/i1.jpg', 'static/panos/s9/box/i2.jpg', 'static/panos/s9/box/i3.jpg', 'static/panos/s9/box/i4.jpg',
        'static/panos/s9/box/i5.jpg', 'static/panos/s9/box/i6.jpg', 'static/panos/s9/box/i7.jpg', 'static/panos/s9/box/i8.jpg',
        'static/panos/s9/box/i9.jpg'
      ],
      ib: ['static/panos/s9/box/ib1.jpg', 'static/panos/s9/box/ib2.jpg', 'static/panos/s9/box/ib3.jpg', 'static/panos/s9/box/ib4.jpg'],
      j: [
        'static/panos/s9/box/j1.jpg', 'static/panos/s9/box/j2.jpg', 'static/panos/s9/box/j3.jpg', 'static/panos/s9/box/j4.jpg',
        'static/panos/s9/box/j5.jpg', 'static/panos/s9/box/j6.jpg', 'static/panos/s9/box/j7.jpg', 'static/panos/s9/box/j8.jpg',
        'static/panos/s9/box/j9.jpg', 'static/panos/s9/box/j10.jpg'
      ],
      jb: ['static/panos/s9/box/jb1.jpg', 'static/panos/s9/box/jb2.jpg', 'static/panos/s9/box/jb3.jpg', 'static/panos/s9/box/jb4.jpg'],
      k: [
        'static/panos/s9/box/k1.jpg', 'static/panos/s9/box/k2.jpg', 'static/panos/s9/box/k3.jpg', 'static/panos/s9/box/k4.jpg',
        'static/panos/s9/box/k5.jpg', 'static/panos/s9/box/k6.jpg', 'static/panos/s9/box/k7.jpg', 'static/panos/s9/box/k8.jpg'
      ],
      kb: [
        'static/panos/s9/box/kb1.jpg', 'static/panos/s9/box/kb2.jpg', 'static/panos/s9/box/kb3.jpg', 'static/panos/s9/box/kb4.jpg',
        'static/panos/s9/box/kb5.jpg'
      ],
      l: ['static/panos/s9/box/l1.jpg', 'static/panos/s9/box/l2.jpg', 'static/panos/s9/box/l3.jpg', 'static/panos/s9/box/l4.jpg'],
      lb: [
        'static/panos/s9/box/lb1.jpg', 'static/panos/s9/box/lb2.jpg', 'static/panos/s9/box/lb3.jpg', 'static/panos/s9/box/lb4.jpg',
        'static/panos/s9/box/lb5.jpg'
      ],
      m: [
        'static/panos/s9/box/m1.jpg', 'static/panos/s9/box/m2.jpg', 'static/panos/s9/box/m3.jpg', 'static/panos/s9/box/m4.jpg',
        'static/panos/s9/box/m5.jpg', 'static/panos/s9/box/m6.jpg', 'static/panos/s9/box/m7.jpg', 'static/panos/s9/box/m8.jpg'
      ],
      n: ['static/panos/s9/box/n1.jpg', 'static/panos/s9/box/n2.jpg', 'static/panos/s9/box/n3.jpg'],
      o: ['static/panos/s9/box/o1.jpg'],
      ob: ['static/panos/s9/box/ob1.jpg', 'static/panos/s9/box/ob2.jpg'],
      p: [
        'static/panos/s9/box/p1.jpg', 'static/panos/s9/box/p2.jpg', 'static/panos/s9/box/p3.jpg', 'static/panos/s9/box/p4.jpg',
        'static/panos/s9/box/p5.jpg'
      ],
      q: [
        'static/panos/s9/box/q1.jpg', 'static/panos/s9/box/q2.jpg', 'static/panos/s9/box/q3.jpg', 'static/panos/s9/box/q4.jpg',
        'static/panos/s9/box/q5.jpg'
      ],
      r: [
        'static/panos/s9/box/r1.jpg', 'static/panos/s9/box/r2.jpg', 'static/panos/s9/box/r3.jpg', 'static/panos/s9/box/r4.jpg',
        'static/panos/s9/box/r5.jpg', 'static/panos/s9/box/r6.jpg', 'static/panos/s9/box/r7.jpg', 'static/panos/s9/box/r8.jpg',
        'static/panos/s9/box/r9.jpg'
      ],
      rb: [
        'static/panos/s9/box/rb1.jpg', 'static/panos/s9/box/rb2.jpg', 'static/panos/s9/box/rb3.jpg', 'static/panos/s9/box/rb4.jpg',
        'static/panos/s9/box/rb5.jpg'
      ],
      s: [
        'static/panos/s9/box/s1.jpg', 'static/panos/s9/box/s2.jpg', 'static/panos/s9/box/s3.jpg', 'static/panos/s9/box/s4.jpg',
        'static/panos/s9/box/s5.jpg', 'static/panos/s9/box/s6.jpg', 'static/panos/s9/box/s7.jpg', 'static/panos/s9/box/s8.jpg',
        'static/panos/s9/box/s9.jpg', 'static/panos/s9/box/s10.jpg', 'static/panos/s9/box/s11.jpg'
      ],
      sb: [
        'static/panos/s9/box/sb1.jpg', 'static/panos/s9/box/sb2.jpg', 'static/panos/s9/box/sb3.jpg', 'static/panos/s9/box/sb4.jpg',
        'static/panos/s9/box/sb5.jpg', 'static/panos/s9/box/sb6.jpg'
      ],
      t: [
        'static/panos/s9/box/t1.jpg', 'static/panos/s9/box/t2.jpg', 'static/panos/s9/box/t3.jpg', 'static/panos/s9/box/t4.jpg',
        'static/panos/s9/box/t5.jpg', 'static/panos/s9/box/t6.jpg', 'static/panos/s9/box/t7.jpg', 'static/panos/s9/box/t8.jpg'
      ],
      tb: [
        'static/panos/s9/box/tb1.jpg', 'static/panos/s9/box/tb2.jpg', 'static/panos/s9/box/tb3.jpg', 'static/panos/s9/box/tb4.jpg',
        'static/panos/s9/box/tb5.jpg'
      ],
      u: [
        'static/panos/s9/box/u1.jpg', 'static/panos/s9/box/u2.jpg', 'static/panos/s9/box/u3.jpg', 'static/panos/s9/box/u4.jpg',
        'static/panos/s9/box/u5.jpg', 'static/panos/s9/box/u6.jpg', 'static/panos/s9/box/u7.jpg'
      ],
      ub: [
        'static/panos/s9/box/ub1.jpg', 'static/panos/s9/box/ub2.jpg', 'static/panos/s9/box/ub3.jpg', 'static/panos/s9/box/ub4.jpg',
        'static/panos/s9/box/ub5.jpg', 'static/panos/s9/box/ub6.jpg', 'static/panos/s9/box/ub7.jpg', 'static/panos/s9/box/ub8.jpg'
      ],
      v: [
        'static/panos/s9/box/v1.jpg', 'static/panos/s9/box/v2.jpg', 'static/panos/s9/box/v3.jpg', 'static/panos/s9/box/v4.jpg',
        'static/panos/s9/box/v5.jpg', 'static/panos/s9/box/v6.jpg', 'static/panos/s9/box/v7.jpg'
      ],
      vb: [
        'static/panos/s9/box/vb1.jpg', 'static/panos/s9/box/vb2.jpg', 'static/panos/s9/box/vb3.jpg', 'static/panos/s9/box/vb4.jpg',
        'static/panos/s9/box/vb5.jpg', 'static/panos/s9/box/vb6.jpg'
      ],
      w: [
        'static/panos/s9/box/w1.jpg', 'static/panos/s9/box/w2.jpg', 'static/panos/s9/box/w3.jpg', 'static/panos/s9/box/w4.jpg',
        'static/panos/s9/box/w5.jpg', 'static/panos/s9/box/w6.jpg', 'static/panos/s9/box/w7.jpg'
      ],
      x: [],
      xb: [
        'static/panos/s9/box/xb1.jpg', 'static/panos/s9/box/xb2.jpg', 'static/panos/s9/box/xb3.jpg', 'static/panos/s9/box/xb4.jpg',
        'static/panos/s9/box/xb5.jpg', 'static/panos/s9/box/xb6.jpg', 'static/panos/s9/box/xb7.jpg', 'static/panos/s9/box/xb8.jpg',
        'static/panos/s9/box/xb9.jpg', 'static/panos/s9/box/xb10.jpg'
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
  DUIDES: {
    s7: [
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
    ]
  }
}
