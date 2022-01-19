// import { $ } from '$ui/gojs'
import get from 'lodash/get'
import {go, merge} from '$ui/gojs/utils/lib';
import creator from '$ui/gojs/utils/creator'
import {nodeTemplate, imageGraph} from '$ui/gojs/template/nodes'
import {defaultTooltip} from '$ui/gojs/template/common'

const MoreBtnSvgDown = 'M992.01127 416.3c-7.4 0-14.9 2.6-20.9 7.8l-417 360.8c-24 21-60.3 21-84.3 0l-0.1-0.1L52.91127 424.1c-13.4-11.6-33.6-10.1-45.1 3.3-11.6 13.4-10.1 33.6 3.3 45.1l416.7 360.6c23.3 20.4 53.2 31.6 84.2 31.6s60.9-11.2 84.2-31.6l416.7-360.6c13.4-11.6 14.8-31.8 3.3-45.1-6.3-7.4-15.2-11.1-24.2-11.1zM992.01127 159.3c-7.4 0-14.9 2.6-20.9 7.8l-417 360.8c-24 21-60.3 21-84.3 0l-0.1-0.1L52.91127 167.1c-13.4-11.6-33.6-10.1-45.1 3.3-11.6 13.4-10.1 33.6 3.3 45.1l416.7 360.6c23.3 20.4 53.2 31.6 84.2 31.6s60.9-11.2 84.2-31.6l416.7-360.6c13.4-11.6 14.8-31.8 3.3-45.1-6.3-7.4-15.2-11.1-24.2-11.1z'

const MoreBtnSvgUp = 'M992.01127 607.7c-7.4 0-14.9-2.6-20.9-7.8l-417-360.8c-24-21-60.3-21-84.3 0l-0.1 0.1L52.91127 599.9c-13.4 11.6-33.6 10.1-45.1-3.3-11.6-13.4-10.1-33.6 3.3-45.1l416.7-360.6c23.3-20.4 53.2-31.6 84.2-31.6s60.9 11.2 84.2 31.6l416.7 360.6c13.4 11.6 14.8 31.8 3.3 45.1-6.3 7.4-15.2 11.1-24.2 11.1zM992.01127 864.7c-7.4 0-14.9-2.6-20.9-7.8l-417-360.8c-24-21-60.3-21-84.3 0l-0.1 0.1L52.91127 856.9c-13.4 11.6-33.6 10.1-45.1-3.3-11.6-13.4-10.1-33.6 3.3-45.1l416.7-360.6c23.3-20.4 53.2-31.6 84.2-31.6s60.9 11.2 84.2 31.6l416.7 360.6c13.4 11.6 14.8 31.8 3.3 45.1-6.3 7.4-15.2 11.1-24.2 11.1z'



const defaultPanelProps = {
  isShadowed: true,
  shadowOffset: new go.Point(4, 4),
  shadowBlur: 8,
  width: 250
}

