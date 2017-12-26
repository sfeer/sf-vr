/**
 * VR全景初始化数据，后期TODO是后台数据库数据
 */
export default {
  // 开关站初始化数据
  STATIONS: {
    s1: {id: 's1', name: '10kV花园总部开关站', fd_id: '7acbe2c8fb9640319e1a924a45aaf0fa', index: 'scene_entrance'},
    s2: {id: 's2', name: '10kV中通开关站', fd_id: 'b1bf18d79476445987e04ccf903986a2', index: 'scene_entrance'},
    s3: {id: 's3', name: '10kV桐城府壹号开关站', fd_id: '045253c418fe41f78fd0dc9bb37ec6a0', index: 'scene_entrance'},
    s4: {id: 's4', name: '临时名称变电站', index: 'scene_b2_top'},
    s5: {id: 's5', name: '10kV#1、2电容室', index: 'scene_gp1'},
    s6: {id: 's6', name: '10kV#3、4电容室', index: 'scene_gp1'},
    s7: {id: 's7', name: '10kV开关室', index: 'scene_c2'},
    s8: {id: 's8', name: '110kvGIS室', index: 'scene_topview'}
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
      ru1: ['static/panos/s7/box/ru11.jpg', 'static/panos/s7/box/ru12.jpg', 'static/panos/s7/box/ru13.jpg'],
      rm1: ['static/panos/s7/box/rm11.jpg', 'static/panos/s7/box/rm12.jpg', 'static/panos/s7/box/rm13.jpg'],
      ru2: ['static/panos/s7/box/ru21.jpg', 'static/panos/s7/box/ru22.jpg', 'static/panos/s7/box/ru23.jpg'],
      rm2: ['static/panos/s7/box/rm21.jpg', 'static/panos/s7/box/rm22.jpg', 'static/panos/s7/box/rm23.jpg'],
      lu2: ['static/panos/s7/box/lu21.jpg', 'static/panos/s7/box/lu22.jpg'],
      lm2: ['static/panos/s7/box/lm21.jpg', 'static/panos/s7/box/lm22.jpg', 'static/panos/s7/box/lm23.jpg'],
      ld2: ['static/panos/s7/box/ld2.jpg'],
      ru3: ['static/panos/s7/box/ru31.jpg', 'static/panos/s7/box/ru32.jpg', 'static/panos/s7/box/ru33.jpg'],
      rm3: ['static/panos/s7/box/rm31.jpg', 'static/panos/s7/box/rm32.jpg', 'static/panos/s7/box/rm33.jpg'],
      lu3: ['static/panos/s7/box/lu31.jpg', 'static/panos/s7/box/lu32.jpg', 'static/panos/s7/box/lu33.jpg'],
      lm3: ['static/panos/s7/box/lm31.jpg', 'static/panos/s7/box/lm32.jpg', 'static/panos/s7/box/lm33.jpg'],

      ru4: ['static/panos/s7/box/ru41.jpg', 'static/panos/s7/box/ru42.jpg'],
      rm4: ['static/panos/s7/box/rm41.jpg', 'static/panos/s7/box/rm42.jpg', 'static/panos/s7/box/rm43.jpg'],
      ru5: ['static/panos/s7/box/ru51.jpg', 'static/panos/s7/box/ru52.jpg'],
      rm5: ['static/panos/s7/box/rm51.jpg', 'static/panos/s7/box/rm52.jpg', 'static/panos/s7/box/rm53.jpg'],
      ru6: ['static/panos/s7/box/ru61.jpg', 'static/panos/s7/box/ru62.jpg'],
      rm6: ['static/panos/s7/box/rm61.jpg', 'static/panos/s7/box/rm62.jpg', 'static/panos/s7/box/rm63.jpg'],
      lu4: ['static/panos/s7/box/lu41.jpg', 'static/panos/s7/box/lu42.jpg'],
      lm4: ['static/panos/s7/box/lm41.jpg', 'static/panos/s7/box/lm42.jpg', 'static/panos/s7/box/lm43.jpg'],
      lu5: ['static/panos/s7/box/lu51.jpg', 'static/panos/s7/box/lu52.jpg', 'static/panos/s7/box/lu53.jpg'],
      lm5: ['static/panos/s7/box/lm51.jpg', 'static/panos/s7/box/lm52.jpg', 'static/panos/s7/box/lm53.jpg'],
      ld5: ['static/panos/s7/box/ld51.jpg', 'static/panos/s7/box/ld52.jpg'],
      lu6: ['static/panos/s7/box/lu61.jpg', 'static/panos/s7/box/lu62.jpg', 'static/panos/s7/box/lu63.jpg'],
      lm6: ['static/panos/s7/box/lm61.jpg', 'static/panos/s7/box/lm62.jpg', 'static/panos/s7/box/lm63.jpg'],

      ru7: ['static/panos/s7/box/ru71.jpg', 'static/panos/s7/box/ru72.jpg'],
      rm7: ['static/panos/s7/box/rm71.jpg', 'static/panos/s7/box/rm72.jpg', 'static/panos/s7/box/rm73.jpg'],
      ru8: ['static/panos/s7/box/ru81.jpg', 'static/panos/s7/box/ru82.jpg'],
      rm8: ['static/panos/s7/box/rm81.jpg', 'static/panos/s7/box/rm82.jpg', 'static/panos/s7/box/rm83.jpg'],
      ru9: ['static/panos/s7/box/ru91.jpg', 'static/panos/s7/box/ru92.jpg'],
      rm9: ['static/panos/s7/box/rm91.jpg', 'static/panos/s7/box/rm92.jpg', 'static/panos/s7/box/rm93.jpg'],
      lu7: ['static/panos/s7/box/lu71.jpg', 'static/panos/s7/box/lu72.jpg', 'static/panos/s7/box/lu73.jpg'],
      lm7: ['static/panos/s7/box/lm71.jpg', 'static/panos/s7/box/lm72.jpg', 'static/panos/s7/box/lm73.jpg'],
      lu8: ['static/panos/s7/box/lu81.jpg', 'static/panos/s7/box/lu82.jpg'],
      lm8: ['static/panos/s7/box/lm81.jpg', 'static/panos/s7/box/lm82.jpg', 'static/panos/s7/box/lm83.jpg'],
      lu9: ['static/panos/s7/box/lu91.jpg', 'static/panos/s7/box/lu92.jpg', 'static/panos/s7/box/lu93.jpg'],
      lm9: ['static/panos/s7/box/lm91.jpg', 'static/panos/s7/box/lm92.jpg', 'static/panos/s7/box/lm93.jpg'],

      ru10: ['static/panos/s7/box/ru101.jpg', 'static/panos/s7/box/ru102.jpg'],
      rm10: ['static/panos/s7/box/rm101.jpg', 'static/panos/s7/box/rm102.jpg', 'static/panos/s7/box/rm103.jpg'],
      ru11: ['static/panos/s7/box/ru111.jpg', 'static/panos/s7/box/ru112.jpg'],
      rm11: ['static/panos/s7/box/rm111.jpg', 'static/panos/s7/box/rm112.jpg', 'static/panos/s7/box/rm113.jpg'],
      ru12: ['static/panos/s7/box/ru121.jpg', 'static/panos/s7/box/ru122.jpg'],
      rm12: ['static/panos/s7/box/rm121.jpg', 'static/panos/s7/box/rm122.jpg', 'static/panos/s7/box/rm123.jpg'],
      lu10: ['static/panos/s7/box/lu101.jpg', 'static/panos/s7/box/lu102.jpg'],
      lm10: ['static/panos/s7/box/lm101.jpg', 'static/panos/s7/box/lm102.jpg', 'static/panos/s7/box/lm103.jpg'],
      lu11: ['static/panos/s7/box/lu111.jpg', 'static/panos/s7/box/lu112.jpg'],
      lm11: ['static/panos/s7/box/lm111.jpg', 'static/panos/s7/box/lm112.jpg', 'static/panos/s7/box/lm113.jpg'],
      lu12: ['static/panos/s7/box/lu121.jpg', 'static/panos/s7/box/lu122.jpg'],
      lm12: ['static/panos/s7/box/lm121.jpg', 'static/panos/s7/box/lm122.jpg', 'static/panos/s7/box/lm123.jpg'],

      ru13: ['static/panos/s7/box/ru131.jpg', 'static/panos/s7/box/ru132.jpg'],
      rm13: ['static/panos/s7/box/rm131.jpg', 'static/panos/s7/box/rm132.jpg', 'static/panos/s7/box/rm133.jpg'],
      ru14: ['static/panos/s7/box/ru141.jpg', 'static/panos/s7/box/ru142.jpg'],
      rm14: ['static/panos/s7/box/rm141.jpg', 'static/panos/s7/box/rm142.jpg', 'static/panos/s7/box/rm143.jpg'],
      lu13: ['static/panos/s7/box/lu131.jpg', 'static/panos/s7/box/lu132.jpg'],
      lm13: ['static/panos/s7/box/lm131.jpg', 'static/panos/s7/box/lm132.jpg', 'static/panos/s7/box/lm133.jpg'],
      lu14: ['static/panos/s7/box/lu141.jpg', 'static/panos/s7/box/lu142.jpg', 'static/panos/s7/box/lu143.jpg'],
      lm14: ['static/panos/s7/box/lm141.jpg', 'static/panos/s7/box/lm142.jpg', 'static/panos/s7/box/lm143.jpg'],
      lu15: ['static/panos/s7/box/lu151.jpg', 'static/panos/s7/box/lu152.jpg', 'static/panos/s7/box/lu153.jpg'],
      lm15: ['static/panos/s7/box/lm151.jpg', 'static/panos/s7/box/lm152.jpg', 'static/panos/s7/box/lm153.jpg'],

      lu16: ['static/panos/s7/box/lu161.jpg', 'static/panos/s7/box/lu162.jpg', 'static/panos/s7/box/lu163.jpg'],
      lm16: ['static/panos/s7/box/lm161.jpg', 'static/panos/s7/box/lm162.jpg', 'static/panos/s7/box/lm163.jpg'],
      lu17: ['static/panos/s7/box/lu171.jpg', 'static/panos/s7/box/lu172.jpg'],
      lm17: ['static/panos/s7/box/lm171.jpg', 'static/panos/s7/box/lm172.jpg', 'static/panos/s7/box/lm173.jpg'],
      lu18: ['static/panos/s7/box/lu181.jpg', 'static/panos/s7/box/lu182.jpg', 'static/panos/s7/box/lu183.jpg'],
      lm18: ['static/panos/s7/box/lm181.jpg', 'static/panos/s7/box/lm182.jpg', 'static/panos/s7/box/lm183.jpg'],

      lu19: ['static/panos/s7/box/lu191.jpg', 'static/panos/s7/box/lu192.jpg', 'static/panos/s7/box/lu193.jpg'],
      lm19: ['static/panos/s7/box/lm191.jpg', 'static/panos/s7/box/lm192.jpg', 'static/panos/s7/box/lm193.jpg'],
      lu20: ['static/panos/s7/box/lu201.jpg', 'static/panos/s7/box/lu202.jpg'],
      lm20: ['static/panos/s7/box/lm201.jpg', 'static/panos/s7/box/lm202.jpg', 'static/panos/s7/box/lm203.jpg'],
      lu21: ['static/panos/s7/box/lu211.jpg', 'static/panos/s7/box/lu212.jpg'],
      lm21: ['static/panos/s7/box/lm211.jpg', 'static/panos/s7/box/lm212.jpg', 'static/panos/s7/box/lm213.jpg'],

      lu22: ['static/panos/s7/box/lu221.jpg', 'static/panos/s7/box/lu222.jpg'],
      lm22: ['static/panos/s7/box/lm221.jpg', 'static/panos/s7/box/lm222.jpg', 'static/panos/s7/box/lm223.jpg'],
      lu23: ['static/panos/s7/box/lu231.jpg', 'static/panos/s7/box/lu232.jpg'],
      lm23: ['static/panos/s7/box/lm231.jpg', 'static/panos/s7/box/lm232.jpg', 'static/panos/s7/box/lm233.jpg'],
      lu24: ['static/panos/s7/box/lu241.jpg', 'static/panos/s7/box/lu242.jpg'],
      lm24: ['static/panos/s7/box/lm241.jpg', 'static/panos/s7/box/lm242.jpg', 'static/panos/s7/box/lm243.jpg'],

      lu25: ['static/panos/s7/box/lu251.jpg', 'static/panos/s7/box/lu252.jpg'],
      lm25: ['static/panos/s7/box/lm251.jpg', 'static/panos/s7/box/lm252.jpg', 'static/panos/s7/box/lm253.jpg'],
      lu26: ['static/panos/s7/box/lu251.jpg', 'static/panos/s7/box/lu262.jpg'],
      lm26: ['static/panos/s7/box/lm261.jpg', 'static/panos/s7/box/lm262.jpg', 'static/panos/s7/box/lm263.jpg'],
      lu27: ['static/panos/s7/box/lu261.jpg', 'static/panos/s7/box/lu272.jpg'],
      lm27: ['static/panos/s7/box/lm271.jpg', 'static/panos/s7/box/lm272.jpg', 'static/panos/s7/box/lm273.jpg'],

      r28: [
        'static/panos/s7/box/r281.jpg', 'static/panos/s7/box/r282.jpg', 'static/panos/s7/box/r283.jpg',
        'static/panos/s7/box/r284.jpg', 'static/panos/s7/box/r285.jpg', 'static/panos/s7/box/r286.jpg',
        'static/panos/s7/box/r287.jpg', 'static/panos/s7/box/r288.jpg', 'static/panos/s7/box/r289.jpg',
        'static/panos/s7/box/r28a.jpg', 'static/panos/s7/box/r28b.jpg'
      ],
      l28: [
        'static/panos/s7/box/l281.jpg', 'static/panos/s7/box/l282.jpg', 'static/panos/s7/box/l283.jpg',
        'static/panos/s7/box/l284.jpg', 'static/panos/s7/box/l285.jpg', 'static/panos/s7/box/l286.jpg',
        'static/panos/s7/box/l287.jpg', 'static/panos/s7/box/l288.jpg', 'static/panos/s7/box/l289.jpg',
        'static/panos/s7/box/l28a.jpg', 'static/panos/s7/box/l28b.jpg'
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
  }
}
