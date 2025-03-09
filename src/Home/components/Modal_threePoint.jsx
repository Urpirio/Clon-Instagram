import React from 'react';
import '../style/Modal_threePoint.less';
import Report from './func/Report';
import Unfollow from './func/Unfollow';
import Add_to_Favorites from './func/AddtoFavorites';
import GotoPost from './func/GotoPost';
import Shareto from './func/ShareTo';
import Copy_link from './func/Copy_Link';
import Embed from './func/Embed';
import About_This_Account from './func/About_This_Account';
import Cancel from './func/Cancel';





export let ShowModalThreeON;
export default function Modal_threePoint() {

  return (
    <dialog className='Modal_ThreeP'>
        <div className='Modal_ThreeP_div1'>
           <span onClick={Report} className="GSpan red top S1" id='S1'>Report</span>
           <span onClick={Unfollow} className="GSpan red S2">Unfollow</span>
           <span onClick={Add_to_Favorites} className="GSpan S3">Add to Favorites</span>
           <span onClick={GotoPost} className="GSpan S4">Go to post</span>
           <span onClick={Shareto} className="GSpan S5">Share to...</span>
           <span onClick={Copy_link} className="GSpan S6">Copy link</span>
           <span onClick={Embed} className="GSpan S7">Embed</span>
           <span onClick={About_This_Account} className="GSpan S8">About this account</span>
           <span onClick={Cancel} className="GSpan bottom S9">Cancel</span>
        </div>
    </dialog>
  )
};