// 头部生成
const headerPanelInit = function(headerProps) { 
  const headerFill = headerProps.fill || '#E8E8E8'
  const headerFont = headerProps.font || 'bold 12pt sans-serif'
  const headerFontStroke = headerProps.color || 'black'
  const textKey = headerProps.textKey
  const headerTools = headerProps.tools
  return creator({
    name: go.Panel,
    props: {
      type: go.Panel.Auto,
      row: 0, 
      column: 0, 
      stretch: go.GraphObject.Horizontal 
    },
    children: [
      creator({
        name: go.Shape,
        props: {
          fill: headerFill, // '#E8E8E8', 
          strokeWidth: 0, 
          shadowVisible: false
        },
        children: []
      }),
      creator({
        name: go.Panel,
        props: {
          type: go.Panel.Table,
          row: 0, 
          columnSpan: 1,
          stretch: go.GraphObject.Horizontal 
          // alignment: go.Spot.Left 
          // margin: 5
        },
        children: [ 
          creator({
            name: go.TextBlock,
            props: {
              row: 0, 
              column: 0,
              font: headerFont, // 'bold 12pt sans-serif',
              alignment: go.Spot.TopLeft,
              margin: 5,
              stroke: headerFontStroke,
              isMultiline: false,
              editable: false,
              $bindings: [
                new go.Binding('text', '', (v) => {
                  const val = get(v, textKey) 
                  return val || ''
                })
              ]
            } 
          }),
          headerTools && headerTools.length ? creator({
            name: go.Panel,
            props: {
              type: go.Panel.Horizontal,
              row: 0, 
              column: 1,
              alignment: go.Spot.Right  
            },
            children: [
              ...headerTools.map((item) => { 
                return creator({
                  name: 'Button',
                  props: { 
                    margin: 3, 
                    'ButtonBorder.fill': 'transparent',
                    'ButtonBorder.stroke': 'transparent',
                    'ButtonBorder.strokeWidth': 0,
                    _buttonFillOver: 'transparent',
                    _buttonStrokeOver: 'transparent',
                    _buttonFillPressed: 'transparent', 
                    toolTip: defaultTooltip({text: item.name}),
                    $events: {
                      click: item.cb 
                    }
                  },
                  children: [  
                    creator({
                      name: go.Shape,
                      props: {
                        fill: item.color,
                        strokeWidth: 0,
                        width: 18,
                        height: 18,
                        geometry: go.Geometry.parse(item.icon, true)
                      }
                    })
                  ]
                })
              })
            ]
          }) : null
        ]
      }) 
    ]
  })
} 

// 图片生成
export const imageGraphInit = function(imgProps) {
  if (typeof imgProps === 'function') {
    imgProps()
  } else {
    const sourceKey = imgProps.sourceKey
    const stroke = imgProps.stroke 
    delete imgProps.sourceKey
    delete imgProps.stroke
    return imageGraph({
      image: { 
        width: 80,
        $bindings: [
          new go.Binding('source', '', (v) => { 
            const val = get(v, sourceKey)
            return val
          })
        ], 
        ...imgProps
      },
      shape: {
        figure: 'Rectangle',
        strokeWidth: 1,
        stroke: stroke || '#B6B7B9'
      }
    })
  }
}

// 标题生成
const titleBlockInit = function(titleProps) {
  if (typeof titleProps === 'function') {
    return titleProps()
  } else {
    return creator({
      name: go.Panel,
      props: {
        type: go.Panel.Horizontal,
        defaultAlignment: go.Spot.Bottom
      },
      children: [
        titleProps.titleKey ? creator({
          name: go.TextBlock,
          props: {
            font: 'bold 16pt sans-serif',
            isMultiline: false, 
            $bindings: [
              new go.Binding('text', '', (v) => { 
                const val = get(v, titleProps.titleKey)
                return val
              })
            ],
            ...titleProps.titleProps || {} 
          } 
        }) : null, 
        titleProps.subTitleKey ? creator({
          name: go.TextBlock,
          props: {
            font: 'normal 12pt sans-serif',
            isMultiline: false,
            editable: false,
            margin: new go.Margin(0, 0, 2, 10),
            $bindings: [
              new go.Binding('text', '', (v) => { 
                const val = get(v, titleProps.subTitleKey)
                return val
              })
            ],
            ...titleProps.subTitleProps || {} 
          } 
        }) : null
      ]
    }) 
  }
  
}

