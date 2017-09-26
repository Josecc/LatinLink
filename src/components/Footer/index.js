import React, {Component} from 'react';

import {
  github,
  spotify,
  facebook,
  instagram,
  footerDecor
} from 'constants/InlineSVGs';

require('./index.scss');

export default class Footer extends Component {

  render() {
    return(
      <div className="app-Footer">
        <div className="app-Footer-decor" dangerouslySetInnerHTML={footerDecor} />
        <div className="app-Footer-links">
          <div>
            <span><u>VT Links</u></span>
            <a href="http://www.laso.org.vt.edu/" rel="noopener" target="__blank" >Latino Association of Student Organizations (LASO)</a>
            <a href="http://www.shpe.org.vt.edu/" rel="noopener" target="__blank" >Society of Hispanic Professional Engineers (SHPE)</a>
            <a href="http://www.laigsa.org.vt.edu/" rel="noopener" target="__blank" >Latin American and Iberic Graduate Student Organization (LAIGSA)</a>
            <a href="http://www.hermandad-sia.org.vt.edu/" rel="noopener" target="__blank" >Hermandad de Sigma Lota Alpha, Inc.</a>
            <a href="http://www.seneca.org.vt.edu/" rel="noopener" target="__blank" >Lambda Sigma Upsilon, Latino Fraternity, Inc.</a>
            <a href="http://www.salsaclub.org.vt.edu/" rel="noopener" target="__blank" >Salsa Tech - Virginia Tech&rsquo;s Salsa Club</a>
            <a href="http://www.radford.edu/~lsh/main.html" rel="noopener" target="__blank" >La Sociedad Hispanica - Radford University</a>
          </div>
          <div>
            <span><u>Links @ Other Campuses</u></span>
            <a href="http://atuva.student.virginia.edu/" rel="noopener" target="__blank" >University of Virginia: Latino Student Union</a>
            <a href="http://www.studentorg.vcu.edu/lsalsa/" rel="noopener" target="__blank" >Virginia Commonwealth University: Latino Student Association</a>
            <a href="https://www.facebook.com/groups/73750020429/" rel="noopener" target="__blank" >Old Dominion University: Latino Student Alliance</a>
            <a href="http://hsa.gmu.edu/" rel="noopener" target="__blank" >George Mason University: Hispanic Student Association</a>
          </div>
        </div>
        <div className="app-Footer-social">
          <div>
            <a dangerouslySetInnerHTML={facebook} href="https://www.facebook.com/VTLatinLink/" rel="noopener" target="__blank" />
            <a dangerouslySetInnerHTML={instagram} href="https://www.instagram.com/vtlatinlink/" rel="noopener" target="__blank" />
          </div>
          <div>
            <a dangerouslySetInnerHTML={github} href="https://github.com/Josecc/LatinLink" rel="noopener" target="__blank" />
            <a dangerouslySetInnerHTML={spotify} href="https://open.spotify.com/user/latinlink/playlist/0FuWclAGLGh0GfDOsGWhRo" rel="noopener" target="__blank" />
          </div>
        </div>
      </div>
    );
  }
}
