import React from 'react';
import { Link } from 'react-router';
import LastPage from 'material-ui/svg-icons/navigation/chevron-right';
import FirstPage from 'material-ui/svg-icons/navigation/chevron-left';
import FlatButton from 'material-ui/FlatButton';

function Header(props){

  return(
        <div className="titleDiv">
          <div className='pull-left' style={{display:'inline', position:'absolute', left:'15px', color:'white', zIndex:10}}>
            {props.isLarge ?
                <FlatButton label={'library'} labelPosition={props.treeOpen?"after":"before"}
                  labelStyle={{color:'white', fontWeight:100, fontFamily:"'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize:12}}
                  style={{color:'white'}}
                  onClick={props.toggleTree} icon={props.treeOpen?<FirstPage/>:<LastPage/>}
                    backgroundColor='rgb(34,34,34)'
                />
              :null}
          </div>
        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'
          style={{'display':'table', 'textAlign':'center', 'padding':'0px', 'height':'60px', left:'-25px'}}>
            <span className="title" style={{'fontSize':'18px', 'marginLeft':'15px'}}>
            <a href="http://dynamobim.org/" target="_blank" style={{'display':'table-cell', 'width':'35px'}}>
            <img src="images/src/icon.png" width="80%" id='dynamologo' alt="dynamoIcon" target="_blank" style={{"verticalAlign":"middle", "marginLeft":"0px", "marginTop":"-2px"}} />
            </a>
            <Link to='/' className='raleway' style={{'color':'white'}}>&nbsp; Dynamo Dictionary</Link>
            </span>
        </div>
        <div  className='graytext'  style={{'position':'absolute', 'right':'0', 'top':'0','paddingRight':'10px'}}>
          {props.phase==='committing' ? <a href={props.link} target="_blank">
            <FlatButton label={'github'} labelPosition="after"
              labelStyle={{color:'white', fontWeight:100, fontFamily:"'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize:12}}
              style={{color:'white'}}
              onClick={props.openModal} icon={<img src="images/icons/octocat.png" id='prLogo' width='18px' alt="prIcon"/>}
              backgroundColor='rgb(34,34,34)'
            />
            </a>
            :null
           }
          <FlatButton label={props.phase==='init'?'Submit PR':'Add Commit'} labelPosition="after"
            labelStyle={{color:'white', fontWeight:100, fontFamily:"'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize:12}}
            style={{color:'white'}}
            onClick={props.openModal} icon={<img src="images/icons/pr_invert.png" id='prLogo' width='16px' alt="pr"/>}
            backgroundColor='rgb(34,34,34)'
          />


    </div>
  </div>

  )
}

export default Header;