// 内容生成
export const detailInit = function(infoProps) {
  const {detail} = infoProps
  const infoWidth = infoProps.width 
  if (typeof detail === 'function') {
    return detail()
  } else { 
    const dataKey = detail.dataKey
    const column = detail.column
    const strokeColor = detail.color 
    const contentTemplate = detail.contentTemplate
    return creator({
      name: go.Panel,
      props: {
        name: 'detail',
        type: go.Panel.Table, 
        width: infoWidth,
        $bindings: [
          new go.Binding('itemArray', '', (v) => { 
            const data = get(v, dataKey)
            // =============下面代码为建立数据的表格格式================
            const temp = JSON.parse(JSON.stringify(data)).reduce((total, item) => {
              if (item.isRow) {
                total.row.push(item)
              } else {
                total.normal.push(item)
              }
              return total
            }, {normal: [], row: []})

            let currentRow = 0
            temp.normal.forEach((item, i) => {
              currentRow = item._row = Math.floor(i / column)
              item._col = i % column
            })
            temp.row.forEach((item, i) => {
              item._row = currentRow + i + 1
              item._col = 0
              item._span = column
            })  
            const _data = temp.normal.concat(temp.row)
            // =========================================================
            return _data
          })
        ], 
        itemTemplate: creator({
          name: go.Panel,
          props: {
            type: go.Panel.Auto, 
            margin: 2,
            alignment: go.Spot.Left,
            stretch: go.GraphObject.Fill,
            $bindings: [
              new go.Binding('row', 'data', (i, obj) => {
                return i._row
              }).ofObject(),
              new go.Binding('column', 'data', (i) => { 
                // return 0 // i % 2
                return i._col
              }).ofObject(),
              new go.Binding('columnSpan', 'data', (i) => { 
                return i._span || 1
              }).ofObject() 
            ] 
          },
          children: contentTemplate && typeof contentTemplate === 'function' ? contentTemplate() : [
            creator({
              name: go.TextBlock,
              props: {
                font: '14px sans-serif', 
                stroke: strokeColor, 
                // background: 'green',
                $bindings: [ 
                  new go.Binding('text', '', function(i) {  
                    return i.label ? `${i.label}：${i.value}` : i.value
                  })
                ] 
              }
            })
          ]
        })
      }
    })
  }  
}
// ================================


// 内容生成
const infoBlockInit = function(infoProps) { 
  // console.log(infoProps, 'infoWidth')
  const titleProps = infoProps.title
  return creator({
    name: go.Panel,
    props: {
      type: go.Panel.Vertical,
      defaultAlignment: go.Spot.Left,
      width: infoProps.width
    },
    children: [
      titleProps ? titleBlockInit(titleProps) : null,
      infoProps ? detailInit(infoProps) : null
    ]
  })   
}

// 更多面板生成
const moreBlockInit = function (moreProps) {
  const panelWidth = moreProps._width
  const buttonColor = moreProps.buttonColor || 'rgba(0,0,0,0.3)'
  const defaultShow = moreProps.defaultShow || false
  const moreDetail = moreProps.detail
  return creator({
    name: go.Panel,
    props: {
      type: go.Panel.Vertical,
      width: panelWidth
    },
    children: [ 
      creator({
            name: 'PanelExpanderButton',
            props: { 
              'ButtonBorder.fill': 'transparent',
              'ButtonBorder.stroke': 'transparent',
              'ButtonBorder.strokeWidth': 1,
              _buttonFillOver: 'transparent',
              _buttonStrokeOver: 'transparent',
              _buttonFillPressed: 'transparent',
              'ButtonIcon.width': 16,
              'ButtonIcon.height': 10,
              'ButtonIcon.stroke': buttonColor, 
              width: 90,
              _buttonExpandedFigure: MoreBtnSvgUp,
              _buttonCollapsedFigure: MoreBtnSvgDown,
              alignment: go.Spot.Center
            },
            children: [
              creator({
                name: go.TextBlock,
                props: {
                  text: '更多',
                  stroke: buttonColor,
                  margin: new go.Margin(0, 0, 0, 50)
                }
              })
            ] 
          }),
      creator({
        name: go.Panel,
        props: {
          type: go.Panel.Auto,
          name: 'COLLAPSIBLE',
          width: panelWidth,
          visible: defaultShow
        },
        children: [ 
          moreDetail ? detailInit({
            width: panelWidth,
            detail: moreDetail
          }) : null
        ]
      })
    ]
  }) 
}

