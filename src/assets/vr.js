/**
 * VR全景初始化数据，后期TODO是后台数据库数据
 */
export default {
  // 开关站初始化数据
  STATIONS: {
    s1: {id: 's1', name: '10kV花园总部开关站', fd_id: '7acbe2c8fb9640319e1a924a45aaf0fa', index: 'scene_entrance'},
    s2: {id: 's2', name: '10kV中通开关站', fd_id: 'b1bf18d79476445987e04ccf903986a2', index: 'scene_entrance'},
    s3: {id: 's3', name: '10kV桐城府壹号开关站', fd_id: '045253c418fe41f78fd0dc9bb37ec6a0', index: 'scene_entrance'},
    s4: {id: 's4', name: '临时名称变电站', index: 'scene_west1'},
    s5: {id: 's5', name: '10kV#1、2电容室', index: 'scene_gp1'},
    s6: {id: 's6', name: '10kV#3、4电容室', index: 'scene_gp1'},
    s8: {id: 's8', name: '110kvGIS室', index: 'scene_topview'}
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
