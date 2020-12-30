import React from 'react';
import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";

class DashboardPage extends React.Component<any, any> {
  render() {
    return (
      <>
        <AdminNavbar />
        
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2>Dashboard</h2>
                
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat sagittis tincidunt. Sed
                  faucibus felis a odio pulvinar malesuada. Cras orci magna, tincidunt a sem eget, pellentesque luctus
                  eros. Nam sit amet leo ac dolor accumsan euismod nec et lorem. Proin at varius mauris, sed ullamcorper
                  eros. Quisque pulvinar sem diam, sit amet accumsan massa placerat quis. Cras in rutrum nibh, id pharetra
                  diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla dictum interdum elit eget
                  facilisis. Sed interdum nunc mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                  posuere cubilia curae; Curabitur vitae metus vel libero ullamcorper auctor. Integer congue ipsum nec
                  nunc suscipit ullamcorper. Sed scelerisque id risus sed scelerisque.</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DashboardPage;
