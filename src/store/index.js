import { createStore } from 'vuex'

export default createStore({
    state: {
        // logo
        logoPath: '/images/common/logo.png',
        // 底部
        footer: {
            tel: '400 612 8858',
            wxAccount: '/images/footer/5b10c205a66e8.jpg',
            txtArr: [
                '一家专业的地产开发运营公司地产开发',
                '商业运营、资本投资、物业管理'
            ],
            info: {
                copyright: '© 2018 环汇控股版权所有',
                record: '翼ICP备050108505',
                pby: '宗阖网络',
            },
            link: [
                {
                    title: '环汇控股官方网站',
                    path: '',
                },
                {
                    title: '环汇·乐汇城官方网站',
                    path: '',
                },
            ],
        },
        // 公司简介
        inTrData: {
            leftImg: '/images/ind-intr/ind-intr-bg.jpg',
            rightImg: '/images/ind-intr/5b0fa8b069a6e.jpg',
            primaryTitle: 'huanhui',
            secondaryTitle: 'holdings group',
            title: '环汇控股集团',
            txtArr: [
                '环汇国际控股（集团）有限公司是一家专业的地产开发运营公司，总部位于上海环球金融中心71楼。 事业体涉及房地产开发、商业运营、科创产业、投资金融四大领域。',
                '环汇控股旗下拥有环汇房地产开发有限公司、河北省浙商房地产开发有限公司、河北环汇发国际商贸城有限公司、环汇商业管理有限公司、河北蜂聚商业管理有限公司、蜂聚投资管理股份有限公司、河北蜂集网络科技有限公司、石家庄市环汇发物业服务有限公司、上海润源投资有限公司等子公司。',
                '环汇控股公司拥有完整的住宅和商业开发、及运营的产业链，并长期致力于专业化、精细化的企业管理，华北总部位于石家庄。目前在上海、河北和山东等地设有多家分公司。',
                '环汇国际控股集团积极促进行业发展，得到业内人士的一致认可、赞誉。环汇国际控股集团在中国购物中心产业资讯中心、中购联购物中心发展委员会担任常务理事、全国工商联房地产商会担任常务理事、中国商业地产联合会担任副会长。同时环汇国际控股集团也担任着中国纺织品商业协会、中国纺织工业联合会流通分会、河北省服装行业协会、石家庄市工商业企业联合会、石家庄市房地产业协会、石家庄市房地产业协会等多家全国及省市行业协会的常务理事职务。'
            ],
            numberArr: {
                estYears: 2000,
                employeeSum: 600,
                totalAssets: 65,
            }
        },
        // 环汇出品
        industrialData: {
            title: {
                zht: '环汇出品',
                ent: 'huanhui produce',
            },
            banner: {
                zht: '筑城市之美',
                ent: 'build the beauty of the city',
                imgPath: '/images/header/c-1.jpg',
            },
            tabBar: [
                {
                    classification: '地产开发',
                    txt: '作为企业基础发展版块，新源集团自2000年投身地产行业，立足地产开发及物业管理，以上海、石家庄为中心，辐射长三角及京津冀，开展多项目开发运营。',
                    imgPath: '/images/industrial/5b0e79935268e.jpg',
                    proArr: [
                        {
                            title: {
                                zht: '环汇蜂巢',
                                ent: 'honey mart',
                            },
                            txt: '新源蜂巢分为裙楼商业、写字楼、精装酒店式公寓、空中秀场等四大板块。是集购物、餐饮、休闲、娱乐、文化、观光、社交、聚会、办公、居住等功能于一体的创新型主题商业体验城，是石家庄又一地标性建筑！',
                            imgPath: '/images/industrial/ind-switch5.jpg',
                        },
                        {
                            title: {
                                zht: '环汇燕府',
                                ent: 'honey mart',
                            },
                            txt: '新源燕府以半围合之势布局，极致礼呈超大栋间距与180°优越观景视角，构建疏密有致、典雅通透的公园式社区。城市顶级会所、幼儿园、商业街等多种高端配置，成就出入有度、雍容自在的大者人生。',
                            imgPath: '/images/industrial/ind-switch6.jpg',
                        },
                        {
                            title: {
                                zht: '环汇·乐汇城',
                                ent: 'honey mart',
                            },
                            txt: '环汇•乐汇城——河北省首家体验型购物中心是由新源国际控股集团倾力打造的傲视河北石家庄的“国际型体验中心”，是河北省5.18经贸洽谈会正式签约的省市重点项目，石家庄市 “20＋X”商贸服务业重点项目。',
                            imgPath: '/images/industrial/ind-switch1.jpg',
                        },
                        {
                            title: {
                                zht: '环汇商贸城',
                                ent: 'honey mart',
                            },
                            txt: '环汇发商贸城是华北最大的针织品专业市场，总占地24140平方米，总建筑面积120000平方米，分两期实施开发建设，经营七大类上千个花色品种的针织类产品和十几大类上万种饰品类产品，现有商铺1000余家，影响范围辐射全国及东欧、非洲、中亚等20多个国家与地区。',
                            imgPath: '/images/industrial/ind-switch2.jpg',
                        },
                        {
                            title: {
                                zht: '环汇生态城',
                                ent: 'honey mart',
                            },
                            txt: '环汇·生态城——生态住宅小区领衔主演。 新源·生态城项目地处烟台市福山区，是福山区政府未来重点打造的“南部水上新城”中的核心居住板块 ，占地面积约2550亩，地上总建筑面约260万平方米左右。总体量在目前烟台六区项目中排名前三，是南烟台板块第一大盘。',
                            imgPath: '/images/industrial/ind-switch3.jpg',
                        },
                    ],
                },
                {
                    classification: '商业运营',
                    txt: '致力于专业市场、购物中心等商业模式的深耕细作，运营多个城市地标性卖场，具有超过十年的商业运营经验，如今与日本商业公司和韩国商业公司紧密合作，将亚洲最前沿的商业理念与元素引入到新源的商业项目中，保持商业引领时尚的定位，并最大限度提升商业的体验度和参与度，打造我国实体商业的全新运营模式。',
                    imgPath: '/images/industrial/5b0fbc3028cd5.jpg',
                    proArr: [
                        {
                            title: {
                                zht: '环汇蜂巢',
                                ent: 'honey mart',
                            },
                            txt: '新源蜂巢分为裙楼商业、写字楼、精装酒店式公寓、空中秀场等四大板块。是集购物、餐饮、休闲、娱乐、文化、观光、社交、聚会、办公、居住等功能于一体的创新型主题商业体验城，是石家庄又一地标性建筑！',
                            imgPath: '/images/industrial/ind-switch5.jpg',
                        },
                        {
                            title: {
                                zht: '环汇燕府',
                                ent: 'honey mart',
                            },
                            txt: '新源燕府以半围合之势布局，极致礼呈超大栋间距与180°优越观景视角，构建疏密有致、典雅通透的公园式社区。城市顶级会所、幼儿园、商业街等多种高端配置，成就出入有度、雍容自在的大者人生。',
                            imgPath: '/images/industrial/ind-switch6.jpg',
                        },
                        {
                            title: {
                                zht: '环汇·乐汇城',
                                ent: 'honey mart',
                            },
                            txt: '环汇•乐汇城——河北省首家体验型购物中心是由新源国际控股集团倾力打造的傲视河北石家庄的“国际型体验中心”，是河北省5.18经贸洽谈会正式签约的省市重点项目，石家庄市 “20＋X”商贸服务业重点项目。',
                            imgPath: '/images/industrial/ind-switch1.jpg',
                        },
                        {
                            title: {
                                zht: '环汇商贸城',
                                ent: 'honey mart',
                            },
                            txt: '环汇发商贸城是华北最大的针织品专业市场，总占地24140平方米，总建筑面积120000平方米，分两期实施开发建设，经营七大类上千个花色品种的针织类产品和十几大类上万种饰品类产品，现有商铺1000余家，影响范围辐射全国及东欧、非洲、中亚等20多个国家与地区。',
                            imgPath: '/images/industrial/ind-switch2.jpg',
                        },
                    ],
                },
                {
                    classification: '科创产业',
                    txt: '主要以早期VC和项目孵化为主。率先成立了蜂巢孵化器；蜂巢孵化器已完成长三角、京津冀、珠三角的发展布局，获得国家级众创空间、浙江省级、河北省级、上海市级、石家庄市级等众创空间的认定。在行业内成为领军企业。',
                    imgPath: '/images/industrial/5b0fbc4c8fcc8.jpg',
                    proArr: [
                        {
                            title: {
                                zht: '环汇蜂巢',
                                ent: 'honey mart',
                            },
                            txt: '新源蜂巢分为裙楼商业、写字楼、精装酒店式公寓、空中秀场等四大板块。是集购物、餐饮、休闲、娱乐、文化、观光、社交、聚会、办公、居住等功能于一体的创新型主题商业体验城，是石家庄又一地标性建筑！',
                            imgPath: '/images/industrial/ind-switch5.jpg',
                        },
                        {
                            title: {
                                zht: '环汇燕府',
                                ent: 'honey mart',
                            },
                            txt: '新源燕府以半围合之势布局，极致礼呈超大栋间距与180°优越观景视角，构建疏密有致、典雅通透的公园式社区。城市顶级会所、幼儿园、商业街等多种高端配置，成就出入有度、雍容自在的大者人生。',
                            imgPath: '/images/industrial/ind-switch6.jpg',
                        },
                    ],
                },
                {
                    classification: '投资金融',
                    txt: '以资本市场为主，兼顾战略性股权投资。涉及市场资管计划，包括领域金融，军民融合，信息服务及医药医疗及中医产业布局；战略性产业的股权投资，包括医药医疗健康生命科学、环保、新能源、新材料、大数据、高端制造，实现多功能资本化服务。',
                    imgPath: '/images/industrial/5b0fbbf8a6afe.jpg',
                    proArr: [
                        {
                            title: {
                                zht: '环汇蜂巢',
                                ent: 'honey mart',
                            },
                            txt: '新源蜂巢分为裙楼商业、写字楼、精装酒店式公寓、空中秀场等四大板块。是集购物、餐饮、休闲、娱乐、文化、观光、社交、聚会、办公、居住等功能于一体的创新型主题商业体验城，是石家庄又一地标性建筑！',
                            imgPath: '/images/industrial/ind-switch5.jpg',
                        },
                    ],
                },
            ],
        },
        // 新闻
        newData: [

        ]
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    }
})

