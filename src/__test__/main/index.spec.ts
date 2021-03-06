import * as FS from "fs-extra"
import * as PATH from "path"
import { MOCK_NODES_FOR_ID_TREE } from "../__constant__/mock"
import IDTree, { createIDTree } from "../../IdTree"
import buildBasic from "../../buildBasic"
import { getMostBottomRightIDTreeAsSameLevel, getIDTree } from "../../getBasic"


const from = PATH.resolve( __dirname, "profile.json" )
const to = PATH.resolve( __dirname, "output/basic.json" )

describe( "main", () => {
  it( "build basic", () => {
    // const building = false
    const building = true
    if ( building ) {
      buildBasic( from, to, "render" )
      // buildBasic( from, to, "Vue" )

      // const data = FS.readJSONSync( to )

      // const flowchartCodesOutput = PATH.resolve(
      //   __dirname,
      //   "output/flowchartCodes.txt"
      // )

      // const flowchartCodes = getFlowchartCodes( data, flowchartCodesOutput )
    }
  } )

  it( "getMostBottomRightIDTreeAsSameLevel", () => {
    const c = createIDTree
    const mockIDTree = c( 0, [ c( 1, [ c( 2, null ) ] ), c( 3, [ c( 4, null ) ] ) ] )

    const parentId = 1
    const tree = getMostBottomRightIDTreeAsSameLevel( mockIDTree, parentId )
    expect( tree.id ).toBe( 3 )
  } )

  it( "getIDTree", () => {
    const nodes = MOCK_NODES_FOR_ID_TREE
    const rootId = nodes[ 0 ].parent
    const idTree = getIDTree( nodes, rootId )
    const json = idTree.json

    // console.log( JSON.stringify( json, null, 2 ) )

    const testingTree = json.children[ 2 ]
    expect( testingTree.id ).toBe( 1 )
    expect( testingTree.children[ 0 ].id ).toBe( 5 )
  } )
} )