// body 整体生成
const bodyContentInit = function(bodyProps) {
  // const width = bodyProps.width
   
  const {image} = bodyProps
  const info = bodyProps.info || {}
  let sideWidth = bodyProps.sideWidth

  if (!sideWidth) {
    if (sideWidth !== 0) {
      sideWidth = 80
    }
  }
  if (typeof image === 'object') {
    if (!image.width) {
      image.width = sideWidth
    } else {
      sideWidth = Math.max(image.width, sideWidth)
      image.width = sideWidth
    }
  } 
  info.width = bodyProps.width - (sideWidth ? sideWidth + 15 : 0)
  
  const moreProps = bodyProps.more
  // console.log(moreProps, 'aaaaa')
  if (moreProps && typeof moreProps === 'object') {
    moreProps._width = bodyProps.width - 10
  }
  
  return creator({
    name: go.Panel,
    props: {
      type: go.Panel.Vertical
    },
    children: [
      creator({
        name: go.Panel,
        props: {
          type: go.Panel.Horizontal,
          defaultAlignment: go.Spot.Top 
        },
        children: [ 
          sideWidth || image ? imageGraphInit(image) : null,
          creator({
            name: go.Panel,
            props: {
              type: go.Panel.Auto,
              padding: new go.Margin(0, 0, 0, 4),
              width: info.width
            },
            children: [
              infoBlockInit(info) 
               
            ] 
          })  
        ]
      }),
      moreProps ? moreBlockInit(moreProps) : null
    ]
  })
   
}

// footer 生成
const footerPanelInit = function (footerProps) {
  const footerFill = footerProps.fill
  const content = footerProps.content 
  return creator({
    name: go.Panel,
    props: {
      type: go.Panel.Auto,
      row: 2, 
      column: 0, 
      stretch: go.GraphObject.Horizontal 
    },
    children: content && typeof content === 'function' ? [
      creator({
        name: go.Shape,
        props: {
          fill: footerFill || '#E8E8E8', 
          strokeWidth: 0, 
          shadowVisible: false
        } 
      }),
      content()
      // creator({
      //   name: go.Panel,
      //   props: {
      //     type: go.Panel.Table,
      //     row: 0, 
      //     columnSpan: 1,
      //     stretch: go.GraphObject.Horizontal 
      //     // alignment: go.Spot.Left 
      //     // margin: 5
      //   },
      //   children: [
      //     creator({
      //       name: go.Panel,
      //       props: {
      //         type: go.Panel.Horizontal,
      //         row: 0, 
      //         column: 1,
      //         alignment: go.Spot.Right  
      //       },
      //       children: [
      //         creator({
      //           name: 'Button',
      //           props: { 
      //             margin: 3,
      //             width: 60,
      //             height: 28
      //           }
      //         })
      //       ]
      //     })
      //   ]
      // }) 
    ] : []
      
  })
}


export function panelNode(options) {
  const theme = {}
  // panel props ----------------
  const {panel} = options
  const panelProps = merge({}, defaultPanelProps, panel) 
  const panelWidth = panelProps.width
  const panelFill = panelProps.fill
  const sideWidth = panelProps.sideWidth
  delete panelProps.width
  delete panelProps.fill
  delete panelProps.sideWidth

  // header props ----------------
  const {header} = options

  // body props ----------------
  const {body} = options
  const bodyProps = {...body, width: panelWidth, sideWidth: sideWidth}

  // footer props ----------------
  const {footer} = options
  return nodeTemplate({
    props: {
      ...panelProps
    },
    children: [
      creator({
        name: go.Shape,
        props: {
          strokeWidth: 0, 
          width: panelWidth,
          fill: panelFill || 'white'
        }
      }),
      creator({
        name: go.Panel,
        props: {
          type: go.Panel.Table,
          width: panelWidth,
          defaultRowSeparatorStrokeWidth: 1,
          defaultRowSeparatorStroke: '#B6B7B9'
        },
        children: [ 
          // header -------------------
          header ? headerPanelInit(header) : null,
          // body -------------------
          creator({
            name: go.Panel,
            props: {
              type: go.Panel.Vertical,
              row: 1, 
              columnSpan: 1, 
              alignment: go.Spot.Left, 
              margin: 5
            },
            children: [
              bodyContentInit(bodyProps)
            ]
          }),
          // footer --------------
          footer ? footerPanelInit(footer) : null
        ]
      })  
    ].filter(n => !!n)
  }, theme)
}