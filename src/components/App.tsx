import * as React from 'react';
import { Redirect, Switch } from 'react-router-dom';

const AppComponent: React.SFC<{}> = () => {
  return (
    <div id="app" lang="ko">
      <Switch>
        <Redirect from="/" to="main" />
      </Switch>
      {/* <AutoSignPage /> */}
    </div>
  );
};

export default AppComponent;
